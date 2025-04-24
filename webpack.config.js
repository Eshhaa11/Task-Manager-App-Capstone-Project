const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const { option } = require("yargs");

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },

    module: {
        rules: [
            {test: /\.txt$/, use: "raw-loader"}
            {test: /\.css/, use: [
                {loader: "style-loader"},
                {
                    loader: "css-loader",
                    options: {
                        modules: true
                    },
                },
            ]},
            {
                test: /\.(js\jsx)$/,
                use: "babel-loader"
            }
        ],
    },
    pluggings: [
        new HtmlWebpackPlugin({template: "./src/index.html"})
    ],
}