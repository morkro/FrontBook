var gulp = require('gulp');
var babelify = require('babelify');
var browserify = require('browserify');
var eslint = require('gulp-eslint');
var tap = require('eslint-tap');
var uglify = require('gulp-uglify');
var buffer = require('gulp-buffer');
var source = require('vinyl-source-stream');
var glob = require('globby');
var DIST = 'public';

/**
 * Task: gulp lint
 * Lints ES6.
 */
gulp.task('lint', function () {
	return gulp.src('src/scripts/es6/**/*.js')
		.pipe( eslint() )
		.pipe( eslint.format(tap) )
		.pipe( eslint.failOnError() );
});

/**
 * Task: gulp js
 * Turns ES6 into ES5 using Browserify + Babel.
 */
gulp.task('js', ['lint'], function () {
	var files = glob.sync(['src/scripts/es6/**/*.js']);
	return browserify(files, {
			debug: true,
			transform: [babelify],
			exclude: '',
		})
		.bundle()
		.pipe( source('app.min.js') )
		.pipe( buffer() )
		.pipe( gulp.dest('src/scripts/es5/') )
		.pipe( uglify({ screwIE8: true, preserveComments: 'all' }) )
		.pipe( gulp.dest(DIST) );
});