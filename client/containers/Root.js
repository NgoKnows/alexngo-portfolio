import React, { Component } from 'react';
import { BrowserRouter, Match } from 'react-router';

import App from 'containers/App';
import TitlePage from 'components/Title/TitlePage/TitlePage';
import ProjectsPage from 'components/Projects/ProjectsPage/ProjectsPage';

export default class Root extends Component {
    render() {
        return (
            <BrowserRouter>
                <App>
                    <Match exactly pattern="/" component={TitlePage} />
                    <Match pattern="/projects/:projectName*" component={ProjectsPage} />
                </App>
            </BrowserRouter>
        );
    }
}
