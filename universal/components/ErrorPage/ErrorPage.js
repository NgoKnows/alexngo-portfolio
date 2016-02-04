import React, { Component, PropTypes } from 'react'
import Radium from 'radium'

class ErrorPage extends Component {
    render() {
        return (
            <div style={STYLES.container}>
                <h1>Looks like you got lost!</h1>
                <div>Click here to go to </div>
            </div>
        )
    }
}

const STYLES = {
    container: {
        fontFamily : "'Simplifica', 'sans-serif'",
    }
}

export default Radium(ErrorPage);
