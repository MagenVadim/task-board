import React from 'react'
import styles from './Login.css'

export const Login = () => {
  return (
    <div className='login-box'>
        <label className='username-input'>
            <input 
              type="text" 
              name="input-text"
              className='input-text'
            />
        </label>
        <label className='password-input'>
            <input 
              type="text" 
              name="input-text"
              className='input-text'
            />
        </label>
    </div>
  )
}

