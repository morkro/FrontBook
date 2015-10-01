module.exports = function (grunt) {
	'use strict';

	// Loads all required grunt tasks
	require('load-grunt-tasks')(grunt);
	// Displays execution time of each task
	require('time-grunt')(grunt);
	// Register all tasks
	grunt.loadTasks('tasks');

	// Initialise configuration
	grunt.initConfig({
		/**
		 * Application directories.
		 */
		dir: {
			public: 'public',
			css: 'src/styles/css',
			scss: 'src/styles/scss',
			scripts: 'src/scripts',
			views: 'src/views',
			includes: 'src/includes',
			i18n: 'src/i18n',
			assets: 'src/assets'
		},
		/**
		 * Clean build folder.
		 */
		clean: ['<%= dir.public %>/'],
		/**
		 * Write ES6 today, compile it to ES5.
		 */
		browserify: {
			dist: {
				options: {
					transform: [
						['babelify', { loose: 'all' }]
					],
					browserifyOptions: { debug: true },
					exclude: ''
				},
				files: {
					'<%= dir.scripts %>/es5/app.js': ['<%= dir.scripts %>/es6/**/*.js']
				}
			}
		},
		/**
		 * Concatinates files.
		 */
		uglify: {
			dev: {
				options: {
					screwIE8: true,
					preserveComments: 'all',
					beautify: true
				},
				files: {
					'<%= dir.public %>/app.min.js': ['<%= dir.scripts %>/es5/*.js']
				}
			},
			prod: {
				options: { screwIE8: true },
				files: {
					'<%= dir.public %>/app.min.js': ['<%= dir.scripts %>/es5/*.js']
				}
			}
		},
		/**
		 * Validates ES6 files via ESLint.
		 */
		eslint: {
			options: {
				format: require('eslint-tap'),
				configFile: '.eslintrc'
			},
			target: '<%= dir.scripts %>/es6/**/*.js'
		},
		/**
		 * Compiles Sass to valid CSS.
		 */
		sass: {
			options: { style: 'compact' },
			files: {
				src: '<%= dir.scss %>/main.scss',
				dest: '<%= dir.css %>/main.unprefixed.css'
			}
		},
		/**
		 * Adds prefix to CSS based on browser matrix.
		 */
		autoprefixer: {
			options: { browsers: ['last 2 versions'] },
			files: {
				src: '<%= dir.css %>/main.unprefixed.css',
				dest: '<%= dir.css %>/main.css'
			}
		},
		/**
		 * Minifies CSS
		 */
		cssmin: {
			options: { keepSpecialComments: 0 },
			files: {
				src: '<%= dir.css %>/main.css',
				dest: '<%= dir.public %>/main.min.css'
			}
		},
		/**
		 * Creates all markup templates.
		 */
		bake: {
			english: {
				options: {
					content: '<%= dir.i18n %>/en.json'
				},
				files: {
					'<%= dir.public %>/index.html': '<%= dir.views %>/index.html',
				}
			}
		},
		/**
		 * Move all assets.
		 */
		copy: {
			assets: {
				expand: true,
				cwd: '<%= dir.assets %>',
				src: '**',
				dest: '<%= dir.public %>/assets'
			}
		},
		/**
		 * Creates localhost.
		 */
		connect: {
			server: {
				options: {
					port: 9000,
					base: 'public'
				}
			}
		},
		/**
		 * Run predefined tasks whenever watched file patterns are added, changed or deleted.
		 */
		watch: {
			styles: {
				files: ['<%= dir.scss %>/**/*.scss', '<%= dir.css %>/**/*.css'],
				tasks: ['css'],
				options: { spawn: false }
			},
			scripts: {
				files: ['<%= dir.scripts %>/**/*.js'],
				tasks: ['browserify', 'eslint', 'uglify:dev']
			},
			markup: {
				files: [
					'<%= dir.views %>/**/*.html',
					'<%= dir.includes %>/**/*.html',
					'<%= dir.i18n %>/**'
				],
				tasks: ['bake']
			},
			assets: {
				files: ['<%= dir.assets %>/**'],
				tasks: ['copy:assets']
			}
		},
		/**
		 * Displays notification whether build was a success or error.
		 */
		notify: {
			build: {
				options: {
					title: 'Build complete!',
					message: 'Setup was created successfully.'
				}
			}
		}
	});
};