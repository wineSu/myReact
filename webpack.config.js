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
    resolve:{
        extensions:['.js','.jsx']
    },
    devServer: {
        inline: true,
        port: 8080
    },
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
                        ["import", {libraryName: "antd", style: "css"}]
                    ]
                  },
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
                loaders: [
                    'file-loader?limit=25000&name=images/[hash:8].[name].[ext]',
                    'image-webpack-loader?{pngquant:{quality: "65-90", speed: 4}, mozjpeg: {quality: 65}}'
                ]
            },
            {
                test: /\.json/,
                loader: 'json-loader'
            },
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
        }),
    ],
    devServer: {
        historyApiFallback: true,
          hot: true,
        inline: true,
        stats: { colors: true },
        proxy: {
            '/': {
              target: 'http://www.mockhttp.cn',
              pathRewrite: {'^/column' : '/column'},
              changeOrigin: true
            }
         }
    },
}