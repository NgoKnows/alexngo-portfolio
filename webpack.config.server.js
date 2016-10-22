var path = require('path');
var webpack = require('webpack');
var ROOT_DIR = __dirname;

var fs = require('fs');

var nodeModules = {};

fs.readdirSync('node_modules')
    .filter(function (x) {
        return ['.bin'].indexOf(x) === -1;
    })
    .forEach(function (mod) {
        nodeModules[mod] = 'commonjs ' + mod;
    });

// PostCSS plugins
const cssnext = require('postcss-cssnext');
const postcssFocus = require('postcss-focus');
const postcssReporter = require('postcss-reporter');

module.exports = {
    target:  'node',
    context: ROOT_DIR,
    entry: ['babel-polyfill', './server.js'],
    resolve: {
        extensions: ['', '.js', 'json', 'png', 'jpg'],
        alias : {
            react: path.join(__dirname, 'node_modules', 'preact-compat'),
            'react-dom': path.join(__dirname, 'node_modules', 'preact-compat'),
            classes: path.join(ROOT_DIR, 'client', 'js', 'classes'),
            client: path.join(ROOT_DIR, 'client'),
            components: path.join(ROOT_DIR, 'universal', 'components'),
            containers: path.join(ROOT_DIR, 'universal', 'containers'),
            flux: path.join(ROOT_DIR, 'universal', 'redux'),
            js: path.join(ROOT_DIR, 'client', 'js'),
            stylesheets: path.join(ROOT_DIR, 'client', 'stylesheets'),
            universal: path.join(ROOT_DIR, 'universal'),
            server: path.join(ROOT_DIR, 'server')
        },
        modulesDirectories: [
            'client',
            'universal',
            'server',
            'node_modules',
        ]
    },

    output: {
        publicPath: '/',
        path: path.join(ROOT_DIR, 'build'),
        filename: 'server.bundle.js'
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: path.join(ROOT_DIR, 'node_modules'),
                query: {
                    'presets': ['es2015', 'react', 'stage-0'],
                }
            },

            {
                test: /\.css$/,
                exclude: /main.css/,
                loader: 'isomorphic-style-loader!css-loader?localIdentName=[local]__[path][name]__[hash:base64:5]&modules&importLoaders=1&sourceMap!postcss-loader',
            },

            {
                test: /\.(pdf|jpg|png|woff|woff2|eot|ttf|svg|otf)$/,
                loader: 'url-loader?limit=10000'
            },

            {
                test: /\.json$/,
                loader: 'json-loader'
            }
        ]
    },

    postcss: () => [
        postcssFocus(), // Add a :focus to every :hover
        cssnext({ // Allow future CSS features to be used, also auto-prefixes the CSS...
            browsers: ['last 2 versions', 'IE > 10'], // ...based on this browser list
        }),
        postcssReporter({ // Posts messages from plugins to the terminal
            clearMessages: true,
        }),
    ],

    externals: nodeModules
};
