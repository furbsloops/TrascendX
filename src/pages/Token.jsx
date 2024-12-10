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

        <p className="token-additional-description">
          Echoes of an unknown tomorrow. Visions beyond the visible.
        </p>

        <div className="token-image-wrapper">
          <a 
            href="https://www.pumpflow.meme/token-detail/0x6a7975d5d2d94f17dd83c7bbbf92e3b1313687fa" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <img 
              src="https://fcljjsnuzjacwqgiqiib.supabase.co/storage/v1/object/public/token_images/images/0b8276d2-af55-4942-bc23-542c54dc284f.png" 
              alt="Trascendx Token" 
              className="token-image"
            />
          </a>
        </div>

        <div className="token-info">
          <h2>Dettagli del Token</h2>
          <ul>
            <li><strong>Contract Address:</strong> 0x6a7975d5d2d94f17dd83c7bbbf92e3b1313687fa</li>
            <li><strong>Rete:</strong> Ethereum (o Polygon, verifica la rete effettiva del token)</li>
            <li><strong>Supply Totale:</strong> 1.000.000.000 (Esempio, modifica se necessario)</li>
            <li><strong>Utilizzo:</strong> Acquisto di NFT, sconti esclusivi, accesso ad eventi della community</li>
            <li><strong>Creator Address:</strong> 0x000000000000000000000002f5f660e4499047ca</li>
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
