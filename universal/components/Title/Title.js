import React, { Component, PropTypes } from 'react'
import Radium, { Style } from 'radium'

import downArrow from 'images/down-arrow.svg'

class Title extends Component {
    render() {
        return (
            <div>
                <div style={STYLES.container}>
                    <h1 style={STYLES.text}>
                        <span className="line_wrap">
                            <span className="line"></span>
                            Alex Ngo // Full Stack Engineer // UI Nerd
                        </span>
                    </h1>
                </div>
                <img style={STYLES.arrow} src={downArrow} />
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
        alignItems: 'center',
        flexDirection: 'column'
    },

    text: {
        fontSize: '2.75em',
        fontWeight: 'normal',
        transition: 'text-decoration 0.15s ease-out',
    },

    arrow: {
        position: 'absolute',
        height: '3rem',
        top: 'calc(95vh - 3rem)',
        left: '50%'
    }
}

export default Radium(Title);
