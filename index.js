let mix = require('laravel-mix');

let fs = require('fs')

class Tailwind {
    dependencies() {
        this.requiresReload = `
            Tailwind has now been installed. Please ensure that
            your configuration file (tailwind.js or tailwind.config.js)
            has been created (node_modules/.bin/tailwind init),
            and then run "npm run dev" again.
        `;

        return ['tailwindcss'];
    }

    register(oldConfigPath = './tailwind.js') {
        let newConfigPath = './tailwind.config.js';

        if (fs.existsSync(oldConfigPath)) {
            this.configPath = oldConfigPath;
        } else if (fs.existsSync(newConfigPath)) {
            this.configPath = newConfigPath;
        } else {
            throw 'Error: Files tailwind.js or tailwind.config.js don\'t exist.';
        }
    }

    boot() {
        if (Mix.components.has('sass')) {
            Config.processCssUrls = false;
        }

        let tailwindcss = require('tailwindcss');

        Config.postCss.push(tailwindcss(this.configPath));
    }
}

mix.extend('tailwind', new Tailwind());
