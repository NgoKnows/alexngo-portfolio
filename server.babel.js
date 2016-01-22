//allows babel transpilation of server code
require("babel-polyfill");
require('babel-core/register');
require('./server.js');