import { test, expect } from '@playwright/test';

test.describe('E2E Cookie Consent & Privacy Smoke Test', () => {
  test('first visit: zero cookies, zero analytics requests, banner visible', async ({ page, context }) => {
    const analyticsRequests: string[] = [];
    page.on('request', req => {
      if (req.url().includes('google-analytics.com') || req.url().includes('googletagmanager.com') || req.url().includes('/collect')) {
        analyticsRequests.push(req.url());
      }
    });

    await page.goto('/');

    // Check banner is present
    const banner = page.locator('[role="dialog"][aria-label="Aviso de cookies"]');
    await expect(banner).toBeVisible();

    // Check zero cookies
    const cookies = await context.cookies();
    expect(cookies).toHaveLength(0);

    // Check zero analytics requests
    expect(analyticsRequests).toHaveLength(0);
  });

  test('reject non-essential: stores decision, blocks analytics across reloads', async ({ page, context }) => {
    const analyticsRequests: string[] = [];
    page.on('request', req => {
      if (req.url().includes('google-analytics.com') || req.url().includes('googletagmanager.com') || req.url().includes('/collect')) {
        analyticsRequests.push(req.url());
      }
    });

    await page.goto('/');

    // Click reject button
    const rejectBtn = page.locator('button:has-text("Rechazar no esenciales"), button:has-text("Rechazar")').first();
    await rejectBtn.click();

    // Verify localStorage has saved decision with analytics: false
    const consentStorage = await page.evaluate(() => localStorage.getItem('cdc_cookie_consent_v1'));
    expect(consentStorage).toBeTruthy();
    const parsed = JSON.parse(consentStorage!);
    expect(parsed.analytics).toBe(false);

    // Reload page and verify banner stays hidden and analytics remains blocked
    await page.reload();
    const banner = page.locator('[role="dialog"][aria-label="Aviso de cookies"]');
    await expect(banner).toHaveCount(0);
    expect(analyticsRequests).toHaveLength(0);
  });

  test('accept all: stores decision, loads GA script and cookies', async ({ page, context }) => {
    await page.goto('/');

    const acceptBtn = page.locator('button:has-text("Aceptar todas"), button:has-text("Aceptar")').first();
    await acceptBtn.click();

    // Verify localStorage has analytics: true
    const consentStorage = await page.evaluate(() => localStorage.getItem('cdc_cookie_consent_v1'));
    expect(consentStorage).toBeTruthy();
    const parsed = JSON.parse(consentStorage!);
    expect(parsed.analytics).toBe(true);

    // Check cookies were created
    await page.waitForTimeout(2000);
    const cookies = await context.cookies();
    const hasGaCookie = cookies.some(c => c.name.startsWith('_ga'));
    expect(hasGaCookie).toBe(true);
  });

  test('reversibility: footer "Configurar cookies" allows revoking and removes cookies', async ({ page, context }) => {
    await page.goto('/');

    // 1. Accept first
    const acceptBtn = page.locator('button:has-text("Aceptar todas")').first();
    await acceptBtn.click();
    await page.waitForTimeout(1500);

    // 2. Open preferences from footer
    const footerConfigBtn = page.locator('footer button:has-text("Configurar cookies")').first();
    await footerConfigBtn.click();

    // Verify settings modal is open
    const modal = page.locator('#cookie-settings-title');
    await expect(modal).toBeVisible();

    // 3. Deactivate analytics by clicking the toggle label
    const toggleLabel = page.locator('label:has(input[type="checkbox"])').first();
    await toggleLabel.click();

    // 4. Save preferences
    const saveBtn = page.locator('button:has-text("Guardar preferencias")').first();
    await saveBtn.click();
    await page.waitForTimeout(1000);

    // 5. Verify localStorage is updated to false
    const storageAfterRevoke = await page.evaluate(() => localStorage.getItem('cdc_cookie_consent_v1'));
    expect(JSON.parse(storageAfterRevoke!).analytics).toBe(false);

    // 6. Verify GA cookies are cleared
    const cookiesAfterRevoke = await context.cookies();
    expect(cookiesAfterRevoke.filter(c => c.name.startsWith('_ga'))).toHaveLength(0);
  });
});
