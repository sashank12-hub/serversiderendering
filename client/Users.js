import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchUser } from './actions';
import { Link } from 'react-router-dom';

const Users = ({ users, fetch }) => {
  useEffect(() => {
    // fetch(); //fetch in client side
  }, []);
  return (
    <div>
      <Link to="/home"> Home</Link>
      <h1>user</h1>
      {users && users.map((user) => <p key={user.id}>{user.name}</p>)}
    </div>
  );
};
const mapStateToProps = (state) => ({
  users: state?.users,
});
const mapDispatchToProps = (dispatch) => ({
  fetch: () => dispatch(fetchUser()),
});
Users.displayName = 'sashank';
Users.loadData = (store) => {
  return store.dispatch(fetchUser());
};
const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default withConnect(Users);
