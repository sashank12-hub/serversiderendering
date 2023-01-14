import axios from 'axios'
export const FETCH_USERS = 'fetch_users';
export const fetchUser = (x) => async (dispatch,getState,
  // axiosInstance
  ) => {
  const res = await axios.get(`https://jsonplaceholder.typicode.com/${x}`);  // it will call /api/users
  dispatch({
    type: FETCH_USERS,
    payload: res.data.slice(0,11),
  });
};
