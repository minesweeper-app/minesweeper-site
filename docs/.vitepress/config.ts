import { defineConfig } from 'vitepress'

export default defineConfig({
  // base: '/minesweeper/',
  title: 'Minesweeper',
  titleTemplate: 'Minesweeper — :title',
  description: 'Minesweeper reimagined! Classic gameplay, 3 difficulty levels, offline play & zero ads. Perfect for quick breaks or deep logic challenges.',
  lastUpdated: true,
  head: [
    // Favicons
    ['link', { rel: 'icon', type: 'image/png', href: '/logo.png' }],
    ['link', { rel: 'apple-touch-icon', href: '/logo.png' }],
    
    // Theme and viewport
    ['meta', { name: 'theme-color', content: '#ffffff' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }],
    
    // SEO
    ['meta', { name: 'keywords', content: 'minesweeper, game, puzzle, classic game, mines, flags, documentation' }],
    ['meta', { name: 'author', content: 'Minesweeper Project' }],
    
    // Open Graph / Facebook
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:site_name', content: 'Minesweeper' }],
    ['meta', { property: 'og:url', content: 'https://minesweeper.w3cub.com/' }],
    ['meta', { property: 'og:title', content: 'Minesweeper — Official project documentation' }],
    ['meta', { property: 'og:description', content: 'Minesweeper reimagined! Classic gameplay, 3 difficulty levels, offline play & zero ads. Perfect for quick breaks or deep logic challenges.' }],
    ['meta', { property: 'og:image', content: 'https://minesweeper.w3cub.com/preview.png' }],
    ['meta', { property: 'og:image:width', content: '1200' }],
    ['meta', { property: 'og:image:height', content: '630' }],
    ['meta', { property: 'og:image:alt', content: 'Minesweeper Preview' }],
    
    // Twitter Card
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:url', content: 'https://minesweeper.w3cub.com/' }],
    ['meta', { name: 'twitter:title', content: 'Minesweeper — Official project documentation' }],
    ['meta', { name: 'twitter:description', content: 'Minesweeper reimagined! Classic gameplay, 3 difficulty levels, offline play & zero ads. Perfect for quick breaks or deep logic challenges.' }],
    ['meta', { name: 'twitter:image', content: 'https://minesweeper.w3cub.com/preview.png' }],
    ['meta', { name: 'twitter:image:alt', content: 'Minesweeper Preview' }],
  ],
  themeConfig: {
    siteTitle: 'Minesweeper',
    logo: '/logo.png',
    search: {
      provider: 'local'
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/introduction' },
      { text: 'FAQ', link: '/guide/faq' },
      { text: 'Changelog', link: 'https://github.com/minesweeper-app/minesweeper-site/blob/main/CHANGELOG.md' },
      { text: 'Repository', link: 'https://github.com/minesweeper-app/minesweeper-site' },
    ],
    sidebar: [
      {
        text: 'Guide',
        items: [
              { text: 'Introduction', link: '/guide/introduction' },
              { text: 'Installation', link: '/guide/installation' },
              { text: 'Usage', link: '/guide/usage' },
              { text: 'Troubleshooting', link: '/guide/troubleshooting' },
              { text: 'FAQ', link: '/guide/faq' }
        ]
      },
      {
        text: 'Legal',
        items: [
          { text: 'Privacy Policy', link: '/guide/privacy' },
          { text: 'Privacy Choices', link: '/guide/privacy-choices' },
          { text: 'Terms of Service', link: '/guide/terms' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/minesweeper-app' }
    ],
    footer: {
      message: 'Built with ❤️',
      copyright: 'Copyright © 2026 Minesweeper Project. All rights reserved.',
      items: [
        {
          text: 'Product',
          items: [
            { text: 'About', link: '/guide/introduction' },
            { text: 'Features', link: '/#features' },
            { text: 'Installation', link: '/guide/installation' }
          ]
        },
        {
          text: 'Support',
          items: [
            { text: 'Documentation', link: '/guide/introduction' },
            { text: 'FAQ', link: '/guide/faq' },
            { text: 'Troubleshooting', link: '/guide/troubleshooting' },
            { text: 'Contact', link: 'mailto:minesweeper@w3cub.com' }
          ]
        },
        {
          text: 'Company',
          items: [
            { text: 'About', link: '/guide/introduction' },
            { text: 'Privacy Policy', link: '/guide/privacy' },
            { text: 'Terms of Service', link: '/guide/terms' },
            { text: 'GitHub', link: 'https://github.com/minesweeper-app' }
          ]
        }
      ]
    }
  }
})