import React, { Component, PropTypes } from 'react'

import { Router, browserHistory } from 'react-router'

import App from './containers/App'
import { StyleRoot } from 'radium'
import Routes from './Routes'

export default class MyRouter extends Component {
    render() {

        return (
            <StyleRoot radiumConfig={{userAgent: navigator.userAgent}}>
                <Router onUpdate={() => window.scrollTo(0, 0)} history={browserHistory}>
                    {Routes}
                </Router>
            </StyleRoot>
        )
    }
}
