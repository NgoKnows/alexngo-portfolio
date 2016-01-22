import React, { Component, PropTypes } from 'react'
import Radium from 'radium'

class Header extends Component {
    render() {
        const { text } = this.props;

        return (
            <div style={STYLES}>{text}</div>
        )
    }
}

const STYLES = {
    fontSize: '2.5em',
    letterSpacing: '5px',
    textDecoration: 'line-through'
}

export default Radium(Header);
