var path = require('path')    // 用于规范化路径
var webpack = require('webpack')

module.exports = {
    entry: './example/main.js',    // 入口文件，即打包从哪个文件开始
    output: {      // 生成的文件输出到哪个地方去
        path: path.resolve(__dirname, './dist'),   // 返回一个相对于当前工程目录的绝对路径
        publicPath: '/dist/',
        filename: 'build.js'    // 输出的文件名称
    },
    module: {
        rules: [     // 模块解析规则，下面是一些文件及对应的loader
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {}
                }
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpg|gif)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]?[hash]'
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.less$/,
                use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader"
                }, {
                    loader: "less-loader", options: {
                        paths: [
                            path.resolve(__dirname, "node_modules")
                        ]
                    }
                }]
            },
            {
                test: /\.(svg|woff|ttf|eot|woff2)$/,
                loader: 'file-loader',
                options: {
                    name: 'fonts/[name].[ext]?[hash]'
                }
            }
        ]
    },
    resolve: {    // 影响模块的解析规则
        alias: {    // 用其它模块或路径替换一个模块
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    devServer: {    // 指当webpack config传给webpack-dev-server命令行时，这个选项用来配置webpack-dev-server的一些行为。
        historyApiFallback: true,
        noInfo: true
    },
    performance: {     // 关闭提示
        hints: false
    },
    devtool: '#eval-source-map'
}

if (process.env.NODE_ENV === 'production') {        // 当如下平台环境时，进行下列操作
    module.exports.devtool = '#source-map'
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            compress: {
                warnings: false
            }
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        })
    ])
}