const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // eval for react redbox
    devtool: "eval",
    entry: [
        "babel-polyfill",
        "react-hot-loader/patch",
        path.resolve(__dirname, "./client/index.jsx"),
    ],
    plugins: [
        new HtmlWebpackPlugin({
            title: "Hot Module Replacement",
            inject: true,
            template: path.resolve(__dirname, "./index.html"),
            filename: "index.html",
        }),
        new webpack.HotModuleReplacementPlugin(),
    ],
    module: {
        rules: [{
            test: /\.jsx?$/,
            loader: "babel-loader",
            exclude: /node_modules/,
            query: {
                presets: ["es2015", "react", "stage-0"]
            }
        }]
    },
    resolve: {
        extensions: [".jsx", ".js"]
    },
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "build"),
        publicPath: '/',
    },
    devServer: {
        contentBase: path.resolve(__dirname, './client'),
        publicPath: '/',
        host: 'localhost',
        port: process.env.WEBPACK_PORT,
        historyApiFallback: true,
    },
};