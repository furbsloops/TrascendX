import React from 'react';
import heroBg from '../assets/TrascendXDSWall.png';
import './HeroSection.css'; // Importa il file CSS

const HeroSection = () => {
  return (
    <div 
      className="hero-background"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/* Overlay per il filtro grigio */}
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <h1 className="hero-title">TrascendX Collection</h1>
        <p className="hero-subtitle">Echoes of an unknown tomorrow. Visions beyond the visible.</p>
        <a 
          href="https://opensea.io/collection/trascendx" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hero-button"
        >
          Explore Now
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
