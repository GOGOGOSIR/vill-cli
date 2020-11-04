const config = require('./config/config');

module.exports = {
  base: config.BASE,
  title: 'vill-ui使用文档',
  description: '一款基于vue的移动端UI库',
  port: 9000,
  dest: config.OUTPUT_DIR,
  themeConfig: {
    logo: '/imgs/logo.png',
    nav: [
      { text: '指南', link: '/guide/introduction' },
      { text: 'demo地址', link: 'http://vill-ui-demo.harohouse.com/#/' },
    ],
    sidebar: [
      {
        title: '开发指南',
        collapsable: false,
        sidebarDepth: 1,
        children: [
          {
            title: '介绍',
            path: '/guide/introduction'
          },
          {
            title: '快速上手',
            path: '/guide/install',
            meta: {
              name: '/'
            }
          },
          {
            title: '主题',
            path: '/guide/theme',
            meta: {
              name: '/'
            }
          }
        ]
      }
    ]
  }
}
