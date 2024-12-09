import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import './Gallery.css';

const Gallery = () => {
  const [nfts, setNfts] = useState([]);

  useEffect(() => {
    axios.get('https://api.opensea.io/api/v1/assets', {
      params: {
        collection: 'trascendx', // Slug della tua collezione su OpenSea
        order_direction: 'desc',
        limit: 20,
        include_orders: false
      },
      headers: {
        'X-API-KEY': 'c65c1eaf50f34b1e83ea01b163ca0711' // Sostituisci con la tua API Key valida
      }
    })
    .then(response => {
      const fetchedNFTs = response.data.assets || [];
      console.log('Fetched NFTs:', fetchedNFTs);
      setNfts(fetchedNFTs);
    })
    .catch(error => {
      console.error('Errore nel fetch degli NFT da OpenSea:', error);
    });
  }, []);

  return (
    <div className="gallery-container">
      {nfts.length > 0 ? (
        nfts.map((nft, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="nft-card"
          >
            <img 
              src={nft.image_url || 'placeholder.png'} 
              alt={nft.name || `NFT #${nft.token_id}`} 
              className="nft-image"
            />
            <div className="nft-info">
              <h5>{nft.name || `NFT #${nft.token_id}`}</h5>
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
