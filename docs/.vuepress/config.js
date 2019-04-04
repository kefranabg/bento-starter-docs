module.exports = {
  title: 'bento-starter',
  description: 'Prepare your PWA faster than your lunch !',
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
  serviceWorker: true,
  themeConfig: {
    logo: '/assets/img/bento-starter.svg',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'GitHub', link: 'https://github.com/kefranabg/bento-starter' }
    ],
    sidebar: [
      {
        title: 'Guide',
        collapsable: false,
        children: [
          ['/overview/', 'Overview'],
          ['/guide/', 'Setup'],
          ['/commands/', 'Commands']
        ]
      }
    ]
  }
}
