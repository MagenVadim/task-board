import React from 'react'
import {Link} from 'react-router-dom'
import styles from './Login.css'

export const Login = () => {
  return (
    <div className="registr-container">


      <div className='login-box'>
        <div className="input-box">
          <label className='username-input'>
                <input 
                  type="text" 
                  placeholder="Email"
                  name="input-text"
                  className='input-login'
                />
            </label>
            <label className='password-input'>
                <input 
                  type="text" 
                  placeholder="Password"
                  name="input-text"
                  className='input-login'
                />
            </label>
        </div>

        <Link to={`/forgotpassw`}>
          <p className='forgot-passw'>Forgot password?</p>
        </Link>       

        <Link to={`/home`}>
          <button className='btn-login'>
            Login
          </button>     
        </Link>    
  
      </div>


    </div>
    
  )
}

