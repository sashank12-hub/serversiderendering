import { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchUser } from './actions';
import { Link } from 'react-router-dom';

// const Users = (props) => {
//   useEffect(() => {
  
//     if(props.users.length<=0){
//       props.fetch(); 
//     }
    
//   }, []);
//   return (
//     <>
//       <Link to="/home"> Home</Link>
//       <h1>user</h1>
    
//       {props.users && props.users?.map((user) => <p key={user.id}>{user.name}</p>)}

      
//     </>
//   );
// };
// export default withConnect(Users);

import React, { Component } from 'react'

 class Users extends Component {
  componentDidMount() {
    console.log('***')
this.props.fetch('comments');
}
  render() {
    console.log(this.props,'****')
    return (
      <>
      <div>Users</div>
      <Link to="/home"> Home</Link>
          
            {this.props.users && this.props.users?.map((user) => <p key={user.id}>{user.name}</p>)}
            </>
    )
  }
}
const mapStateToProps = (state) => ({
  users: state?.users,
});
const mapDispatchToProps = (dispatch) => ({
  fetch: (x) => dispatch(fetchUser(x)),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
Users.loadData = (store) => {
  return store.dispatch(fetchUser('users'));
};
if(typeof window !== 'undefined'){
  // export default React.memo(withConnect(Users));

}

export default withConnect(Users);