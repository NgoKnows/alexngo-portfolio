import React from 'react'
import ReactDOM from 'react-dom'

import Root from 'containers/Root.js'
import Router from 'universal/Router'

import 'stylesheets/main.css'

ReactDOM.render(<Root routes={<Router />} />, document.getElementById('root'));
