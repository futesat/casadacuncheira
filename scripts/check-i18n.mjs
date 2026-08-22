import fs from 'node:fs';
import path from 'node:path';

const SUPPORTED_LANGUAGES = ['es', 'gl', 'en', 'fr', 'de', 'it', 'pt'];

console.log('🔍 Checking i18n translation parity across 7 languages...');

const filePath = path.resolve(process.cwd(), 'src/app/contexts/LanguageContext.tsx');
if (!fs.existsSync(filePath)) {
  console.error(`❌ File not found: ${filePath}`);
  process.exit(1);
}

const content = fs.readFileSync(filePath, 'utf-8');
const dictMatch = content.match(/const translations:\s*Translations\s*=\s*\{([\s\S]*?)\n\};/);

if (!dictMatch) {
  console.error('❌ Could not find "const translations: Translations = {" block in LanguageContext.tsx');
  process.exit(1);
}

const dictBlock = dictMatch[1];
const entries = {};

// Extract key blocks: 'key.name': { es: '...', gl: '...', ... }
const keyRegex = /'([a-zA-Z0-9_.-]+)':\s*\{([\s\S]*?)\}(?=,\s*\n\s*'|,\s*\n\};|$)/g;
let match;
while ((match = keyRegex.exec(dictBlock)) !== null) {
  const key = match[1];
  const langBlock = match[2];
  entries[key] = {};

  for (const lang of SUPPORTED_LANGUAGES) {
    const langRegex = new RegExp(`${lang}:\\s*(['"\`])([\\s\\S]*?)\\1(?=,|\\n|\\s*$)`);
    const langMatch = langBlock.match(langRegex);
    if (langMatch) {
      entries[key][lang] = langMatch[2];
    }
  }
}

const keys = Object.keys(entries);
const issues = [];

for (const [key, langMap] of Object.entries(entries)) {
  for (const lang of SUPPORTED_LANGUAGES) {
    if (typeof langMap[lang] === 'undefined') {
      issues.push({ key, language: lang, issue: 'missing' });
    } else if (langMap[lang].trim() === '') {
      issues.push({ key, language: lang, issue: 'empty' });
    }
  }
}

if (issues.length > 0) {
  console.error(`❌ Found ${issues.length} translation issue(s):`);
  for (const issue of issues) {
    console.error(`   [${issue.language}] ${issue.issue.toUpperCase()}: "${issue.key}"`);
  }
  process.exit(1);
}

console.log(`✅ All ${keys.length} translation keys have 100% parity across all 7 languages (es, gl, en, fr, de, it, pt)!`);
process.exit(0);
