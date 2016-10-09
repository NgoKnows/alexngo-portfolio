import React, { Component, PropTypes } from 'react'
import Radium from 'radium'

class App extends Component {
    render() {
        // const { actions, routing, ...other } = this.props;

        return (
            <div style={STYLES}>
                {this.props.children}
            </div>
        );
    }
}

const STYLES = {
    fontFamily : "'Simplifica', 'sans-serif'",
}

export default Radium(App);
