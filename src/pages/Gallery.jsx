import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import './Gallery.css'; // il tuo file CSS

const Gallery = () => {
  const [nft, setNft] = useState(null);

  useEffect(() => {
    // Endpoint per un singolo asset su OpenSea v1
    axios.get('https://api.opensea.io/api/v1/asset/0x55ca8C033F230Ef9dd09412784948a9D4734DccF/1/', {
      headers: {
        'X-API-KEY': 'c65c1eaf50f34b1e83ea01b163ca0711' // Inserisci qui la tua API KEY
      }
    })
    .then(response => {
      const fetchedNft = response.data;
      console.log('NFT fetched:', fetchedNft); // Debug
      setNft(fetchedNft);
    })
    .catch(error => {
      console.error('Errore nel fetch dell\'NFT da OpenSea:', error);
    });
  }, []);

  return (
    <div className="gallery-container">
      {nft ? (
        <motion.div
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
      ) : (
        <p>Caricamento NFT in corso o nessun NFT trovato.</p>
      )}
    </div>
  );
};

export default Gallery;
