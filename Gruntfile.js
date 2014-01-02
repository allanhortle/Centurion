module.exports = function(grunt) {
	// Load tasks
	require('load-grunt-tasks')(grunt);

	var config = {

		// Colors
		green:[96,172,123],
		blue:[90, 138, 165],
		yellow:[218, 174, 105],
		orange:[225, 134, 84],
		red:[190, 90, 78],

		// Paths
		folderName:'centurion_dev'

	}


	// Color Functions
	var colorChange = function(arr, value){
		var a = arr.slice();
		for (var i = a.length - 1; i >= 0; i--) {
			a[i] = a[i] + (value);
		};
		return a;
	}

	// Set theme Color here
	config.hero = config.blue;

	//Define Color variations
	config.heroDarker1 = colorChange(config.hero,-32);
	config.heroDarker2 = colorChange(config.hero,-64);
	config.heroLighter1 = colorChange(config.hero,32);

	// Project configuration.
	grunt.initConfig({
		concat: {
			options: {
				banner:'[',
				footer:',{}]',
				separator:','
			},
			dist: {
				src: ['src/*'],
				dest: 'Centurion.json',
			},
		},
		'string-replace': {
			dist: {
				files: {
					'Centurion.sublime-theme':['Centurion.json']
				},
				options: {
					replacements: [{
						pattern: /\{\{(.*?)\}\}/ig,
						replacement: function (match, p1, offset, string) {
							var replace = config[p1]
							if(typeof replace === 'object'){
								return JSON.stringify(replace);
							}
							return replace;
						}
					}]
				}
			}
		},
		watch: {
			scripts: {
				files: ['**/*.json'],
				tasks: ['concat','string-replace'],
				options: {
					spawn: false,
		    	},
			},
		},
	});

	// Default task.
	grunt.registerTask('default', [
		'concat',
		'string-replace'
	]);
};

