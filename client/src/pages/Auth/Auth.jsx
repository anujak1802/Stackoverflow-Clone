import React from 'react'
import { useState } from 'react';
import AboutAuth from './AboutAuth';
import './Auth.css'
import icon from '../../assests/icon.png'

const Auth = () => {
  const [isSignup, setIsSignup] = useState(true);

  const handleSwitch = () => {
    setIsSignup(!isSignup);
  }
  return (
    <div className='auth-section'>
      {isSignup && (<AboutAuth />)}
      <div className="auth-container-2">
        {!isSignup && <img src={icon} alt="icon" className='login-logo' />}
        <form>
          {isSignup && (
            <label htmlFor="name">
              <h4>Display name:</h4>
              <input type="text" name='name' id='name' />
            </label>
          )}
          <label htmlFor="email">
            <h4>Email:</h4>
            <input type="email" name='email' id='email' />
          </label>
          <label htmlFor="password">
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <h4>Password:</h4>
              {!isSignup && (
                <p style={{ color: 'blue', fontSize: '13px' }}>forgot password?</p>
              )}
            </div>
            <input type="password" name='password' id='password' />
            {isSignup && (
              <p style={{ color: 'grey', fontSize: '13px' }}>Passwords must contain eight characters, including<br /> 1 Uppercase character and 1 integer.</p>
            )}
          </label>

          {isSignup && (
            <label htmlFor="check">
              <input type="checkbox" name='check' id='check' />
              <p className='extra' style={{ fontSize: '13px' }}>Opt to receive timely notifications on new releases</p>
            </label>
          )}
          <button type='submit' className='auth-btn'>{isSignup ? 'SignIn' : 'LogIn'}</button>
          {isSignup && (
            <p style={{ fontSize: '13px' }}>By clicking "SignIn" to agree with our <span style={{ color: 'blue' }}>terms
              <br />and conditions</span> and <span style={{ color: 'blue' }}>privacy policy</span></p>
          )
          }
        </form>
        <p>
          {isSignup ? 'already have an account? ' : "Don't have an account? "}
          <button type='button' className='handle-switch-btn' onClick={handleSwitch}>{isSignup ? 'Login' : 'SignIn'}</button>
        </p>
      </div>
    </div>
  )
}

export default Auth