import { test, expect } from '@playwright/test';
import { seedCookieConsent } from '../helpers/consent';

test.describe('E2E Legal Pages Smoke Test', () => {
  test.beforeEach(async ({ page }) => {
    await seedCookieConsent(page, false);
  });

  const legalPages = [
    { path: '/aviso-legal', expectedH1: 'Aviso Legal' },
    { path: '/privacidad', expectedH1: 'Política de Privacidad' },
    { path: '/cookies', expectedH1: 'Política de Cookies' },
  ];

  for (const { path, expectedH1 } of legalPages) {
    test(`legal page "${path}" returns 200, renders H1, canonical and legal content`, async ({ page }) => {
      const response = await page.goto(path);
      expect(response?.status()).toBe(200);

      // Verify H1
      const h1 = page.locator('h1').first();
      await expect(h1).toBeVisible();
      await expect(h1).toContainText(expectedH1);

      // Verify canonical link
      const canonical = await page.locator('link[rel="canonical"]').getAttribute('href');
      expect(canonical).toMatch(/^https:\/\/www\.casadacuncheira\.com/);

      // Verify legal content is rendered
      const articleText = await page.locator('article').first().innerText();
      expect(articleText.length).toBeGreaterThan(300);

      // Verify back link to home exists
      const backLink = page.locator('a[href="/"], a:has-text("Volver")').first();
      await expect(backLink).toBeVisible();
    });
  }

  test('cookie policy page lists the exact GA4 cookie name _ga_213MC8TBHN', async ({ page }) => {
    await page.goto('/cookies');
    const tableText = await page.locator('table').innerText();
    expect(tableText).toContain('_ga_213MC8TBHN');
    expect(tableText).not.toContain('_ga_WFGJHSJ4');
  });
});
