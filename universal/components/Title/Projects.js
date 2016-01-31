import React, { Component, PropTypes } from 'react'
import Radium from 'radium'

import Project from './Project'
import Header from './../Header'

import projectsJSON from '../../../client/project.json'

class Projects extends Component {
    render() {
        const { actions, ...other } = this.props

        return (
            <div style={STYLES.container}>
                <Header text="projects"/>
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
            return <Project title={project.title}
                            description={project.description}
                            image_url={project.image_url}
                            name={project.name}
                            tag={project.tag}
                            flipped={flipped}
                            index={index}
                            key={project.title}
                            handleClick={() => actions.push(`/projects/${project.name}`)}
                            last={index === projectsJSON.length - 1}
            />
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
