import React from 'react'
import rectangle from '../img/Rectangle 1.png';
import login_re from '../img/Login_re.png';

export default function Well() {
  return (
    <div>
        <img src={rectangle} className="rectangle" />
        <img src={login_re} className="login_re" />
    </div>
  )
}