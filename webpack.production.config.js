var path = require('path'),
    webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        main: "./index.js",
        //第三方依赖打包
        vendor: [
          'react', 
          'react-dom', 
          'react-redux', 
          'react-router', 
          'redux', 
          'es6-promise'
        ]
    },
    output: {  
        path: path.resolve(__dirname, "product"),  
        filename: "js/[name].[chunkhash].js",
    },
    resolve:{
        extensions:['.js','.jsx']
    },
    devtool: 'sourcemap',  
    module: {
        rules: [
            //less loader
            {
                test: /\.css$/, loaders: ['style-loader', 'css-loader', 'autoprefixer-loader']
            },
            {
                test: /\.less$/, loaders: ['style-loader', 'css-loader', 'autoprefixer-loader', 'less-loader']
            },
            { 
                test: /\.(js|jsx)$/, 
                exclude: /node_modules/, 
                loader: "babel-loader", 
                query:
                  {
                    presets:['es2015','react'],
                    plugins: [
                        ["import", {libraryName: "antd-mobile", style: "css"}]
                    ]
                  }
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
                loaders: [
                    'file-loader?limit=25000&name=images/[hash:8].[name].[ext]',
                    'image-webpack-loader?{pngquant:{quality: "65-90", speed: 4}, mozjpeg: {quality: 65}}'
                ]
            }
        ]
    },
    plugins: [  
        new HtmlWebpackPlugin({  
            template: './index.html',  
            cache:true,
        }),
        new webpack.HotModuleReplacementPlugin(),  
        new webpack.optimize.UglifyJsPlugin({  
          output: {  
            comments: false,  
          },  
          compress: {  
            warnings: false  
          }  
        }),
        new webpack.DefinePlugin({
          "process.env":{
            NODE_ENV:JSON.stringify('production')
           }
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name:'vendor', // 注意不要.js后缀  
            filename: "js/[name].[hash:8].js"
        }),  
    ]
}