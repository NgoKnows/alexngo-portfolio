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

Tag.propTypes = {
    text : PropTypes.string,
}

Tag.defaultProps = {
    text : "Tag",
}

const STYLES = {
    container: {
        padding: '0.3rem 0.35rem 0.2rem 0.35rem',
        marginBottom: '0.5rem',
        marginRight: '0.5rem',
        borderRadius: '0px',
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
