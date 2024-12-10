import React from 'react';
import './Contact.css'; // Importa il file CSS

const Contact = () => {
  return (
    <div className="contact-container">
      <h1 className="contact-title">Links</h1>
      <div className="contact-content">
        {/* Riquadri con i collegamenti */}
        <div className="link-grid">
          {/* Token */}
          <div className="link-card">
            <a 
              href="https://www.pumpflow.meme/token-detail/0x6a7975d5d2d94f17dd83c7bbbf92e3b1313687fa" 
              target="_blank" 
              rel="noopener noreferrer"
              className="link-wrapper"
            >
              <img 
                src="https://fcljjsnuzjacwqgiqiib.supabase.co/storage/v1/object/public/token_images/images/0b8276d2-af55-4942-bc23-542c54dc284f.png" 
                alt="Token" 
                className="link-image"
              />
              <span className="link-title">PumpFlow</span>
            </a>
          </div>

          {/* OpenSea */}
          <div className="link-card">
            <a 
              href="https://opensea.io/collection/trascendx" 
              target="_blank" 
              rel="noopener noreferrer"
              className="link-wrapper"
            >
             <img 
                src="https://fcljjsnuzjacwqgiqiib.supabase.co/storage/v1/object/public/token_images/images/0b8276d2-af55-4942-bc23-542c54dc284f.png" 
                alt="Token" 
                className="link-image"
              />
              <span className="link-title">OpenSea</span>
            </a>
          </div>

          {/* X (Twitter) */}
          <div className="link-card">
            <a 
              href="https://x.com/TrascendX5280" 
              target="_blank" 
              rel="noopener noreferrer"
              className="link-wrapper"
            >
              <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7fj1vqat9XLO4cFwOG1uFqLXYDcISiYil2w&s" 
                alt="Twitter" 
                className="link-image"
              />
              <span className="link-title">X</span>
            </a>
          </div>

          {/* Instagram */}
          <div className="link-card">
            <a 
              href="https://www.instagram.com/trascendx/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="link-wrapper"
            >
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" 
                alt="Instagram" 
                className="link-image"
              />
              <span className="link-title">Instagram</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
