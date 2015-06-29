module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		// Config plugins
		uglify: {
			'public/js/main.js': 'develop/js/**/*.js'
		},
		less: {
			development: {
				options: {compress: true},
				files: {"public/css/main.css": "develop/css/**/*.less"}
			}
		},
		watch: { 
			files: ['develop/js/main.js', 'develop/css/main.less'],
			tasks: ['uglify', 'less'],
			options: {spawn: false}
		},
		connect: {
			server: {
				options: {
					hostname: 'localhost',
					port: 900,
					base: './public'
				}
			}
		}
	});
	// Loading plugins
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-connect');
	
	grunt.registerTask('default', ['connect','watch']);
	grunt.registerTask('all', ['uglify','less']);
};