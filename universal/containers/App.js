import React, { Component, PropTypes } from 'react';
import EasyTransition from 'react-easy-transition';
import { BrowserRouter, Match, Miss, Link } from 'react-router'

import TitlePage from 'components/Title/TitlePage/TitlePage';
import ProjectsPage from 'components/Projects/ProjectsPage/ProjectsPage';
import Canvas from 'components/Canvas';
import Particles from 'components/Particles';

export default class App extends Component {
    static propTypes = {
        location: PropTypes.object.isRequired,
    }

    constructor(props) {
        super(props);
        this.pathname = props.location.pathname;
    }

    componentWillReceiveProps(nextProps) {
        console.log('cwrp');
        if (!nextProps.location.pathname.includes('projects') || !this.props.location.pathname.includes('projects')) {
            console.log('here');
            this.pathname = nextProps.location.pathname;
        }
    }

    render() {
        return (
            <div style={STYLES}>
                {/* <EasyTransition
                    path={this.pathname}
                    initialStyle={{ opacity: 0 }}
                    transition="opacity 0.25s ease-in"
                    finalStyle={{ opacity: 1 }}
                > */}
                    <Canvas height={1500} width={2000} style={{ height: '1500px', width: '2000px', position: 'absolute', top: 0 }}>
                        <Particles />
                    </Canvas>
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
                {/* </EasyTransition> */}
            </div>
        );
    }
}

const STYLES = {
    fontFamily : "'Simplifica', 'sans-serif'",
};
