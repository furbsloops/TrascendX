import React from 'react';
import './NFTCard.css'; // Importa il tuo file CSS

const NFTCard = ({ nft }) => {
  return (
    <div className="nft-card">
      <img src={nft.image} alt={nft.name} className="nft-card-image" />
      <div className="nft-card-content">
        <h3 className="nft-card-title">{nft.name}</h3>
        <a 
          href={`https://opensea.io/assets/${nft.openseaLink}`} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="nft-card-link"
        >
          Vedi su OpenSea
        </a>
      </div>
    </div>
  );
};

export default NFTCard;
