import { test, expect } from '@playwright/test';
import { seedCookieConsent } from '../helpers/consent';

test.describe('E2E Real Navigation & Anchors', () => {
  test.beforeEach(async ({ page }) => {
    await seedCookieConsent(page, false);
  });

  test('header navigation and anchor scrolling work smoothly', async ({ page, isMobile }) => {
    await page.goto('/');

    if (isMobile) {
      // Mobile header: open hamburger menu
      const menuBtn = page.locator('header button[aria-label="Menu"]').first();
      await menuBtn.click();

      // Click "La Casa" in mobile menu
      const houseLink = page.locator('.md\\:hidden nav button:has-text("La Casa"), .md\\:hidden nav a:has-text("La Casa")').first();
      await houseLink.click();
      await expect(page.locator('#house')).toBeVisible();

      // Open menu again for "Contacto"
      await menuBtn.click();
      const contactLink = page.locator('.md\\:hidden nav button:has-text("Contacto"), .md\\:hidden nav a:has-text("Contacto")').first();
      await contactLink.click();
      await expect(page.locator('#contact')).toBeVisible();
    } else {
      // Desktop header: click directly in desktop nav
      const houseLink = page.locator('header nav button:has-text("La Casa"), header nav a:has-text("La Casa")').first();
      await houseLink.click();
      await expect(page.locator('#house')).toBeVisible();

      const locationLink = page.locator('header nav button:has-text("El Entorno"), header nav a:has-text("El Entorno")').first();
      await locationLink.click();
      await expect(page.locator('#location')).toBeVisible();

      const expLink = page.locator('header nav button:has-text("Experiencias"), header nav a:has-text("Experiencias")').first();
      await expLink.click();
      await expect(page.locator('#experiences')).toBeVisible();

      const contactLink = page.locator('header nav button:has-text("Contacto"), header nav a:has-text("Contacto")').first();
      await contactLink.click();
      await expect(page.locator('#contact')).toBeVisible();
    }
  });

  test('navigates to Gastronomy page and returns home', async ({ page }) => {
    await page.goto('/');

    // Navigate to /gastronomy using the exact Link anchor
    const gastroLink = page.locator('a[href="/gastronomy"]').first();
    await gastroLink.scrollIntoViewIfNeeded();
    await gastroLink.click();

    await page.waitForURL('**/gastronomy');
    await expect(page.locator('h1')).toBeVisible();

    // Return to home via back button
    const backBtn = page.locator('a[href="/"], button:has-text("Volver"), a:has-text("Volver")').first();
    await backBtn.click();

    await page.waitForURL('**/');
    await expect(page.locator('h1').first()).toBeVisible();
  });

  test('nature guide cards navigate to detail pages', async ({ page }) => {
    await page.goto('/');

    // Click on the first nature guide link
    const natureCard = page.locator('a[href^="/nature/"]').first();
    const href = await natureCard.getAttribute('href');
    expect(href).toBeTruthy();

    await natureCard.click();
    await page.waitForURL(`**${href}`);

    await expect(page.locator('h1')).toBeVisible();
    await expect(page.locator('main')).not.toBeEmpty();
  });

  test('footer legal links navigate to legal pages', async ({ page }) => {
    await page.goto('/');

    // 1. Aviso Legal
    const legalNoticeLink = page.locator('footer a[href="/aviso-legal"]').first();
    await legalNoticeLink.scrollIntoViewIfNeeded();
    await legalNoticeLink.click();
    await page.waitForURL('**/aviso-legal');
    await expect(page.locator('h1')).toContainText('Aviso Legal');

    // 2. Política de Privacidad
    await page.goto('/');
    const privacyLink = page.locator('footer a[href="/privacidad"]').first();
    await privacyLink.scrollIntoViewIfNeeded();
    await privacyLink.click();
    await page.waitForURL('**/privacidad');
    await expect(page.locator('h1')).toContainText('Política de Privacidad');

    // 3. Política de Cookies
    await page.goto('/');
    const cookiesLink = page.locator('footer a[href="/cookies"]').first();
    await cookiesLink.scrollIntoViewIfNeeded();
    await cookiesLink.click();
    await page.waitForURL('**/cookies');
    await expect(page.locator('h1')).toContainText('Política de Cookies');
  });
});
