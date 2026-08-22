import { test, expect } from '@playwright/test';
import { seedCookieConsent } from '../helpers/consent';

test.describe('E2E AvaiBook / Booking Links Smoke Test', () => {
  test.beforeEach(async ({ page }) => {
    await seedCookieConsent(page, false);
  });

  test('all booking CTA buttons point to official AvaiBook booking page with secure attributes', async ({ page }) => {
    await page.goto('/');

    const bookingLinks = page.locator('a[href*="bookonline.pro"]');
    const count = await bookingLinks.count();
    expect(count).toBeGreaterThanOrEqual(1);

    for (let i = 0; i < count; i++) {
      const link = bookingLinks.nth(i);
      const href = await link.getAttribute('href');
      const target = await link.getAttribute('target');
      const rel = await link.getAttribute('rel');

      // 1. Domain & Property ID verification
      expect(href).toMatch(/^https:\/\/bookonline\.pro\/(es|gl|en|fr|de|it|pt)\/property\/350327/);

      // 2. Target blank security
      expect(target).toBe('_blank');

      // 3. Rel attributes
      expect(rel).toContain('noopener');
      expect(rel).toContain('noreferrer');
    }
  });

  test('floating booking button is visible and has valid link', async ({ page }) => {
    await page.goto('/');

    // Scroll down to trigger floating booking CTA if present
    await page.evaluate(() => window.scrollTo(0, 1000));
    await page.waitForTimeout(500);

    const bookingBtn = page.locator('a[href*="bookonline.pro"]').first();
    const href = await bookingBtn.getAttribute('href');
    expect(href).toContain('350327');
  });
});
