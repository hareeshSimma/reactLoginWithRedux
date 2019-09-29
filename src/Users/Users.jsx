import "./Users.css";
import React from "react";

function template() {
  return (
    <div className="users">
      <h1 class="text-center">Users</h1>
      <table class="table table-bordered table-striped table-hover">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
          {
          this.state && this.state.users && this.state.users.length !=0 &&   this.state.users.map((userObj,index)=>{
                  return <tr>
                    <td>{userObj.id}</td>
                    <td>{userObj.name}</td>
                    <td>{userObj.age}</td>
                    <td>{userObj.gender}</td>
                    <td>{userObj.email}</td>
                    <td>{userObj.phoneNo}</td>
                  </tr>
            })
          }
      </table>
    </div>
  );
};

export default template;
