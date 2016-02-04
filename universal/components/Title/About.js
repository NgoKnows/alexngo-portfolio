import React, { Component, PropTypes } from 'react'
import Radium from 'radium'

import Header from 'components/Header'

import resume from 'client/files/resume.pdf'


class About extends Component {
    render() {
        return (
            <div style={STYLES.container}>
                <Header text="about"/>
                <div style={STYLES.about}>
                    Hi, I'm Alex Ngo and I'm currently an Informatics student
                    at the University of Washington. I am currently looking
                    for a full time software engineering position.
                </div>
                <div style={STYLES.link.container}>
                        <a style={STYLES.link.main}
                           href="https://github.com/NgoKnows">
                            Github
                        </a>
                        <a style={STYLES.link.main}
                           href="https://www.linkedin.com/in/alexhngo">LinkedIn
                        </a>
                        <a style={STYLES.link.main}
                           href={resume}>
                            Resume
                        </a>
                </div>
            </div>
        )
    }
}

const STYLES = {
    container: {
        fontSize: '1rem',
        marginBottom: '2rem'
    },

    about: {
        fontSize: '2em',
        margin: '0 3em 2em 3em'
    },

    link: {
        container: {
            display: 'flex',
            justifyContent: 'center'
        },
        main: {
            fontSize: '2em',
            margin: '0 1em',
            padding: '0.1em 0.2em 0.05em 0.2em',
            textDecoration: 'underline'
        }
    }
}

export default Radium(About);
