import React from 'react'

export default function Login_btn() {
  return (
    <div>
      <div className='login'>
        <button className='login-btn'>Login</button>
      </div>

      <div className='register'>
        <p className='reg'>Don’t have an account? <a href='#' className='reg-a'>Register</a></p> 
      </div> 
    </div>
  )
}