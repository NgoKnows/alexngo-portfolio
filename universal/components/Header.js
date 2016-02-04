import React, { Component, PropTypes } from 'react'
import Radium from 'radium'

class Header extends Component {
    render() {
        const { text, handleClick } = this.props;

        return (
            <h2 onClick={handleClick} style={STYLES}>
                {text}
            </h2>
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
    cursor: 'pointer',
    fontSize: '2.5em',
    fontWeight: 'normal',
    letterSpacing: '5px',
    marginBottom: '1em',
    textDecoration: 'underline',
    transition: 'letter-spacing 0.12s ease-out',
    ':hover': {
        letterSpacing: '10px'
    }
}

export default Radium(Header);
