const path = require('path')

module.exports = {
    entry: "./src/main.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                // css-loader 只负责将css文件进行加载，所以不会生效
                // style-loader 负责将样式添加到DOM
                // 使用多个loader时是从右向左，所以顺序与应用顺序相反
                use: ['style-loader', 'css-loader']
            }
        ]
    }
}