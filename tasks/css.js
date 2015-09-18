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
};