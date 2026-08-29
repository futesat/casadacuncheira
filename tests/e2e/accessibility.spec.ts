import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import { seedCookieConsent } from '../helpers/consent';

test.describe('E2E Automated Accessibility (Axe-core WCAG 2.1 AA)', () => {
  const pagesToTest = [
    '/',
    '/booking',
    '/gastronomy',
    '/aviso-legal',
    '/privacidad',
    '/cookies',
    '/nature/que-ver-en-carnota'
  ];

  for (const pagePath of pagesToTest) {
    test(`accessibility audit on "${pagePath}" has zero critical or serious violations`, async ({ page }) => {
      await seedCookieConsent(page, false);
      await page.goto(pagePath);
      await page.waitForSelector('main', { state: 'attached' });

      // Run Axe accessibility scan for WCAG 2.1 AA rules
      // Justified exclusions:
      // 1. color-contrast: Axe headless DOM analyzer cannot sample photographic WebP backgrounds.
      // 2. iframe: Third-party vendor widgets (AvaiBook, Google Maps, Windy, YouTube) are externally hosted.
      const accessibilityScanResults = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
        .disableRules(['color-contrast'])
        .exclude('iframe')
        .analyze();

      // Filter for critical and serious violations
      const blockingViolations = accessibilityScanResults.violations.filter(
        v => v.impact === 'critical' || v.impact === 'serious'
      );

      if (blockingViolations.length > 0) {
        const report = blockingViolations.map(v => 
          `[${v.impact?.toUpperCase()}] ${v.id}: ${v.description} (${v.helpUrl})\n  Nodes: ${v.nodes.map(n => n.html).join(' | ')}`
        ).join('\n\n');
        
        throw new Error(`Accessibility violations found on "${pagePath}":\n${report}`);
      }

      expect(blockingViolations).toHaveLength(0);
    });
  }
});
