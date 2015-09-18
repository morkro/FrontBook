<h1 align="center"><img src="https://cdn.rawgit.com/morkro/FrontBook/grunt/src/assets/logo/frontbook-type.svg"></h1>

> FrontBook is a small and modern frontend boilerplate, enabling you to write **ES6 today** in production-ready projects.

FrontBook is made for developers who want to hop on the trending ES6 train, but miss a good starting point on how to set up a project.



## :floppy_disk: Quick start FrontBook
### 1. Download the boilerplate
Choose one of the two options:

* [Download](https://github.com/morkro/FrontBook/archive/master.zip) the repository as `.zip`
* Clone the git repository `git clone https://github.com/morkro/FrontBook.git `

### 2. Install dependencies
The next step is to run **`npm install`** in your shell _from the projects directory_. This makes sure all dependencies are installed and you won't run into any errors.

### 3. Build your project

After installing all dependencies, you want to build your project. Run **`grunt dev`** and all files from the `src/` directory will be compiled and copied to the `public/` folder. You can now access the build on **`http://localhost:9000`**.

> `grunt dev` will automatically run `watch`, so that all your changes will immediately
be visible.

If you don't want to run the `watch` task and simply build the project, **`grunt build`** is your friend. It's the same as `dev`, but without watching for changes in your code.



## :art: Working with FrontBook

The actual development takes place in `src/`.

### Structure

#### `assets/`
All your images, logos, fonts and the like belong here. The folder will simply be copied and moved to `public/assets`. The structure stays the same.

#### `scripts/`
Because the main reason for **FrontBook** is to be able to write ES6 in production, this must be the more exciting part for you ;) Therefore you don't really have to worry much about the `es5/` folder, as it just contains the generated output from Babel.

Thanks to [Browserify](http://browserify.org/) you can safely use **ES6 modules** in your frontend and for production!

FrontBook doesn't force you to stick to a specific MV* architecture. It simply takes all `es6/*.js` files and compiles them. Hence you can choose whatever design pattern you prefer. If you want to exclude specific files, you need to specify them in the [`Gruntfile.js` on **line 40**](https://github.com/morkro/FrontBook/tree/grunt/Gruntfile.js#L40).


#### `styles/`
This folder contains your Sass and generated CSS.

- ##### `scss/`
You can either write in `scss` or `sass`. When using the latter, I recommend renaming the folder _(don't forget to also rename in `Gruntfile.js`!)_.
The Sass architecture is up to you. FrontBook comes with a `main.scss` file and `normalize.scss`.  If you don't know which architecture to use, take a look at [sass-guidelin.es](http://www.sass-guidelin.es).

- ##### `css/`
Your generated CSS including source maps. You don't have to worry about these files.
**`main.unprefixed.css`** is the compiled Sass without prefixes.
**`main.css`** is the output from _Autoprefixer_ and will be moved to `public/main.min.css` after  minifying.

#### `views/`
**FrontBook** comes with a simple `index.html`, demonstrating how to work with _includes_ and _variables_. The idea is to store all your HTML templates here. When you add more templates, you will also need to add them to your [Grunt configuration](https://github.com/morkro/FrontBook/tree/grunt/Gruntfile.js#L111).

For further information please take a look at the [**grunt-bake documentation**](https://github.com/MathiasPaumgarten/grunt-bake).

#### `includes/`
In order to keep the HTML organised and simple, FrontBook uses includes. You can view them as HTML modules, which you just import in your views.

Common use cases are `header.html`, `navigation.html`, `footer.html`, `aside.html` and so on.
Includes are added via `<!--(bake ../link/to/module.html)-->` in your HTML.

#### `i18n/`
This is totally optional, but a great feature. It enables you to use variables in your HTML. Check out the [**grunt-bake documentation**](https://github.com/MathiasPaumgarten/grunt-bake) for more information.

If you don't want to use this feature, you can simply ignore it. It won't effect your development.

### Linting
**ESLint** is the ES6 linter. FrontBook comes with a few predefined rules and settings, but feel free to add and customise more in [`.eslintrc`](https://github.com/morkro/FrontBook/tree/grunt/.eslintrc).

_There is no Sass linter added yet._

### Libraries
If you want to work with a library _(such as Packery, Parallax.js, ...)_ which is not written in ES6 and therefore not a module _(which will most likely be the case)_, I recommend placing them in a `src/scripts/libs` folder.

You can easily add them to the `uglify` task and declare them as global variable without running into any errors.

**some-module.js**

```
/*global Packery, Parallax*/

let packery = new Packery();
...
```
**[Gruntfile.js](https://github.com/morkro/FrontBook/tree/grunt/Gruntfile.js#L50)**

```
files: {
	'<%= dir.public %>/app.min.js': ['<%= dir.scripts %>/libs/*.js', '<%= dir.scripts %>/es5/*.js']
}
```



## :wrench: Available tasks

#### General
- **`grunt build`:** This will simply compile and copy all files from `src/` to `public/*`.
- **`grunt server`:** Starts an [Express](http://expressjs.com/) server on `http://localhost:9000`.
- **`grunt watch`:** Watches for any changes in `src/` and eventually moves them to `public/`.
- **`grunt clean`:** Deletes the `public/` folder.
- **`grunt bake`:** Generates your markup.
- **`grunt css`:** Compiles your Sass, prefixes via [Autoprefixer](https://github.com/nDmitry/grunt-autoprefixer) and minifies the generated CSS.
- **`grunt js`:** Lint's your ES6 with [ESLint](https://github.com/sindresorhus/grunt-eslint), [compiles to ES5](https://github.com/jmreidy/grunt-browserify) and finally uglifies it.

#### Development

- **`grunt dev`:** This task is best during development. _Code comments are not removed._

#### Production

- **`grunt prod`:** It's similiar to the `build` task, but removes all comments and source maps.



## :page_with_curl: Further documentation
JavaScript

- [Grunt](http://gruntjs.com/getting-started)
- [Browserify](http://browserify.org)
- [Babel.js](http://babeljs.io)
- [ESLint](http://eslint.org)

Sass

- [Sass-Guidelines](http://www.sass-guidelin.es)

HTML

- [grunt-bake](https://github.com/MathiasPaumgarten/grunt-bake)



## :muscle: Contributing
Feel free to add, edit or remove anything you want.
If you want to improve something or have found issues, please let me now by opening an issue here on Github or contact me via mail. Any help is much appreciated.



## :copyright: License
The code is available under [MIT License](https://github.com/morkro/FrontBook/blob/master/LICENSE).
