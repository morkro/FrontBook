var gulp = require('gulp');
var del = require('del');
var DIST = 'public';

/**
 * Task: gulp clean
 * Clean build folder.
 */
gulp.task('clean', function () {
	return del(DIST);
})