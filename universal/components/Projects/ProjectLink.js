import React, { Component, PropTypes } from 'react';
import Radium from 'radium';

import { Link } from 'react-router';

class ProjectLink extends Component {
    render() {
        return (
            <Link to={this.props.path}>
                <div style={STYLES.container}>
                    <div style={STYLES.item}>
                        {this.props.children || this.props.text}
                    </div>
                </div>
            </Link>
        );
    }
}

ProjectLink.propTypes = {
    path: PropTypes.string.isRequired,
    text: PropTypes.string,
    children: PropTypes.node
};

const STYLES = {
    item: {
        cursor: 'pointer',
        textDecoration: 'underline'
    },

    container: {
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '0.55em'
    }
};

export default Radium(ProjectLink);
