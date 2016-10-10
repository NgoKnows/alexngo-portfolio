import React, { Component, PropTypes } from 'react';
import Radium from 'radium';
import { Link } from 'react-router';

import CrossedOut from 'components/CrossedOut';

import projectJSON from 'client/project.json';

class SideNav extends Component {
    render() {
        const { currentProject } = this.props;

        return (
            <div style={STYLES.container}>
                <Link to="/">
                    <div style={STYLES.backArrow}>
                        &#8592;
                    </div>
                </Link>

                <div style={STYLES.numberContainer}>
                    <Link to="/projects">
                        <div style={STYLES.number}>
                            <CrossedOut>
                                <span
                                    style={[
                                        STYLES.all,
                                        !currentProject ? STYLES.selected : {}
                                    ]}
                                >
                                    all
                                </span>
                            </CrossedOut>
                        </div>
                    </Link>
                    {this.renderMenuNumbers()}
                </div>
            </div>
        );
    }

    renderMenuNumbers() {
        const { currentProject } = this.props;

        return projectJSON.map((project, index) => {
            return (
                <Link to={`/projects/${project.name}`} key={project.name}>
                    <div
                        style={STYLES.number}
                        key={project.name}
                    >
                        <CrossedOut>
                            <div style={currentProject === project.name ? STYLES.selected : {}}>
                                {`0${index}`}
                            </div>
                        </CrossedOut>
                    </div>
                </Link>
            );
        });
    }
}

SideNav.propTypes = {
    currentProject: PropTypes.string
};

const STYLES = {
    container: {
        height: '80vh'
    },

    numberContainer: {
        display: 'flex',
        flexDirection: 'column',
        fontSize: '23px',
        height: '90%',
        justifyContent: 'space-between',
        minHeight: '20rem',
        width: '3.25rem',
        '@media (max-width: 1024px)': {
            fontSize: '18px',
        },
    },
    number: {
        cursor: 'pointer',
        padding: '0.3em 0 0.3em 0.3em',
        // letterSpacing: '1.25px'
    },

    selected: {
        textDecoration: 'line-through'
    },

    backArrow: {
        cursor: 'pointer',
        fontSize: '2em',
        marginBottom: '1em'
    },

    all: {
        letterSpacing: '1.5px'
    }
};

export default Radium(SideNav);
