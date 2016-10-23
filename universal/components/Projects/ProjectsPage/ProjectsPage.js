import React, { PropTypes } from 'react';
import EasyTransition from 'react-easy-transition';

import styles from './projects-page.css';

import SideNav from '../SideNav/SideNav';
import ProjectContent from '../ProjectContent/ProjectContent';
import ProjectList from '../ProjectList/ProjectList';

const ProjectsPage = (props) => {
    const { location } = props;
    const currentProject = location.pathname.split('/')[2];

    return (
        <div className={styles.container}>
            <SideNav currentProject={currentProject} />
            <div className={styles.project}>
                <EasyTransition
                    path={location.pathname}
                    initialStyle={{ opacity: 0 }}
                    transition="opacity 0.3s ease-in"
                    finalStyle={{ opacity: 1 }}
                >
                    {currentProject ?
                        <ProjectContent key={currentProject} projectName={currentProject} /> :
                        <ProjectList />
                    }
                </EasyTransition>
            </div>
        </div>
    );
};

ProjectsPage.propTypes = {
    location: PropTypes.object
};

export default ProjectsPage;
