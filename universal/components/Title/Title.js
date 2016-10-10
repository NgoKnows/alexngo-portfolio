import React, { Component } from 'react';
import Radium from 'radium';

import CrossedOut from 'components/CrossedOut';
import downArrow from 'images/down-arrow.svg';

class Title extends Component {
    render() {
        return (
            <div>
                <div style={STYLES.container}>
                    <h1 style={STYLES.text}>
                        <CrossedOut>
                            Alex Ngo // Full Stack Engineer // UI Nerd
                        </CrossedOut>
                    </h1>
                </div>
                <img style={STYLES.arrow} src={downArrow} />
            </div>
        );
    }
}

const STYLES = {
    container: {
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        fontSize: '1rem',
        height: '100vh',
        justifyContent: 'space-around',
    },

    text: {
        fontSize: '2.75em',
        fontWeight: 'normal',
        transition: 'text-decoration 0.15s ease-out',
    },

    arrow: {
        height: '3.5rem',
        left: '50%',
        position: 'absolute',
        top: 'calc(95vh - 3rem)'
    }
};

export default Radium(Title);
