#!/usr/bin/env node
'use strict';
const meow = require('meow');
const index = require('.');

const cli = meow(`
	Examples
		$ ecoprint --list
		Available products:
			Bread
			Lamb
			...

		$ ecoprint lamb
		Ecological ecoprint of 1kg of lamb:
			Co2 cost (in kg): 39.2
			Water cost (in liters): 8763

		$ ecoprint lamb fruit
		Ecological ecoprint of lamb compared with fruit:
			Co2 cost relation: 
				1 kg of lamb costs the same as 35.64 kg of fruit.
			Water cost relation: 
				1 kg of lamb costs the same as 9.11 kg of fruit.

	Options
		--all  Get all available products to get the footprint of.
	`,
{
	flags: {
		list: {
			type: 'boolean',
			alias: 'l'
		}
	}
});

const {input, flags} = cli;

if (flags.list) {
	index.list();
	process.exit();
}

if (input.length === 0) {
	cli.showHelp();
}

if (input.length === 2) {
	const oName = input[0];
	const tName = input[1];
	index.compare(oName, tName);
	process.exit();
}

const prodName = input[0];

index.describe(prodName);

