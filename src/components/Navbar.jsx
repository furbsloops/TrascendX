import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="navbar-brand">TrascendX</h1>
        <button className="hamburger" onClick={toggleMenu} aria-label="Toggle Menu">☰</button>
        
        {/* Overlay che appare quando il menu è aperto */}
 

        <div className={`navbar-links ${isOpen ? "open" : ""}`}>
          <Link to="/" className="navbar-link" onClick={toggleMenu}>Home</Link>
          <Link to="/gallery" className="navbar-link" onClick={toggleMenu}>Gallery</Link>
          <Link to="/token" className="navbar-link" onClick={toggleMenu}>Token</Link>
          <Link to="/about" className="navbar-link" onClick={toggleMenu}>About</Link>
          <Link to="/contact" className="navbar-link" onClick={toggleMenu}>Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
