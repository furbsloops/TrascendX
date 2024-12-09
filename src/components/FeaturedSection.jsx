import React from 'react';
import './FeaturedSection.css'; // Assicurati di creare anche questo file

const FeaturedSection = ({ nfts = [] }) => {
  return (
    <section className="featured-section">
      <h2 className="featured-title">Featured NFTs</h2>
      <div className="featured-grid">
        {nfts.length > 0 ? (
          nfts.map((nft, index) => (
            <div className="featured-card" key={index}>
              <img src={nft.imageUrl} alt={nft.name} className="featured-image" />
              <h3 className="featured-card-title">{nft.name}</h3>
              <p className="featured-card-description">{nft.description}</p>
            </div>
          ))
        ) : (
          <p className="no-nfts">Nessun NFT disponibile al momento.</p>
        )}
      </div>
    </section>
  );
};

export default FeaturedSection;
