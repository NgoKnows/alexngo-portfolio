import React, { Component, PropTypes } from 'react'
import Radium from 'radium'

import Title from './Title'
import Projects from './Projects'
import About from './About'

class TitlePage extends Component {
    render() {
        const { actions, ...other } = this.props;

        return (
            <div style={STYLES.container}>
                <Title />
                <Projects actions={actions}/>
                <About />
            </div>
        )
    }
}

const STYLES = {
    container: {}
}

export default Radium(TitlePage);
