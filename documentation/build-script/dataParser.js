const babel = require('babel-core');

function astNodeToObject(item) {
	switch (item.value.type) {
		case 'ObjectExpression':
			return item.value.properties.reduce((obj, el) => {
				obj[el.key.name] = astNodeToObject(el);
				return obj;
			}, {});
		case 'ArrayExpression':
			return item.value.elements.map(astNodeToObject);
			break;
		default:
			return item.value.value;
	}
}

function parseData(file) {
	const data = {};

	const ast = babel.transformFileSync(file, {}).ast;

	let dataAst = ast.program.body.reduce((result, item) => {
		if (item.declarations && item.declarations[0] && item.declarations[0].id && item.declarations[0].id.name ) {
			if (item.declarations[0].id.name === 'data') {
				return item.declarations[0].init;
			}
		}
		return result;
	}, null);


	dataAst.properties.forEach(item => {
		switch (item.key.name) {
			case 'title':
				data.title = astNodeToObject(item);
				break;
			case 'googleAnalytics':
				data.googleAnalytics = astNodeToObject(item);
				break;
		}
	});

	return data;
}

module.exports = {
	parse: parseData,
};
