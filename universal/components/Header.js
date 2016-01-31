import React, { Component, PropTypes } from 'react'
import Radium from 'radium'

class Header extends Component {
    render() {
        const { text } = this.props;

        return (
            <h2 style={STYLES}>{text}</h2>
        )
    }
}

Header.propTypes = {
    text : PropTypes.string,
}

Header.defaultProps = {
    text: "Header"
}

const STYLES = {
    fontSize: '2.5em',
    fontWeight: 'normal',
    letterSpacing: '15px',
    //textDecoration: 'line-through',
    marginBottom: '1em'
}

export default Radium(Header);
