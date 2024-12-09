import React from 'react';
import { motion } from 'framer-motion';
import './Gallery.css'; // Importa il tuo file CSS

const Gallery = () => {
  const nfts = Array.from({ length: 120 }, (_, index) => ({
    id: index,
    name: `NFT ${index + 1}`,
    description: 'This is a placeholder NFT.',
    imageUrl: `https://picsum.photos/seed/${index}/200`
  }));

  return (
    <div className="gallery-container">
      {nfts.map(nft => (
        <motion.div
          key={nft.id}
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="nft-card"
        >
          <img src={nft.imageUrl} alt={nft.name} className="nft-image"/>
          <div className="nft-info">
            <h5>{nft.name}</h5>
            <p>{nft.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Gallery;
