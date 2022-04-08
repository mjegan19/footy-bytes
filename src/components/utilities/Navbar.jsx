// Import Core React Modules
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul id="navbar">
        <li><Link to="/">MATCHES</Link></li>
        <li><Link to="about">ABOUT</Link></li>
        <li><Link to="contact">CONTACT</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar;