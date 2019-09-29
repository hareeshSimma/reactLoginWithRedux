import "./AfterLogin.css";
import React from "react";
import Users from '../Users/index'
import {HashRouter,Route} from 'react-router-dom';
function template() {
  return (
    <div className="after-login">
      <HashRouter>
          <Route path="/users" component={Users} />
      </HashRouter>
    </div>
  );
};

export default template;
