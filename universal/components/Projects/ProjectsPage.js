import React, { Component, PropTypes } from 'react'
import Radium from 'radium'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as actions from 'universal/redux/actions/actions'

import SideNav from './SideNav'
import ProjectContent from './ProjectContent'
import ProjectList from './ProjectList'

import { VelocityTransitionGroup } from 'velocity-react'


class ProjectsPage extends Component {
    render() {
        const { actions, routing } = this.props;
        const currentProject = routing.location.pathname.split('/')[2];
        console.log(routing.location.pathname);
        console.log(currentProject)
        return (
            <div style={STYLES.container}>
                <SideNav actions={actions}
                         currentProject={routing.location.pathname.split('/')[2]}/>
                <div style={STYLES.project}>
                    <VelocityTransitionGroup component="div" enter={{animation: "slideDown"}} leave={{animation: "slideUp"}}>
                        {currentProject ? <ProjectContent key={currentProject} projectName={currentProject}/> : <ProjectList />}
                    </VelocityTransitionGroup>
                </div>
            </div>
        )
    }
}

ProjectsPage.propTypes = {}

ProjectsPage.defaultProps = {}

const STYLES = {
    container: {
        display: 'flex'
    },

    project: {
        margin: '1.5rem 1rem 0 1rem',
        width: '100%',
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

export default Radium(connect(mapStateToProps, mapDispatchToProps)(ProjectsPage));
