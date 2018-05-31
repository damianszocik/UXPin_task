const ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require('path');

module.exports = {
    entry: ["./src/index.js", "./src/style.sass"],
    output: {
        path: `${__dirname}/dist`,
        filename: 'bundle.js'
    },
    watch: true,
    mode: "development",
    devtool: "source-map",
    module: {
        rules: [
            {   //babel, used to translate from ES6
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [["env", {
                            targets: {
                                browsers: ['> 1%']
                            }
                        }]]
                    }
                }
            },
            {   //autoprefixing css, and extracting it to bundle.css
                test: /\.sass$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        {
                            loader: "css-loader",
                            options: {
                                sourceMap: true
                            }
                        },
                        {
                            loader: "postcss-loader",
                            options: {
                                plugins: function () {
                                    return [
                                        require("autoprefixer")
                                    ];
                                }
                            }
                        },
                        {
                            loader: "sass-loader",
                            options: {
                                sourceMap: true
                            }
                        }
                    ]
                })
            },
            {   //url-loader, used to load fonts in css
                test: /\.(png|woff|woff2|eot|ttf|svg)$/, 
                loader: 'url-loader?limit=100000' 
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: "bundle.css"
        }),
    ]
}