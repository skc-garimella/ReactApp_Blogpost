import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, browserHistory } from 'react-router';
import promise from 'redux-promise';
import reducers from './reducers';
import routes from './routes';


const createStoreWithMiddleware = applyMiddleware(promise)(createStore);


//History interface allows to manipulate the browser session history, that is the pages
//visited in the tab or frame that the current page is loaded in.
//browserHistory is the recommended history for browser application using react.

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory} routes={routes} />
  </Provider>
  , document.querySelector('.container'));
