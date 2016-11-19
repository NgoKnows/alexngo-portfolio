import React, { Component, PropTypes } from 'react';
import styles from './side-nav.css';
import { Link } from 'react-router';
import classnames from 'classnames';

import CrossedOut from 'components/Reusable/CrossedOut/CrossedOut';

import projectsList from 'client/projects';

class SideNav extends Component {
    render() {
        const { selectedProjectName } = this.props;

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
                                <span className={classnames(styles.all, { [styles.selected]: !selectedProjectName })}>
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
        const { selectedProjectName } = this.props;

        return projectsList.map((project, index) => (
            <Link to={`/projects/${project.name}`} key={project.name}>
                <div
                    className={styles.number}
                >
                    <CrossedOut>
                        <div className={selectedProjectName === project.name ? styles.selected : {}}>
                            {`0${index}`}
                        </div>
                    </CrossedOut>
                </div>
            </Link>
        ));
    }
}

SideNav.propTypes = {
    selectedProjectName: PropTypes.string
};

export default SideNav;
