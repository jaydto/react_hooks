import React from 'react'
import "./register.css"
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate=useNavigate();
    const handleSubmit=event=>{
      event.preventDefault();
  
      navigate("/",{replace:true});
    };
  return (
    <div className='movement'>
        <div className="register"></div>
        <div className="content">
            <div className="form overlay">
                <form action="" onSubmit={handleSubmit} className='inputs' >
                    <div className="logo">
                      <h1 className="logo__text">Library system</h1>
                      <p className="white">Welcome to our library system</p>
                      </div>
                    <input type="text" className="items1" name="" placeholder='First Name' id="" />
                    <input type="text" className="items1" name="" placeholder='Last Name' id="" />
                    <input type="text" className="items1" name="" placeholder='email' id="" />
                    <input type="text" className="items1" name="" placeholder='username' id="" />
                    <input type="password" className='items1' name="" placeholder='password' id="" />
                    <input type="password" className='items1' name="" placeholder='confirmation' id="" />

                    <button type="submit" className='btn btn-success'>Register</button>
                        
                </form>
                
                <Link to="/" className='white'>You have an account? Login</Link>
            </div>
        </div>
    </div>
  )
}

export default Register