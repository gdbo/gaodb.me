const path = require("path");

module.exports = {
  title: '充电Up',
  tagline: '学习, 充电, 后端, golang, python',
  url: 'https://gaodb.me',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'gdbo', // Usually your GitHub org/user name.
  projectName: 'gaodb.me', // Usually your repo name.
  stylesheets: ["https://fonts.font.im/css?family=Raleway:500,700"],
  themeConfig: {
    navbar: {
      title: '充电Up',
      logo: {
        alt: 'Home',
        src: 'img/logo.png',
      },
      items: [
        {to: '/', label: 'Blog', position: 'right'},
        {
          to: 'docs/wiki/wiki-intro',
          activeBasePath: 'docs',
          label: 'Wiki',
          position: 'right',
        },
        {
          href: 'https://github.com/gdbo/gaodb.me',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: "简介",
              to: 'docs/wiki/wiki-intro',
            }
          ],
        },
        // {
        //   title: 'Community',
        //   items: [
        //     {
        //       label: 'Stack Overflow',
        //       href: 'https://stackoverflow.com/questions/tagged/docusaurus',
        //     },
        //     {
        //       label: 'Discord',
        //       href: 'https://discordapp.com/invite/docusaurus',
        //     },
        //     {
        //       label: 'Twitter',
        //       href: 'https://twitter.com/docusaurus',
        //     },
        //   ],
        // },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/gdbo/gaodb.me',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Gaodb Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/gdbo/gaodb.me/edit/main/docs/',
        },
        blog: {
          path: "./blog",
          routeBasePath: "/",
          showReadingTime: true,
          editUrl: 'https://github.com/gdbo/gaodb.me/edit/main/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [
    path.resolve(__dirname, "./src/plugin/plugin-baidu-analytics"),
  ],
};
