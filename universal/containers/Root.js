import React, { Component } from 'react';

export default class Root extends Component {
    props: {
        routes: Object
    };

    render() {
        return (
            <div>
                {this.props.routes}
            </div>
        );
    }
}
