import React, { Component } from 'react';
import styles from './project-list.css';

import projectsList from 'client/projects';

import ProjectLink from '../ProjectLink/ProjectLink';

class ProjectList extends Component {
    render() {
        return (
            <div className={styles.container}>
                <div className={styles.section}>
                    <div className={styles.headerContainer}>
                        <h2 className={styles.header}>My Projects</h2>
                    </div>
                    {this.renderLinks()}
                </div>
                <div className={styles.section}>
                    <div className={styles.headerContainer}>
                        <h2 className={styles.header}>Concepts I've Covered</h2>
                    </div>
                    <ProjectLink path="/projects/nba">Data Visualization w/ React</ProjectLink>
                    <ProjectLink path="/projects/portfolio">Server-side rendering w/ React</ProjectLink>
                    <ProjectLink path="/projects/mcfj">Writing a server in Node and Koa</ProjectLink>
                    <ProjectLink path="/projects/mcfj">Implementing Realtime w/ RethinkDB</ProjectLink>
                    <ProjectLink path="/projects/mcfj">Developer Experience</ProjectLink>
                    <ProjectLink path="/projects/mcfj">Writing an App with React and Redux</ProjectLink>
                    <ProjectLink path="/projects/everythingSports">Data Scraping</ProjectLink>
                    <ProjectLink path="/projects/calendar">Uploading a React Component to NPM</ProjectLink>
                    <ProjectLink path="/projects/yelp">Data Science</ProjectLink>
                </div>
            </div>
        );
    }

    renderLinks() {
        return projectsList.map((project, index) =>
            <ProjectLink key={project.title} path={`/projects/${project.name}`}>
                <span className={styles.number}>0{index}</span> // {project.title}
            </ProjectLink>
        );
    }
}

export default ProjectList;
