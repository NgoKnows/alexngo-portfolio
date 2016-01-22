import React, { Component, PropTypes } from 'react'
import Radium from 'radium'

import Header from 'components/Header'

class About extends Component {
    render() {
        return (
            <div style={STYLES.container}>
                <Header text="about"/>
                <div style={STYLES.about}>
                    Hi, I'm Alex Ngo and I'm currently an Informatics student
                    at the University of Washington. I really enjoy programming
                    and am constantly learning, right now I'm learning Node.js,
                    and React Native.
                </div>
                <div style={STYLES.linkContainer}>
                    <div style={STYLES.link}>GitHub</div>
                    <div style={STYLES.link}>LinkedIn</div>
                    <div style={STYLES.link}>Resume</div>
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
        margin: '1em 2.5em'
    },

    link: {
        border: '1px solid black',
        fontSize: '2em',
        margin: '0 1em',
        padding: '0.045em 0.2em'
    },
    linkContainer: {
        display: 'flex',
        justifyContent: 'center'
    }
}

export default Radium(About);
