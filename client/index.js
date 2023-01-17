import 'babel-polyfill';
import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import Routes from '../Routes';
import { BrowserRouter as Router } from 'react-router-dom';
import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import reducers from './reducers/index';
const store = createStore(reducers, window.INITIAL_STATE, applyMiddleware(thunk));
const configStore = (initialState) => {
  const store = createStore(reducers, initialState, applyMiddleware(thunk));
  window.store = store;

  return store;

}
hydrateRoot(document.querySelector('#root'), <Provider store={configStore(window.INITIAL_STATE)}>

  <Router><div><Routes /></div></Router>
</Provider>)
