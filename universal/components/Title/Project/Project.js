import React, { Component, PropTypes } from 'react';
import Radium from 'radium'
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

class Project extends Component {
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
        const { name, flipped, title, description, tag, index, last } = this.props;
        console.log(styles);
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
                <div style={STYLES.image.container}>
                    <img
                        src={projectImages[name]}
                        alt={title}
                        style={[
                            STYLES.image.main,
                            hovering ? STYLES.image.hovering : {}
                        ]}
                    />
                </div>

                <div
                    style={[
                        STYLES.description.container,
                        flipped ? STYLES.description.flipped : {}
                    ]}
                >
                    <div
                        style={[
                            STYLES.tag.container,
                            flipped ? STYLES.tag.flipped : {}
                        ]}
                    >
                        <Tag text={tag} />
                    </div>
                    <div style={STYLES.title}>
                        <span style={STYLES.number}>0{index}</span> // {title}
                    </div>
                    <div style={STYLES.description.text}>
                        {description}
                    </div>
                </div>
            </div>
        );
    }
}

const STYLES = {
    image: {
        container: {
            alignItems: 'flex-start',
            display:'flex',
            justifyContent:'center',
            overflow:'hidden',
            width: '40%',
            '@media (max-width: 752px)': {
                height: '50%',
                width: '100%'
            },
        },

        main: {
            filter: 'grayscale(1)',
            flexShrink:'0',
            minHeight: '100%',
            transition: 'filter 0.15s ease-out',
            width:'100%'
        },

        hovering: {
            filter: 'none'
        }
    },

    description: {
        container: {
            boxSizing: 'border-box',
            padding: '0.5em 1em 1em 1em',
            width: '60%',
            borderWidth: '2px',
            borderStyle: 'solid solid solid none',
            borderColor: 'black',
            display: 'flex',
            flexDirection: 'column',
            '@media (max-width: 752px)': {
                borderStyle: 'none none none none',
                width: '100%',
                height: '50%'
            },
        },

        flipped: {
            alignItems: 'flex-end',
            borderStyle: 'solid none solid solid',
            textAlign: 'right'
        },

        text: {
            fontSize: '1.5em'
        }
    },

    tag: {
        container: {
            display: 'flex',
            justifyContent: 'flex-end',
            width: '100%'
        },

        flipped: {
            justifyContent: 'flex-start'
        }
    },

    title: {
        fontSize: '2.5em',
        marginBottom: '0.2em'
    },

    number: {
        color: '#BBBBBB'
    }
};

export default Radium(Project)
