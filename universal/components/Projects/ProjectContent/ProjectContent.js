import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import styles from './project-content.css';

import projectsList from 'client/projects';

import curato from 'images/curato.png';
import dataflow from 'images/dataflow.png';
import nba from 'images/nba.png';
import mcfj from 'images/mcfj.png';
import everythingSports from 'images/everything-sports.png';
import yelp from 'images/yelp.png';
import calendar from 'images/calendar.png';
import portfolio from 'images/portfolio.png';

const projectImages = {
    mcfj,
    everythingSports,
    yelp,
    calendar,
    portfolio,
    nba,
    curato,
    dataflow
};

export default class Project extends Component {
    static propTypes = {
        projectName: PropTypes.string.isRequired
    }

    render() {
        const { projectName } = this.props;
        const project = projectsList.find((project) => project.name === projectName);

        return (
            <div className={styles.container}>
                <div className={styles.imageContainer}>
                    <img className={styles.image} src={projectImages[project.name]} />
                </div>
                <h1 className={styles.title}>{project.title}</h1>
                <h2 className={styles.subTitle}>{project.description}</h2>

                {this.renderLinks(project)}

                <div className={styles.section}>
                    <h3 className={classnames(styles.header, styles.headerOne)}>
                        <span style={{ color: project.color }}>01</span> — The Idea
                    </h3>
                    <div className={styles.idea}>
                        {project.content.idea}
                    </div>
                </div>

                <div className={styles.section}>
                    <h3 className={classnames(styles.header, styles.headerTwo)}>
                        <span style={{ color: project.color }}>02</span> — The Tech Stack
                    </h3>
                    {this.renderTechStack(project)}
                </div>

                <div className={styles.section}>
                    <h3 className={classnames(styles.header, styles.headerThree)}>
                        <span style={{ color: project.color }}>03</span> — The Execution
                    </h3>
                    {this.renderParagraphs(project)}
                </div>
            </div>
        );
    }

    renderLinks(project) {
        return (
            <div className={styles.linkContainer}>
                {project.links.website ? <a href={project.links.website} className={styles.link}>website</a> : null}
                {project.links.github ? <a href={project.links.github} className={styles.link}>github</a> : null}
                {project.links.npm ? <a href={project.links.npm} className={styles.link}>npm</a> : null}
                {project.links.writeup ? <a href={project.links.writeup} className={styles.link}>write up</a> : null}
            </div>
        );
    }

    renderTechStack(project) {
        return (
            <ul>
                {project.content.stack.map((tech) => (
                    <li key={tech} className={styles.listItem}>
                        {tech}
                    </li>
                ))}
            </ul>
        );
    }

    renderParagraphs(project) {
        return project.content.execution.map((section, sectionIndex) => {
            return (
                <div key={sectionIndex}>
                    <h4 className={styles.subheader}>{section[0]}</h4>
                    {section[1].split('\n').map((paragraph, paragraphIndex) => (
                        <div key={`${sectionIndex} ${paragraphIndex}`} className={styles.paragraph}>
                            {paragraph}
                        </div>
                    ))}
                </div>
            );
        });
    }
}
