const fs = require('node:fs');
const path = require('node:path');
const process = require('node:process');

const text = path.resolve(__dirname, 'text.txt');
const stream = fs.createWriteStream(text);
console.log('Please, enter your message here.');

process.stdin.on('data', (code) => {
	if(`${code}`.trim() === 'exit') {
		console.log('Note: you are leaving...');
		process.exit();
	}
	console.log('Please, enter your message here.');
	stream.write(code);
})
process.on('SIGINT', () => {
	console.log('Note: you are leaving...');
	process.exit();
})