import React from 'react';
import ReactDOM from 'react-dom';
import Root from 'containers/Root.js';
import smoothscroll from 'smoothscroll-polyfill';
import 'stylesheets/main.css';

smoothscroll.polyfill();

ReactDOM.render(<Root />, document.getElementById('root'));
