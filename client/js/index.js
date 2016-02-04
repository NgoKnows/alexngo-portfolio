import React from 'react'
import ReactDOM from 'react-dom'

//import setUpRealtime from './Realtime'
import composeStore from 'universal/CreateStore'

import Root from 'containers/Root.js'
import Router from 'universal/Router'

import 'stylesheets/main.css'

const store = composeStore();

ReactDOM.render(<Root routes={<Router />} store={store}/>, document.getElementById('root'));

//setUpRealtime();
