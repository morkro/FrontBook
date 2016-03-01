const gulp = require('gulp');
const notifier = require('node-notifier');
const requireDir = require('require-dir');
const dist = 'public';

requireDir('./tasks');

/**
 * Task: gulp build-success
 * Sends notification that build went successfull.
 */
gulp.task('build-success', () => notifier.notify({
	title: 'Build complete!',
	message: 'Setup was created successfully.'
}));

/**
 * Task: gulp watch
 * Runs through directory and watches for modified files.
 */
gulp.task('watch', () => {
	gulp.watch('src/assets/**/*', ['copy', 'views', 'css', 'js']);
	gulp.watch(
		['src/views/**/*.html', 'src/i18n/**/*.json', 'src/includes/**/*.html'],
		['copy', 'views', 'css', 'js']
	);
	gulp.watch('src/scss/**/*.scss', ['copy', 'views', 'css', 'js']);
	gulp.watch('src/scripts/es6/**/*.js', ['copy', 'views', 'css', 'js']);
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
