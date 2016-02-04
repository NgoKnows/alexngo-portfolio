import React, { Component, PropTypes } from 'react'
import Radium from 'radium'

import projectJSON from 'client/project.json'

import mcfj from 'images/mcfj.png'
import everythingSports from 'images/everything-sports.png'
import yelp from 'images/yelp.png'
import calendar from 'images/calendar.png'
import portfolio from 'images/portfolio.png'

const projectImages = {
    mcfj,
    everythingSports,
    yelp,
    calendar,
    portfolio
};

class Project extends Component {
    render() {
        const { projectName } = this.props;
        const project = projectJSON.filter((project) => project.name === projectName)[0];

        return (
            <div style={STYLES.container}>
                <div style={STYLES.image.container}>
                    <img style={STYLES.image.main} src={projectImages[project.name]} />
                </div>
                <h1 style={STYLES.title}>{project.title}</h1>
                <h2 style={STYLES.subTitle}>{project.description}</h2>

                {this.renderLinks(project)}

                <div style={STYLES.section}>
                    <h3 style={STYLES.header.main}>
                        <span style={STYLES.header.one(project.color)}>01</span> — The Idea
                    </h3>
                    <div style={STYLES.idea}>
                        {project.content.idea}
                    </div>
                </div>

                <div style={STYLES.section}>
                    <h3 style={STYLES.header.main}>
                        <span style={STYLES.header.two(project.color)}>02</span> — The Tech Stack
                    </h3>
                    {this.renderTechStack(project)}
                </div>

                <div style={STYLES.section}>
                    <h3 style={STYLES.header.main}>
                        <span style={STYLES.header.three(project.color)}>03</span> — The Execution
                    </h3>
                    {this.renderParagraphs(project)}
                </div>
            </div>
        )
    }

    renderLinks(project) {
        return (
            <div style={STYLES.link.container}>
                {project.links.website ? <a href={project.links.website} style={STYLES.link.main}>website</a> : null}
                {project.links.github ? <a href={project.links.github} style={STYLES.link.main}>github</a> : null}
                {project.links.npm ? <a href={project.links.npm} style={STYLES.link.main}>npm</a> : null}
            </div>
        )
    }

    renderTechStack(project) {
        return (
            <ul>
                {project.content.stack.map((tech) => {
                    return (
                        <li key={tech} style={STYLES.listItem}>
                            {tech}
                        </li>
                    )
                })}
            </ul>
        )
    }

    renderParagraphs(project) {
        return project.content.execution.map((section, sectionIndex) => {
            return (
                <div>
                    <h4 style={STYLES.subheader}>{section[0]}</h4>
                    {section[1].split('\n').map((paragraph, paragraphIndex)=>{
                        return (
                            <div key={sectionIndex + '' + paragraphIndex} style={STYLES.paragraph}>
                                {paragraph}
                            </div>
                        )
                    })}
                </div>
            )
        })
    }
}

Project.propTypes = {
}

Project.defaultProps = {
}

const STYLES = {
    container: {
        overflow: 'hidden',
        paddingLeft: '0.5rem',
        paddingRight: '1rem'
    },
    title: {
        fontSize: '4em',
        marginBottom: '0'
    },

    subTitle: {
        fontSize: '2em',
        marginTop: '0',
        marginBottom: '1.5em'
    },
    image: {
        container: {
            maxHeight: '90vh',
            width: '80vw',
            overflow: 'hidden',
            '@media (max-width: 1024px)': {
                width: '85vw',
            },
            '@media (max-width: 512px)': {
                width: '80vw',
            },
            '@media (max-width: 300px)': {
                width: '75vw',
            },
        },

        main: {
            width: '100%',
            border: '1px solid grey',
        }
    },

    header: {
        main: {
            fontSize: '3em',
            color: '#36454f',
            marginBottom: '0.75em'
        },
        one: (color) => {
            return {
                color,
                opacity: 0.33
            }
        },
        two: (color) => {
            return {
                color,
                opacity: 0.66
            }
        },
        three: (color) => {
            return {
                color
            }
        },
    },

    subheader: {
        fontSize: '2.25em',
        marginBottom: '0.75em'
    },

    paragraph: {
        fontSize: '1.75em',
        marginBottom: '0.75em',
        lineHeight: '120%',
        letterSpacing: '0.8px'
    },

    idea: {
        fontSize: '1.75em'
    },

    section: {
        paddingRight: '1em',
        marginBottom: '1em'
    },
    listItem: {
        fontSize: '2em',
        color: '#36454f'
    },
    link: {
        container: {
            display: 'flex',
        },
        main: {
            fontSize: '2em',
            marginRight: '1em',
            textDecoration: 'underline',
            cursor: 'pointer'
        }
    }
}

export default Radium(Project);
