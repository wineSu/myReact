var path = require('path'),
    webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        main: "./index.js",
    },

    output: {
        path: path.join(__dirname, "build"),
        filename: "bundle.js",
    },

    devServer: {
        inline: true,
        port: 8080
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
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
            favicon:'./src/img/1.jpg',
            cache:false,
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.UglifyJsPlugin({
          output: {
            comments: false,
          },
          compress: {
            warnings: false
          }
        })
    ]
}
