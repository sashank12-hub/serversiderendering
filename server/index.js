import 'babel-polyfill';
import render from './renderHelper';
const express = require('express');
import { matchRoutes } from 'react-router-dom';
import createStore from './reduxstoreHelper';
import { routes } from '../Routes';
const app = express();

// app.use((req, res, next) => {
//   req.header('Access-Control-Allow-Origin', '*');
//   next();
// });
app.use(express.static('public'));
app.get('*', (req, res) => {
    const store = createStore();
    const promises = matchRoutes(routes, req.path).map(({route}) => {
        return route.loadData ? route.loadData(store) : null;
    }).map(promise=> {
        if(promise){
return  new Promise((resolve, reject) => {
    promise.then(resolve()).catch(resolve())
        })}});
       
 
    Promise.all(promises).then(()=>res.send(render(req, store))).catch(err => {});
});

app.listen(4444, () => {
    console.log('Listening on PORT 4444')
});