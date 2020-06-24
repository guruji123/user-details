import React, { Component } from 'react';
//import './App.css';
import UserList from './UserList.js';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {addUser,deleteUser,updateUser} from './userActions'

class App extends Component {
  constructor(props)
  {
    super(props);
    this.addNewUser = this.addNewUser.bind(this);
    this.deleteUser = this.deleteUser.bind(this);
    this.editUserSubmit = this.editUserSubmit.bind(this);
  }
  componentWillMount(){

  }
  addNewUser()
  {
this.props.addUser({id:Math.max(...this.props.userList.map(function(o){return o.id})) + 1,name:'',mobile:"",email:''});
  }

  deleteUser(id)
  {
    let r = window.confirm("Do you want to delete this item");
    if( r === true)
    {
    this.props.deleteUser(id);
   
  }
  }
  editUserSubmit(id,name,mobile,email)
  {
this.props.updateUser({id:id,name:name,mobile:mobile,email:email});
  }
  render() {
    return (
      <div className="container-fluid">
        <div className="row mt-3">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-header">
                  User details
              </div>
                <div className="card-body">
                  <table className="table table-hover">
                          <thead className="thead-dark">
                                <tr>
                                  <th>Name</th>
                                  <th>Mobile Number</th>
                                  <th>Email</th>
                                  <th>Edit/Save</th>
                                  <th>Delete</th>
                                </tr>
                          </thead>
                          <UserList deleteUser={this.deleteUser} 
                                    userList={this.props.userList} 
                                    editUserSubmit={this.editUserSubmit}

                                  />
                  </table>
                      <button className="btn btn-dark pull-left" onClick={this.addNewUser}>Add New</button>
                </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userList : state
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    addUser:addUser,
    deleteUser:deleteUser,
    updateUser:updateUser
  },dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
