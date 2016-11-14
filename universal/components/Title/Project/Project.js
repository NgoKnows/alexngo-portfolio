import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import styles from './project.css';

import Tag from 'components/Title/Tag/Tag';

import curato from 'images/curato.png';
import dataflow from 'images/dataflow.png';
import nba from 'images/nba.png';
import mcfj from 'images/mcfj.png';
import everythingSports from 'images/everything-sports.png';
import yelp from 'images/yelp.png';
import calendar from 'images/calendar.png';
import portfolio from 'images/portfolio.png';

const projectImages = {
    mcfj,
    everythingSports,
    yelp,
    calendar,
    portfolio,
    nba,
    curato,
    dataflow
};

export default class Project extends Component {
    static propTypes = {
        flipped: PropTypes.bool,
        description: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        tag: PropTypes.string.isRequired,
        index: PropTypes.number.isRequired,
        last: PropTypes.bool.isRequired
    };

    static defaultProps = {
        flipped: false
    };

    state = {
        hovering: false
    };

    constructor(props) {
        super(props);
        this.handleHover = this.handleHover.bind(this);
    }

    handleHover() {
        this.setState({ hovering: !this.state.hovering });
    }

    render() {
        const { hovering } = this.state;
        const { name, flipped, title, description, tag, index, last, color } = this.props;

        return (
            <div
                onMouseEnter={this.handleHover}
                onMouseLeave={this.handleHover}
                className={classnames(styles.container, {
                    [styles.flipped]: flipped,
                    [styles.hovering]: hovering,
                    [styles.last]: last
                })}
            >
                <div className={styles.imageContainer}>
                    <img
                        src={projectImages[name]}
                        alt={title}
                        className={classnames(styles.image, {
                            [styles.imageHovering]: hovering
                        })}
                    />
                </div>

                <div
                    className={classnames(styles.descriptionContainer, {
                        [styles.descriptionFlipped]: flipped
                    })}
                >
                    <div
                        className={classnames(styles.tagContainer, {
                            [styles.tagFlipped]: flipped
                        })}
                    >
                        <Tag text={tag} />
                    </div>
                    <div className={styles.title}>
                        <span className={styles.number}>0<span style={{}}>{index}</span></span> // {title}
                    </div>
                    <div className={styles.descriptionText}>
                        {description}
                    </div>
                </div>
            </div>
        );
    }
}
