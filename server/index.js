import 'babel-polyfill';
import render from './renderHelper';
const express = require('express');
import axios from 'axios';
import { matchRoutes } from 'react-router-dom';
import createStore from './reduxstoreHelper';
import proxy from 'express-http-proxy'
import { routes } from '../Routes';
const cors = require('cors');
const app = express();

// app.use('/api',proxy('https://jsonplaceholder.typicode.com',{
//   proxyReqOptDecorator(options){
//     options.headers['x-forwarded-host'] = 'localhost:4000';
//     return options;
//   }
// }))
//  app.use(cors());
app.use((req, res, next) => {
  req.header('Access-Control-Allow-Origin', '*');
  next();
});
app.use(express.static('public'));
app.get('*', (req, res) => {
    const store = createStore();
    // const content = ;
    // Logic to intialize and load data in the store
    const promises = matchRoutes(routes, req.path).map(({route}) => {
        return route.loadData ? route.loadData(store) : null;
    })

    Promise.all(promises).then(()=>res.send(render(req, store))).catch(err => {});
    // // console.log(promises);
    // Promise.all(promises).then(() => {
    //     const context = {};
      
   
    //     if (context.url) {
    //         res.redirect(301, context.url);
    //     }
    //     if (context.notFound) {
    //         res.status(404);
    //     }
    //     res.send(content);
    // });
    // res.send(content);
});

app.listen(4444, () => {
    console.log('Listening on PORT 4444')
});