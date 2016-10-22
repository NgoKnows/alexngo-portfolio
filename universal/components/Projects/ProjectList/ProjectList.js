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
                <span className={styles.number}>0{index}</span> // {project.title}
            </ProjectLink>
        );
    }
}

export default ProjectList;
