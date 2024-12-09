import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import './Gallery.css';

const Gallery = () => {
  const [nfts, setNfts] = useState([]);

  useEffect(() => {
    axios.get('https://api.opensea.io/v2/collection/trascendx/nfts', {
      params: {
        limit: 20,
        include_metadata: 'true' // Aggiunto il parametro per includere i metadati
      },
      headers: {
        'X-API-KEY': 'c65c1eaf50f34b1e83ea01b163ca0711' // Sostituisci con la tua API Key valida
      }
    })
    .then(response => {
      const fetchedNFTs = response.data.nfts || [];
      console.log('NFTs fetched:', fetchedNFTs); // Debug per vedere i dati reali
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
          <img 
            src={nft.metadata?.image || 'placeholder.png'} 
            alt={nft.metadata?.name || 'NFT senza nome'} 
            className="nft-image"
          />
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
