import { test, expect } from '@playwright/test';
import { getAllCanonicalRoutes } from '../helpers/routes';

test.describe('E2E SEO, Sitemap, Robots & Prerender Quality', () => {
  test('robots.txt returns 200 and points to sitemap without blocking production', async ({ request }) => {
    const res = await request.get('/robots.txt');
    expect(res.status()).toBe(200);

    const body = await res.text();
    expect(body).toContain('Allow: /');
    expect(body).not.toContain('Disallow: /');
    expect(body).toContain('https://www.casadacuncheira.com/sitemap.xml');
  });

  test('sitemap.xml is valid XML, uses HTTPS and contains only reachable routes', async ({ request }) => {
    const res = await request.get('/sitemap.xml');
    expect(res.status()).toBe(200);

    const body = await res.text();
    expect(body).toContain('<?xml version="1.0" encoding="UTF-8"?>');
    expect(body).toContain('<urlset');
    expect(body).not.toContain('localhost');

    // Extract all <loc> URLs and ensure all use HTTPS with the official domain
    const locs = [...body.matchAll(/<loc>(https:\/\/www\.casadacuncheira\.com[^<]*)<\/loc>/g)].map(m => m[1]);
    expect(locs.length).toBeGreaterThanOrEqual(10);

    // Verify all routes in sitemap return HTTP 200
    for (const loc of locs) {
      expect(loc).toMatch(/^https:\/\/www\.casadacuncheira\.com/);
      const urlPath = new URL(loc).pathname;
      const pageRes = await request.get(urlPath);
      expect(pageRes.status(), `Sitemap URL "${loc}" should return 200`).toBe(200);
    }
  });

  test('structured data (JSON-LD) on all pages is valid JSON-LD', async ({ page }) => {
    const routes = getAllCanonicalRoutes();

    for (const r of routes) {
      await page.goto(r);
      const scripts = await page.locator('script[type="application/ld+json"]').all();

      for (const script of scripts) {
        const text = await script.innerText();
        expect(() => JSON.parse(text), `Invalid JSON-LD on route "${r}"`).not.toThrow();

        const json = JSON.parse(text);
        expect(json['@context']).toBe('https://schema.org');
      }
    }
  });

  test('static initial HTML response includes prerendered SEO tags and H1', async ({ request }) => {
    const routes = ['/', '/aviso-legal', '/privacidad', '/cookies', '/gastronomy', '/nature/que-ver-en-carnota'];

    for (const r of routes) {
      const res = await request.get(r);
      expect(res.status()).toBe(200);

      const html = await res.text();
      expect(html).toContain('<title>');
      expect(html).toContain('name="description"');
      expect(html).toContain('<h1');
      expect(html).toContain('https://www.casadacuncheira.com');
      expect(html).not.toContain('localhost:');
    }
  });
});
