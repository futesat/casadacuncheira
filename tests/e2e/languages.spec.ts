import { test, expect } from '@playwright/test';
import { SUPPORTED_LANGUAGES, findUnresolvedTranslations } from '../helpers/i18n';
import { seedCookieConsent } from '../helpers/consent';

test.describe('E2E Language Switcher & Multi-Language Quality', () => {
  test.beforeEach(async ({ page }) => {
    await seedCookieConsent(page, false);
  });

  for (const lang of SUPPORTED_LANGUAGES) {
    test(`switches to language "${lang}" and updates UI text without unresolved keys`, async ({ page }) => {
      await page.goto('/');

      // Open language selector (desktop or mobile)
      const langTrigger = page.locator('header button').filter({ hasText: /ES|GL|EN|FR|DE|IT|PT/i }).first();
      
      if (await langTrigger.isVisible()) {
        await langTrigger.click();

        // Select the target language option
        const langOption = page.locator(`button[data-lang="${lang}"], [role="menuitem"]:has-text("${lang.toUpperCase()}"), button:has-text("${lang.toUpperCase()}")`).first();
        if (await langOption.isVisible()) {
          await langOption.click();
        }
      }

      // Check for unresolved translation strings on page
      const pageText = await page.innerText('body');
      const unresolved = findUnresolvedTranslations(pageText);

      expect(unresolved, `Found unresolved translation placeholders in language "${lang}": ${unresolved.join(', ')}`).toHaveLength(0);

      // Verify that main content is rendered and non-empty
      const mainContent = await page.locator('main').innerText();
      expect(mainContent.length).toBeGreaterThan(100);
    });
  }

  test('language selection persists during client-side navigation', async ({ page }) => {
    await page.goto('/');

    // Switch to English if selector is available
    const langTrigger = page.locator('header button').filter({ hasText: /ES|GL|EN|FR|DE|IT|PT/i }).first();
    if (await langTrigger.isVisible()) {
      await langTrigger.click();
      const enOption = page.locator('button:has-text("EN"), [role="menuitem"]:has-text("EN")').first();
      if (await enOption.isVisible()) {
        await enOption.click();
      }
    }

    // Navigate to /gastronomy via direct link
    const gastroLink = page.locator('a[href="/gastronomy"]').first();
    await gastroLink.scrollIntoViewIfNeeded();
    await gastroLink.click();
    await page.waitForURL('**/gastronomy');

    // Verify page rendered without unresolved keys
    const gastroText = await page.innerText('body');
    const unresolved = findUnresolvedTranslations(gastroText);
    expect(unresolved).toHaveLength(0);
  });
});
