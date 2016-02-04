import React, { Component, PropTypes } from 'react';
import Radium from 'radium'

class CrossedOut extends Component {
    render() {
        return (
            <span className="line_wrap">
                <span className="line"></span>
                {this.props.children}
            </span>
        );
    }
}

CrossedOut.propTypes = {
    children: PropTypes.oneOfType([
        React.PropTypes.string,
        React.PropTypes.object
    ])
};

export default Radium(CrossedOut)
