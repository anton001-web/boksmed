const TerserWebpack = require('terser-webpack-plugin')
const {merge} = require('webpack-merge')
const base = require('../webpack.config')
const path = require('path')

module.exports = merge(base , {
    mode: 'production',
    optimization: {
        splitChunks: {
            chunks: 'all'
        },
        minimize: true,
        minimizer: [
            new TerserWebpack({
                minify: TerserWebpack.uglifyJsMinify,
                parallel: true,
                terserOptions: {
                    toplevel: true,
                    mangle: false,
                    keep_fnames: true
                }
            }),
        ],
    },
})