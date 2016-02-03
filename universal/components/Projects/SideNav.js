import React, { Component, PropTypes } from 'react'
import Radium from 'radium'
import { Link } from 'react-router'

import projectJSON from 'client/project.json'

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
                    <Link to="projects">
                        <div style={STYLES.number}>
                            <span className="line_wrap">
                                <span className="line"></span>
                                <div style={!currentProject ? STYLES.selected : {}}>
                                    <span style={STYLES.all}>all</span>
                                </div>
                            </span>
                        </div>
                    </Link>
                    {this.renderMenuNumbers()}
                </div>
            </div>
        )
    }

    renderMenuNumbers() {
        const { currentProject } = this.props;
        return projectJSON.map((project, index) => {
            return (
                <Link to={`/projects/${project.name}`}>
                    <div style={STYLES.number}
                         key={project.name}
                    >
                        <span className="line_wrap">
                            <span className="line"></span>
                            <div style={currentProject === project.name ? STYLES.selected : {}}>
                                {`0${index}`}
                            </div>
                        </span>
                    </div>
                </Link>
            )
        });
    }
}

SideNav.propTypes = {
    selected: PropTypes.number
}

SideNav.defaultProps = {}

const STYLES = {
    container: {
        height: '80vh',
    },

    numberContainer: {
        fontSize: '23px',
        display: 'flex',
        width: '3.25rem',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '90%',
        minHeight: '20rem',
        '@media (max-width: 1024px)': {
            fontSize: '18px',
        },
    },
    number: {
        padding: '0.3em 0 0.3em 0.3em',
        cursor: 'pointer',
        //letterSpacing: '1.25px'
    },

    selected: {
        textDecoration: 'line-through'
    },
    backArrow: {
        fontSize: '2em',
        marginBottom: '1em',
        cursor: 'pointer'
    },
    all: {
        letterSpacing: '1.5px'
    }
}

export default Radium(SideNav);
