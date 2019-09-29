import "./AfterLoggedIn.css";
import React from "react";
import {Route,HashRouter} from 'react-router-dom';
import Users from '../Users/index'
function template() {
  return (
    <div className="after-logged-in">
       <HashRouter>
         <div>
            <Route path="/users" component={Users} />
         </div>
       </HashRouter>
    </div>
  );
};

export default template;
