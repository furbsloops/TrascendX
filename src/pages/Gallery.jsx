import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import './Gallery.css'; // Importa il tuo file CSS

const Gallery = () => {
  const [nfts, setNfts] = useState([]);

  useEffect(() => {
    axios.get('https://api.opensea.io/api/v1/assets', {
      params: {
        asset_contract_address: '0x55ca8C033F230Ef9dd09412784948a9D4734DccF', // L'indirizzo del contratto NFT
        order_direction: 'desc',
        limit: 20 // Numero di NFT da mostrare
      },
      headers: {
        'X-API-KEY': 'c65c1eaf50f34b1e83ea01b163ca0711' // Sostituisci con la tua API Key di OpenSea
      }
    })
    .then(response => {
      const fetchedNFTs = response.data.assets || [];
      setNfts(fetchedNFTs);
    })
    .catch(error => {
      console.error('Errore nel fetch degli NFT da OpenSea:', error);
    });
  }, []);

  return (
    <div className="gallery-container">
      {nfts.length > 0 ? nfts.map(nft => (
        <motion.div
          key={nft.id}
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="nft-card"
        >
          <img src={nft.image_url} alt={nft.name} className="nft-image"/>
          <div className="nft-info">
            <h5>{nft.name}</h5>
            <p>{nft.description}</p>
          </div>
        </motion.div>
      )) : (
        <p>Nessun NFT trovato per questa collezione.</p>
      )}
    </div>
  );
};

export default Gallery;
