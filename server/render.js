import React from 'react'
import { renderToString } from 'react-dom/server'
import { createStore } from 'redux'
import { StyleRoot } from 'radium'
import { Router, match, RouterContext, createRoutes } from 'react-router';

import Error from 'universal/components/ErrorPage/ErrorPage'
import Root from 'universal/containers/Root'
import composeStore from 'universal/CreateStore'
import routes from 'universal/Routes'

export function *handleRender() {
    // Create a new Redux store instance
    const store = composeStore(this.url);

    // Grab the initial state from our Redux store
    const initialState = store.getState()

    match({ routes: [routes], location: this.url }, (error, redirectLocation, renderProps) => {
        if (error) {
            this.body = error.message

        } else if (redirectLocation) {
            this.body = "Would Redirect to " + redirectLocation.pathname

        } else if (renderProps) {
            const radiumConfig = {userAgent: this.headers['user-agent']};
            const Router = (
                <StyleRoot radiumConfig={radiumConfig}>
                    <RouterContext {...renderProps} />
                </StyleRoot>
            );
            const html = renderToString(
                <Root store={store} routes={Router} />
            );

            this.body = renderFullPage(html, initialState)

        } else {
            this.body = renderToString(
                <Error />
            );
        }
    })
};

export function renderFullPage(html, initialState) {
    return `
   <!DOCTYPE html>
    <html lang="en">
      <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>Alex Ngo</title>
      </head>
      <body>
        <div id="root">${html}</div>
        <script>
          window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}
        </script>
        <script src="/bundle.js"></script>
      </body>
    </html>
    `
};
