const path = require('path')
const webpack = require('webpack')      //加载webpack模块 第二步
// 导入在内存中生成 HTML页面的插件
// 只要是插件，都一定要放到plugins节点中去
const htmlWebpackPlugin = require('html-webpack-plugin')
// 1.自动在内存中根据指定页面生成一个内存的页面
// 2.自动把打包好的bundle.js追加到页面中去
const VueLoaderPlugin = require('vue-loader/lib/plugin');

// 这个配置文件其实就是一个js文件，通过node中的模块操作，向外暴露了一个配置对象

module.exports = {
    // 在配置文件中手动设置出口和入口
    entry:path.join(__dirname,'./src/main.js'), //入口表示要使用webpack打包哪个文件
    output:{
        path:path.join(__dirname,'./dist'), // 指定打包好的文件输出到哪个目录中去
        filename:'bundle.js'    // 这是指定输出的文件名称
    },
    devServer:{     // 这是配置 命令参数的第二种形式，相对来说麻烦一些,
        open:true,  // 自动打开浏览器
        port:3000,  // 设置启动时候的运行端口
        contentBase:'src',  // 指定托管的根目录
        hot:true    // 启用热更新 第一步
    },
    plugins:[   // 配置插件的节点
        new webpack.HotModuleReplacementPlugin(),    // new 一个热更新的模块对象 第三步
        new htmlWebpackPlugin({     // 创建一个 在内存中生成HTML页面的插件
            template: path.join(__dirname,'src','index.html'),  // 这是指定的模板页面，将来会根据指定的页面路径去生成内存中的页面
            fliename:'index.html'    // 指定生成的页面名称
        }),
        new VueLoaderPlugin()
    ],
    module:{    // 这个节点用于配置所有第三方模块加载器
     rules:[    // 所有第三方模块的 匹配规则
         { test:/\.css$/, use:['style-loader','css-loader'] },  // 配置处理 .css文件的第三方loader规则
         { test:/\.less$/, use:['style-loader','css-loader','less-loader']},   // 配置处理 .less文件的第三方loader规则
         { test:/\.scss$/, use:['style-loader','css-loader','sass-loader']},    // 配置处理 .scss文件的第三方loader规则
         { test:/\.(jpg|png|gif|bmp|jpeg)$/, use:'url-loader?limit=100000' },     // 处理图片路径的loader
         { test:/\.(ttf|svg|eot|woff|woff2)$/, use:'url-loader' },            // 处理字体文件的loader
         { test:/\.js$/,use:'babel-loader',exclude:/node_module/ },           // 处理高级语法的loader
         { test:/\.vue$/, use:'vue-loader' }                                  // 处理.vue文件的loader
     ]
    },
    resolve: {
        alias:{     // 修改 Vue 被导入时候包的路径
            // 'vue$':'vue/dist/vue.js'
        }
    }
}
// 当我们在控制台直接输入webpack命令执行的时候，webpack做了以下几步
// 1.webpack发现我们没有通过命令的形式指定出入口
// 2.webpack就会去项目的根目录中查找webpack.config.js的配置文件
// 3.找到配置文件后，webpack解析执行，解析执行完配置文件后，就得到了配置文件中导出的配置对象
// 4.当webpack拿到配置对象后，就拿到了配置对象中的指定的入口和出口，然后进行打包构建
