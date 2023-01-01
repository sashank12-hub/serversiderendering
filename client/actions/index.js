import axios from 'axios';

export const FETCH_USERS = 'fetch_users';
export const fetchUser = () => async (dispatch) => {
  const res = await axios.get('https://jsonplaceholder.typicode.com/users');
  dispatch({
    type: FETCH_USERS,
    payload: res.data,
  });
};
