# Laravel Mix Tailwind

This extension provides instant Tailwind support to your Mix (v2.1 and up) builds.

## Usage

First, install the extension.

```
npm install laravel-mix-tailwind
```

Then, require it within your `webpack.mix.js` file, like so:

```js
let mix = require('laravel-mix');

require('laravel-mix-tailwind');

mix
    .js('resources/js/app.js', 'public/js')
    .less('resources/less/app.less', 'public/css')
    .tailwind();
```

And you're done! Compile everything down with `npm run dev`. (And [Don't forget to add the Tailwind directives](https://tailwindcss.com/docs/installation#3-use-tailwind-in-your-css) to your Sass/Less/Stylus entry file.)
