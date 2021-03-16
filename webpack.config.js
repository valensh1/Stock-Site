const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');


module.exports = env => {
	return {
		entry: {
			App: './src/index.js',
			main: './src/main.js'
		},
		output: {
			path: path.resolve(__dirname, 'public/js/dist'),
			filename: '[name].[chunkhash].js' // '[name].[chunkhash].js' put this if you want to get hashed files to cache bust
		},
		module: {
			rules: [
				{
					test: /\.js$/,
					exclude: /node_modules/,
					use: ['babel-loader', 'prettier-loader']
				},
				{
					test: /\.scss$/,
					use: [
						'style-loader',
						MiniCssExtractPlugin.loader,
						'css-loader',
						'sass-loader',
						'postcss-loader'
					]
				}
			]
		},
		plugins: [
			new CleanWebpackPlugin('public/js/dist', {}),
			new MiniCssExtractPlugin({
				filename: 'style.[contenthash].css' // 'style.[contenthash].css' put this if you want to get hashed files to cache bust
			}),
			new HtmlWebpackPlugin({
				inject: true,
				hash: true,
				template: './src/index.html',
				children: false,
				filename: '../../index.html'
			}),
			new WebpackMd5Hash()
		],
		optimization: {
			splitChunks: {
				chunks: 'all',
				minSize: 0
			},
			usedExports: true,
			sideEffects: true
		}
	};
};
