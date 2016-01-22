import React, { Component, PropTypes } from 'react'
import Radium from 'radium'

class Tag extends Component {
    render() {
        const { text } = this.props;
        return (
            <div style={STYLES.container}>
                <div style={STYLES.text}>{text}</div>
            </div>
        )
    }
}

Tag.PropTypes = {
    changeText : PropTypes.func.isRequired,
    text       : PropTypes.string.isRequired,
    readOnly   : PropTypes.bool
}

Tag.defaultProps = {
    readOnly: false,
    changeText: () => {}
}

const STYLES = {
    container: {
        padding: '0.3rem 0.3rem 0.2rem 0.3rem',
        marginBottom: '0.5rem',
        marginRight: '0.5rem',
        borderRadius: '5px',
        backgroundColor: 'black',
        color: 'white',
        display: 'inline-block',
        fontSize: '1rem',
        border: '1px solid black'
    },

    text: {
        'fontSize': '1.25em'
    }
}

export default Radium(Tag);
