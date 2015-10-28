    var webpack = require('webpack');
var path = require('path');

var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var config = {
    entry: {
        frontpage: './static/js/index.js'
    },
    output: {
        path: 'assets',
        filename: '[name].js'
    },
    module: {
        loaders: [
            //js文件  //es6 -》es5
            {test: /\.js$/, loader: 'babel-loader'},
            //css
           {test: /\.css$/, loader: 'style-loader!css-loader'},
            //分离css
            {
                test: /\.scss$/, 
                 loader: "style-loader!css-loader!sass-loader?includePaths[]=" + path.resolve(__dirname, "./node_modules/compass-mixins/lib")
                // loader: ExtractTextPlugin.extract(
                //     "style-loader",
                //     "css-loader!sass-loader?includePaths[]=" + path.resolve(__dirname, "./node_modules/compass-mixins/lib")
                // )
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.json', '.scss'],
        alias: {
            "tools": path.resolve(__dirname, "./static/module/tools.js"),
            "velocity": path.resolve(__dirname, "./static/module/customVelocityUI.js")
        }
    },
    externals: {
        "jquery": "jQuery",
        "underscore": "_",
        'when': 'when'
    },
    plugins: [
        new CommonsChunkPlugin("commons.js")/*,
        new ExtractTextPlugin('styles/[name].css')*/
    ]
}
module.exports = config;
