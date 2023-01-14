import 'babel-polyfill';
import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import Routes from '../Routes';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import reducers from './reducers/index';
import { renderRoutes } from 'react-router-config';
import axios from 'axios';

// const axiosInstance = axios.create({
// baseURL :'/api'
// })

// const store = createStore(reducers, window.INITIAL_STATE, applyMiddleware(thunk));
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(

//   <Provider store={store}>
//     <Router>{<Routes />}</Router>
//   </Provider>
//   );
// const configStore =()=>{
//   if(!(window.store)){
//     window.INITIAL_STATE =window.INITIAL_STATE || {};
//    const store= createStore(reducers, (window.INITIAL_STATE), applyMiddleware(thunk
//     // .withExtraArgument(axiosInstance)
//     ));
//     window.store=store;
//   }
//   return store;
  
// } 
const store= createStore(reducers, (window.INITIAL_STATE), applyMiddleware(thunk));

hydrateRoot(
    document.querySelector('#root'),
    <Provider store={store}>
    <Router>{<Routes />}</Router>
  </Provider>)
