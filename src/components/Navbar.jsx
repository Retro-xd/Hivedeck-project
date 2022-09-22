import React from 'react'
import { Link } from "react-router-dom";
import { logo } from '../../assets'
import Login from '../pages/Login';
import Signup from '../pages/Signup';

const Navbar = () => {
  return (
      <nav>
        <div className="navbar-container">
          <div className="navabar-logo">
          <img src={logo} alt="logo" height='40px' width='150px' />
        </div>
        <div>
          <ul className="navbar-links">
            <li>
              <a href="#">Blog</a>
            </li>

            <li>
              <Link to="/login">Log in</Link>
            </li>

            <li>
              <Link to="/signup" className='sign-up-button button'>Sign Up</Link>
            </li>
          </ul>
        </div>
        </div>
      </nav>
  )
}

export default Navbar