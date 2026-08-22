import fs from 'node:fs';
import path from 'node:path';

export interface RouteInfo {
  path: string;
  source: 'sitemap' | 'prerender' | 'spa';
}

export function getSitemapRoutes(): string[] {
  const sitemapPath = path.resolve(process.cwd(), 'public/sitemap.xml');
  if (!fs.existsSync(sitemapPath)) return [];
  const content = fs.readFileSync(sitemapPath, 'utf-8');
  const matches = [...content.matchAll(/<loc>https:\/\/www\.casadacuncheira\.com([^<]*)<\/loc>/g)];
  return matches.map(m => m[1] || '/').map(p => p.endsWith('/') && p.length > 1 ? p.slice(0, -1) : p);
}

export function getPrerenderRoutes(): string[] {
  const prerenderPath = path.resolve(process.cwd(), 'scripts/prerender.mjs');
  if (!fs.existsSync(prerenderPath)) return [];
  const content = fs.readFileSync(prerenderPath, 'utf-8');
  const matches = [...content.matchAll(/path:\s*['"]([^'"]+)['"]/g)];
  const routes = ['/', ...matches.map(m => m[1])];
  return [...new Set(routes)];
}

export function getAllCanonicalRoutes(): string[] {
  const sitemapRoutes = getSitemapRoutes();
  const prerenderRoutes = getPrerenderRoutes();
  const all = [...new Set([...sitemapRoutes, ...prerenderRoutes])];
  return all.sort();
}
