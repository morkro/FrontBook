const gulp = require('gulp');
const dist = 'public';

/**
 * Task: gulp copy
 * Move all assets.
 */
gulp.task('copy', () =>
	gulp.src('src/assets/**/*', { base: 'src' })
	.pipe( gulp.dest(dist) )
);