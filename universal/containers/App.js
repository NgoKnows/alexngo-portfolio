import React, { Component, PropTypes } from 'react'
import Radium from 'radium'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as actions from '../redux/actions/actions'

class App extends Component {
    render() {
        const { actions, routing, ...other } = this.props;

        return (
            <div style={STYLES}>
                    {React.cloneElement(this.props.children, {
                        key: routing.location.pathname
                    })}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        routing: state.get('routing')
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions : bindActionCreators(actions, dispatch)
    };
}

const STYLES = {
    fontFamily : "'Simplifica', 'sans-serif'",
}

export default Radium(connect(mapStateToProps, mapDispatchToProps)(App));
