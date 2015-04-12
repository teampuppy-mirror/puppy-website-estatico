module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		/*uglify: {
			build: {
				src: 'source/javascript/main.js',
				dest: 'assets/js/main.min.js'
			}
		},*/
		watch: {
			sass: {
				files: ['source/css/**/*.{scss,sass}'],
				tasks: ['sass:dist']
			}
		},
		sass: {
			dist: {
				files: {
					'public/css/skin.min.css': 'source/_css/config.scss'
				}
			}
		}
	});
	//grunt.registerTask('default', ['uglify','sass:dist', 'watch',]);
	grunt.registerTask('default', ['sass:dist', 'watch']);
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	
};