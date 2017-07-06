var path = require('path');

module.exports = {
    entry: "./src/components/main.js",

    output: {
        path: path.join(__dirname, "build"),
        filename: "bundle.js"
    },

    module: {
        loaders: [
            //less loader
            {
                test: /\.css$/, loader: 'style!css'
            },
            {
                test: /\.less$/, loader: 'style!css!less'
            },
            { 
                test: /\.js$/, 
                exclude: /node_modules/, 
                loader: "babel-loader", 
                query:
                  {
                    presets:['es2015']
                  }
            }
        ]
    }
}