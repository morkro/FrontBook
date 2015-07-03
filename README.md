# FrontBook
FrontBook is a modern frontend boilerplate, enabling you to write **ES6 in production** projects.

## Build and deploy your project
Grunt.js is used to build the project.
All generated files will be available in the **`public/`** folder.

#### Development
For development you simply have to run `grunt dev` and your project can be accessed on `http://localhost:9000`.

- **`grunt dev`:** Creates a server, bakes the markup, moves all assets, compiles Sass to CSS and compiles ES6 to ES5 after linting it. Everything in watch mode.

#### Production

- **`grunt prod`:** Cleans the _public_ folder, bakes the markup, moves all assets, compiles Sass to CSS and compiles ES6 to ES5 after linting it.

There are also some other tasks available, which are used within above tasks and can be used alone:

- **`grunt css`:** Compiles Sass to CSS, adds prefixe via [Autoprefixer](https://github.com/nDmitry/grunt-autoprefixer) and finally minifies the file.
- **`grunt js`:** Runs [`grunt browserify`](https://github.com/jmreidy/grunt-browserify) and compiles all ES6 to valid ES5. Linting is done with [ESLint](https://github.com/sindresorhus/grunt-eslint) and eventually uglified.
- **`grunt server`:** Starts an [Express](http://expressjs.com/) server.

## Features
- It's totally up to you which architecture/ design pattern in JavaScript and Sass you want to use.
- ES6 with [Browserify](http://browserify.org/) _(mainly to use modules in ES5)_ and [Babel](https://babeljs.io/)
- ESLint
- [`grunt bake`](https://github.com/MathiasPaumgarten/grunt-bake) for modular markup and possible i18n.

## To Do
- Add unit testing with karma and jasmine

## Usage
Feel free to add, edit or remove everything you want.

## Contributing
If you want to improve something or have found any issues, please let me now by opening an issue here on Github or contacting me via mail.

## License
MIT © [Moritz Kröger](http://www.morkro.de)
