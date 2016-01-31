import React, { Component, PropTypes } from 'react'
import Radium from 'radium'

import Tag from 'components/title/tag'

import mcfj from 'images/mcfj.png'
import everythingSports from 'images/everything-sports.png'
import yelp from 'images/yelp.png'
import calendar from 'images/calendar.png'
import portfolio from 'images/portfolio.png'

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
        })
    }

    render() {
        const { hovering } = this.state;
        const { name, flipped, title, description, tag, index, last, handleClick } = this.props;

        return (
            <div onMouseEnter={this.handleHover}
                 onMouseLeave={this.handleHover}
                 onClick={handleClick}
                 style={[STYLES.container.main,
                 flipped ? STYLES.container.flipped : {},
                 hovering ? STYLES.container.hovering : {},
                 last ? STYLES.container.last : {}]}
            >

                <div style={STYLES.image.container}>
                    <img src={projectImages[name]}
                         alt={title}
                         style={[STYLES.image.main,
                         hovering ? STYLES.image.hovering: {}]}
                    />
                </div>

                <div style={[STYLES.description.container,
                flipped ? STYLES.description.flipped : {}]}
                >
                    <div style={[STYLES.tag.container,
                    flipped ? STYLES.tag.flipped : {}]}
                    >
                        <Tag text={tag} />
                    </div>
                    <div style={STYLES.title}>
                        {index} // {title}
                    </div>
                    <div style={STYLES.description.text}>
                        {description}
                    </div>
                </div>
            </div>
        )
    }
}

Project.propTypes = {
    flipped     : PropTypes.bool,
    description : PropTypes.string.isRequired,
    name        : PropTypes.string.isRequired,
    title       : PropTypes.string.isRequired
}

Project.defaultProps = {
    flipped : false
}

const STYLES = {
    container: {
        main: {
            fontSize: '1rem',
            width: '90vw',
            height: '12rem',
            display: 'flex',
            cursor: 'pointer',
            marginBottom: '10rem',
            transition: 'letter-spacing 0.15s ease-out',
            flexDirection: 'row',
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
            display:'flex',
            justifyContent:'center',
            alignItems: 'flex-start',
            overflow:'hidden',
            width: '40%',
            '@media (max-width: 752px)': {
                height: '50%',
                width: '100%'
            },
        },

        main: {
            flexShrink:'0',
            width:'100%',
            minHeight: '100%',
            filter: 'grayscale(1)',
            transition: 'filter 0.15s ease-out'
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
            borderStyle: 'solid none solid solid',
            alignItems: 'flex-end',
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
    }
}

export default Radium(Project);
