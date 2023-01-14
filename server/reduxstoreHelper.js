import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../client/reducers';
import axios from 'axios';
export default (initialState,req) => {
  // const axiosInstance =axios.create({
  //   baseURL : 'https://jsonplaceholder.typicode.com',
  //   headers :{cookie:req.get('cookie')||''}
  // })
  const store = createStore(reducers, initialState, applyMiddleware(thunk));
    // .withExtraArgument(axiosInstance)));
  return store;
};
