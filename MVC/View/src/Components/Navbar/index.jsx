import React from 'react'
import './Navbar.css'
import { FaBars } from "react-icons/fa6";
import {NavLink} from 'react-router'
function Index() {
 
  return (
    <div>
      <nav className='navbar'>
        <div className="navbar-container">
          <a href="/" className="navbar-logo">Podca</a>
          <ul className="navbar-menu">
            <NavLink to='/add'>Add</NavLink>
            <NavLink to='/wishlist'>Wishlist</NavLink>
            <FaBars className='res'/>
          </ul>
   
        </div>
      </nav>
    </div>
  )
}

export default Index
