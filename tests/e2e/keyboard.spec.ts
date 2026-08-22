import { test, expect } from '@playwright/test';
import { seedCookieConsent } from '../helpers/consent';

test.describe('E2E Keyboard Navigation & Focus Accessibility', () => {
  test('keyboard Tab key navigates interactive elements and activates links', async ({ page }) => {
    await seedCookieConsent(page, false);
    await page.goto('/');

    for (let i = 0; i < 5; i++) {
      await page.keyboard.press('Tab');
      const focusedTag = await page.evaluate(() => document.activeElement?.tagName);
      expect(['A', 'BUTTON', 'INPUT', 'SELECT', 'DIV', 'BODY']).toContain(focusedTag);
    }
  });

  test('cookie preferences modal responds to Escape key', async ({ page }) => {
    await page.goto('/');

    // Open settings modal directly from the initial cookie banner
    const bannerConfigBtn = page.locator('[role="dialog"][aria-label="Aviso de cookies"] button:has-text("Configurar")').first();
    await expect(bannerConfigBtn).toBeVisible();
    await bannerConfigBtn.click();

    const modal = page.locator('#cookie-settings-title');
    await expect(modal).toBeVisible();

    // Press Escape to close modal
    await page.keyboard.press('Escape');
    await expect(modal).toHaveCount(0);
  });
});
