let basePaths = 'suncity';

let baseConfig = {
	isDev : true,
	sourceMap : true,
	sassStyle: 'compact',
	cssRename : true,
	paths: {
		html	: basePaths+'/src',
		css		: basePaths+'/src/scss',
		script	: basePaths+'/src/js',
		fonts   : basePaths+'/src/fonts',
		lib     : basePaths+'/src/lib',
		image	: basePaths+'/src/images'
	},
	pathsDev: {
		html	: basePaths+'/dist',
		css		: basePaths+'/dist/css',
		script	: basePaths+'/dist/js',
		fonts   : basePaths+'/dist/fonts',
		lib     : basePaths+'/dist/lib',
		image	: basePaths+'/dist/images'
	},
	pathsTest: {
		html	: basePaths+'/dist_test',
		css		: basePaths+'/dist_test/css',
		script	: basePaths+'/dist_test/js',
		fonts   : basePaths+'/dist_test/fonts',
		lib     : basePaths+'/dist_test/lib',
		image	: basePaths+'/dist_test/images'
	},
	pathsBuild: {
		html	: basePaths+'/build',
		css		: basePaths+'/build/css',
		script	: basePaths+'/build/js',
		fonts   : basePaths+'/build/fonts',
		lib     : basePaths+'/build/lib',
		image	: basePaths+'/build/images'
	},
	autoprefixerConfig: {
		browsers: [
			"last 1 version",
			"> 1%",
			"maintained node versions",
			"not dead"
		]
	},
	base64Config: {
		extensions: ['png'],
		maxImageSize: 8*1024
	},
	pxToViewport: false
}

let projectConfig = require('./'+basePaths+'/project.config');

for ( let k in projectConfig ) {
	if ( projectConfig[k] != undefined) {
		baseConfig[k] = projectConfig[k]
	}
}

module.exports = baseConfig;