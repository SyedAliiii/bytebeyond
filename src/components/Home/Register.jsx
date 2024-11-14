import React from 'react'
import { Link } from 'react-router-dom'
import './login.css';

export default function Register() {
  
  return (
    <div className="loginBody">
      <div className="login-container glowing_border">
        <h2>Register</h2>
        <form id="loginForm">
          <div className="input-group">
            <input type="name" id="name" required />
            <label htmlFor="name">Full Name</label>
          </div>
          <div className="input-group">
            <input type="email" id="email" required />
            <label htmlFor="email">Email</label>
          </div>
          <div className="input-group">
            <input type="password" id="password" required />
            <label htmlFor="password">Password</label>
          </div>
          <div className="actions">
            <button type="submit">Rigester</button>
          </div>
        </form>
        <div className="links">
        <span className='d-flex align-items-center gap-2'>Already have an Account?<Link to={'/login'}>Login</Link></span>
        </div>
      </div>
    </div>
  )
}
