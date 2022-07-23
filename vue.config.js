const webpack = require('webpack')
const path = require('path')

module.exports = {
  // 打包是否生成.map文件
  // publicPath: process.env.NODE_ENV === 'production' ? "./../" : './',//服务器用
  publicPath: './',
  assetsDir: 'static',
  productionSourceMap: false,
  lintOnSave: false,
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    },
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        jquery: 'jquery',
        'windows.jQuery': 'jquery'
      })
    ]
  },
  pages: {
    index: {
      entry: 'src/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    }
  },
  devServer: {
    // proxy: {
    //     '/get_post': {
    //         target: 'https://sheyh.cn/',// 要跨域的域名
    //         changeOrigin: true, // 是否开启跨域
    //     },
    // }
    hot: true,
    open: true,
    inline: true
  }
}
