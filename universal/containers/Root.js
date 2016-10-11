import React, { Component } from 'react';
import UiStore from '../stores/UiStore';
import { Provider } from 'mobx-react';

export default class Root extends Component {
    props: {
        routes: Object
    };

    render() {
        return (
            <Provider UiStore={UiStore}>
                {this.props.routes}
            </Provider>
        );
    }
}
