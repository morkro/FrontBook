const gulp = require('gulp');
const del = require('del');
const dist = 'public';

/**
 * Task: gulp clean
 * Clean build folder.
 */
gulp.task('clean', () => del(dist));