var gulp = require('gulp');
var fileinclude = require('gulp-file-include');
var data = require('gulp-data');
var swig = require('gulp-swig');
var DIST = 'public';

/**
 * Task: gulp views
 * Creates all markup templates.
 */
gulp.task('views', function () {
	return gulp.src('src/views/**/*.html')
		.pipe( fileinclude({
			prefix: '@@',
			basepath: 'src/includes/'
		}))
		.pipe( data(function() {
			return require('../src/i18n/en.json');
		}))
		.pipe( swig({ defaults: { cache: false } }) )
		.pipe( gulp.dest(DIST) );
});