const { join } = require('path')

module.exports = {
  publicPath: './',
  assetsDir: 'static',
  outputDir: 'example-dist',
  lintOnSave: process.env.NODE_ENV !== 'production',
  productionSourceMap: false,
  chainWebpack: (config) => {
    config.entry('app')
      .clear()
      .add('./example/main.ts')
      .end()
    // config.resolve.alias
    //   .set('@example', 'example')
  },
  devServer: {
    port: 9527,
  }
}
