import React, { Component } from 'react';
import UserItem from './UserItem.js';

export default class UserList extends Component {
    render() {
        let users = this.props.userList;
        const details = users.map( (item,index) => 
          <UserItem 
            key={index} 
            user={item} 
            index={index} 
            editUserSubmit={this.props.editUserSubmit} 
            deleteUser={this.props.deleteUser}

          />
    )
      return (
            <tbody>{details}</tbody>
      );
    }
  }