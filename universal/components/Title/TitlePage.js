import React, { Component, PropTypes } from 'react'
import Radium from 'radium'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as actions from 'universal/redux/actions/actions'

import Title from 'components/Title/Title'
import Projects from 'components/Title/Projects'
import About from 'components/Title/About'

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

TitlePage.propTypes = {}

TitlePage.defaultProps = {}

const STYLES = {
    container: {

    }
}

function mapStateToProps(state) {
    return {};
}

function mapDispatchToProps(dispatch) {
    return {
        actions : bindActionCreators(actions, dispatch)
    };
}

export default Radium(connect(mapStateToProps, mapDispatchToProps)(TitlePage));
