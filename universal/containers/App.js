import React, { Component, PropTypes } from 'react';

export default class App extends Component {
    static propTypes = {
        children: PropTypes.node.isRequired,
    }

    render() {
        return (
            <div style={STYLES}>
                {this.props.children}
            </div>
        );
    }
}

const STYLES = {
    fontFamily : "'Simplifica', 'sans-serif'",
};
