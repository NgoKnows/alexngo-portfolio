import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './projects.css';

import Project from 'components/Title/Project/Project';
import Header from 'components/Reusable/Header/Header';

import projectsJSON from '../../../../client/projects';

export default class Projects extends Component {
    render() {
        return (
            <div>
                <Link to="/projects">
                    <Header text="projects" />
                </Link>
                <div className={styles.container}>
                    {this.renderProjects()}
                </div>
            </div>
        );
    }

    renderProjects() {
        let flipped = true;

        return projectsJSON.map((project, index) => {
            flipped = !flipped;
            return (
                <Link to={`/projects/${project.name}`} key={project.name}>
                    <Project
                        title={project.title}
                        description={project.description}
                        image_url={project.image_url}
                        name={project.name}
                        tag={project.tag}
                        color={project.color}
                        flipped={flipped}
                        index={index}
                        key={project.title}
                        last={index === projectsJSON.length - 1}
                    />
                </Link>
            );
        });
    }
}
