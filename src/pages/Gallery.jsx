import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import './Gallery.css'; // Il tuo file CSS

const Gallery = () => {
  const [nfts, setNfts] = useState([]);

  useEffect(() => {
    axios.get('https://api.opensea.io/v2/collection/trascendx/nfts', {
      params: {
        limit: 20 // numero di NFT da mostrare
      },
      headers: {
        'X-API-KEY': 'c65c1eaf50f34b1e83ea01b163ca0711' // Sostituisci con una API Key valida
      }
    })
    .then(response => {
      // La risposta ha la forma { next, previous, nfts: [...] }
      const fetchedNFTs = response.data.nfts || [];
      setNfts(fetchedNFTs);
    })
    .catch(error => {
      console.error('Errore nel fetch degli NFT da OpenSea:', error);
    });
  }, []);

  return (
    <div className="gallery-container">
      {nfts.length > 0 ? nfts.map((nft, index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="nft-card"
        >
          {/* Le informazioni dell'NFT in v2 si trovano in nft.metadata */}
          <img src={nft.metadata?.image} alt={nft.metadata?.name} className="nft-image"/>
          <div className="nft-info">
            <h5>{nft.metadata?.name || 'Senza nome'}</h5>
            <p>{nft.metadata?.description || 'Nessuna descrizione'}</p>
          </div>
        </motion.div>
      )) : (
        <p>Nessun NFT trovato per questa collezione.</p>
      )}
    </div>
  );
};

export default Gallery;
