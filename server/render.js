import React from 'react'
import { renderToString } from 'react-dom/server'
import { StyleRoot } from 'radium'
import { Router, match, RouterContext, createRoutes } from 'react-router';

import Error from 'universal/components/ErrorPage/ErrorPage'
import Root from 'universal/containers/Root'
import routes from 'universal/Routes'

export function *handleRender() {
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
                <Root routes={Router} />
            );

            this.body = renderFullPage(html)

        } else {
            this.body = renderToString(
                <Error />
            );
        }
    })
};

export function renderFullPage(html) {
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
        <script src="/bundle.js"></script>
      </body>
    </html>
    `
};
