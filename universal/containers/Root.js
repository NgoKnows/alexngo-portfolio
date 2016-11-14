import React, { Component } from 'react';
import { BrowserRouter, Match } from 'react-router';

import App from 'containers/App';
import TitlePage from 'components/Title/TitlePage/TitlePage';
import ProjectsPage from 'components/Projects/ProjectsPage/ProjectsPage';
// import Canvas from 'components/Splash/Particles/Canvas';
// import Particles from 'components/Splash/Particles/Particles';

export default class Root extends Component {
    render() {
        return (
            <BrowserRouter>
                <App>
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
                </App>
            </BrowserRouter>
        );
    }
}
