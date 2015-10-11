module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		// Config plugins
		uglify: {
			'src/js/main.js': 'build/js/**/*.js'
		},
		stylus: {
			development: {
				options: {compress: true},
				files: {"src/css/main.css": "build/css/**/*.styl"}
			}
		},
		watch: { 
			files: ['build/js/main.js', 'build/css/main.styl'],
			tasks: ['uglify', 'stylus'],
			options: {spawn: false}
		},
		connect: {
			server: {
				options: {
					hostname: 'localhost',
					port: 900,
					base: './src'
				}
			}
		}
	});
	// Loading plugins
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-stylus');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-connect');
	
	grunt.registerTask('default', ['connect','watch']);
	grunt.registerTask('all', ['uglify','stylus']);
};