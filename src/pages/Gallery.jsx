import React from 'react';
import { motion } from 'framer-motion';

const Gallery = () => {
  const nfts = Array.from({ length: 120 }, (_, index) => ({
    id: index,
    name: `NFT ${index + 1}`,
    description: 'This is a placeholder NFT.',
    imageUrl: `https://picsum.photos/seed/${index}/200`
  }));

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
