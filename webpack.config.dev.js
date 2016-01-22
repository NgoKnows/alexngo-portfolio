var path = require('path');
var webpack = require('webpack');
var ROOT_DIR = process.env.PWD;

module.exports = {
    target: "web",
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
            flux: path.join(ROOT_DIR, 'universal', 'redux'),
            stylesheets: path.join(ROOT_DIR, 'client', 'stylesheets'),
            images: path.join(ROOT_DIR, 'client', 'images'),
            universal: path.join(ROOT_DIR, 'universal')
        },
        extensions: ["", ".json", ".js"]
    },

    resolveLoader: { root: path.join(process.env.PWD, "node_modules") },

    output: {
        path: path.join(ROOT_DIR,'build'),
        filename: 'bundle.js'
    },

    plugins: [
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
                    "presets": ["es2015", "react", "stage-0"],
                    "env": {
                        "development": {
                            "presets": ["react-hmre"]
                        }
                    }
                }
            },

            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            },

            {
                test: /\.(jpg|png|woff|woff2|eot|ttf|svg|otf)$/,
                loader: 'url-loader?limit=10000'
            },

            {
                test: /\.json$/,
                loader: 'json-loader'
            }
        ]
    }
};
