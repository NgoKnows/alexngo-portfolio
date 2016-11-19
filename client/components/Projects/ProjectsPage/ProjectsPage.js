import React, { PropTypes } from 'react';

import styles from './projects-page.css';

import SideNav from '../SideNav/SideNav';
import ProjectContent from '../ProjectContent/ProjectContent';
import ProjectList from '../ProjectList/ProjectList';

const ProjectsPage = (props) => {
    const { params } = props;

    const selectedProjectName = params.projectName === 'undefined' ? undefined : params.projectName;

    return (
        <div className={styles.container}>
            <SideNav selectedProjectName={selectedProjectName} />
            <div className={styles.project}>
                {selectedProjectName ?
                    <ProjectContent key={selectedProjectName} projectName={selectedProjectName} /> :
                    <ProjectList />
                }
            </div>
        </div>
    );
};

ProjectsPage.propTypes = {
    params: PropTypes.object
};

export default ProjectsPage;
