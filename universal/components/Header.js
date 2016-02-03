import React, { Component, PropTypes } from 'react'
import Radium from 'radium'

class Header extends Component {
    render() {
        const { text, handleClick } = this.props;

        return (
            <h2 onClick={handleClick} style={STYLES}>{text}</h2>
        )
    }
}

Header.propTypes = {
    text : PropTypes.string,
    handleClick: PropTypes.func
}

Header.defaultProps = {
    text: "Header",
    handleClick: () => {}
}

const STYLES = {
    fontSize: '2.5em',
    fontWeight: 'normal',
    textDecoration: 'underline',
    letterSpacing: '5px',
    transition: 'letter-spacing 0.12s ease-out',
    marginBottom: '1em',
    cursor: 'pointer',
    ':hover': {
        letterSpacing: '10px'
    }
}

export default Radium(Header);
