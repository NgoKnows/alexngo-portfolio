import React, { Component, PropTypes } from 'react';
import EasyTransition from 'react-easy-transition';
import { BrowserRouter, Match, Miss, Link } from 'react-router'

import TitlePage from 'components/Title/TitlePage/TitlePage';
import ProjectsPage from 'components/Projects/ProjectsPage/ProjectsPage';
import Canvas from 'components/Splash/Particles/Canvas';
import Particles from 'components/Splash/Particles/Particles';

export default class App extends Component {
    static propTypes = {
        location: PropTypes.object.isRequired,
    }

    constructor(props) {
        super(props);
        this.pathname = props.location.pathname;
    }

    componentWillReceiveProps(nextProps) {
        // when to fade
        if (!nextProps.location.pathname.includes('projects') || !this.props.location.pathname.includes('projects')) {
            this.pathname = nextProps.location.pathname === this.pathname ? 'blah' : nextProps.location.pathname;
        }
    }

    render() {
        return (
            <div style={STYLES}>
                    <BrowserRouter>
                        <div>
                            <Match exactly pattern="/" component={TitlePage} />
                            <Match pattern="/projects" component={ProjectsPage} />
                            <Match pattern="projects/mcfj" />
                            <Match pattern="projects/everythingSports" />
                            <Match pattern="projects/yelp" />
                            <Match pattern="projects/calendar" />
                            <Match pattern="projects/portfolio" />
                            <Match pattern="projects/curato" />
                            <Match pattern="projects/nba" />
                            <Match pattern="projects/dataflow" />
                        </div>
                    </BrowserRouter>
            </div>
        );
    }
}

const STYLES = {
    fontFamily : "'Simplifica', 'sans-serif'",
};
