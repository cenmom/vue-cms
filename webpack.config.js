const path = require('path')
const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    entry: path.join(__dirname, './src/main.js'), // 指定输入的js路径
    output: {
        path: path.join(__dirname, './dist'), // 指定输出的文件夹
        filename: 'bundle.js', // 输出的文件夹名称
    },
    mode: 'development',
    devServer: {
        hot: true,
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new htmlWebpackPlugin({
            template: path.join(__dirname, './src/index.html'),
            // 指定模板页面，将来会根据指定的页面路径，去生成内存中的页面
            filename: 'index.html' //指定生成的页面的名称
        }),
        new VueLoaderPlugin()
    ],
    module: {
        rules: [{
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            },
            {
                test: /\.vue$/,
                use: 'vue-loader' // 对于vue 的文件，只用vue-loader 加载器就可以了
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /.(png|gif|jpg|svg|ttf)$/,
                use: [
                    'file-loader'
                ]
            }

        ]
    }
    // resolve: {
    //     alias: {
    //         'vue$': "vue/dist/vue.js"
    //     }
    // }
    ,
    stats: {
        children: false
    }

}

// webpack-dev-server 自动构建工具，可以对main.js中的文件进行热处理，也就是及时修改，及时打包编译
// webpack-dev-server 安装命令 ： cnpm install webpack-dev-server -D 
// D表示项目中安装，不能直接在终端中运行；
//需要在package.json 中配置后，使用 npm run dev 来调用项目中安装的 webpack-dev-server