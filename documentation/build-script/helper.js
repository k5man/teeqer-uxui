const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const fs = require('fs');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const conf = require('./config');

const root = path.resolve(__dirname, '../preview');
const buildDir = path.resolve(root, './build');

const copyFiles = [];

const BuildTypes = {
	dev: 1,
	build: 2,
	analyze: 3,
	profile: 4,
};


class ConditionStrategy {

	constructor(currentType) {
		if (BuildTypes[currentType] === undefined) {
			throw new Error(`Unknown build type: ${currentType}`);
		}
		this.currentType = currentType;
	}

	getType() {
		return this.currentType;
	}

	equal(type) {
		return this.currentType === type;
	}

	apply(type) {
		return BuildTypes[type] <= BuildTypes[this.currentType];
	}

}

function addChunks(plugins, webpackConfig, condition) {
	const mainEntry = [
		'babel-regenerator-runtime',
		path.resolve(root, 'index.jsx'),
	];
	webpackConfig.entry = {
		// vendor: ['babel-polyfill', 'react-dom', 'react'],
		main: mainEntry,
	};

	const chuncks = [
	];

	if (condition.apply('build')) {
		chuncks.forEach(chunk => {
			// webpackConfig.entry [
			// 	// 'babel-polyfill',
			// 	'babel-regenerator-runtime',
			// 	path.resolve(root, 'core', 'index.jsx'),
			// ];
			// plugins.push(new webpack.optimize.CommonsChunkPlugin({
			// 	name: 'vendor',
			// 	filename: '[name].[hash].js',
			// }));
		});
	}
}

function addHtmlgeneration(plugins, config, condition) {
	plugins.push(new HtmlWebpackPlugin({
		template: 'index.ejs',
		inject: 'body',
		title: 'Preview',
	}));
}

function prepareWebpackConfig(webpackConfig, params) {
	const type = params.cmd;
	// Global params
	const definePlugin = {
		LOG_LEVEL: 0,
		DEV: true,
	};
	const plugins = webpackConfig.plugins;

	// condition
	const condition = new ConditionStrategy(type);

	webpackConfig.output.path = buildDir;
	webpackConfig.context = root;


	// Server url option
	if (conf.get('serverUrl')) {
		definePlugin.SERVER_URL = `'${conf.get('serverUrl')}'`;
	} else {
		definePlugin.SERVER_URL = false;
	}

	if (condition.apply('build')) {
		definePlugin['process.env'] = {
			NODE_ENV: JSON.stringify('production'),
		};
	}
	definePlugin['isProduction'] = params.dest === 'production';

	// plugins.push(new ExtractTextPlugin({
	// 	filename: '[name].[contenthash].css',
	// 	disable: false,
	// 	allChunks: true,
	// }));

	plugins.push(new webpack.ProvidePlugin({
		React: 'react',
		ReactDom: 'react-dom',
		PropTypes: 'prop-types',
		$: 'jquery',
		jQuery: 'jquery',
		'window.$': 'jquery',
		'window.jQuery': 'jquery',
	}));

	plugins.push(new StyleLintPlugin({
		configFile: path.resolve(root, '.stylelintrc'),
		files: [
			'./core/**/*.scss',
			'./core/**/*.css',
		],
		syntax: 'less',
		failOnError: false,
	}));

	plugins.push(new CopyWebpackPlugin(copyFiles));

	addHtmlgeneration(plugins, webpackConfig, condition);

	addChunks(plugins, webpackConfig, condition);

	// devtool
	if (condition.apply('build')) {
		webpackConfig.devtool = 'source-map';
	} else if (condition.equal('dev')) {
		webpackConfig.devtool = 'eval';
	}

	if (condition.apply('build')) {
		plugins.push(new UglifyJSPlugin({
			minimize: true,
			compress: true,
			warnings: false,
			sourceMap: true,
		}));
	}

	if (condition.apply('build')) {
		plugins.unshift(new CleanWebpackPlugin(buildDir, {
			root,
			verbose: true,
		}));
	}

	if (condition.equal('dev')) {
		webpackConfig.devServer = {
			host: conf.get('dev.host'),
			port: conf.get('dev.port'),
			historyApiFallback: true,
			hot: true,
			inline: true,
			contentBase: false,
			stats: {
				colors: true,
			},
			proxy: {
				// '/*': {
				// 	target: conf.get('dev.restUrl'),
				// 	secure: false,
				// 	changeOrigin: true,
				// },
			},
		};
		plugins.push(new webpack.HotModuleReplacementPlugin());
	}
	plugins.push(new webpack.DefinePlugin(definePlugin));

	webpackConfig.plugins = plugins;
}

module.exports.prepareWebpackConfig = prepareWebpackConfig;

