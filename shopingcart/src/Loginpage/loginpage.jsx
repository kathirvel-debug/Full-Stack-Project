import { useState,useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from "react-redux";
import '../App.css'
import {signInAPI,userSelectors} from '../Redux/userLoginReducer'

import { useNavigate,NavLink } from 'react-router-dom';

function Loginpage(){
    const disptach=useDispatch();
    
    const {user,usererror,userId}=useSelector(userSelectors)
    const navigation=useNavigate();
    
    
    const handleSubmit = (event) => {
      event.preventDefault()
      const formData = new FormData(event.target);
      const name = formData.get('username');
      const pass = formData.get('password');
      console.log("Form-data:", name, pass);
      disptach(signInAPI({name,pass}))
    
    }
    useEffect(() => {
      if (user) {
          // User created successfully, redirect to login page
          navigation('/')
          
      }
      else{
       console.log("invalid")
      }
  }, [user]);
return(
    <div className="login-page">
      <div className="form">
        <div className="login">
          <div className="login-header">
           
            <h3>login</h3>
            <p>Please enter your credentials to login.</p>
          </div>
        </div>
        <form className="login-form" onSubmit={handleSubmit} >
          <input type="text" placeholder="username"   
           name='username' />
          <input type="password" placeholder="password"
            name='password'/>
          <button type='submit'>Login</button>
          <p className="message">Not registered? <NavLink to="/create">Create an account</NavLink></p>
        </form> 
      </div>
    </div>
)
}

export  default Loginpage