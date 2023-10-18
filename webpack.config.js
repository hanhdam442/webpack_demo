const path = require('path');

const devMode = false;

module.exports = {
	mode: devMode ? 'development' : 'production',
	entry: [
		'./src/js/app.js', // file nguồn Webpack làm việc
	],

	output: {
		filename: 'app.min.js',
		path: path.resolve(__dirname, 'dist'),
		library: 'mylib',
		libraryTarget: 'var',
	},

	optimization: {
		// We no not want to minimize our code.
		minimize: true
	},
};