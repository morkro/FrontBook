var gulp = require('gulp');
var notifier = require('node-notifier');
var requireDir = require('require-dir');
var DIST = 'public';

requireDir('./tasks');

/**
 * Task: gulp build-success
 * Sends notification that build went successfull.
 */
gulp.task('build-success', function () {
	return notifier.notify({
		title: 'Build complete!',
		message: 'Setup was created successfully.'
	});
});

/**
 * Task: gulp watch
 * Runs through directory and watches for modified files.
 */
gulp.task('watch', function () {
	gulp.watch('src/assets/**/*', ['copy']);
	gulp.watch(
		['src/views/**/*.html', 'src/i18n/**/*.json', 'src/includes/**/*.html'],
		['views']
	);
	gulp.watch('src/scss/**/*.scss', ['css']);
	gulp.watch('src/scripts/es6/**/*.js', ['js']);
});

/**
 * Task: gulp / gulp build
 * Builds the environment.
 */
gulp.task('default', [
	'clean',
	'copy',
	'views',
	'css',
	'js',
	'build-success'
]);
gulp.task('build', [
	'clean',
	'copy',
	'views',
	'css',
	'js',
	'build-success'
]);

/**
 * Task: gulp dev
 * Only for development purposes.
 */
gulp.task('dev', [
	'server',
	'clean',
	'copy',
	'views',
	'css',
	'js',
	'build-success',
	'watch'
]);

/**
 * Task: gulp prod
 * Only for production purposes.
 */
gulp.task('prod', [
	'clean',
	'copy',
	'views',
	'css',
	'js',
	'build-success'
]);