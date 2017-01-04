<h1 align="center"><img src="https://cdn.rawgit.com/morkro/FrontBook/e1e12cea9bbdd0746c21f2f1fb991bedb32cdd7d/src/assets/logo/frontbook-type.svg"></h1>
> FrontBook is a small and modern frontend boilerplate, enabling you to write **ES201* today** in production-ready projects.

FrontBook is made for developers who want to hop on the trending ES201* train, but miss a good starting point on how to set up a project.



## :floppy_disk: Quick start FrontBook
### 1. Download the boilerplate
Choose one of the two options:

* [Download](https://github.com/morkro/FrontBook/archive/gulp.zip) the repository as `.zip`
* Clone the git repository `git clone https://github.com/morkro/FrontBook.git`

### 2. Install dependencies
The next step is to run **`npm install`** in your shell _from the projects directory_. This makes sure all dependencies are installed and you won't run into any errors.

### 3. Build your project

After installing all dependencies, you want to build your project. Run **`gulp dev`** and all files from the `src/` directory will be compiled and copied to the `public/` folder. You can now access the build on **`http://localhost:9000`**.

> `gulp dev` will automatically run `watch`, so that all your changes will immediately
be visible.

If you don't want to run the `watch` task and simply build the project, **`gulp build`** is your friend. It's the same as `dev`, but without watching for changes in your code.



## :art: Working with FrontBook

The actual development takes place in `src/`.

### Structure

#### `assets/`
All your images, logos, fonts and the like belong here. The folder will simply be copied and moved to `public/assets`. The structure stays the same.


#### `scripts/`
Because the main reason for **FrontBook** is to be able to write ES201* in production, this must be the more exciting part for you ;) Therefore you don't really have to worry much about the `es5/` folder, as it just contains the generated output from Babel.

Thanks to [Browserify](http://browserify.org/) you can safely use **ES201* modules** in your frontend and for production!

FrontBook doesn't force you to stick to a specific MV* architecture. It simply takes all `ES201*/*.js` files and compiles them. Hence you can choose whatever design pattern you prefer. If you want to exclude specific files, you need to specify them in [`tasks/js.js`](https://github.com/morkro/FrontBook/blob/gulp/tasks/scripts.js#L32) of the `browserify` task.


#### `scss/`
This folder contains your Sass.

You can either write in `scss` or `sass`. When using the latter, I recommend renaming the folder _(don't forget to also rename in `tasks/css.js`!)_.
The Sass architecture is up to you. FrontBook comes with a `main.scss` file and `normalize.scss`.  If you don't know which architecture to use, take a look at [sass-guidelin.es](http://www.sass-guidelin.es).


#### `views/`
**FrontBook** comes with a simple `index.html`, demonstrating how to work with _includes_ and _variables_. The idea is to store all your HTML templates here. When you add more templates, you will also need to add them to your [gulp configuration](https://github.com/morkro/FrontBook/tree/gulp/tasks/views.js).


#### `includes/`
In order to keep the HTML organised and simple, FrontBook uses includes. You can view them as HTML modules, which you just import in your views.

Common use cases are `header.html`, `navigation.html`, `footer.html`, `aside.html` and so on.
Includes are added via `@@include('module.html')` in your HTML.


#### `i18n/`
This is totally optional, but a great feature. It enables you to use variables in your HTML.

If you don't want to use this feature, you have to remove the `gulp data` and `gulp swig` task in the [`gulp configuration`](https://github.com/morkro/FrontBook/tree/gulp/tasks/views.js).


### Linting
**ESLint** is the ES201* linter. FrontBook comes with a few predefined rules and settings, but feel free to add and customise more in [`.eslintrc`](https://github.com/morkro/FrontBook/tree/gulp/.eslintrc).

_There is no Sass linter added yet._


### Libraries
If you want to work with a library _(such as Packery, Parallax.js, ...)_ which is not written in ES201* and therefore not a module _(which will most likely be the case)_, I recommend placing them in a `src/scripts/libs` folder.

You can easily add them to the `uglify` task and declare them as global variable without running into any errors.

**some-module.js**

```
/*global Packery, Parallax*/

let packery = new Packery();
...
```
**[tasks/scripts.js](https://github.com/morkro/FrontBook/blob/gulp/tasks/scripts.js#L28)**

```
var files = glob.sync(['src/scripts/ES201*/**/*.js', 'src/scripts/libs/*.js']);
```



## :wrench: Available tasks

#### General
- **`gulp` / `gulp build`:** This will simply compile and copy all files from `src/` to `public/*`.
- **`gulp server`:** Starts a server on `http://localhost:9000`.
- **`gulp watch`:** Watches for any changes in `src/` and eventually moves them to `public/`.
- **`gulp clean`:** Deletes the `public/` folder.
- **`gulp views`:** Generates your markup.
- **`gulp css`:** Compiles your Sass, prefixes via [Autoprefixer](https://github.com/nDmitry/grunt-autoprefixer) and minifies the generated CSS.
- **`gulp js`:** Lint's your ES201* with [ESLint](https://github.com/sindresorhus/grunt-eslint), [compiles to ES5](https://github.com/jmreidy/grunt-browserify) and finally uglifies it.

#### Development

- **`gulp dev`:** This task is best during development. _Code comments are not removed._

#### Production

- **`gulp prod`:** It's similiar to the `build` task, but removes all comments and source maps.



## :page_with_curl: Further documentation
JavaScript

- [Gulp](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md)
- [Browserify](http://browserify.org)
- [Babel.js](http://babeljs.io)
- [ESLint](http://eslint.org)

Sass

- [Sass-Guidelines](http://www.sass-guidelin.es)




## :muscle: Contributing
Feel free to add, edit or remove anything you want.
If you want to improve something or have found issues, please let me now by opening an issue here on Github or contact me via mail. Any help is much appreciated.



## :copyright: License
The code is available under [MIT License](https://github.com/morkro/FrontBook/blob/master/LICENSE).
