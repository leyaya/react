var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
// 自动生成index.html页面插件
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // 入口文件
    // entry:path.resolve(__dirname,'src/js/app.js'),
    entry: {
        app: path.resolve(__dirname, 'src/js/app.js'),
        // 相当于如下的操作import React, {Component} from 'react';
        vendors: ['react', 'react-dom','react-router']
    },
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
            // {
            //     test: /\.css$/, // Only .css files
            //     loader: 'style!css' // 同时用两个加载器中间用！连接，多个加载器的执行顺序是从右往左走
            // },
            // 处理js中引用的css
            {
                test: /\.css$/, // Only .css files
                loader: ExtractTextPlugin.extract("style-loader", "css-loader")
                //loader: 'style!css' // 如果同时用两个加载器那中间用！隔开，而且执行顺序是从右往左
            },
            // {
            //     test: /\components/.css$/, // Only .css files
            //     loader: ExtractTextPlugin1.extract("style-loader", "css-loader")
            //     //loader: 'style!css' // 如果同时用两个加载器那中间用！隔开，而且执行顺序是从右往左
            // },

            // 处理scss文件
            // {
            //     test: /\.scss$/,
            //     loader: 'style!css!sass'
            // },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader")
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
    // resolve: {
    //     //自动扩展文件后缀名，意味着我们require模块可以省略不写后缀名
    //     //注意一下, extensions 第一个是空字符串! 对应不需要后缀的情况.
    //     extensions: ['', '.js', '.json', '.scss', 'jsx'],
    //     //模块别名定义，方便后续直接引用别名，无须多写长长的地址
    //     alias: {
    //         AppStore: 'js/stores/AppStores.js',//后续直接 require('AppStore') 即可
    //         ActionType: 'js/actions/ActionType.js',
    //         AppAction: 'js/actions/AppAction.js',
    //         ReacrDom:'./node_module/react-dom/react-dom.js'
    //     }
    // },
    // 在这个属性里面定义的包是不会被打包进bundle。js文件中的,如果你要用这个属性，别忘了在index。html中引入cdn
    // externals: {
    //    //配置了这个属性之后react和react-dom这些第三方的包都不会被构建进js中，那么我们就需要通过cdn进行文件的引用了
    //    // 前边这个名称是在项目中引用用的，相当于import React from  ‘react1’中的react，
    //    //'react1':"react",
    //    'react1':"react",
    //    'react-dom1':"react-dom",
    //     '$1':"jQuery"
    //
    // },
    plugins: [
        // 分离第三方应用插件,name属性会自动指向entry中vendros属性，filename属性中的文件会自动构建到output中的path属性下面
        new webpack.optimize.CommonsChunkPlugin({name: 'vendors', filename: 'vendors.js'}),
        // 用webpack压缩代码，可以忽略代码中的警告
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        // 可以新建多个抽离样式的文件，这样就可以有多个css文件了。
        // 注意：js中写得内联样式是抽取不出来的
        new ExtractTextPlugin("app.css"),
        // 定义生产环境
        new webpack.DefinePlugin({
            //去掉react中的警告，react会自己判断
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new HtmlWebpackPlugin({
            template: './src/template.html',
            htmlWebpackPlugin: {
                "files": {
                    "css": ["app.css"],
                    "js": ["vendors.js", "bundle.js"]
                }
            },
            // 效果不大，情怀至上
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeAttributeQuotes: true
            }
        })
    ]

}
