'use strict';
import Koa from 'koa'
const app = Koa();

// Webpack and Hot Module Reloading :)
// --------------------------------------------------
import webpackDevMiddleware from 'koa-webpack-dev-middleware'
import webpackHotMiddleware from 'koa-webpack-hot-middleware'

import webpack from 'webpack'
import { isDevelopment } from 'universal/utils.js'

let config;
if (isDevelopment) {
    config = require('./webpack.config.dev');
} else {
    config = require('./webpack.config.prod');
}

const compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, {
    noInfo: false,
    publicPath: config.output.publicPath
}));

if (process.env.NODE_ENV !== 'production') {
    app.use(webpackHotMiddleware(compiler));
}


// Server-Side Rendering
// --------------------------------------------------
import { handleRender } from 'server/render'
app.use(handleRender)


// Error Handling
// --------------------------------------------------
app.use(function *(next) {
    try {
        yield next;
    } catch (err) {
        this.status = err.status || 500;
        this.body = err.message;
        this.app.emit('error', err, this);
    }
});


// Start Server
// --------------------------------------------------
import http from 'http'

const httpServer = http.Server(app.callback());
const port = process.env.PORT || 8000;

httpServer.listen(port, () => {
    console.log('App is listening on port', port);
});
