const path = require('path');

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: 'bulid.js',
        path: path.resolve(__dirname, './bulid')
    },
    module: {
        // 支持多个loader规则
        rules: [
            // 配置cssloader规则
            {
                // tset用正则匹配文件
                test: /\.css$/,
                // loader插件
                // 配置文件需要注意执行顺序，执行顺序是自下而上，从右往左
                use: [
                    // 方法一
                    // {loader: "css-loader"}
                    // 方法二（推荐）
                    "style-loader",
                    "css-loader",
                    { 
                        loader: "postcss-loader",
                        // 使用该loader方法一：
                        // options: {
                        //     postcssOptions: {
                        //         plugins: [
                        //             // 该插件用于自动添加前缀
                        //             // 'autoprefixer',
                        //             // 处理前缀以及伪类css这些适配,主要使用这个
                        //             'postcss-preset-env'
                        //         ]
                        //     }
                        // }
                        // 方法二使用配置文件（更推荐使用该方法）
                    }
                ]
                // 方法三
                // loader: "css-loader"
            },
            {
                test: /\.less$/,
                use: [

                    // 写入页内样式
                    "style-loader",
                    // 
                    "css-loader",
                    // 将less文件转为css文件
                    "less-loader",
                ]
            },
            {
                test: /\.(png|jpe?g|svg)$/,
                use: [
                    // 该file-loader和url-loader在webpack5中已经由其他loader替代
                    // 该file-loader将文件名称使用hash4更改保存
                    // file-loader与url-loader区别在于一个url-loader转base64，file-loader更改名称保存到打包目录下
                    {
                        // loader: 'file-loader',
                        // options: {
                        //     // 更改保存文件名称设置,可以更改保存路径
                        //     name: 'img/[name].[hash:6].png'
                        // }
                        // url-loader将文件转为base64
                        loader: 'url-loader',
                        options: {
                            // 更改保存文件名称设置,可以更改保存路径
                            name: 'img/[name].[hash:6].png'
                        }
                    }
                    
                ]
            }
        ]
    }
}