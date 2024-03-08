import { useState ,useEffect} from 'react';
import '../App.css'
import { useDispatch } from 'react-redux';
import { useSelector } from "react-redux";

import {createuserApI,userSelectors} from '../Redux/loginReducer'
import { useNavigate, NavLink } from 'react-router-dom';

function CreatePage() {
const disptach=useDispatch();

const {username,error}=useSelector(userSelectors)
  const navigation = useNavigate();


  const handleUsernameChange = (event) => {

  };

  const handlePasswordChange = (event) => {

  };
  const handleSubmit = (event) => {
    event.preventDefault()
    const formData = new FormData(event.target);
    const name = formData.get('name');
    const pass = formData.get('pass');
    console.log("Form-data:", name, pass);
    disptach(createuserApI({name,pass}))
  }
  useEffect(() => {
    if (username) {
        // User created successfully, redirect to login page
        navigation('/login')
        
    }
    else{
      navigation('/create')
      
    }
}, [username]);
  return (
    <div className="login-page">
      <div className="form">
        <div className="login">
          <div className="login-header">
            <h3>Create</h3>
            <p>Please enter your credentials to login.</p>
          </div>
        </div>
        {/* action="http://localhost:8009/api/Login/createuser" method="post" */}
        <form  method="post"  className="login-form" onSubmit={handleSubmit}>
          <input type="text" placeholder="username" name="name" />
          <input type="password" placeholder="password" name="pass" />
          <button type="submit">Create</button>
          <p className="message"><NavLink to="/login">Login</NavLink></p>
        </form>
      </div>
    </div>
  )
}

export default CreatePage