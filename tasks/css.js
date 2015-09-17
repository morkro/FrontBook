var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var minifycss = require('gulp-minify-css');
var rename = require('gulp-rename');
var DIST = 'public';

/**
 * Task: gulp css
 * Compile Sass to valid CSS, add prefix and minify.
 */
gulp.task('css', function () {
	return gulp.src('src/scss/main.scss')
		.pipe( sass({ style: 'compact' }) )
		.pipe( autoprefixer('last 2 versions') )
		.pipe( rename({ suffix: '.min' }) )
		.pipe( minifycss() )
		.pipe( gulp.dest(DIST) );
});