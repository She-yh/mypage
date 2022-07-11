const webpack = require('webpack')
module.exports = {
    //打包是否生成.map文件
    publicPath: process.env.NODE_ENV === 'production' ? "./../" : './',//服务器用
    // publicPath:'./',
    assetsDir: "static",
    productionSourceMap: false,
    lintOnSave: false,
    configureWebpack: {
        plugins: [
            new webpack.ProvidePlugin({
                $:"jquery",
                jQuery:"jquery",
                jquery:"jquery",
                "windows.jQuery":"jquery"
            })
        ]
    },
    pages: {
        index: {
            entry: 'src/main.js',
            template: 'public/index.html',
            filename: 'index.html',
            chunks: ['chunk-vendors', 'chunk-common', 'index'],
            cdn: {
                css: [
                    // "https://cdn.bootcdn.net/ajax/libs/font-awesome/4.6.0/css/font-awesome.min.css",
                    // "https://unpkg.com/swiper/swiper-bundle.min.css"
                ],
                js: [
                    // "https://unpkg.com/swiper/swiper-bundle.min.js",
                ]
            },
        }
    },
    devServer: {
        host: 'localhost',
        port: 8081,
        proxy: {
            '/get_post': {
                target: 'https://sheyh.cn',// 要跨域的域名
                changeOrigin: true, // 是否开启跨域
            },
        }
    }
};
