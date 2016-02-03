import React, { Component, PropTypes } from 'react'
import Radium from 'radium'

class Project extends Component {
    render() {
        return (
            <div style={STYLES.container}>
                <h1>Looks like you got lost!</h1>
                <div>Click here to go to </div>
            </div>
        )
    }
}

Project.propTypes = {
    changeText : PropTypes.func.isRequired,
    text       : PropTypes.string.isRequired,
    readOnly   : PropTypes.bool
}

Project.defaultProps = {
    readOnly: false,
    changeText: () => {}
}

const STYLES = {
    container: {
        fontFamily : "'Simplifica', 'sans-serif'",
    }
}

export default Radium(Project);
