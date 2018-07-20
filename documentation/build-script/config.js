const convict = require('convict');
const fs = require('fs');
const path = require('path');

const conf = convict({
	dev: {
		host: {
			doc: 'Host for development server',
			format: String,
			default: '127.0.0.1',
		},
		port: {
			doc: 'Port for development server',
			format: 'port',
			default: 4015,
		}
	},
	serverUrl: {
		doc: 'Port for development server',
		format: () => true,
		default: false,
	},

});

const confFile = path.resolve(__dirname, '../config.json');
if (fs.existsSync(confFile)) {
	conf.loadFile(confFile);
}

conf.validate({allowed: 'strict'});

module.exports = conf;
