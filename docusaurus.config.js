// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const addItemToCategory = (sidebarItems, categoryLabel, item) => {
  const category = sidebarItems.find(
    // @ts-ignore
    (item) => item.label === categoryLabel,
  );

  if (category) {
    // @ts-ignore
    category.items.push(item);
  }
};

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'CS2 Docs',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://cs2.poggu.me',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'poggicek', // Usually your GitHub org/user name.
  projectName: 'cs2-docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          editUrl: 'https://github.com/poggicek/cs2-docs/edit/master',
          async sidebarItemsGenerator({
            defaultSidebarItemsGenerator,
            ...args
          }) {
            const sidebarItems = await defaultSidebarItemsGenerator(args);

            addItemToCategory(sidebarItems, 'Reverse Engineering', {
              type: 'link',
              label: "Schema System",
              href: "https://praydog.com/index.php/2015/06/24/an-analysis-of-the-source-2-engine-part-1-the-schema-system/"
            })

            addItemToCategory(sidebarItems, 'Dumped Data', {
              type: 'link',
              label: "Schemas",
              href: "https://github.com/neverlosecc/source2sdk/tree/cs2/sdk"
            })

            addItemToCategory(sidebarItems, 'Dumped Data', {
              type: 'link',
              label: "Usermessages",
              href: "https://gist.github.com/psychonic/f529f20a02f6d78d56513127ff720683#file-usermessages-proto"
            })

            return sidebarItems;
          },
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/s2.jpg',
      navbar: {
        title: 'CS2',
        logo: {
          alt: 'S2 Logo',
          src: 'img/s2.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'cs2Sidebar',
            position: 'left',
            label: 'Docs',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Community',
            items: [
              {
                label: 'AlliedModders Discord',
                href: 'https://discord.com/invite/HUc67zN',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/poggicek',
              },
            ],
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
