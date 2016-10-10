import React, { Component, PropTypes } from 'react'
import Radium from 'radium';

import SideNav from './SideNav';
import ProjectContent from './ProjectContent';
import ProjectList from './ProjectList';

class ProjectsPage extends Component {
    render() {
        const currentProject = this.props.location.pathname.split('/')[2];

        return (
            <div style={STYLES.container}>
                <SideNav currentProject={currentProject} />
                <div style={STYLES.project}>
                    {currentProject ?
                        <ProjectContent key={currentProject} projectName={currentProject} /> :
                        <ProjectList />
                    }
                </div>
            </div>
        );
    }
}

const STYLES = {
    container: {
        display: 'flex'
    },

    project: {
        margin: '1.5rem 1rem 0 1rem',
        width: '100%',
    }
};

export default Radium(ProjectsPage);
