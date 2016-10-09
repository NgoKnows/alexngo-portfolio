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


module.exports = {
    target:  'node',
    context: ROOT_DIR,
    entry: ['babel-polyfill', './server.js'],
    resolve: {
        extensions: ['', '.js', 'json', 'png', 'jpg'],
        alias : {
            react: path.join(__dirname, 'node_modules', 'react'),
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
        path: path.join(ROOT_DIR,'build'),
        filename: 'server.bundle.js'
    },

    plugins: [],

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
                loader: 'style-loader!css-loader'
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
    externals: nodeModules
};
