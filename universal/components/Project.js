import React, { Component, PropTypes } from 'react'
import Radium from 'radium'

import Tag from 'components/tag'

import calendar from 'images/calendar.png'
import everythingSports from 'images/everything-sports.png'
import mcfj from 'images/mcfj.png'
import yelp from 'images/yelp.jpg'

const projectImages = {
    calendar,
    everythingSports,
    mcfj,
    yelp
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
        const { name, flipped, title, description, tag, index } = this.props;

        return (
            <div onMouseEnter={this.handleHover}
                 onMouseLeave={this.handleHover}
                 style={[STYLES.container,
                 flipped ? STYLES.flipped : {},
                 hovering ? STYLES.hovering: {}]}
            >

                <div style={STYLES.imageContainer}>
                    <img src={projectImages[name]} alt={title} style={[STYLES.image, hovering ? STYLES.imageHovering: {}]}/>
                </div>

                <div style={[STYLES.descriptionContainer, flipped ? STYLES.flippedBorder : {}]}>
                    <div style={STYLES.tagContainer}>
                        <Tag text={tag} />
                    </div>
                    <div style={STYLES.title}>{index} // {title}</div>
                    <div style={STYLES.description}>{description}</div>
                </div>
            </div>
        )
    }
}

Project.PropTypes = {
    flipped: PropTypes.bool,
    image_url: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string
}

Project.defaultProps = {
    flipped: false
}

const STYLES = {
    container: {
        fontSize: '1rem',
        width: '90vw',
        height: '12rem',
        display: 'flex',
        marginBottom: '5rem',
        transition: 'letter-spacing 0.1s linear,'
    },

    notFlipped: {
        flexDirection: 'row'
    },

    flipped: {
        flexDirection: 'row-reverse'
    },

    imageContainer: {
        display:'flex',
        justifyContent:'center',
        alignItems: 'flex-start',
        overflow:'hidden',
        width: '40%'
    },

    image: {
        flexShrink:'0',
        width:'100%', /* you can use % */
        height: '100%',
        minHeight: '100%',
        filter: 'grayscale(1)',
        transition: '-webkit-filter 0.2s linear'
    },

    imageHovering: {
        filter: 'none'
    },

    descriptionContainer: {
        boxSizing: 'border-box',
        padding: '0.5em 1em 1em 1em',
        width: '60%',
        height: '100%',
        borderWidth: '5px',
        borderStyle: 'solid solid solid none',
        borderColor: 'black'
    },

    tagContainer: {
        display: 'flex',
        justifyContent: 'flex-end'
    },

    flippedBorder: {
        borderStyle: 'solid none solid solid',
    },

    title: {
        fontSize: '2.25em',
        marginBottom: '0.2em'
    },

    description: {
        fontSize: '1.5em'
    },

    hovering: {
        letterSpacing: '0.1em'
    }
}

export default Radium(Project);
