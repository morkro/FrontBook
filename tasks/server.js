var gulp = require('gulp');
var connect = require('gulp-connect');

/**
 * Task: gulp server
 * Starts the web server.
 */
gulp.task('server', function () {
	connect.server({
		port: 9000,
		root: 'public'
	});
});