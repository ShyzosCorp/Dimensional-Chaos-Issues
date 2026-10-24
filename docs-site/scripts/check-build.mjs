import assert from 'node:assert/strict';
import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { rootURL } from '../site.config.mjs';

const dist = resolve('dist');
const slugs = ['', 'installation/', 'getting-started/', 'oneblock-progression/', 'dimensional-expeditions/', 'island-expansion/', 'multiplayer/', 'troubleshooting/'];
const read = path => readFileSync(join(dist, path), 'utf8');
const attrs = tag => Object.fromEntries([...tag.matchAll(/([\w:-]+)=["']([^"']*)["']/g)].map(m => [m[1], m[2]]));
const rootPath = rootURL.pathname;
const sitemap = read('sitemap-0.xml');
const sitemapURLs = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1]).sort();
assert.deepEqual(sitemapURLs, slugs.map(slug => new URL(slug, rootURL).href).sort(), 'Sitemap must contain exactly the eight guides');
assert.ok(read('sitemap-index.xml').includes(new URL('sitemap-0.xml', rootURL).href));
const robots = read('robots.txt');
assert.ok(robots.includes(`Sitemap: ${new URL('sitemap-index.xml', rootURL).href}`));
assert.ok(!/Disallow:\s*\//i.test(robots), 'Crawling must not be blocked');

let links = 0;
for (const slug of slugs) {
  const page = read(`${slug}index.html`);
  const pageURL = new URL(slug, rootURL);
  const canonical = [...page.matchAll(/<link\b[^>]*>/g)].map(m => attrs(m[0])).find(a => a.rel === 'canonical');
  assert.equal(canonical?.href, pageURL.href, `Canonical: ${slug}`);
  const description = [...page.matchAll(/<meta\b[^>]*>/g)].map(m => attrs(m[0])).find(a => a.name === 'description');
  assert.ok(description?.content.length > 20, `Description: ${slug}`);
  assert.ok(/<title>[^<]+<\/title>/.test(page));
  assert.ok(!/<meta[^>]+(?:name=["']robots["'][^>]+content=["'][^"']*noindex|content=["'][^"']*noindex[^>]+name=["']robots)/i.test(page));
  for (const match of page.matchAll(/\b(?:href|src)=["']([^"']+)["']/g)) {
    const raw = match[1].replaceAll('&amp;', '&');
    if (/^(data:|mailto:|tel:|javascript:)/.test(raw)) continue;
    const url = new URL(raw, pageURL);
    if (url.origin !== rootURL.origin) continue;
    assert.ok(url.pathname.startsWith(rootPath), `Missing repository base: ${url}`);
    const relative = decodeURIComponent(url.pathname.slice(rootPath.length));
    const target = join(dist, relative || 'index.html');
    const file = existsSync(target) && statSync(target).isDirectory() ? join(target, 'index.html') : target;
    assert.ok(existsSync(file), `Broken generated link: ${url}`);
    if (url.hash && file.endsWith('.html')) {
      const id = decodeURIComponent(url.hash.slice(1));
      assert.ok(readFileSync(file, 'utf8').includes(`id="${id}"`), `Missing anchor: ${url}`);
    }
    links++;
  }
}
assert.ok(existsSync(join(dist, 'pagefind/pagefind.js')), 'Pagefind runtime missing');
const pagefind = readdirSync(join(dist, 'pagefind'), { recursive: true });
assert.ok(pagefind.some(name => name.endsWith('.pf_index')), 'Pagefind index missing');
assert.ok(pagefind.some(name => name.endsWith('.pf_fragment')), 'Pagefind fragments missing');
console.log(`Checked eight guides, ${links} local links/assets, canonical URLs, metadata, sitemap, robots and Pagefind files.`);
