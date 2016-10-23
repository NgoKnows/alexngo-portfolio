import React, { Component } from 'react';
import { BrowserRouter, Match } from 'react-router'

import App from 'containers/App';

export default class Root extends Component {
    render() {
        return (
            <BrowserRouter>
                <Match pattern="/" component={App} />
            </BrowserRouter>
        );
    }
}
