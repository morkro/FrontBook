module.exports = function (grunt) {
	'use strict';

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
	 * Task: grunt dev
	 * Only for development purposes.
	 */
	grunt.registerTask('dev', [
		'connect',
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