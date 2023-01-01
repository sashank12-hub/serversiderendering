import 'babel-polyfill';
import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import Routes from '../Routes';
import { BrowserRouter as Router } from 'react-router-dom';
import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import reducers from './reducers/index';
import { renderRoutes } from 'react-router-config';

if(window && window.INITIAL_STATE){
  const configStore =()=>{
    if(!(window.store)){
      window.INITIAL_STATE =window.INITIAL_STATE || {};
      const store= createStore(reducers, JSON.parse(window.INITIAL_STATE), applyMiddleware(thunk));
      window.store=store;
    }
    return store;
    
  } 
  hydrateRoot(
    document.getElementById('root'),
    <Provider store={configStore()}>
      <Router>{<Routes />}</Router>
    </Provider>
  );
}

