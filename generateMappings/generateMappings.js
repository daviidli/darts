/* eslint-disable no-restricted-syntax */
const SerialPort = require('serialport');
const Delimiter = require('@serialport/parser-readline');
const fs = require('fs');

const getPort = async () => {
	const list = await SerialPort.list();
	return list[0].path;
};

const getResults = (p, n) => {
	return new Promise(resolve => {
		const results = [];

		const receiveData = data => {
			results.push(data);

			if (results.length === n) {
				resolve(results);
				p.off('data', receiveData);
			}
		};

		p.on('data', receiveData);
	});
};

const getMapping = async parser => {
	const mapping = [[], [], [], [], [], [], [], [], [], []];
	const suffixes = ['', '-t', '', '-d'];
	for (let i = 1; i <= 20; i++) {
		for (const suffix of suffixes) {
			console.log(`press ${i}${suffix}`);
			const val = await getResults(parser, 1);
			const [x, y] = val[0].split(',');
			mapping[x][y] = `${i}${suffix}`;
		}
	}

	console.log('press outer bullseye');
	let val = await getResults(parser, 1);
	let [x, y] = val[0].split(',');
	mapping[x][y] = 'b';

	console.log('press bullseye');
	val = await getResults(parser, 1);
	[x, y] = val[0].split(',');
	mapping[x][y] = 'b-d';

	return mapping;
};

const generateMappings = async () => {
	const path = await getPort();
	console.log(path);

	const port = new SerialPort(path, {
		baudRate: 9600
	});

	const parser = port.pipe(new Delimiter({ delimiter: '\n' }));

	const mapping = await getMapping(parser);
	fs.writeFileSync('./mapping.json', JSON.stringify({ board: mapping }));
	process.exit();
};

generateMappings();
