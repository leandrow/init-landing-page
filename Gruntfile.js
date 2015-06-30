module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		// Config plugins
		uglify: {
			'src/js/main.js': 'build/js/**/*.js'
		},
		less: {
			development: {
				options: {compress: true},
				files: {"src/css/main.css": "build/css/**/*.less"}
			}
		},
		watch: { 
			files: ['build/js/main.js', 'build/css/main.less'],
			tasks: ['uglify', 'less'],
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
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-connect');
	
	grunt.registerTask('default', ['connect','watch']);
	grunt.registerTask('all', ['uglify','less']);
};