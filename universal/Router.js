import React, { Component } from 'react';
import { applyRouterMiddleware, browserHistory, Router } from 'react-router';
import { useScroll } from 'react-router-scroll';

import Routes from './Routes';

export default class MyRouter extends Component {
    render() {
        return (
            <Router render={applyRouterMiddleware(useScroll())} history={browserHistory}>
                {Routes}
            </Router>
        );
    }
}
