import { rootURL } from '../../site.config.mjs';

export function GET() {
  return new Response(`User-agent: *\nAllow: /\n\nSitemap: ${new URL('sitemap-index.xml', rootURL)}\n`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
