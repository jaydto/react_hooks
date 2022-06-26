import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./login.css"
const Login = () => {
  const navigate=useNavigate();
  const handleSubmit=event=>{
    event.preventDefault();

    navigate("/home",{replace:true});
  };
 
  return (
    <div className="page__login">
<div className="image"></div>
   <div className='login'>
        <div className="content">
            <div className="form">
                <form action="" onSubmit={handleSubmit} className='inputs' >
                    <div className="logo">
                      <h1 className="logo__text">Library system</h1>
                      <p className="white">Welcome to our library system</p>
                      </div>
                    <input type="text" className="items1" name="" placeholder='username' id="" />
                    <input type="password" className='items1' name="" placeholder='******' id="" />
                    <button type="submit" className='btn btn-success'>submit</button>
                        
                </form>
                
                <Link to="/register" className='white'>You dont have an account? Register</Link>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Login