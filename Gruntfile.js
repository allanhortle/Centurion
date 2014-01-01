module.exports = function(grunt) {
	// Load tasks
	require('load-grunt-tasks')(grunt);
 
	// Project configuration.
	grunt.initConfig({
		// Metadata.
		pkg: grunt.file.readJSON('package.json'),
		config:{

			// Change this to the theme folder relative to this Gruntfile 
			themeDest:'../../Library/Application Support/Sublime Text 2/Packages/Theme - Centurion',
			color:{
				hero:[116, 192, 143],
				test:[0, 255, 0]
			}
		},
		'string-replace': {
			dist: {
				files: {
					'Centurion.sublime-theme':'Centurion.json'
				},
				options: {
					replacements: [{
						pattern: /\{\{(.*?)\}\}/ig,
						replacement: function (match, p1, offset, string) {
							return JSON.stringify(grunt.config.get('config.color')[p1]);
						}
					}]
				}
			}
		},
		copy:{
			dist:{
				files:[
					{
						expand: true,
						src: ['Centurion.sublime-theme'], 
						dest: '<%= config.themeDest %>'
					}
				]
			}
		},
		watch: {
			scripts: {
				files: ['**/*.json'],
				tasks: ['string-replace', 'copy'],
				options: {
					spawn: false,
		    	},
			},
		},
	});
 
	// Default task.
	grunt.registerTask('default', [
		'string-replace',
		'copy'
	]);
};