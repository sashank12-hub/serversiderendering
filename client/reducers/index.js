import { FETCH_USERS } from '../actions';
import { combineReducers } from 'redux';

const users = (state = {users:[]}, action) => {
  switch (action.type) {
    case FETCH_USERS:
      //console.log('users',action.payload)
      return {...state,users:action.payload}
    default:
      return state;
  }
};

export default combineReducers({
  users,
});
