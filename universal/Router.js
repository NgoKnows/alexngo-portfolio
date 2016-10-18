import React, { Component } from 'react';
import { applyRouterMiddleware, browserHistory, Router } from 'react-router';
import { useScroll } from 'react-router-scroll';

import { StyleRoot } from 'radium';
import Routes from './Routes';

export default class MyRouter extends Component {
    render() {
        return (
            <StyleRoot radiumConfig={{ userAgent: navigator.userAgent }}>
                <Router render={applyRouterMiddleware(useScroll())} history={browserHistory}>
                    {Routes}
                </Router>
            </StyleRoot>
        );
    }
}
