import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from 'containers/App';
import TitlePage from 'components/Title/TitlePage/TitlePage';
import ProjectsPage from 'components/Projects/ProjectsPage/ProjectsPage';
import Error from 'components/ErrorPage/ErrorPage';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={TitlePage} />
        <Route path="projects" component={ProjectsPage}>
            <Route path="mcfj" />
            <Route path="everythingSports" />
            <Route path="yelp" />
            <Route path="calendar" />
            <Route path="portfolio" />
            <Route path="curato" />
            <Route path="nba" />
            <Route path="dataflow" />
        </Route>
        <Route path="*" component={Error} />
    </Route>
);
