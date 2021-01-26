# Laravel Mix Tailwind

This extension provides instant Tailwind support to your Mix (v2.1 and up) builds.

## Usage

First, install the extension.

```
npm install laravel-mix-tailwind --save-dev
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

## Next steps

This package requries tailwind.js, so don't forget to run:

```
npx tailwindcss init tailwind.js
npm run dev
```

app.scss file example:

```
@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";
```


And you're done! Compile everything down with `npm run dev`

[More information about the Tailwind directives](https://tailwindcss.com/docs/installation#3-use-tailwind-in-your-css) to your Sass/Less/Stylus entry file.)
