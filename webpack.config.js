const path = require('path');

module.exports = {
    entry: {
        bannerClick   : './src/bannerClick.js',
        formAbandonment: './src/formAbandonment.js',
        ecommerceTracking : './src/ecommerceTracking.js',
        buildGtmObject      : './src/buildGtmObject.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    mode: 'production',
    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['eslint-loader']
            }
        ]
    }
};