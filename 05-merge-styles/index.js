const fs = require('node:fs');
const path = require('node:path');
fs.writeFile(path.join(__dirname, 'project-dist/bundle.css'), '', (err) => {
	if(err) console.error(err);
});
fs.readdir(path.join(__dirname, 'styles'), { withFileTypes: true }, (_, files) => {
	for (let file of files) {
		if (file.isFile() && path.extname(file.name) === '.css') {
			fs.readFile(path.join(__dirname, `styles/${file.name}`), (_err, data) => {
				fs.appendFile(path.join(__dirname, 'project-dist/bundle.css'), `${data}\n`, (e) => {
					if (e) console.log(e);
				});
			});
		}
	}
});