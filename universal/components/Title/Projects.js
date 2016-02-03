import React, { Component, PropTypes } from 'react'
import Radium from 'radium'

import { Link } from 'react-router'
import Project from './Project'
import Header from './../Header'

import projectsJSON from '../../../client/project.json'

class Projects extends Component {
    render() {
        const { actions, ...other } = this.props

        return (
            <div style={STYLES.container}>
                <Link to="/projects">
                    <Header text="projects" />
                </Link>
                <div style={STYLES.projectsContainer}>
                    {this.renderProjects()}
                </div>
            </div>
        )
    }

    renderProjects() {
        let flipped = true;
        const { actions } = this.props

        return projectsJSON.map((project, index) => {
            flipped = !flipped;
            return (
                <Link to={`/projects/${project.name}`}>
                    <Project title={project.title}
                             description={project.description}
                             image_url={project.image_url}
                             name={project.name}
                             tag={project.tag}
                             flipped={flipped}
                             index={index}
                             key={project.title}
                             last={index === projectsJSON.length - 1}
                    />
                </Link>
            )
        })
    }
}

const STYLES = {
    container: {},

    projectsContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '2em'
    },
}

export default Radium(Projects);
