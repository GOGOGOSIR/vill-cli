module.exports = {
  publicPath: './',
  assetsDir: 'static',
  lintOnSave: process.env.NODE_ENV !== 'production',
  productionSourceMap: false,
  chainWebpack: (config) => {
    config.entry('app')
      .clear()
      .add('./example/main.ts')
      .end()
  },
  devServer: {
    port: 9527,
  }
}
