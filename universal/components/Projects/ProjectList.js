import React, { Component } from 'react';
import Radium from 'radium';

import projectsList from 'client/projects';

import ProjectLink from './ProjectLink';

class ProjectList extends Component {
    render() {
        return (
            <div style={STYLES.container}>
                <div style={STYLES.section}>
                    <div style={STYLES.header.container}>
                        <h2 style={STYLES.header.main}>My Projects</h2>
                    </div>
                    {this.renderLinks()}
                </div>
                <div style={STYLES.section}>
                    <div style={STYLES.header.container}>
                        <h2 style={STYLES.header.main}>Concepts I've Covered</h2>
                    </div>
                    <ProjectLink text="Data Visualization w/ React" path="/projects/nba" />
                    <ProjectLink text="Server-side rendering w/ React" path="/projects/portfolio" />
                    <ProjectLink text="Writing a server in Node and Koa" path="/projects/mcfj" />
                    <ProjectLink text="Implementing Realtime w/ RethinkDB" path="/projects/mcfj" />
                    <ProjectLink text="Developer Experience" path="/projects/mcfj" />
                    <ProjectLink text="Writing an App with React and Redux" path="/projects/mcfj" />
                    <ProjectLink text="Data Scraping" path="/projects/everythingSports" />
                    <ProjectLink text="Uploading a React Component to NPM" path="/projects/calendar" />
                    <ProjectLink text="Data Science" path="/projects/yelp" />
                </div>
            </div>
        );
    }

    renderLinks() {
        return projectsList.map((project, index) =>
            <ProjectLink key={project.title} path={`/projects/${project.name}`}>
                <span style={STYLES.number}>0{index}</span> // {project.title}
            </ProjectLink>
        );
    }
}

const STYLES = {
    container: {
        fontSize: '2rem',
        display:'flex',
        flexDirection: 'column',
    },

    header: {
        main: {
            fontSize: '2.5rem',
            margin: '0 0 1rem 0'
        },
        container: {
            display: 'flex',
            justifyContent: 'center'
        }
    },

    section: {
        marginBottom: '1em'
    },
    number: {
        color: '#BBBBBB'
    }
};

export default Radium(ProjectList);
