const fs = require('fs');
const webpack = require("webpack");
const WebpackDevServer = require("webpack-dev-server");
const commandLineArgs = require('command-line-args');
const prepareWebpackConfig = require('./helper').prepareWebpackConfig;
const size_tree = require('webpack-bundle-size-analyzer/build/src/size_tree.js');


const optionDefinitions = [
	// --cmd  - command for perform
	{ name: 'cmd', type: String, multiple: false, defaultOption: true  },
	{ name: 'dest', type: String, multiple: false },
];

const options = commandLineArgs(optionDefinitions);
const config = require('./webpack.config');

switch (options.cmd) {
	case 'analyze':
		prepareWebpackConfig(config, options);
		webpack(config).run((err, stats) => {
			if (err) {
				console.error(err);
			} else {
				printStats(stats.toJson(), {
					shareStats: true,
					outputAsJson: false,
				});
			}
		});
		break;
	case 'build':
		prepareWebpackConfig(config, options);
		console.dir(config);
		webpack(config).run((err, stats) => {
			if (err) {
				console.error(err);
			} else {
				console.log(stats.toString());
			}
		});
		break;
	case 'dev':
		prepareWebpackConfig(config, options);
		const compiler = webpack(config);
		const server = new WebpackDevServer(compiler, config.devServer);
		server.listen(config.devServer.port, config.devServer.host, () => {
			console.log(`Starting server on http://${config.devServer.host}:${config.devServer.port}`);
		});
		break;
	default:
		throw new Error(`Incorrect build type ${options.cmd}`);
		return;
}

function printStats(stats, opts) {
	const depTrees = size_tree.dependencySizeTree(stats);
	if (opts.outputAsJson) {
		console.log(JSON.stringify(depTrees, undefined, 2));
	}
	else {
		depTrees.forEach(function (tree) { return size_tree.printDependencySizeTree(tree, opts.shareStats); });
	}
}
