module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		uglify: {'public/js/main.js': 'develop/js/*.js'},
		less: {
			development: {
				options: {compress: true},
				files: {"public/css/main.css": "develop/css/*.less"}
			}
		},
		watch: { 
			files: ['develop/js/main.js', 'develop/css/main.less'],
			tasks: ['uglify', 'less'],
			options: {spawn: false}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');
	
	grunt.registerTask('default', ['watch']);
};