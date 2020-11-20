const path = require('path');
const { BASE, OUTPUT_DIR } = require('./utils/config');
const { createSidebar } = require('./utils/create');
const { DEFAULT_SIDEBAR } = require('./utils/constant');

module.exports = () => {
  const sidebar = createSidebar();

  return {
    base: BASE,
    title: 'vill-ui使用文档',
    description: '一款基于vue的移动端UI库',
    port: 9000,
    dest: OUTPUT_DIR,
    themeConfig: {
      logo: '/imgs/logo.png',
      nav: [
        { text: '指南', link: '/guide/introduction' },
        { text: 'demo地址', link: 'http://vill-ui-demo.harohouse.com/#/' },
      ],
      sidebar: [
        ...DEFAULT_SIDEBAR,
        ...sidebar
      ]
    },
    chainWebpack: (config) => {
      config.resolve.alias
        .set('@vuepress', path.join(__dirname, './'))
      config.module
        .rule()
        .test(/\.ts$/)
        .use()
          .loader('ts-loader')
    }
  }
}
