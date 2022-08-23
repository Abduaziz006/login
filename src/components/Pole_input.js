import React from 'react'
import mail from '../img/mail 1.png';
import eye from '../img/eye 1.png';
import key from '../img/key 1.png';

export default function pole_input() {
  return (
    <div>
        <div className="mb-3 row email">
        <img src={mail} alt="mail" className='mail' />
        <label for="staticEmail" className="col-sm-2 email-label">Email</label>
        <div className="col-sm-6">
            <input type="text" className="form-control-plaintext email-input" id="staticEmail" value="email@example.com" name="email" />
        </div>
    </div>

    <div className="mb-3 row pass">
        <img src={key} alt="key" className='key'/>
        <label for="inputPassword" className="col-sm-2 pass-label">Password</label>
        <div class="col-sm-6">
            <input type="password" className="form-control-plaintext pass-input" id="inputPassword" value="password" name="password" />
        </div>
        <img src={eye} alt="eye" className='eye' />
    </div>
    </div>
    
  )
}