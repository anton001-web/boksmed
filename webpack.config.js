const htmlWebpack = require('html-webpack-plugin')
const copyWebpack = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')

const isDev = process.env.NODE_ENV === 'development'

const filename = (ext) => isDev ? `[name].${ext}` : `[name].[contenthash].${ext}`

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: {
        main: './index.js'
    },
    output: {
        clean: true,
        publicPath: "/",
        filename: `./js/${filename('js')}`,
        assetModuleFilename: "assets/images/[hash][ext]"
    },
    cache: {
        type: "filesystem"
    },
    plugins: [
        new htmlWebpack({
            template: path.resolve(__dirname, 'public/index.html')
        }),
        new copyWebpack({
            patterns: [
                {
                    from: path.resolve(__dirname, 'public/images'),
                    to: path.resolve(__dirname, 'dist/assets/images')
                }
            ]
        }),
        new MiniCssExtractPlugin({
            filename: `styles/${filename('css')}`
        })
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                },
            },
            {
                test: /\.s(a|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                    },
                    {
                        loader: 'postcss-loader',
                    },
                    'sass-loader',
                ]
            },
            {
                test: /\.(woff|woff2|ttf)$/,
                type: "asset/resource",
                generator: {
                    filename: 'assets/fonts/[hash][ext]'
                }
            },
            {
                test: /\.(png|svg|jpg|jpeg)$/,
                type: "asset/resource",
                generator: {
                    filename: 'assets/images/[hash][ext]'
                }
            }
        ]
    }
}