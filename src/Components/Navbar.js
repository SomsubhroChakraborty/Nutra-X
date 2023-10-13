import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

// Navbar component
const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Nutra-X</h1>
      <ul className="links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
