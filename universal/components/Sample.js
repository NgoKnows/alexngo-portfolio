import React, { Component, PropTypes } from 'react'
import Radium from 'radium'

class Project extends Component {
    render() {
        return (
            <div style={STYLES.container}>

            </div>
        )
    }
}

Project.PropTypes = {
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

    }
}

export default Radium(Project);