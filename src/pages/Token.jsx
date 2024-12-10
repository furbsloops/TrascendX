import React from 'react';
import './Token.css';

const Token = () => {
  return (
    <div className="token-container">
      <div className="token-content">
        <h1 className="token-title">TRSCX Token</h1>
        
        <p className="token-description">
        The Transcendx Token is the native digital currency of our NFT ecosystem. 
        It was designed to support the Flow ecosystem and enhance the TrascendX collection 
        with an exclusive community currency.
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
          <h2>TRSCX info</h2>
          <ul>
            <li><strong>Contract Address:</strong> 0x6a7975d5d2d94f17dd83c7bbbf92e3b1313687fa</li>
            <li><strong>Network:</strong> EVM Flow Chain</li>
            <li><strong>Total Supply:</strong> 600.000.000</li>
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
            Explore TRSCX on PumpFlow
          </a>
        </div>
      </div>
    </div>
  );
};

export default Token;
