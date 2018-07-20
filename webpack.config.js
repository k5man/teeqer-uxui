const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const LessPluginLists = require('less-plugin-lists');

const root = __dirname;
const buildDir = path.resolve(root, './dist');

const extractLess = new ExtractTextPlugin({
	filename: '[name].css',
	disable: false,
	allChunks: true,
});

const config = {
	entry: './assets/css/materialize.less',
	context: root,
	output: {
		filename: '[name].css',
		path: buildDir,
	},
	resolve: {
		extensions: ['.css', '.less'],
		enforceExtension: true,
		enforceModuleExtension: true,
	},
	target: 'web',
	module: {
		rules: [
			{
				test: /\.less$/,
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
				test: /\.woff|\.woff2|\.eot|\.ttf$/,
				use: 'url-loader?prefix=font/&limit=5000',
			},
			{
				test: /\.(jpe?g|png|gif|svg)$/i,
				use: [
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
				test: /\.json$/,
				loader: 'json-loader'
			},
		],
	},
	plugins: [
		extractLess,
		new CleanWebpackPlugin(buildDir, {
			root,
			verbose: true,
		}),
	],
};

module.exports = config;
