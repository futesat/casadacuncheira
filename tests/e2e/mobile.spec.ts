import { test, expect } from '@playwright/test';
import { seedCookieConsent } from '../helpers/consent';

test.describe('E2E Mobile Experience & Overflow', () => {
  test.use({ viewport: { width: 390, height: 844 }, hasTouch: true });

  test.beforeEach(async ({ page }) => {
    await seedCookieConsent(page, false);
  });

  test('mobile hamburger menu opens, displays navigation and closes properly', async ({ page }) => {
    await page.goto('/');

    const menuButton = page.locator('header button[aria-label="Menu"]').first();
    await expect(menuButton).toBeVisible();

    // 1. Open mobile menu
    await menuButton.click();

    // 2. Mobile links are visible
    const mobileLink = page.locator('.md\\:hidden nav button:has-text("La Casa"), .md\\:hidden nav a:has-text("La Casa")').first();
    await expect(mobileLink).toBeVisible();

    // 3. Close mobile menu
    await menuButton.click();
    await expect(mobileLink).toHaveCount(0);
  });

  test('mobile pages have no horizontal overflow', async ({ page }) => {
    const pages = ['/', '/gastronomy', '/aviso-legal', '/privacidad', '/cookies', '/nature/que-ver-en-carnota'];

    for (const p of pages) {
      await page.goto(p);
      await page.waitForSelector('main', { state: 'attached' });

      const hasOverflow = await page.evaluate(() => {
        return document.documentElement.scrollWidth > (document.documentElement.clientWidth + 1);
      });

      expect(hasOverflow, `Mobile page "${p}" should not have horizontal overflow`).toBe(false);
    }
  });
});
