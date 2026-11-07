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
      description: 'Player guides for the Dimensional Chaos mod and OneBlock modpack, up to date for 1.1.2 Beta.',
      defaultLocale: 'root',
      locales: {
        root: { label: 'English', lang: 'en' },
        fr: { label: 'Français', lang: 'fr' },
        'zh-cn': { label: '简体中文', lang: 'zh-CN' },
      },
      favicon: '/favicon.svg',
      logo: { src: './src/assets/mark.svg', replacesTitle: false },
      customCss: [
        '@fontsource-variable/outfit/wght.css',
        '@fontsource/pixelify-sans/500.css',
        '@fontsource/pixelify-sans/700.css',
        './src/styles/custom.css',
      ],
      components: {
        PageTitle: './src/components/PageTitle.astro',
        Footer: './src/components/Footer.astro',
        ThemeProvider: './src/components/ThemeProvider.astro',
        ThemeSelect: './src/components/ThemeSelect.astro',
      },
      social: [{ icon: 'github', label: 'GitHub Issues', href: 'https://github.com/ShyzosCorp/Dimensional-Chaos-Issues/issues' }],
      sidebar: [
        {
          label: 'Start here',
          translations: { fr: 'Pour commencer', 'zh-CN': '开始' },
          items: [
            { label: 'Overview', translations: { fr: 'Présentation', 'zh-CN': '概览' }, slug: '' },
            { label: 'Installation', translations: { fr: 'Installation', 'zh-CN': '安装' }, slug: 'installation' },
            { label: 'Getting started', translations: { fr: 'Bien démarrer', 'zh-CN': '新手入门' }, slug: 'getting-started' },
          ],
        },
        {
          label: 'Gameplay',
          translations: { fr: 'Gameplay', 'zh-CN': '玩法' },
          items: [
            { label: 'OneBlock progression', translations: { fr: 'Progression du OneBlock', 'zh-CN': 'OneBlock 进度' }, slug: 'oneblock-progression' },
            { label: 'Dimensional expeditions', translations: { fr: 'Expéditions dimensionnelles', 'zh-CN': '维度远征' }, slug: 'dimensional-expeditions' },
            { label: 'Island expansion', translations: { fr: "Agrandir l'île", 'zh-CN': '岛屿扩展' }, slug: 'island-expansion' },
          ],
        },
        {
          label: 'Help',
          translations: { fr: 'Aide', 'zh-CN': '帮助' },
          items: [
            { label: 'Multiplayer', translations: { fr: 'Multijoueur', 'zh-CN': '多人游戏' }, slug: 'multiplayer' },
            { label: 'Troubleshooting', translations: { fr: 'Dépannage', 'zh-CN': '常见问题' }, slug: 'troubleshooting' },
          ],
        },
      ],
      head: [{ tag: 'meta', attrs: { name: 'theme-color', content: '#130d24' } }],
    }),
  ],
});
