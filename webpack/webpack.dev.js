const {merge} = require('webpack-merge')
const base = require('../webpack.config')
const path = require('path')

module.exports = merge(base, {
    devtool: 'eval',
    mode: 'development',
    devServer: {
        port: 8081,
        historyApiFallback: true,
        compress: true,
        static: {
            directory: path.resolve(__dirname, 'public')
        },
        open: true
    },
})