const path = require('path');

// 用于移除打包文件
const { CleanWebpackPlugin } =  require('clean-webpack-plugin');
// 生成html文件
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "js/bulid.js",
        path: path.resolve(__dirname, './bulid'),
        // 静态资源输出的统一路径,这样会导致所有使用静态资源的打包路径都在一起，可以使用内置的就不会
        // assetModuleFilename: 'images/[name].[hash:6][ext]'
    },
    module: {
        rules: [
            {
                test: /\.(css|less)$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "less-loader",
                    "postcss-loader"
                ]
            },
            // {
            //     test: /\.less$/,
            //     use: [
            //         "style-loader",
            //         "css-loader",
            //         "less-loader"
            //     ]
            // },
            // {
            //     test: /\.(png|jpeg|svg)$/,
            //     // use: [
            //     //     'file-loader'
            //     // ]
            //     type: 'asset/resource',
            //     generator: {
            //         filename:'images/[name].[hash:6][ext]'
            //     }
            //     // type: 'asset/inline'
            // },
            // 根据文件大小打包
            {
                test: /\.(png|jpeg|svg)$/,
                type: 'asset',
                generator: {
                    filename:'images/[name].[hash:6][ext]',
                },
                parser: {
                    dataUrlCondition: {
                        maxSize: 1024  //1kb
                    }
                }
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            // html标题
            // title: 'web-app',
            template: './index.html'
        })
    ]
}