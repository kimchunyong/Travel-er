const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const port = process.env.PORT || 8080;

module.exports = {
    //개발모드 production이면 배포
    mode:'development',
    entry:'./src/index.js',
    devtool: 'inline-source-map',
    devServer: {
        host: 'localhost',
        port: port,
        open: true,
        historyApiFallback: true
    },
    output:{
        path: __dirname + 'dist',
        filename: 'bundle.[hash].js'
    },
    module:{
        rules:[
            { // 첫번째 룰
                test:\.(js)$/,
                exclude:/node_modules/,
                use:['babel-loader']
            },
            { // 두번째 룰
                test: /\.css$/,
                use: [
                  {
                    loader: 'style-loader'
                  },
                  {
                    loader: 'css-loader',
                    options: {
                      modules: true,
                      camelCase: true,
                      sourceMap: true
                    }
                  }
                ]
              }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: 'public/index.html',
          favicon: 'public/favicon.ico'
        })
    ],
}