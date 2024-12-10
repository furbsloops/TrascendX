import React from 'react';
import './About.css'; // Importa il file CSS

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        {/* Titolo */}
        <h1 className="about-title">About Trascendx</h1>

        {/* Descrizione */}
        <p className="about-description">
        Welcome to the beating heart of the future: 
        a window into alternate worlds, where mystery surrounds every pixel. 
        The future is just a vision coming true
        </p>

        {/* Immagine NFT #1 */}
        <div className="about-image-wrapper">
          <img 
            src="https://i.seadn.io/s/raw/files/83ef83dd7aa4caac87054e85484a47a5.png?auto=format&dpr=1&w=1000" 
            alt="NFT #1"
            className="about-image"
          />
        </div>

        {/* Missione */}
        <div className="about-mission">
          <h2 className="about-section-title">
          The future starts with us
          </h2>
          <p className="about-text">
          A series of NFT artworks where futurism meets graphic innovation. 
          Crafted using advanced generative models, these pioneering creations set a new standard in the digital collection realm. 
          Each piece is a hidden secret, a vision of the future transformed into art.
          </p>
        </div>

        {/* Perché scegliere Trascendx */}
        <div className="about-why-choose">
          <h2 className="about-section-title">
          Why Explore TrascendX?
          </h2>
          <ul className="about-list">
          <li>Artworks encrypted within blockchain's immutable realms.</li>
      <li>A visionary community pioneering digital frontiers.</li>
      <li>A dedicated team pushing the limits of digital artistry.</li>
      <li>Exclusive community token</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
