module.exports = function (grunt) {
	'use strict';

	/**
	 * Task: grunt css
	 * Combines all CSS related tasks.
	 */
	grunt.registerTask('css', [
		'sass',
		'autoprefixer',
		'cssmin'
	]);

	/**
	 * Task: grunt js
	 * Compiles & lints ES6 and uglifies output.
	 */
	grunt.registerTask('js', [
		'browserify',
		'eslint',
		'uglify'
	]);

	/**
	 * Task: grunt build
	 * Builds the environment.
	 */
	grunt.registerTask('build', [
		'clean',
		'bake',
		'copy',
		'css',
		'js',
		'notify:build'
	]);

	/**
	 * Task: grunt server
	 * Starts the web server.
	 */
	grunt.registerTask('server', function () { 
		require('../server.js'); 
	});

	/**
	 * Task: grunt dev
	 * Only for development purposes.
	 */
	grunt.registerTask('dev', [
		'server',
		'clean',
		'bake',
		'copy',
		'css',
		'browserify',
		'eslint',
		'uglify:dev',
		'notify:build',
		'watch'
	]);

	/**
	 * Task: grunt prod
	 * Only for production purposes.
	 */
	grunt.registerTask('prod', [
		'clean',
		'bake',
		'copy',
		'css',
		'browserify',
		'eslint',
		'uglify:prod'
	]);
};