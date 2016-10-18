import React, { Component, PropTypes } from 'react'
import Radium from 'radium';
import EasyTransition from 'react-easy-transition';

import SideNav from './SideNav';
import ProjectContent from './ProjectContent';
import ProjectList from './ProjectList';

class ProjectsPage extends Component {
    render() {
        const { location } = this.props;
        const currentProject = location.pathname.split('/')[2];

        return (
            <div style={STYLES.container}>
                <SideNav currentProject={currentProject} />
                <div style={STYLES.project}>
                    <EasyTransition
                        path={location.pathname}
                        initialStyle={{opacity: 0}}
                        transition="opacity 0.3s ease-in"
                        finalStyle={{opacity: 1}}
                    >
                            {currentProject ?
                                <ProjectContent key={currentProject} projectName={currentProject} /> :
                                <ProjectList />
                            }
                    </EasyTransition>
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
