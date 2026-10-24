import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import { site, base } from './site.config.mjs';

export default defineConfig({
  site,
  base,
  trailingSlash: 'always',
  integrations: [
    starlight({
      title: 'Dimensional Chaos',
      description: 'Practical guides for the Dimensional Chaos mod and OneBlock modpack, checked for 1.1.0 Beta.',
      favicon: '/favicon.svg',
      logo: { src: './src/assets/mark.svg', replacesTitle: false },
      customCss: ['./src/styles/custom.css'],
      social: [{ icon: 'github', label: 'GitHub Issues', href: 'https://github.com/ShyzosCorp/Dimensional-Chaos-Issues/issues' }],
      sidebar: [
        { label: 'Overview', slug: '' },
        { label: 'Installation', slug: 'installation' },
        { label: 'Getting started', slug: 'getting-started' },
        { label: 'OneBlock progression', slug: 'oneblock-progression' },
        { label: 'Dimensional expeditions', slug: 'dimensional-expeditions' },
        { label: 'Island expansion', slug: 'island-expansion' },
        { label: 'Multiplayer', slug: 'multiplayer' },
        { label: 'Troubleshooting', slug: 'troubleshooting' },
      ],
      head: [{ tag: 'meta', attrs: { name: 'theme-color', content: '#171324' } }],
    }),
  ],
});
