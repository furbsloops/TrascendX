import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-black text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Trascendx</h1>
        <div>
          <Link to="/" className="px-4 hover:text-gray-300">Home</Link>
          <Link to="/gallery" className="px-4 hover:text-gray-300">Gallery</Link>
          <Link to="/about" className="px-4 hover:text-gray-300">About</Link>
          <Link to="/contact" className="px-4 hover:text-gray-300">Contact</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
