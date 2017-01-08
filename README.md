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

## 💾 Quick Start FrontBook
### 1. Download the boilerplate
Choose one of the two options:

* [Download](https://github.com/morkro/FrontBook/archive/master.zip) the repository as `.zip`
* `git clone` the repository

### 2. Install Dependencies
Run **`npm install`** in your terminal _from the FrontBook directory_. This makes sure all dependencies are installed and you won't run into any errors.

### 3. Build Your Project
After installing all dependencies, you want to build your project. **`npm run dev`** will generate all files from the `src/` directory and move them to `dist/`. You can now access the build on **`http://localhost:9000`**.

> `npm run dev` will automatically `watch` all your source files for any changes!

If you don't to watch all your files but only build the project once, **`npm run build`** is your friend.

## 🛠 Directory Structure
All your source files are located in `src/` and structured as follows:

```
data/
├── meta.json
├── content.json
└── ...
images/
├── frontbook.svg
└── ...
markup/
├── partials/
│   └── head.html
└── index.html
meta/
├── humans.txt
└── ...
scripts/
├── components/
│   └── welcome.js
└── index.js
styles/
├── base/
│   └── ...
├── layout/
│   ├── header.scss
│   └── ...
├── vendors/
│   └── ...
└── index.scss
```

An overview of each folder:

<table>
	<thead>
		<tr>
			<th style="width:10%">Folder</th>
			<th style="width:65%">Description</th>
			<th style="width:15%">Executable</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><code>data/</code></td>
			<td>
				Contains all required data <em>(e.g. copy, image meta data, ...)</em> for your views. It is passed to <a href="https://github.com/morkro/FrontBook/blob/master/bin/html#L42">nunjucks</a> when it renders a view.
			</td>
			<td>
				<a href="https://github.com/morkro/FrontBook/blob/master/bin/html"><code>bin/build-html</code></a>
			</td>
		</tr>
		<tr>
			<td><code>images/</code></td>
			<td>
				Contains all images for your project. You could also argue to move them into `meta/`, or rename the folder to something like `assets/`. I prefer them separated to have a seperate, unique build task. Currently, images are just copied to `dist/` but there could also be added an additional image optimization task.
			</td>
			<td>
				<a href="https://github.com/morkro/FrontBook/blob/master/bin/assets#L58"><code>bin/assets</code></a>
			</td>
		</tr>
		<tr>
			<td><code>markup/</code></td>
			<td>
				All the views. If your project is a single page application you might just keep the `index.html` and work with additional includes and partials. If there are more views, such as `about.html`, they need to be added to the <a href="https://github.com/morkro/FrontBook/blob/master/bin/html">build task</a>.
			</td>
			<td>
				<a href="https://github.com/morkro/FrontBook/blob/master/bin/html"><code>bin/html</code></a>
			</td>
		</tr>
		<tr>
			<td><code>meta/</code></td>
			<td>
				FrontBook keeps meta files like `humans.txt` or a `manifest.json` here. Some of them might have their own <a href="https://github.com/morkro/FrontBook/blob/master/bin/assets#L12">build step</a>, but all are eventually copied to `dist/`. If you want to have specific modifications for any meta file, add them to <a href="https://github.com/morkro/FrontBook/blob/master/bin/assets"><code>bin/assets</code></a>.
			</td>
			<td>
				<a href="https://github.com/morkro/FrontBook/blob/master/bin/assets"><code>bin/assets</code></a>
			</td>
		</tr>
		<tr>
			<td><code>scripts/</code></td>
			<td>
				Because the main reason for FrontBook is to be able to write ES201\* in production, this must be the more exciting part. <br>
				FrontBook doesn't force you to stick to a specific MV\* architecture. It simply takes all `.js` files and compiles them. Hence you can choose whatever design pattern you prefer. If you want to exclude specific files, you need to <a href="https://github.com/morkro/FrontBook/blob/master/bin/js#L20">specify</a> them in the build step.
			</td>
			<td>
				<a href="https://github.com/morkro/FrontBook/blob/master/bin/js"><code>bin/js</code></a>
			</td>
		</tr>
		<tr>
			<td><code>styles/</code></td>
			<td>
				FrontBook uses Sass for styling, but it can also easily replaced with any other postprocessor language. The architecture is up to you; if you don't know which architecture to use, take a look at [sass-guidelin.es](http://sass-guidelin.es).
			</td>
			<td>
				<a href="https://github.com/morkro/FrontBook/blob/master/bin/css"><code>bin/css</code></a>
			</td>
		</tr>
	</tbody>
</table>

## 🔧 Available Tasks
| Command | Description |
| ------- | ----------- |
| **`npm run build`** | Generates, compiles, and transpiles all files from `src/` to `dist/.` |
| **`npm run dev`** | Same as `npm run build` but watches also all your files for changes. |
| **`npm run lint`** | Uses `eslint` to lint all JavaScript files. |
| **`npm run clean`** | Removes all content from `dist/` |
| **`npm start`** | This is the production build. It minifies the CSS and JavaScript output. |

## 📃 Further Documentation
- [Browserify](http://browserify.org)
- [Babel.js](http://babeljs.io)
- [ESLint](http://eslint.org)
- [Sass-Guidelines](http://www.sass-guidelin.es)
- [Nunjucks](https://mozilla.github.io/nunjucks/)

## 🎊 Features
- Gives you the freedom to use any architectural pattern you like
- ES201* using [Browserify](http://browserify.org/) _(mainly to use modules in ES5)_ and [Babel](https://babeljs.io/).
- ESLint

## 📊 Browser Support
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
