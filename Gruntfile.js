
/*
|--------------------------------------------------------------------------
| Centurion Grunt File
|--------------------------------------------------------------------------
|
| If you would like to edit the color of your Centurion file just change
| the color of 'config.hero'. There are some predefined colors here
| already but feel free to just throw your own one in.
|
*/

module.exports = function(grunt) {
	// Load tasks
	require('load-grunt-tasks')(grunt);

	var config = {

		green:[96,172,123],
		blue:[108,166,206],		
		red:[197,91,78],
		yellow:[225,174,105],
		orange:[225,134,90],
		grey:[120,120,120],

		folderName:'Theme - Centurion'

	}

	config.hero = config.green;

	// Grunt Config
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
					'Centurion.sublime-theme':['Centurion.json'],
					'Centurion/Widget - Centurion.sublime-settings':['settings.json']
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
		comments: {
		    your_target: {
		          options: {
		              singleline: true,
		              multiline: true
		          },
		          src: [ 'Centurion.sublime-theme']
		        }
		},
		jsonlint: {
			validate: {
				src: [ 'Centurion.sublime-theme' ]
			}
		}
	});

	grunt.registerTask('default', [
		'concat',
		'string-replace',
		'comments',
		'jsonlint'
	]);
};

