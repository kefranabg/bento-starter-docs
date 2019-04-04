module.exports = {
  title: 'bento-starter',
  description: 'Prepare your PWA faster than your launch !',
  head: [['link', { rel: 'icon', href: '/assets/img/icons/logo.png' }]],
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
