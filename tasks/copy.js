var gulp = require('gulp');
var DIST = 'public';

/**
 * Task: gulp copy
 * Move all assets.
 */
gulp.task('copy', function () {
	return gulp.src('src/assets/**/*', { base: 'src' })
		.pipe( gulp.dest(DIST) );
});