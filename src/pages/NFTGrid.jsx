import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './NFTGrid.css'; // Importa il tuo file CSS

const NFTGrid = () => {
  const [nfts, setNfts] = useState([]);

  useEffect(() => {
    // Inserisci la tua API key e la giusta collezione da OpenSea
    axios.get('https://api.opensea.io/api/v1/assets?collection=trascendx&limit=20', {
      headers: {
        'X-API-KEY': 'LA_TUA_API_KEY'
      }
    })
    .then(res => {
      setNfts(res.data.assets || []);
    })
    .catch(err => {
      console.error(err);
    });
  }, []);

  return (
    <div className="nft-grid">
      {nfts.map(nft => (
        <div className="nft-card" key={nft.id}>
          <img src={nft.image_url} alt={nft.name} className="nft-image" />
          <h3 className="nft-title">{nft.name}</h3>
          <p className="nft-description">{nft.description}</p>
          <a href={nft.permalink} target="_blank" rel="noopener noreferrer" className="nft-link">
            Vedi su OpenSea
          </a>
        </div>
      ))}
    </div>
  );
};

export default NFTGrid;
