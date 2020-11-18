const SIDEBAR_SORT = [{
  title: '基础组件',
  pattern: '/base/',
  collapsable: false,
  sidebarDepth: 1
}, {
  title: '表单组件',
  pattern: '/form/',
  collapsable: false,
  sidebarDepth: 1
}, {
  title: '交互组件',
  pattern: '/interaction/',
  collapsable: false,
  sidebarDepth: 1
}]

const DEFAULT_SIDEBAR = [
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

module.exports = {
  SIDEBAR_SORT,
  DEFAULT_SIDEBAR
}
