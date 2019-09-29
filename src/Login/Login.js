import React    from "react";
import store from '../store/store';
import template from "./Login.jsx";
import loginAction from '../actions/loginAction';
class Login extends React.Component {
  constructor(){
    super();
    this.state={
      dataObj:{
        
      },
      isValid:false,
      msg:''
    }
  }

  fnLogin(){
    let loginData=store.getState().userReducer.loginData;
    const {username,password}=this.state.dataObj
    if(loginData.username ==username && loginData.password ==password){
      loginAction(true);
      window.location.href="#/users";
    }else{
      loginAction(false);
      this.setState({
        msg:'Please check entered uid or password'
      })
    }
  }
  fnChange(e){
      const {id,value} =e.target;
      this.setState({
        dataObj:{
          ...this.state.dataObj,
          [id]:value
        }
      },this.fnValidate)
  }
  fnValidate(){
    const {username,password} =this.state.dataObj
    let _isValid=true;
    if(!username || !password){
      _isValid=false;
    }
    this.setState({
      isValid:_isValid
    })
  }
  render() {
    return template.call(this);
  }

 
}

export default Login;
