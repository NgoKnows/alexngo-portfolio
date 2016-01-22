import React, { Component, PropTypes } from 'react'
import Radium from 'radium'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as actions from '../redux/actions/actions'

import Title from '../components/Title'
import Projects from '../components/Projects'
import About from '../components/About'

class App extends Component {
    render() {
        const { actions, ...other } = this.props;

        return (
            <div style={STYLES}>
                <Title />
                <Projects />
                <About />
                {this.props.children}
            </div>
        );
    }
}

App.propTypes = {}

function mapStateToProps(state) {
    return {
        blah : state.get('blah')
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions : bindActionCreators(actions, dispatch)
    };
}

const STYLES = {
    fontFamily : "'Simplifica', 'sans-serif'"
}

export default Radium(connect(mapStateToProps, mapDispatchToProps)(App));
