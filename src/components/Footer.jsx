import React from 'react';
import './Footer.css'; // Importa il file CSS

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer-text">Follow us on OpenSea</p>
      <a 
        href="https://opensea.io/collection/trascendx" 
        target="_blank" 
        rel="noopener noreferrer"
        className="footer-link"
      >
        Collezione Trascendx su OpenSea
      </a>
    </footer>
  );
};

export default Footer;
