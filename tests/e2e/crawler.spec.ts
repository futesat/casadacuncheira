import { test, expect } from '@playwright/test';
import { capturePageErrors } from '../helpers/console';
import { captureNetworkHealth } from '../helpers/network';
import { getAllCanonicalRoutes } from '../helpers/routes';
import { seedCookieConsent } from '../helpers/consent';

test.describe('E2E Global Safety Net Crawler', () => {
  test('crawls all internal routes and verifies zero errors, valid content and assets', async ({ page, request }) => {
    await seedCookieConsent(page, false);

    const visited = new Set<string>();
    const queue = ['/'];
    
    // Seed queue with all known canonical routes
    for (const r of getAllCanonicalRoutes()) {
      if (!queue.includes(r)) queue.push(r);
    }

    const errors: string[] = [];

    while (queue.length > 0) {
      const currentPath = queue.shift()!;
      if (visited.has(currentPath)) continue;
      visited.add(currentPath);

      // If it is a static asset file (like .gpx), check with HTTP request instead of page.goto
      if (currentPath.match(/\.(gpx|pdf|zip|png|jpg|webp|svg|xml|txt)$/i)) {
        const fileRes = await request.get(currentPath);
        if (fileRes.status() >= 400) {
          errors.push(`[${currentPath}] Static asset returned HTTP ${fileRes.status()}`);
        }
        continue;
      }

      const errCollector = capturePageErrors(page);
      const netCollector = captureNetworkHealth(page);

      const response = await page.goto(currentPath, { waitUntil: 'domcontentloaded' });
      
      // 1. Status 200
      if (!response || response.status() >= 400) {
        errors.push(`[${currentPath}] HTTP ${response ? response.status() : 'No response'}`);
      }

      // 2. Wait for main content and H1 (handling React lazy chunk loading)
      try {
        await page.waitForSelector('main h1, h1', { state: 'attached', timeout: 8000 });
      } catch {
        errors.push(`[${currentPath}] Missing <h1> tag or lazy load timeout`);
      }

      // 3. Title check
      const title = await page.title();
      if (!title || title.trim().length === 0) {
        errors.push(`[${currentPath}] Missing or empty <title>`);
      }

      // 4. Check for uncaught JS errors or console errors
      if (errCollector.pageErrors.length > 0) {
        errors.push(`[${currentPath}] Uncaught JS exception: ${errCollector.pageErrors.map(e => e.message).join(', ')}`);
      }
      if (errCollector.consoleErrors.length > 0) {
        errors.push(`[${currentPath}] Console error: ${errCollector.consoleErrors.join(', ')}`);
      }

      // 5. Check for 404 internal resources (CSS, JS, images)
      if (netCollector.internalFailedResponses.length > 0) {
        errors.push(`[${currentPath}] Broken internal asset: ${netCollector.internalFailedResponses.map(r => `${r.url} (${r.status})`).join(', ')}`);
      }

      // 6. Check horizontal overflow (with 1px subpixel tolerance)
      const hasHorizontalOverflow = await page.evaluate(() => {
        return document.documentElement.scrollWidth > (document.documentElement.clientWidth + 1);
      });
      if (hasHorizontalOverflow) {
        errors.push(`[${currentPath}] Horizontal overflow detected (scrollWidth > clientWidth)`);
      }

      // 7. Extract links for recursive crawl
      const links = await page.evaluate(() => {
        return Array.from(document.querySelectorAll('a[href]'))
          .map(a => a.getAttribute('href') || '')
          .filter(h => h.startsWith('/') && !h.startsWith('//') && !h.startsWith('/#'));
      });

      for (const rawLink of links) {
        const cleanPath = rawLink.split('?')[0].split('#')[0];
        if (cleanPath && !visited.has(cleanPath) && !queue.includes(cleanPath)) {
          queue.push(cleanPath);
        }
      }

      errCollector.detach();
      netCollector.detach();
    }

    if (errors.length > 0) {
      throw new Error(`Crawler detected ${errors.length} issue(s) across ${visited.size} pages:\n${errors.join('\n')}`);
    }

    expect(visited.size).toBeGreaterThanOrEqual(10);
  });
});
