import "./BeforeLogin.css";
import React from "react";
import Login from '../Login/index';
import {HashRouter,Route} from 'react-router-dom';
function template() {
  return (
    <div className="before-login">
        <HashRouter>
          <Route path="/" exact component={Login}  />
          <Route path="/login" component={Login}  />
        </HashRouter>
    </div>
  );
};

export default template;
