import React, { Component, PropTypes } from 'react'
import Radium from 'radium'

import SideNav from './SideNav'
import ProjectContent from './ProjectContent'
import ProjectList from './ProjectList'

class ProjectsPage extends Component {
    render() {
        return (
            <div style={STYLES.container}>
                <SideNav currentProject={"mcfj"}
                />
                <div style={STYLES.project}>
                    {"mcfj" ?
                        <ProjectContent key={"mcfj"} projectName={"mcfj"}/> :
                        <ProjectList />
                    }
                </div>
            </div>
        )
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
}

export default Radium(ProjectsPage);
