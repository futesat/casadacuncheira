import { test, expect } from '@playwright/test';
import { seedCookieConsent } from '../helpers/consent';

test.describe('E2E Dedicated Booking Page & AvaiBook Integration', () => {
  test.beforeEach(async ({ page }) => {
    await seedCookieConsent(page, false);
  });

  test('hero and header booking CTAs navigate to /booking page', async ({ page }) => {
    await page.goto('/');

    const heroBookBtn = page.locator('#hero a[href="/booking"]').first();
    await expect(heroBookBtn).toBeVisible();
    await heroBookBtn.click();

    await page.waitForURL('**/booking');
    await expect(page.locator('h1')).toBeVisible();
  });

  test('floating booking button is visible on scroll and navigates to /booking', async ({ page }) => {
    await page.goto('/');

    // Scroll down to trigger floating booking CTA
    await page.evaluate(() => window.scrollTo(0, 1000));
    await page.waitForTimeout(500);

    const floatingBtn = page.locator('button[aria-label*="Reservar"], button:has-text("Reservar")').first();
    await expect(floatingBtn).toBeVisible();
    await floatingBtn.click();

    await page.waitForURL('**/booking');
    await expect(page.locator('h1')).toBeVisible();
  });

  test('dedicated /booking page renders date selector, iframe engine and direct AvaiBook links', async ({ page }) => {
    await page.goto('/booking');

    // 1. Verify H1 and page container
    await expect(page.locator('h1')).toBeVisible();
    await expect(page.locator('main')).not.toBeEmpty();

    // 2. Verify date picker inputs and guest select
    const checkinInput = page.locator('input[type="date"]').first();
    const checkoutInput = page.locator('input[type="date"]').nth(1);
    await expect(checkinInput).toBeVisible();
    await expect(checkoutInput).toBeVisible();

    // 3. Verify AvaiBook iframe engine embed
    const iframe = page.locator('iframe[src*="avaibook.com"], iframe[src*="bookonline.pro"]');
    await expect(iframe).toBeAttached();
    const iframeSrc = await iframe.getAttribute('src');
    expect(iframeSrc).toContain('350327');

    // 4. Verify direct external AvaiBook fallback CTA button
    const directLinks = page.locator('a[href*="avaibook.com"], a[href*="bookonline.pro"]');
    const directCount = await directLinks.count();
    expect(directCount).toBeGreaterThanOrEqual(1);

    for (let i = 0; i < directCount; i++) {
      const link = directLinks.nth(i);
      const href = await link.getAttribute('href');
      const target = await link.getAttribute('target');
      const rel = await link.getAttribute('rel');

      expect(href).toMatch(/^(https:\/\/www\.avaibook\.com|https:\/\/bookonline\.pro)/);
      expect(target).toBe('_blank');
      expect(rel).toContain('noopener');
      expect(rel).toContain('noreferrer');
    }
  });

  test('legacy booking aliases /reservas and /reservar redirect to /booking', async ({ page }) => {
    // Test /reservas
    await page.goto('/reservas');
    await page.waitForURL('**/booking');
    await expect(page.locator('h1')).toBeVisible();

    // Test /reservar
    await page.goto('/reservar');
    await page.waitForURL('**/booking');
    await expect(page.locator('h1')).toBeVisible();
  });
});
