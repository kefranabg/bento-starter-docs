module.exports = {
  title: 'bento-starter',
  description: 'Open-Source Full-Stack solution for fast PWA development',
  head: [
    ['link', { rel: 'shortcut icon', href: '/assets/img/icons/favicon.ico' }],
    [
      'link',
      {
        rel: 'icon',
        href: '/assets/img/icons/favicon-16x16.png',
        size: '16x16'
      }
    ],
    [
      'link',
      {
        rel: 'icon',
        href: '/assets/img/icons/favicon-32x32.png',
        size: '32x32'
      }
    ],
    [
      'link',
      {
        rel: 'apple-touch-icon',
        href: '/assets/img/icons/apple-touch-icon.png',
        size: '180x180'
      }
    ],
    [
      'link',
      {
        rel: 'mask-icon',
        href: '/assets/img/icons/safari-pinned-tab.svg',
        color: '#5bbad5'
      }
    ],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'msapplication-TileColor', content: '#603cba' }],
    ['meta', { name: 'msapplication-config', content: '/browserconfig.xml' }],
    ['meta', { name: 'theme-color', content: '#ffffff' }]
  ],
  themeConfig: {
    logo: '/assets/img/bento-starter.svg',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Getting started', link: '/overview/' },
      { text: 'Demo', link: 'https://bento-starter.firebaseapp.com' },
      { text: 'GitHub', link: 'https://github.com/kefranabg/bento-starter' }
    ],
    sidebar: [
      {
        title: 'Guide',
        collapsable: false,
        children: [
          ['/overview/', 'Introduction'],
          ['/setup/', 'Setup'],
          ['/guide/', 'Guide'],
          ['/commands/', 'Commands'],
          ['/faq/', 'FAQ']
        ]
      }
    ]
  }
}
