import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Valrobotik Docs',
  tagline: 'Documentation Valrobotik',
  favicon: 'img/favicon.svg',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://docs.valrobotik.fr',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',

  headTags: [
    {
      tagName: 'script',
      attributes: {type: 'application/ld+json'},
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Valrobotik',
        url: 'https://valrobotik.fr',
        logo: 'https://docs.valrobotik.fr/img/logo.svg',
        sameAs: [
          'https://www.instagram.com/valrobotik',
          'https://github.com/Valrobotik',
          'https://discord.gg/m4YxfVEyNQ',
        ],
      }),
    },
    {
      tagName: 'script',
      attributes: {type: 'application/ld+json'},
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'Valrobotik Docs',
        url: 'https://docs.valrobotik.fr',
        inLanguage: 'fr',
      }),
    },
  ],

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "" with "zh-Hans".
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr'],
  },

  plugins: [
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          {from: '/s/cnfx-pm-18650-5v-1', to: '/sdl/architecture/cnfx-pm-18650-5v-1'},
          {from: '/s/cnfx-dc-quad-drv-1', to: '/sdl/architecture/cnfx-dc-quad-drv-1'},
          {from: '/s/cnfx-cb-esp32s3-1', to: '/sdl/architecture/cnfx-cb-esp32s3-1'},
          {from: '/s/cnfx-line-sensor-1', to: '/sdl/architecture/cnfx-line-sensor-1'},
        ],
      },
    ],
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/valrobotik-social-card.png',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Valrobotik Docs',
      logo: {
        alt: 'logo Valrobotik',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: '/sdl',
          label: 'Suiveurs de lignes',
          position: 'left',
        },
        {
          to: '/ateliers',
          label: 'Supports Ateliers',
          position: 'left',
        },
        {
          href: 'https://discord.gg/m4YxfVEyNQ',
          label: 'Discord',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      logo: {
        alt: 'Valrobotik',
        src: 'img/logo.svg',
        href: '/sdl',
        width: 40,
        height: 61,
      },
      links: [
        {
          title: 'Documentation',
          items: [
            {
              label: 'Suiveurs de lignes',
              to: '/sdl',
            },
            {
              label: 'Supports ateliers',
              to: '/ateliers',
            },
          ],
        },
        {
          title: 'Concours',
          items: [
            {
              label: 'Règlement & inscriptions',
              to: '/sdl/reglement',
            },
            {
              label: 'Architecture électronique',
              to: '/sdl/architecture',
            },
          ],
        },
        {
          title: 'Réseaux',
          items: [
            {
              label: 'Instagram',
              href: 'https://www.instagram.com/valrobotik',
            },
            {
              label: 'Discord',
              href: 'https://discord.gg/m4YxfVEyNQ',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/Valrobotik',
            },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Valrobotik`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
