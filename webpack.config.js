const path = require('path');

module.exports = {
    entry: {
        one: './src/one.js',
        two: './src/two.js',
        formAbandonment: './src/formAbandonment.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    mode: 'development',
    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
        ]
    },
    watch:true
};