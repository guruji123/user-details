import React, { Component } from 'react';


export default class UserItem extends Component {
  constructor(props)
    {
      super(props);
      this.state ={isEdit:false, name:'', mobile:''}
      this.editUser = this.editUser.bind(this);
      this.editUserSubmit = this.editUserSubmit.bind(this);
      this.deleteUser = this.deleteUser.bind(this);
      this.validate = this.validate.bind(this);
      this.validateNum = this.validateNum.bind(this);
    }
    deleteUser(){
      const {id} = this.props.user;
      this.props.deleteUser(id);
    }
    editUser(){
      this.setState((prevState,props) => ({
        isEdit : !prevState.isEdit
      }))
    }
    editUserSubmit(props)
    {
      this.setState((prevState,props) => ({
        isEdit : !prevState.isEdit
      }));
      this.props.editUserSubmit(this.props.user.id,this.nameInput.value,this.mobileInput.value,this.emailInput.value);
    }
    validate(e){
      var test =/[a-zA-Z ]*$/;
      if(e.target.value.match(test)[0].length === 0){
        alert('Only text input allowed');
        return
      }else{
        this.setState({name:e.target.value})
      }
    }

    validateNum(e){
      let length = this.state.mobile.length;
      if(length>=10){
        alert('Mobile Number can not be more than 10 digits  ');
        return;
      }else{
        this.setState({mobile: e.target.value})
       
      }
    }
      render() {
          const {name,mobile,email} = this.props.user;
          return (
          this.state.isEdit === true ? 

          <tr className="bg-warning" key={this.props.index}>
            <td><input  type="text" name="name" onChange={this.validate} ref={nameInput => this.nameInput = nameInput} value ={this.state.name}/></td>
            <td><input  type="number" onChange={this.validateNum} name="country_code" ref={mobileInput => this.mobileInput = mobileInput} value={this.state.mobile} title="Error Message" pattern="[1-9]{1}[0-9]{9}"/></td>
            <td><input type="email" name="email" ref={emailInput => this.emailInput = emailInput} defaultValue={email} pattern="^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$"/></td>
            <td><i className="far fa-save" onClick={this.editUserSubmit}></i></td>
            <td><i className="fas fa-trash"></i></td>
          </tr>
          :
          <tr key={this.props.index}>
            <td>{name}</td>
            <td>{mobile}</td>
            <td>{email}</td>
            <td><i className="far fa-edit" onClick={this.editUser}></i></td>
            <td><i className="fas fa-trash" onClick={this.deleteUser}></i></td>
          </tr>
        );
      }
    }