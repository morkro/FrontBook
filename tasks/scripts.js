const gulp = require('gulp');
const babelify = require('babelify');
const browserify = require('browserify');
const eslint = require('gulp-eslint');
const tap = require('eslint-tap');
const uglify = require('gulp-uglify');
const buffer = require('gulp-buffer');
const source = require('vinyl-source-stream');
const glob = require('globby');
const dist = 'public';

/**
 * Task: gulp lint
 * Lints ES6.
 */
gulp.task('lint', ['clean'], () => gulp.src('src/scripts/es6/**/*.js')
	.pipe( eslint() )
	.pipe( eslint.format(tap) )
	.pipe( eslint.failOnError() )
);

/**
 * Task: gulp js
 * Turns ES6 into ES5 using Browserify + Babel.
 */
gulp.task('js', ['lint'], () => {
	const files = glob.sync(['src/scripts/es6/**/*.js']);
	return browserify(files, {
		debug: true,
		transform: [[babelify, { presets: ['es2015'] }]],
		exclude: '',
	})
	.bundle()
	.pipe( source('app.min.js') )
	.pipe( buffer() )
	.pipe( gulp.dest('src/scripts/es5/') )
	.pipe( uglify({ screwIE8: true, preserveComments: 'all' }) )
	.pipe( gulp.dest(dist) );
});
