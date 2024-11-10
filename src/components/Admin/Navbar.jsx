import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className='navBar justify-content-between pe-4 pointer z_inf'>
      <Link className="slogan" to={'/admin'}>Admin Dashboard</Link>

        <ul className="links float-end">
          <li>
            <Link className="link" to={'/admin'}> <i className="fa fa-user"></i> </Link>
          </li>
        </ul>

    </nav>
  )
}
