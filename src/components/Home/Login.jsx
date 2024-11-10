import React from 'react'
import { Link } from 'react-router-dom'
import './login.css';

export default function Login() {
  
  return (
    <div className="loginBody">
      <div className="login-container">
        <h2>Login</h2>
        <form id="loginForm">
          <div className="input-group">
            <input type="email" id="email" required />
            <label htmlFor="email">Email</label>
          </div>
          <div className="input-group">
            <input type="password" id="password" required />
            <label htmlFor="password">Password</label>
          </div>
          <div className="actions">
            <button type="submit">Log In</button>
          </div>
        </form>
        <div className="links">
          <Link>Forgot Password?</Link>
          <Link to={'/register'}>Create Account</Link>
        </div>
      </div>
    </div>
  )
}
