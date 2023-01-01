import React from 'react';
import { StaticRouter } from 'react-router-dom/server';
import Routes from '../Routes';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import NotFound from '../client/NotFound';
// import { json } from 'react-router-dom';

/** context is required prop to be pased
 * in browser we will have url to browserrouter of react will know which page to show
 * but for server we need to pass location as below so taht it will know which path to choose for html generation
 */
const render = (req, store = {}, context = {}, isNotFound = false) => {
  let content;
  if (!isNotFound) {
    content = renderToString(
      <Provider store={store}>

        <StaticRouter location={req.path}>{<Routes />}</StaticRouter>
      </Provider>


    );
  }
  else {
    content = renderToString(
      <Provider store={store}>

        <NotFound />
      </Provider>

    )
  }
    return ` <html>
  <head>
  <link rel="icon" href="favicon.ico"/>
  </head>
  <body>
    <div id="root">${content}</div>
    <script src="bundle.js"></script>
    <script> window.INITIAL_STATE = ${JSON.stringify(store.getState())}</script>
  </body>
</html>`
  
  ;
};
export default render;
