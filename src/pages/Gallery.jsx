import React from 'react';
import { motion } from 'framer-motion';
import './Gallery.css';

const staticNfts = [
  {
    id: 3,
    name: "Trascendx #3",
    description: "#0003",
    imageUrl: "https://i.seadn.io/s/raw/files/7304dcff2f600c05631c08c1c92530de.png?auto=format&dpr=1&w=1000"
  },
  // Aggiungi altri NFT manualmente
];

const Gallery = () => {
  return (
    <div className="gallery-container">
      {staticNfts.length > 0 ? (
        staticNfts.map((nft) => (
          <motion.div
            key={nft.id}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="nft-card"
          >
            <img 
              src={nft.imageUrl || 'placeholder.png'} 
              alt={nft.name || `NFT #${nft.id}`} 
              className="nft-image"
            />
            <div className="nft-info">
              <h5>{nft.name || `NFT #${nft.id}`}</h5>
              <p>{nft.description || 'Nessuna descrizione'}</p>
            </div>
          </motion.div>
        ))
      ) : (
        <p>Nessun NFT trovato per questa collezione.</p>
      )}
    </div>
  );
};

export default Gallery;
