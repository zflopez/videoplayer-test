var webpack = require('webpack');
var path = require('path');
var UglifyJSPlugin = require('uglifyjs-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {

	context: path.resolve(__dirname, 'src'),
	entry: './main.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	module: {
		rules: [{
			test: /\.scss$/,
			use: [
				'style-loader',
				'css-loader',
				'sass-loader'
			]
		},
		{
			test: /\.css$/,
			use: [
				'style-loader',
				'css-loader'
			]
		},
		{
			test: /\.(png|jpg)$/,
			use: [{
				loader: 'url-loader',
				options: { limit: 10000 } // Convert images < 10k to base64 strings
			}]
		},
		{
			test: /\.html$/,
			use: 'webpack-compile-templates'
		}]
	},
	plugins: [
		new UglifyJSPlugin({
			compress: {
				warnings: false,
			},
			output: {
				comments: false,
			}
		}),
		new webpack.ProvidePlugin({
			$: 'jquery',
			_: 'underscore',
			Backbone: 'backbone',
			dash: 'dashjs'
		})
	]
}