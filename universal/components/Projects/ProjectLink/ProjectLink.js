import React, { PropTypes } from 'react';
import styles from './project-link.css';

import { Link } from 'react-router';

const ProjectLink = (props) => (
    <Link to={props.path}>
        <div className={styles.container}>
            <div className={styles.item}>
                {props.children || props.text}
            </div>
        </div>
    </Link>
);

ProjectLink.propTypes = {
    path: PropTypes.string.isRequired,
    text: PropTypes.string,
    children: PropTypes.node
};

export default ProjectLink;
