import React, { Component, PropTypes } from 'react'
import Radium from 'radium'

import projectJSON from 'client/project.json'

import Header from './../Header'

class ProjectList extends Component {
    render() {
        return (
            <div style={STYLES.container}>
                <div style={STYLES.section}>
                    <div style={STYLES.header.container}>
                        <h2 style={STYLES.header.main}>My Projects</h2>
                    </div>
                    {
                        projectJSON.map((project, index) => {
                            return (
                                <div key={index} style={STYLES.item.container}>
                                    <div style={STYLES.item.main}>
                                        <span style={STYLES.number}>0{index}</span> // {project.title}
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div style={STYLES.section}>
                    <div style={STYLES.header.container}>
                        <h2 style={STYLES.header.main}>Concepts I've Covered</h2>
                    </div>
                    <div style={STYLES.item.container}>
                        <div style={STYLES.item.main}>Server-side rendering w/ React</div>
                    </div>
                    <div style={STYLES.item.container}>
                        <div style={STYLES.item.main}>Writing a server in Node and Koa</div>
                    </div>
                    <div style={STYLES.item.container}>
                        <div style={STYLES.item.main}>Implementing Realtime w/ RethinkDB</div>
                    </div>
                    <div style={STYLES.item.container}>
                        <div style={STYLES.item.main}>Developer Experience</div>
                    </div>
                    <div style={STYLES.item.container}>
                        <div style={STYLES.item.main}>Writing an App with React and Redux</div>
                    </div>
                    <div style={STYLES.item.container}>
                        <div style={STYLES.item.main}>Data Scraping</div>
                    </div>
                    <div style={STYLES.item.container}>
                        <div style={STYLES.item.main}>Uploading a React Component to NPM</div>
                    </div>
                    <div style={STYLES.item.container}>
                        <div style={STYLES.item.main}>Data Science</div>
                    </div>
                </div>
            </div>
        )
    }
}

ProjectList.propTypes = {
    changeText : PropTypes.func.isRequired,
    text       : PropTypes.string.isRequired,
    readOnly   : PropTypes.bool
}

ProjectList.defaultProps = {
    readOnly: false,
    changeText: () => {}
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
    item: {
        main: {
            textDecoration: 'underline',
            cursor: 'pointer'
        },
        container: {
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '0.55em'
        }
    },

    section: {
        marginBottom: '1em'
    },
    number: {
        color: '#BBBBBB'
    }
}

export default Radium(ProjectList);
