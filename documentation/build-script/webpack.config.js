const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const LessPluginLists = require('less-plugin-lists');

const extractLess = new ExtractTextPlugin({
	filename: '[name].css',
	disable: false,
	allChunks: true,
});

const config = {
	output: {
		filename: '[name].[hash].js',
	},
	resolve: {
		extensions: ['.js', '.jsx', '.json', '.less', '.css'],
		alias: {
			// React: 'react',
			'react': 'inferno-compat',
			'react-dom': 'inferno-compat'
		},
	},
	target: 'web',
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: [/node_modules\/(?!teekback-uxui)/],
				use: [
					{
						loader: 'babel-loader',
						options: {
							presets: [
								'react',
								['es2015', { modules: false }],
								'es2016',
								'es2017',
								'stage-0',
							],
							plugins: [
								"transform-class-properties",
							]
						},
					},
					{
						loader: 'eslint-loader',
						options: {
							fix: false,
							configFile: '.eslintrc',
						},
					},
				],
			},
			{
				test: /\.less|\.css$/,
				use: extractLess.extract({
					use: [
						{
							loader: 'css-loader',
							options: {
								sourceMap: true,
								minimize: true,
							},
						},
						{
							loader: 'less-loader',
							options: {
								sourceMap: true,
								plugins: [
									new LessPluginLists(),
								],
							},
						},

					],
					fallback: "style-loader",
				}),
			},
			{
				test: /\.json$/,
				use: 'json-loader',
			},
			{
				test: /\.ejs$/,
				use: 'ejs-loader',
			},
			{
				test: /\.(jpe?g|png|gif|svg)$/i,
				loaders: [
					{
						loader: 'file-loader',
						options: {
							hash: 'sha512',
							digest: 'hex',
							name: '[hash].[ext]',
						},
					},
					{
						loader: 'image-webpack-loader',
						options: {
							webp: { enabled: false },
							bypassOnDebug: true,
							mozjpeg: {
								quality: 65,
							},
							pngquant:{
								quality: "65-90",
								speed: 4
							},
							svgo:{
								plugins: [
									{
										removeViewBox: false
									},
									{
										removeEmptyAttrs: false
									}
								]
							},
							gifsicle: {
								interlaced: false,
								optimizationLevel: 3,
							},
							optipng: {
								optimizationLevel: 7,
							},
						},
					},
				]
			},
			{
				test: /\.woff|\.woff2|\.eot|\.ttf$/,
				use: 'url-loader?prefix=font/&limit=5000',
			},
		],
	},
	plugins: [
		extractLess,
	],
};

module.exports = config;
