var path = require('path'),
    webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        main: "./index.js"
    },

    output: {
        path: path.join(__dirname, "product"),
        filename: "[name].[chunkhash].js",
    },
    resolve:{
        extensions:['', '.js','.jsx']
    },
    module: {
        loaders: [
            //less loader
            {
                test: /\.css$/, loaders: ['style-loader', 'css-loader', 'autoprefixer-loader']
            },
            {
                test: /\.less$/, loaders: ['style-loader', 'css-loader', 'autoprefixer-loader', 'less-loader']
            },
            { 
                test: /\.js$/, 
                exclude: /node_modules/, 
                loader: "babel-loader", 
                query:
                  {
                    presets:['es2015','react']
                  }
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
                loaders: [
                    'file-loader?limit=25000&name=images/[hash:8].[name].[ext]',
                    'image-webpack-loader?bypassOnDebug&optimizationLevel=7&interlaced=false'
                ]
            }
        ]
    },
    devtool: 'sourcemap',
    postcss: [
        require('autoprefixer') //调用autoprefixer插件，例如 display: flex
    ],
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
            favicon:'./src/img/1.jpg',
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
        new webpack.optimize.CommonsChunkPlugin({
            name:'common', // 注意不要.js后缀
            filename: "commons.js",
            chunks: 'main'
        }),
    ]
}
