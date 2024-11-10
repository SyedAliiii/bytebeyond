import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className='navBar justify-content-between justify-content-lg-start z_inf'>
      <Link className="slogan" to={'/'}>Byte & Beyond</Link>

        <ul className="links">
          <li>
            <Link className="link active" to={'/'}>Home</Link>
          </li>
          <li>
            <Link className="link" to={'/blogs'}>Blogs</Link>
          </li>
        </ul>

    </nav>
  )
}
