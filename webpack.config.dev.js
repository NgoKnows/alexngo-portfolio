var path = require('path');
var webpack = require('webpack');
var ROOT_DIR = process.env.PWD;

// PostCSS plugins
const cssnext = require('postcss-cssnext');
const postcssFocus = require('postcss-focus');
const postcssReporter = require('postcss-reporter');

module.exports = {
    target: 'web',
    context: ROOT_DIR,
    entry: [
        'webpack-hot-middleware/client',
        path.resolve(ROOT_DIR, 'client', 'js', 'index.js')
    ],

    devtool: 'cheap-module-source-map',

    resolve: {
        extensions: ['', '.js', 'json', 'png', 'jpg'],
        alias : {
            react: 'preact-compat',
            'react-dom': 'preact-compat',
            components: path.join(ROOT_DIR, 'universal', 'components'),
            containers: path.join(ROOT_DIR, 'universal', 'containers'),
            client: path.join(ROOT_DIR, 'client'),
            stylesheets: path.join(ROOT_DIR, 'client', 'stylesheets'),
            images: path.join(ROOT_DIR, 'client', 'images'),
            universal: path.join(ROOT_DIR, 'universal'),
            server: path.join(ROOT_DIR, 'server')
        },
    },

    output: {
        publicPath: '/',
        path: path.join(ROOT_DIR, 'build'),
        filename: 'bundle.js'
    },

    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],

    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: path.join(ROOT_DIR, 'node_modules'),
                query: {
                    presets: ['es2015', 'react', 'stage-0'],
                    env: {
                        development: {
                            presets: ['react-hmre']
                        }
                    }
                }
            },

            {
                test: /\.css$/,
                exclude: /main.css/,
                loader: 'style-loader!css-loader?localIdentName=[local]__[path][name]__[hash:base64:5]&modules&importLoaders=1&sourceMap!postcss-loader',
            },

            {
                test: /\.css$/,
                include: /main.css/,
                loader: 'style-loader!css-loader'
            },

            {
                test: /\.(jpg|png|woff|woff2|eot|ttf|svg|otf|pdf)$/,
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
    ]
};
