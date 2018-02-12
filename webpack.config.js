"use strict";

let ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: "./static/modules/Main.js",
    output: {
        path: __dirname + "/static/src/",
        filename: "tmp/main.js"
    },
    module: {
        rules: [
            {
                test: /\.pug$/,
                use: "pug-loader"
            },
            {
                test: /\.(png|jpg|gif)$/,
                loader: 'url-loader'
            },
            {
                test: /\.scss$/,
                use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader"
                }, {
                    loader: "sass-loader",
                    options: {
                        includePaths: ["absolute/path/a", "absolute/path/b"]
                    }
                }]
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: "./static/src/main.css"
        })
    ],
    node: {
        fs: 'empty'
    }
};
