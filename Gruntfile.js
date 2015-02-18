module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		uglify: {
			'public/js/main.js': 'develop/js/*.js',
			'public/js/components/uikit.min.js': 'develop/js/components/*.js'
		},
		less: {
			development: {
				options: {compress: true},
				files: {"public/css/main.css": "develop/css/*.less"}
			}
		},
		cssmin: {
			'public/css/components/uikit.min.css': 'develop/css/**/*.css'
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
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-connect');
	
	grunt.registerTask('default', ['connect','watch']);
	grunt.registerTask('css', ['cssmin']);
};