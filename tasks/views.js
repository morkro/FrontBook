const gulp = require('gulp');
const fileinclude = require('gulp-file-include');
const data = require('gulp-data');
const swig = require('gulp-swig');
const dist = 'public';

/**
 * Task: gulp views
 * Creates all markup templates.
 */
gulp.task('views', ['clean'], () => gulp.src('src/views/**/*.html')
	.pipe( fileinclude({
		prefix: '@@',
		basepath: 'src/includes/'
	}) )
	.pipe( data(() => require('../src/i18n/en.json')) )
	.pipe( swig({ defaults: { cache: false } }) )
	.pipe( gulp.dest(dist) )
);
