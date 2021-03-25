const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const NODE_ENV = process.env.NODE_ENV || "development";

module.exports = {
    entry: NODE_ENV === "development" ? "./src/index.js" : "./src/renderTemplate.js",
    output: {
        path: path.join(__dirname, "/build"),
        filename: "stories.js",
        publicPath:  "/",
    },
    devServer: {
        host: 'localhost',
        port: 8080
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            },
            {
                test: /\.(png|jpe?g|gif|ttf|svg)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            },
        ],
    },
    plugins: [
        new ExtractTextPlugin("stories.css"),
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        })
    ]
};


