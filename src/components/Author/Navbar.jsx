import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className='navBar justify-content-between pe-4 pointer z_inf'>
      <Link className="slogan" to={'/author'}>Author Dashboard</Link>

        <ul className="links float-end">
          <li>
            <Link className="link" to={'/author'}> <i className="fa fa-user"></i> </Link>
          </li>
        </ul>

    </nav>
  )
}
