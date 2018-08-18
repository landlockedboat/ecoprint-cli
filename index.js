'use strict';

const ecoprint = require('ecoprint');
const capitalize = require('capitalize');
const round = require('round-to');

function prodNameExists(prodName) {
	const {products} = ecoprint;
	if (!(prodName in products)) {
		throw new Error('Product "' + prodName + '" not in product list.');
	}
}

exports.list = () => {
	console.log('Available products:');
	const {products} = ecoprint;
	for (const prodName in products) {
		if (Object.prototype.hasOwnProperty.call(products, prodName)) {
			console.log('  ' + capitalize(prodName));
		}
	}
};

exports.compare = (oName, tName) => {
	prodNameExists(oName);
	prodNameExists(tName);

	const comparisonArray = ecoprint.compare(oName, tName);

	console.log('Ecological ecoprint of ' + oName + ' compared with ' +
		tName + ':');

	for (let i = 0; i < comparisonArray.length; ++i) {
		const comparison = comparisonArray[i];
		const {unit, comp} = comparison;

		console.log('  ' + capitalize(unit) +
			' cost relation: ');

		const {relation} = comp;
		if (relation < 1) {
			console.log('    1 kg of ' + oName + ' costs the same as ' +
				round(1 / relation, 2) + ' kg of ' + tName + '.');
		} else {
			console.log('    ' + relation + 'kg of ' + oName +
				' costs the same as 1kg of ' + tName + '.');
		}
	}
};

exports.describe = prodName => {
	prodNameExists(prodName);

	console.log('Ecological ecoprint of 1kg of ' + prodName + ':');
	const product = ecoprint.products[prodName];

	for (const magnitudeName in product) {
		if (!Object.prototype.hasOwnProperty.call(product, magnitudeName)) {
			continue;
		}

		const cost = product[magnitudeName];
		console.log('  ' + capitalize(magnitudeName) + ' cost ' +
			'(in ' + ecoprint.units[magnitudeName] + '): ' + cost);
	}
};

