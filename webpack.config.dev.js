var path = require('path');
var webpack = require('webpack');
var ROOT_DIR = process.env.PWD;

module.exports = {
    target: 'web',
    context: ROOT_DIR,
    entry: [
        'webpack-hot-middleware/client',
        path.resolve(ROOT_DIR, 'client', 'js', 'index.js')
    ],

    resolve: {
        extensions: ['', '.js', 'json', 'png', 'jpg'],
        alias : {
            react: path.join(ROOT_DIR, 'node_modules', 'react'),
            components: path.join(ROOT_DIR, 'universal', 'components'),
            containers: path.join(ROOT_DIR, 'universal', 'containers'),
            client: path.join(ROOT_DIR, 'client'),
            flux: path.join(ROOT_DIR, 'universal', 'redux'),
            stylesheets: path.join(ROOT_DIR, 'client', 'stylesheets'),
            images: path.join(ROOT_DIR, 'client', 'images'),
            universal: path.join(ROOT_DIR, 'universal'),
            server: path.join(ROOT_DIR, 'server')
        },
    },

    output: {
        publicPath: 'http://localhost:8001/',
        path: path.join(ROOT_DIR,'build'),
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
                    'presets': ['es2015', 'react', 'stage-0'],
                    'env': {
                        'development': {
                            'presets': ['react-hmre']
                        }
                    }
                }
            },

            {
                test: /\.css$/,
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
    }
};
