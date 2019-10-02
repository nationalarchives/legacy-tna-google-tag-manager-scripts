const path = require('path');

module.exports = {
	entry: {
		bannerClick: './src/bannerClick.js',
		formAbandonment: './src/formAbandonment.js',
		ecommerceTracking: './src/ecommerceTracking.js',
		discoveryServerSide: './src/discoveryServerSide.js',
		homePage: './src/homePage.js',
		imageViewer: './src/imageViewer.js',
		filterTracking: './src/filterTracking.js',
		bookmarkClick: './src/bookmarkLinkCapture.js',
		bookmarkSorting: './src/bookmarkSorting.js',
		wtegTracking: './src/wtegTracking.js',
		searchUITracking: './src/searchUITracking.js',
		detectUserType: './src/detectUserType.js'
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
					fix: true
				}
			}
		]
	}
};
