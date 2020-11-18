const { join } = require('path');
const globby = require('globby');
const { SIDEBAR_SORT } = require('./constant');

function createSidebar () {
  const pathList = globby.sync('components/**/*.md', { cwd: join(__dirname, '../..') }).map(path => `/${path}`)
  const sidebar = SIDEBAR_SORT
  sidebar.forEach(item => {
    const pattern = item.pattern
    item.children = []
    for (const path of pathList) {
      if (path.indexOf(pattern) > -1) {
        item.children.push({
          title: path.replace(/(.*\/)*([^.]+).*/ig, "$2"),
          path
        })
      }
    }
  })

  return sidebar
}

module.exports = {
  createSidebar
}
