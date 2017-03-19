const path = require('path');

const config = {
    node: {
        console: false,
        fs: 'empty',
        net: 'empty',
        tls: 'empty'
    },
    entry: './app/main.jsx',
    output: {
        path: path.resolve(__dirname, 'app'),
        filename: 'main.js'
    },
    devServer: {
        contentBase: path.join(__dirname, "app"),
        compress: true,
        port: 9000
    },
    module: {
        rules: [
            { test: /\.(js|jsx)$/, exclude: /node_modules/, use: 'babel-loader' },
        ]
    }
};

module.exports = config;