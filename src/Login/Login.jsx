import "./Login.css";
import React from "react";

function template() {
  return (
    <div className="login container-fluid">
        <h1 className="text-center m-b-50">Login</h1>
         <div class="row form-group">
               <div className="col-sm-5 text-right">
                      <b>User Name:</b>
               </div>
               <div className="col-sm-3">
                 <input className="form-control" id='username' onChange={this.fnChange.bind(this)} />
               </div>
           </div> 
           <div class="row form-group">
               <div className="col-sm-5 text-right">
                      <b>Password:</b>
               </div>
               <div className="col-sm-3">
                 <input className="form-control" id='password' type='password' onChange={this.fnChange.bind(this)} />
               </div>
           </div> 
           <div class="row from-group">
               <div className="offset-sm-5 col-sm-7 ">
                 <input onClick={this.fnLogin.bind(this)} disabled={!this.state.isValid} type='button' value='login' className='btn btn-primary' />
               </div>
           </div>
           <div class="row from-group">
               <div className="col-sm-12 text-center">
                  <b className='text-danger'>{this.state.msg}</b>
               </div>
           </div>
    </div>
  );
};

export default template;
