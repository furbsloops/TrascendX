// In src/components/HeroSection.jsx
import React from 'react';

// In HeroSection.jsx
const HeroSection = () => {
    return (
      <div className="hero-background" style={{ backgroundImage: 'url(https://path.to/your/image.jpg)' }}>
        <div className="text-center p-8">
          <h1 className="text-5xl text-white font-bold">Scopri l'Arte Digitale Unica</h1>
          <p className="text-xl text-white my-4">Esplora la nostra esclusiva collezione di NFT su OpenSea</p>
          <a href="https://opensea.io/collection/trascendx" target="_blank" rel="noopener noreferrer"
            className="inline-block bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition duration-300">
            Esplora Ora
          </a>
        </div>
      </div>
    );
  };
  
  export default HeroSection;
  