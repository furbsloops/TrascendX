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
          Trascendx è una visione futuristica del mondo dell'arte digitale. 
          Combiniamo tecnologia avanzata e design unico per creare pezzi 
          collezionabili che spingono i confini della creatività. I nostri NFT 
          rappresentano il culmine dell'innovazione e della bellezza artistica.
        </p>

        {/* Immagine */}
        <div className="about-image-wrapper">
          <img 
            src="https://via.placeholder.com/600" 
            alt="About Trascendx" 
            className="about-image"
          />
        </div>

        {/* Missione */}
        <div className="about-mission">
          <h2 className="about-section-title">
            La nostra missione
          </h2>
          <p className="about-text">
            Con Trascendx, miriamo a ridefinire il concetto di arte digitale, offrendo 
            a collezionisti e appassionati opere che non solo ispirano, ma aprono nuove 
            possibilità nel mondo del metaverso e della blockchain.
          </p>
        </div>

        {/* Perché scegliere Trascendx */}
        <div className="about-why-choose">
          <h2 className="about-section-title">
            Perché scegliere Trascendx?
          </h2>
          <ul className="about-list">
            <li>Opere d'arte uniche e limitate, garantite dalla tecnologia blockchain.</li>
            <li>Una comunità in crescita di artisti e collezionisti che condividono la passione per l'innovazione.</li>
            <li>Un team dedicato a spingere i confini dell'arte digitale.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
