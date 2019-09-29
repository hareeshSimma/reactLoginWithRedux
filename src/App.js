import React from 'react';
import './App.css';
import {connect} from 'react-redux'
import Header from './Header/index';
import Footer from './Footer/index';
import BeforeLogin from './BeforeLogin/index';
import AfterLogin from './AfterLogin/index';
import AfterLoggedIn from './AfterLoggedIn/index'
function App(data) {
  debugger;
  if(!data.isLoggedIn && window.location.hash==='#/users'){
    window.location.href="#/login"
  }
  return (
    <div className="App">
            <Header />
              {
               data.isLoggedIn ? <AfterLoggedIn /> : <BeforeLogin />
              }
            <Footer />
    </div>
  );
}

const mapStateToProps=(state)=>{
  return {
     isLoggedIn:state.userReducer.isLoggedIn
  }
}

export default connect(mapStateToProps)(App);
