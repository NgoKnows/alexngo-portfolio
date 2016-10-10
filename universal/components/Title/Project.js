import React, { Component, PropTypes } from 'react';
import Radium from 'radium';

import Tag from 'components/Title/Tag';

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
    portfolio
};

class Project extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hovering: false,
        };

        this.handleHover = this.handleHover.bind(this);
    }

    handleHover() {
        this.setState({
            hovering: !this.state.hovering
        });
    }

    render() {
        const { hovering } = this.state;
        const { name, flipped, title, description, tag, index, last } = this.props;

        return (
            <div
                onMouseEnter={this.handleHover}
                onMouseLeave={this.handleHover}
                style={[
                    STYLES.container.main,
                    flipped ? STYLES.container.flipped : {},
                    hovering ? STYLES.container.hovering : {},
                    last ? STYLES.container.last : {}
                ]}
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

Project.propTypes = {
    flipped     : PropTypes.bool,
    description : PropTypes.string.isRequired,
    name        : PropTypes.string.isRequired,
    title       : PropTypes.string.isRequired
};

Project.defaultProps = {
    flipped : false
};

const STYLES = {
    container: {
        main: {
            cursor: 'pointer',
            display: 'flex',
            flexDirection: 'row',
            fontSize: '1rem',
            height: '12rem',
            marginBottom: '10rem',
            transition: 'letter-spacing 0.15s ease-out',
            width: '90vw',
            '@media (max-width: 752px)': {
                flexDirection: 'column-reverse',
                height: '20rem'
            },
        },

        flipped: {
            flexDirection: 'row-reverse'
        },

        hovering: {
            letterSpacing: '0.075em'
        },

        last: {
            marginBottom: '6rem'
        }
    },

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

export default Radium(Project);
