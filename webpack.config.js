const path = require('path');

module.exports = {
    entry:
        {
            bannerClick: ['@babel/polyfill', './src/bannerClick.js'],
            formAbandonment: './src/formAbandonment.js',
            ecommerceTracking: ['@babel/polyfill', './src/ecommerceTracking.js'],
            discoveryServerSide: './src/discoveryServerSide.js',
            homePage: './src/homePage.js',
            imageViewer: './src/imageViewer.js',
            filterTracking: ['@babel/polyfill', './src/filterTracking.js'],
            bookmarkClick: './src/bookmarkLinkCapture.js'
        },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'eslint-loader',
                options: {
                    fix: true,
                }
            }
        ]
    }
};