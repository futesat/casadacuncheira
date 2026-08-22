import { test, expect } from '@playwright/test';
import fs from 'node:fs';
import path from 'node:path';

test.describe('Static Build & Artifact Integrity', () => {
  const distDir = path.resolve(process.cwd(), 'dist');

  test('dist directory contains all prerendered pages, assets and metadata files', async () => {
    expect(fs.existsSync(distDir), 'Expected dist/ directory to exist. Run "npm run build" first.').toBe(true);

    const requiredFiles = [
      'index.html',
      'aviso-legal/index.html',
      'privacidad/index.html',
      'cookies/index.html',
      'gastronomy/index.html',
      'nature/que-ver-en-carnota/index.html',
      'nature/lira-carnota/index.html',
      'nature/praia-carnota/index.html',
      'nature/monte-pindo/index.html',
      'sitemap.xml',
      'robots.txt'
    ];

    for (const relPath of requiredFiles) {
      const fullPath = path.join(distDir, relPath);
      expect(fs.existsSync(fullPath), `Required static file missing: dist/${relPath}`).toBe(true);
      
      const stats = fs.statSync(fullPath);
      expect(stats.size, `File dist/${relPath} is empty`).toBeGreaterThan(0);
    }
  });

  test('built HTML files contain no development URLs, localhost or secret placeholders', async () => {
    const htmlFiles = [
      path.join(distDir, 'index.html'),
      path.join(distDir, 'aviso-legal/index.html'),
      path.join(distDir, 'privacidad/index.html'),
      path.join(distDir, 'cookies/index.html')
    ];

    for (const filePath of htmlFiles) {
      if (!fs.existsSync(filePath)) continue;
      const content = fs.readFileSync(filePath, 'utf-8');

      expect(content).not.toContain('http://localhost:');
      expect(content).not.toContain('http://127.0.0.1:');
      expect(content).not.toContain('DEPLOY_TOKEN');
      expect(content).not.toContain('PRIVATE_KEY');
      expect(content).not.toContain('undefined.js');
    }
  });
});
