import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className='navBar row z_inf'>
      <Link className="slogan col-md-2 col-5 d-flex justify-content-center" to={'/'}>Byte&Beyond</Link>

      <div className="d-flex justify-content-md-between justify-content-evenly col-md-9 col-7">
        <div className="links m-0">
          <li>
            <NavLink className="link d-none-768" to={'/'}>Home</NavLink>
          </li>
          <li>
            <NavLink className="link" to={'/blogs'}>Blogs</NavLink>
          </li>
        </div>
        <div className="links m-0">
          
            <NavLink className="link" to={'/login'}><i class="fas fa-user-circle"></i></NavLink>
        </div>
      </div>

    </nav>
  )
}
