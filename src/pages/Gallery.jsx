import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';

const Gallery = () => {
  const [nfts, setNfts] = useState([]);

  useEffect(() => {
    const fetchNFTs = async () => {
      try {
        const response = await axios.get('https://api.yourdomain.com/nfts', {
          headers: {
            Authorization: 'Bc65c1eaf50f34b1e83ea01b163ca0711'  // Sostituisci 'YOUR_API_KEY' con la tua chiave API effettiva
          }
        });
        setNfts(response.data);  // Assumi che la risposta sia un array di oggetti NFT
      } catch (error) {
        console.error('Error fetching NFTs:', error);
      }
    };

    fetchNFTs();
  }, []);

  return (
    <div className="p-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
      {nfts.map(nft => (
        <motion.div
          key={nft.id}
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="overflow-hidden shadow-lg rounded-lg cursor-pointer"
        >
          <img src={nft.imageUrl} alt={nft.name} className="w-full h-auto"/>
          <div className="p-4 bg-gray-900 text-white">
            <h5 className="text-lg font-bold">{nft.name}</h5>
            <p>{nft.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default Gallery;
