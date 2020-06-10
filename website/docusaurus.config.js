module.exports = {
    themeConfig: {
        defaultDarkMode: false,
        // disableDarkMode: true,
        navbar: {
            title: "Prysm 'Topaz' Testnet", // Title for your website.
            /* path to images for header/footer */
            logo: {
                alt: "Prysm Topaz Testnet logo",
                src: 'img/logo2.png',
            },
            links: [
                {
                    label: 'Documentation',
                    to: 'docs/getting-started',
                    position: 'right',
                },
                {
                    href: 'https://prylabs.net',
                    label: 'Activate a Validator',
                    position: 'right',
                },
                {
                    href: 'https://github.com/prysmaticlabs/prysm',
                    label: 'GitHub',
                    position: 'right',
                },
                {
                    href: 'https://api.prylabs.network',
                    label: 'API',
                    position: 'right',
                },
                {
                    href: 'https://docs.prylabs.network/docs/faq',
                    label: 'FAQ',
                    position: 'right',
                },
            ],
        },
        footer: {
            logo: {
                alt: "Prysm 'Topaz' Testnet",
                href: '/',
                src: 'img/Prysm.svg',
            },
            copyright: `Copyright © ${new Date().getFullYear()} Prysmatic Labs, LLC.`,
            links: [],
        },
        // You may provide arbitrary config keys to be used as needed by your
        // template. For example, if you need your repo's URL...
        //   repoUrl: 'https://github.com/facebook/test-site',
        algolia: {
            apiKey: process.env.ALGOLIA_API_KEY,
            indexName: 'prysmaticlabs_prysm',
            algoliaOptions: {} // Optional, if provided by Algolia
        },
        googleAnalytics: {
            trackingID: 'UA-139640266-2',
        },
        //syntax highlighter theme
        prism: {
            theme: require('prism-react-renderer/themes/dracula'),
        },
        // Open Graph and Twitter card images.
        ogImage: 'img/Prysm.svg',
        twitterImage: 'img/Prysm.svg',
    },
    customFields: {
        image: 'img/Prysm.svg',
    },
    /**
     * Additional settings from v1, some deprecated
     */
    favicon: 'img/Prysm.svg',
    tagline: 'An Ethereum 2.0 client written entirely in Go.',
    title: 'Prysm ETH2.0 Testnet',
    url: '/', // Your website URL
    baseUrl: '/', // Base URL for your project */
    projectName: 'prysm-docs',
    organizationName: 'Prysmatic Labs',
    scripts: ['https://buttons.github.io/buttons.js'],


    // Show documentation's last contributor's name.
    // enableUpdateBy: true,

    // Show documentation's last update time.
    // enableUpdateTime: true,

    // editUrl: 'https://github.com/prysmaticlabs/documentation/edit/master/docs/',

    // twitterUsername: 'prylabs',
    presets: [
        [
            '@docusaurus/preset-classic',
            {
                docs: {
                    // routeBasePath: '/', //Set this to have docs only mode
                    //Index/Home
                    homePageId: 'getting-started',
                    // Docs folder path relative to website dir.
                    path: './docs',
                    // Sidebars file relative to website dir.
                    sidebarPath: require.resolve('./sidebars.json'),
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            },
        ],
    ],
    // stylesheets: [
    //   {
    //       href: require.resolve('./static/css/custom.css'),
    //       type: 'text/css',
    //   }
    // ],
};