import React from 'react';
import './HeroSection.css'; // Importa il file CSS

const HeroSection = () => {
  return (
    <div 
      className="hero-background"
      style={{ backgroundImage: 'url(https://path.to/your/image.jpg)' }}
    >
      <div className="hero-content">
        <h1 className="hero-title">Scopri l'Arte Digitale Unica</h1>
        <p className="hero-subtitle">Esplora la nostra esclusiva collezione di NFT su OpenSea</p>
        <a 
          href="https://opensea.io/collection/trascendx" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hero-button"
        >
          Esplora Ora
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
