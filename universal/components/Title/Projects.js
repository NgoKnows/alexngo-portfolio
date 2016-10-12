import React, { Component, PropTypes } from 'react'
import Radium from 'radium'
import { Link } from 'react-router'

import Project from 'components/Title/Project'
import Header from 'components/Header'

import projectsJSON from '../../../client/projects'

class Projects extends Component {
    render() {
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

        return projectsJSON.map((project, index) => {
            flipped = !flipped;
            return (
                <Link to={`/projects/${project.name}`} key={project.name}>
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
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        marginTop: '2em'
    },
}

export default Radium(Projects);
