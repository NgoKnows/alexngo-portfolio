import React, { Component, PropTypes } from 'react';
import styles from './side-nav.css';
import { Link } from 'react-router';

import CrossedOut from 'components/Reusable/CrossedOut/CrossedOut';

import projectsList from 'client/projects';

class SideNav extends Component {
    render() {
        const { currentProject } = this.props;

        return (
            <div className={styles.container}>
                <Link to="/">
                    <div className={styles.backArrow}>
                        &#8592;
                    </div>
                </Link>

                <div className={styles.numberContainer}>
                    <Link to="/projects">
                        <div className={styles.number}>
                            <CrossedOut>
                                <span
                                    className={[
                                        styles.all,
                                        !currentProject ? styles.selected : {}
                                    ]}
                                >
                                    all
                                </span>
                            </CrossedOut>
                        </div>
                    </Link>
                    {this.renderMenuNumbers()}
                </div>
            </div>
        );
    }

    renderMenuNumbers() {
        const { currentProject } = this.props;
        return projectsList.map((project, index) => {
            return (
                <Link to={`/projects/${project.name}`} key={project.name}>
                    <div
                        className={styles.number}
                    >
                        <CrossedOut>
                            <div className={currentProject === project.name ? styles.selected : {}}>
                                {`0${index}`}
                            </div>
                        </CrossedOut>
                    </div>
                </Link>
            );
        });
    }
}

SideNav.propTypes = {
    currentProject: PropTypes.string
};

export default SideNav;
