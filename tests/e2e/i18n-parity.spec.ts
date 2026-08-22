import { test, expect } from '@playwright/test';
import { validateDictionaryParity, getDictionaryFromSource, SUPPORTED_LANGUAGES } from '../helpers/i18n';

test.describe('i18n Translation Parity & Quality', () => {
  test('all supported languages have 100% key parity and no empty values', async () => {
    const issues = validateDictionaryParity();

    if (issues.length > 0) {
      const summary = issues.map(i => `[${i.language}] ${i.issue.toUpperCase()}: "${i.key}"`).join('\n');
      throw new Error(`Found ${issues.length} translation issue(s):\n${summary}`);
    }

    expect(issues).toHaveLength(0);
  });

  test('dictionary contains all expected core categories and languages', async () => {
    const dict = getDictionaryFromSource();
    const keys = Object.keys(dict);

    expect(keys.length).toBeGreaterThan(50);

    // Verify key core namespaces exist
    const namespaces = ['nav', 'hero', 'house', 'location', 'experiences', 'faq', 'contact', 'footer'];
    for (const ns of namespaces) {
      const hasNamespace = keys.some(k => k.startsWith(`${ns}.`));
      expect(hasNamespace, `Expected translations starting with "${ns}."`).toBe(true);
    }

    // Verify each language has entries
    for (const lang of SUPPORTED_LANGUAGES) {
      const sampleKey = keys[0];
      expect(dict[sampleKey][lang]).toBeDefined();
      expect(dict[sampleKey][lang].length).toBeGreaterThan(0);
    }
  });
});
