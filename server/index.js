import 'babel-polyfill';
import render from './renderHelper';
const express = require('express');
import axios from 'axios';
import { matchRoutes } from 'react-router-dom';
import createStore from './reduxstoreHelper';
import proxy from 'express-http-proxy'
import { route } from '../Routes';
const cors = require('cors');
const app = express();

// app.use('/api',proxy('https://jsonplaceholder.typicode.com',{
//   proxyReqOptDecorator(options){
//     options.headers['x-forwarded-host'] = 'localhost:4000';
//     return options;
//   }
// }))
app.use(express.static('public'));
// app.use(cors());
app.get('*',(req, res) => {
  const store = createStore({},req);
  const promises = matchRoutes(route, req.path)?.map(({ route }) => {
    if (route?.element?.type?.loadData) {
      return route?.element?.type?.loadData(store);
    }
  });
  if(promises && promises.length){
    Promise.all(promises)
    .then(() => {
      const context = {};
        const content = render(req, store, context);
        if (context.url) {
            res.redirect(301, context.url);
        }
        res.send(content);
    })
    .catch((err) => {
  
    });
  }
  else{
    res.status(404);
    res.send(render(req, store, {},true));
  }
  
});
app.listen(4000, () => {});
