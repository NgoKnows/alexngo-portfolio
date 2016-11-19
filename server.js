import Koa from 'koa';
import convert from 'koa-convert';
const app = new Koa();

// Webpack and Hot Module Reloading :)
// --------------------------------------------------
import webpackDevMiddleware from 'koa-webpack-dev-middleware';
import webpackHotMiddleware from 'koa-webpack-hot-middleware';

import webpack from 'webpack';

let config;
if (process.env.NODE_ENV !== 'production') {
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

// Serve Static Files
// --------------------------------------------------
import path from 'path';
import serve from 'koa-static';
import send from 'koa-send';

app.use(convert(serve(path.resolve('client'))));

// catches any request that isn't handled by koa-static or koa-router
app.use(async (ctx) => {
    await send(ctx, 'client/index.html');
});

// Start Server
// --------------------------------------------------
import http from 'http';

const httpServer = http.Server(app.callback());
const port = process.env.PORT || 8001;

httpServer.listen(port, () => {
    console.log('App is listening on port', port);
});
