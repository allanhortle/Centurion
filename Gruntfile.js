
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

		// Colors used in the theme
		green:[96,172,123],
		blue:[90, 138, 165],
		red:[190, 90, 78],

		// Extra colors from Galea
		yellow:[218, 174, 105],
		orange:[225, 134, 84],

		/*
		|--------------------------------------------------------------------------
		| Theme Folder Name
		|--------------------------------------------------------------------------
		|
		| If you clone centurion into a separate folder, just change this variable
		| to match. Sublime text requires a few hard-coded file paths. If this
		| doesn't match you won't get icons and your text boxes will go white.
		|
		*/

		folderName:'Theme - Centurion'

	}


	/*
	|--------------------------------------------------------------------------
	| SET THE THEME COLOR HERE!
	|--------------------------------------------------------------------------
	*/

	config.hero = config.green;



	/*
	|--------------------------------------------------------------------------
	| Don't worry about below here. Just the Grunt Stuff
	|--------------------------------------------------------------------------
	*/

	// Color Functions
	var colorChange = function(arr, value){
		var a = arr.slice();
		for (var i = a.length - 1; i >= 0; i--) {
			a[i] = a[i] + (value);
		};
		return a;
	}

	//Define Color variations
	config.heroDarker1 = colorChange(config.hero,-32);
	config.heroDarker2 = colorChange(config.hero,-64);
	config.heroLighter1 = colorChange(config.hero,32);

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
	});

	grunt.registerTask('default', [
		'concat',
		'string-replace'
	]);
};

