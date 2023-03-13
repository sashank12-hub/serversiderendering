import axios from 'axios'
export const FETCH_USERS = 'fetch_users';
export const fetchUsers = () => async (dispatch
  ) => {
  const res = await axios.get('http://localhost:4000/users'); 
  
  

 // it will call /api/users
  dispatch({
    type: FETCH_USERS,
    payload: res.data,
  });
};
