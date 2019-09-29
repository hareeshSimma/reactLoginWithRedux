import React    from "react";
import template from "./Users.jsx";
import store from '../store/store';
class Users extends React.Component {
  constructor(){
    super();
    this.state={
      users:[]
    }
  }
  render() {
    return template.call(this);
  }
  componentDidMount(){
    debugger;
     let users=store.getState().userReducer.userData;
     
     this.setState({
       users:users.user
     })
  }
}

export default Users;
