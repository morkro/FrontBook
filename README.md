<h1 align="center"><img src="https://cdn.rawgit.com/morkro/FrontBook/master/media/frontbook-type.svg"></h1>

> FrontBook is a small and modern frontend boilerplate, made for developers who miss a good starting point to write **ES201* today** in production-ready projects.

## ⚙ Setups
FrontBook comes with different setups, `npm scripts` being the default:

| Setup | Version | Branch |
| :---- | :-----: | :----: |
| [**npm scripts**](https://github.com/morkro/FrontBook) | `1.0.0` | `master` |
| [Grunt](https://github.com/morkro/FrontBook/tree/grunt) | `1.3.2` | `grunt` |
| [gulp](https://github.com/morkro/FrontBook/tree/gulp) | `1.3.2` | `gulp` |

Choose one and get started!

## 💾 Quick start FrontBook
### 1. Download the boilerplate
Choose one of the two options:

* [Download](https://github.com/morkro/FrontBook/archive/master.zip) the repository as `.zip`
* `git clone` the repository

### 2. Install dependencies
Run **`npm install`** in your terminal _from the FrontBook directory_. This makes sure all dependencies are installed and you won't run into any errors.

### 3. Build your project
After installing all dependencies, you want to build your project. **`npm run dev`** will generate all files from the `src/` directory and move them to `dist/`. You can now access the build on **`http://localhost:9000`**.

> `npm run dev` will automatically `watch` all your source files!

If you don't to watch all your files but only build the project once, **`npm run build`** is your friend.

## 🛠 Working with FrontBook
All your source files are located in `src/`.

### Structure
AST.

## 🔧 Available tasks
#### General
| Command | Description |
| ------- | ----------- |
| **`npm run build`** | Generates, compiles, and transpiles all files from `src/` to `dist/.` |
| **`npm run dev`** | Same as `npm run build` but watches also all your files for changes. |
| **`npm run lint`** | Uses `eslint` to lint all JavaScript files. |
| **`npm start`** | This is the production build. It minifies the CSS and JavaScript output. |

## 📃 Further documentation
- [Browserify](http://browserify.org)
- [Babel.js](http://babeljs.io)
- [ESLint](http://eslint.org)
- [Sass-Guidelines](http://www.sass-guidelin.es)
- [Nunjucks](https://mozilla.github.io/nunjucks/)

## 🎊 Features
- Gives you the freedom to use any architectural pattern you like
- ES201* using [Browserify](http://browserify.org/) _(mainly to use modules in ES5)_ and [Babel](https://babeljs.io/).
- ESLint

## 📊 Browser support
- Chrome (latest 2)
- Firefox (latest 2)
- Internet Explorer 9+ _(You can support IE8 by limiting yourself to a [subset of ES201* features](http://babeljs.io/docs/advanced/caveats/))_
- Microsoft Edge (latest)
- Opera (latest 2)
- Safari (latest 2)

## ❤️ Contributing
Feel free to add, edit or remove anything you want.
If you want to improve something or have found issues, please let me now by opening an issue here on GitHub or contact me via mail. Any help is much appreciated.

## License
The code is available under [MIT License](https://github.com/morkro/FrontBook/blob/master/LICENSE).

[logo-type]: https://raw.githubusercontent.com/morkro/FrontBook/master/src/assets/logo/frontbook.png
