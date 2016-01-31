import React, { Component, PropTypes } from 'react'
import Radium from 'radium'

import projectJSON from 'client/project.json'

class SideNav extends Component {
    render() {
        const { actions } = this.props;

        return (
            <div style={STYLES.container}>
                <div style={STYLES.backArrow}
                     onClick={() => actions.replace('/')}
                >
                    &#8592;
                </div>
                <div style={STYLES.numberContainer}>
                    {this.renderMenuNumbers()}
                </div>
            </div>
        )
    }

    renderMenuNumbers() {
        const { actions, currentProject } = this.props;
        return projectJSON.map((project, index) => {
            return (
                <div style={STYLES.number}
                     onClick={() => actions.replace(`/projects/${project.name}`)}
                     key={project.name}
                >
                    <span className="line_wrap">
                        <span className="line"></span>
                        <div style={currentProject === project.name ? STYLES.selected : {}}>
                            {`0${index}`}
                        </div>
                    </span>
                </div>
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
        fontSize: '22px',
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
        padding: '0.25em 0 0.25em 0.25em',
        cursor: 'pointer'
    },

    selected: {
        textDecoration: 'line-through'
    },
    backArrow: {
        fontSize: '2em',
        marginBottom: '1em',
        cursor: 'pointer'
    },
}

export default Radium(SideNav);
