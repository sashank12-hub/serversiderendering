import React from "react";
import { connect } from "react-redux";
import { fetchUsers } from './actions';

class UsersList extends React.Component {
  componentDidMount() {
     this.props.fetch();
  }
renderUsers(){
  return this.props.users.length>0 && this.props.users?.map(user=><li key ={user.id}>{user.name}</li>)
}
    render() {
        return (
            <div>
               
                List of Users -
              <ul>{this.renderUsers()}</ul>
            </div>
        );
    }
}
const mapStateToProps = (state) => ({
    users: state?.users?.users,
  });
  const mapDispatchToProps = (dispatch) => ({
    fetch: ()=>dispatch(fetchUsers()),
  });

const loadData = (store) => {
    return store.dispatch(fetchUsers());
};

export default {
    loadData,
    element: connect(mapStateToProps, mapDispatchToProps)(UsersList),
};
