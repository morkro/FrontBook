const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const minifycss = require('gulp-minify-css');
const rename = require('gulp-rename');
const dist = 'public';

/**
 * Task: gulp css
 * Compile Sass to valid CSS, add prefix and minify.
 */
gulp.task('css', () => gulp.src('src/scss/main.scss')
	.pipe( sass({ style: 'compact' }) )
	.pipe( autoprefixer('last 2 versions') )
	.pipe( rename({ suffix: '.min' }) )
	.pipe( minifycss() )
	.pipe( gulp.dest(dist) )
);