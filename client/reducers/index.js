import { FETCH_USERS } from '../actions';
import { combineReducers } from 'redux';

const users = (state = [], action) => {
  switch (action.type) {
    case FETCH_USERS:
      return action?.payload;
    default:
      return state;
  }
};

export default combineReducers({
  users,
});
