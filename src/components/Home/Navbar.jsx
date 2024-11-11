import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className='navBar justify-content-between justify-content-lg-start z_inf'>
      <Link className="slogan" to={'/'}>Byte & Beyond</Link>

        <ul className="links m-0">
          <li>
            <NavLink className="link" to={'/'}>Home</NavLink>
          </li>
          <li>
            <NavLink className="link" to={'/blogs'}>Blogs</NavLink>
          </li>
          <li>
            <NavLink className="link" to={'/admin'}>admin</NavLink>
          </li>
          <li>
            <NavLink className="link" to={'/author'}>author</NavLink>
          </li>
        </ul>

    </nav>
  )
}
