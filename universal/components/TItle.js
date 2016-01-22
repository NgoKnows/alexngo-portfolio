import React, { Component, PropTypes } from 'react'
import Radium from 'radium'

class Title extends Component {
    render() {
        return (
            <div style={STYLES.container}>
                <div style={STYLES.text}>
                    Alex Ngo // Full Stack Engineer // UI Nerd
                </div>
            </div>
        )
    }
}

const STYLES = {
    container: {
        display: 'flex',
        fontSize: '1rem',
        height: '100vh',
        justifyContent: 'space-around',
        alignItems: 'center'
    },

    text: {
        'fontSize': '2.75em',
        ':hover': {
            textDecoration: 'line-through'
        },
    }
}

export default Radium(Title);
