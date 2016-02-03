import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

class MyLink extends Component {
    render() {
        const { to, handleClick, children } = this.props;

        return (
            <Link to={to} onClick={(e) => {
                e.preventDefault();
                //stopPropagation();
                console.log('here')
                handleClick();
                console.log('here2')
            }}>
                {children}
            </Link>
        )
    }
}

MyLink.propTypes = {
    to          : PropTypes.string.isRequired,
    handleClick : PropTypes.func.isRequired,
    children    : PropTypes.object
}

export default MyLink;
