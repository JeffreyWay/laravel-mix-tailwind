# Laravel Mix Tailwind

This extension provides instant Tailwind support to your Mix (v2.1 and up) builds.

## Usage

First, install the extension.

```
npm install laravel-mix-tailwind --save-dev
```

Then, run the following to initiate it.

```
npx tailwind init
```

It will create a config file on your project root's folder.

After, require it within your `webpack.mix.js` file, and remove the sass() after mix.js, like so:

```js
const tailwindcss = require('tailwindcss');

mix.sass('resources/sass/app.scss', 'public/css').options({
    processCssUrls: false,
    postCss: [ tailwindcss('./tailwind.config.js') ],
});
```

Lastly, in your app.scss, add the following:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

And you're done! Compile everything down with `npm run dev`. (And [Don't forget to add the Tailwind directives](https://tailwindcss.com/docs/installation#3-use-tailwind-in-your-css) to your Sass/Less/Stylus entry file.)
