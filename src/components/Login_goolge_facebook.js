import React from 'react'
import google from '../img/google-icon 1.png';
import facebook from '../img/facebook-icon.png'

export default function Login_goolge_facebook() {
  return (
    <div>
        <div className='login-google'>
            <button>
                <img src={google} alt='google-icon' id='' className='google-icon' />
                <p>Login with Google</p>
            </button>
        </div>

        <div className='login-facebook'>
            <button>
                <img src={facebook} alt='facebook-icon' id='' className='facebook-icon' />
                <p>Login with Facebook</p>
            </button>

            <div>
            <hr className='one' /> 
            <span>OR</span>
            <hr className='two' />
            </div>
        </div>
    </div>
  )
}
