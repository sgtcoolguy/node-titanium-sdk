'use strict';

module.exports = function (grunt) {
	// Project configuration.
	grunt.initConfig({
		appcJs: {
			src: [ 'Gruntfile.js', 'lib/**/*.js', 'tests/**/*.js' ]
		}
	});

	// Load grunt plugins for modules
	grunt.loadNpmTasks('grunt-mocha-test');
	grunt.loadNpmTasks('grunt-appc-js');

	// register tasks
	grunt.registerTask('lint', [ 'appcJs' ]);
	grunt.registerTask('default', [ 'lint' ]);
};
