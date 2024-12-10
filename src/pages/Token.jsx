import React from 'react';
import './Token.css';

const Token = () => {
  return (
    <div className="token-container">
      <div className="token-content">
        <h1 className="token-title">Trascendx Token</h1>
        
        <p className="token-description">
          Il Trascendx Token è la moneta digitale nativa del nostro ecosistema NFT. 
          È stato pensato per supportare e far crescere la nostra community, 
          offrendo vantaggi, sconti e accesso esclusivo a future collezioni e eventi.
        </p>

        <div className="token-image-wrapper">
          <img 
            src="path_to_your_token_image.jpg" 
            alt="Trascendx Token" 
            className="token-image"
          />
        </div>

        <div className="token-info">
          <h2>Dettagli del Token</h2>
          <ul>
            <li><strong>Contract Address:</strong> 0x6a7975d5d2d94f17dd83c7bbbf92e3b1313687fa</li>
            <li><strong>Rete:</strong> Ethereum / Polygon (specifica la rete esatta)</li>
            <li><strong>Supply Totale:</strong> 1.000.000.000 (esempio)</li>
            <li><strong>Utilizzo:</strong> Acquisto di NFT, sconti esclusivi, accesso ad eventi della community</li>
          </ul>
        </div>

        <div className="token-links">
          <a 
            href="https://www.pumpflow.meme/token-detail/0x6a7975d5d2d94f17dd83c7bbbf92e3b1313687fa" 
            target="_blank" 
            rel="noopener noreferrer"
            className="token-link"
          >
            Vedi il Token su Pumpflow
          </a>
        </div>
      </div>
    </div>
  );
};

export default Token;
