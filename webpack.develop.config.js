var path = require('path');
// 自动打开浏览器插件
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
    // 入口文件
    // entry:path.resolve(__dirname,'src/js/app.js'),
    entry:[
        'webpack/hot/dev-server',
        'webpack-dev-server/client?http://localhost:8080',
         path.resolve(__dirname,'src/js/app.js')
    ],
    // 输出文件
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    module: {
        loaders: [
            // 处理ES6和JSX语法
            {
                test: /\.jsx?$/, // 用正则来匹配文件路径，这段意思是匹配 js 或者 jsx
                loader: 'babel',// 加载模块 "babel" 是 "babel-loader" 的缩写
                query: {
                    presets: ['es2015', 'react','stage-0','stage-1','stage-2','stage-3']
                }
            },
            // 处理js中引用css
            {
                test: /\.css$/, // Only .css files
                loader: 'style!css' // 同时用两个加载器中间用！连接，多个加载器的执行顺序是从右往左走
            },
            // 处理scss文件
            {
                test: /\.scss$/,
                loader: 'style!css!sass'
            },
            // 处理less文件
            {
                test: /\.less$/,
                loader: 'style!css!less'
            },
            // 处理图片的操作
            {
                test: /\.(png|jpg)$/,
                // 1kb=1024b 1b=8bit,10000bit~1.22kb,每个公司中给的数值是不一样的
                loader: 'url?limit=10000&name=images/[name].[ext]' // 问号是给加载器增加一些限制条件，多个条件用&号连接
            },
            // 处理字体
            {
                test: /\.(eot|woff|ttf|woff2|svg)$/,
                loader: 'url?limit=10000&name=fonts/[name].[ext]'
            }

        ]
    },
    plugins: [
        new OpenBrowserPlugin({url: 'http://localhost:8080/', browser: 'chrome'})
    ]

}
