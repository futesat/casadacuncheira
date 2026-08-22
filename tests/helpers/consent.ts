import { Page } from '@playwright/test';

/**
 * Pre-seeds cookie consent in localStorage before navigation
 * to prevent the cookie banner overlay from blocking clicks in non-cookie tests.
 */
export async function seedCookieConsent(page: Page, analytics = false): Promise<void> {
  await page.addInitScript((analyticsGranted) => {
    try {
      localStorage.setItem('cdc_cookie_consent_v1', JSON.stringify({
        necessary: true,
        analytics: analyticsGranted,
        timestamp: new Date().toISOString(),
        version: '1.0'
      }));
    } catch {}
  }, analytics);
}
