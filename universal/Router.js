import React, { Component } from 'react';
import { Router, browserHistory } from 'react-router';

import { StyleRoot } from 'radium';
import Routes from './Routes';

export default class MyRouter extends Component {
    render() {
        return (
            <StyleRoot radiumConfig={{ userAgent: navigator.userAgent }}>
                <Router onUpdate={() => window.scrollTo(0, 0)} history={browserHistory}>
                    {Routes}
                </Router>
            </StyleRoot>
        );
    }
}
