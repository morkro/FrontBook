module.exports = function (grunt) {
	'use strict';
	
	/**
	 * Task: grunt js
	 * Compiles & lints ES6 and uglifies output.
	 */
	grunt.registerTask('js', [
		'browserify',
		'eslint',
		'uglify'
	]);
};