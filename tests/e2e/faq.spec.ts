import { test, expect } from '@playwright/test';
import { seedCookieConsent } from '../helpers/consent';

test.describe('E2E FAQ Section & Accordion Functionality', () => {
  test.beforeEach(async ({ page }) => {
    await seedCookieConsent(page, false);
  });

  test('renders FAQ section and toggles accordion items', async ({ page }) => {
    await page.goto('/');

    const faqSection = page.locator('#faq');
    await expect(faqSection).toBeVisible();

    // Verify all FAQ accordion buttons exist (8 questions total)
    const faqButtons = faqSection.locator('button');
    const count = await faqButtons.count();
    expect(count).toBeGreaterThanOrEqual(8);
  });

  test('access and parking FAQ can be expanded and contains correct details', async ({ page }) => {
    await page.goto('/');

    const faqSection = page.locator('#faq');
    await faqSection.scrollIntoViewIfNeeded();

    // Locate the button containing the access question
    const accessFaqButton = faqSection.locator('button', {
      hasText: /acceso en coche|onde se pode aparcar|car access/i
    }).first();

    await expect(accessFaqButton).toBeVisible();
    await accessFaqButton.click();

    // Verify the expanded content has the specific instructions
    const answerContainer = faqSection.locator('div', {
      hasText: /AC-550/i
    }).first();

    await expect(answerContainer).toBeVisible();
    await expect(answerContainer).toContainText('120');
    await expect(answerContainer).toContainText('Volkswagen Polo');
  });
});
