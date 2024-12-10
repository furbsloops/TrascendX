import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import del file CSS personalizzato

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="navbar-brand">Trascendx</h1>
        <div className="navbar-links">
          <Link to="/" className="navbar-link">Home</Link>
          <Link to="/gallery" className="navbar-link">Gallery</Link>
          <Link to="/token" className="navbar-link">Token</Link>
          <Link to="/about" className="navbar-link">About</Link>
          <Link to="/contact" className="navbar-link">Contact</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
