import fs from 'node:fs';
import path from 'node:path';

export const SUPPORTED_LANGUAGES = ['es', 'gl', 'en', 'fr', 'de', 'it', 'pt'] as const;
export type SupportedLanguage = typeof SUPPORTED_LANGUAGES[number];

export interface TranslationIssue {
  key: string;
  language: string;
  issue: 'missing' | 'empty';
}

/**
 * Parses LanguageContext.tsx and returns an object mapping keys to language values
 */
export function getDictionaryFromSource(): Record<string, Record<string, string>> {
  const filePath = path.resolve(process.cwd(), 'src/app/contexts/LanguageContext.tsx');
  const content = fs.readFileSync(filePath, 'utf-8');

  const dictMatch = content.match(/const translations:\s*Translations\s*=\s*\{([\s\S]*?)\n\};/);
  if (!dictMatch) {
    throw new Error('Could not find "const translations: Translations = {" block in LanguageContext.tsx');
  }

  const dictBlock = dictMatch[1];
  const entries: Record<string, Record<string, string>> = {};

  // Extract key blocks: 'key.name': { es: '...', gl: '...', ... }
  const keyRegex = /'([a-zA-Z0-9_.-]+)':\s*\{([\s\S]*?)\}(?=,\s*\n\s*'|,\s*\n\};|$)/g;
  let match;
  while ((match = keyRegex.exec(dictBlock)) !== null) {
    const key = match[1];
    const langBlock = match[2];
    entries[key] = {};

    for (const lang of SUPPORTED_LANGUAGES) {
      // Regex for single line or multiline string
      const langRegex = new RegExp(`${lang}:\\s*(['"\`])([\\s\\S]*?)\\1(?=,|\\n|\\s*$)`);
      const langMatch = langBlock.match(langRegex);
      if (langMatch) {
        entries[key][lang] = langMatch[2];
      }
    }
  }

  return entries;
}

/**
 * Validates that every key in the dictionary has a non-empty translation in all supported languages
 */
export function validateDictionaryParity(): TranslationIssue[] {
  const dict = getDictionaryFromSource();
  const issues: TranslationIssue[] = [];

  for (const [key, langMap] of Object.entries(dict)) {
    for (const lang of SUPPORTED_LANGUAGES) {
      if (typeof langMap[lang] === 'undefined') {
        issues.push({ key, language: lang, issue: 'missing' });
      } else if (langMap[lang].trim() === '') {
        issues.push({ key, language: lang, issue: 'empty' });
      }
    }
  }

  return issues;
}

/**
 * Patterns that indicate an unresolved translation key or template bug
 */
export const UNRESOLVED_TRANSLATION_PATTERNS = [
  /\b(nav|hero|house|features|location|nature|gastronomy|experiences|faq|contact|footer|cookies|common|weather)\.[a-zA-Z0-9_.-]+\b/,
  /\bundefined\b/,
  /\bnull\b/,
  /\[object Object\]/
];

/**
 * Checks whether text contains unresolved translation keys (ignoring code/script tags)
 */
export function findUnresolvedTranslations(text: string): string[] {
  const found: string[] = [];
  for (const pattern of UNRESOLVED_TRANSLATION_PATTERNS) {
    const match = text.match(pattern);
    if (match) {
      found.push(match[0]);
    }
  }
  return found;
}
