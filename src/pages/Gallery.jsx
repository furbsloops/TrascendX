import React from 'react';
import { motion } from 'framer-motion';
import './Gallery.css';

const staticNfts = [
  {
    id: 1,
    name: "Trascendx #1",
    description: "#0001",
    imageUrl: "https://i.seadn.io/s/raw/files/83ef83dd7aa4caac87054e85484a47a5.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/1"
  },
  {
    id: 2,
    name: "Trascendx #2",
    description: "#0002",
    imageUrl: "https://i.seadn.io/s/raw/files/844e9f24fcde5300504d0e1096730cbb.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/2"
  },
  {
    id: 3,
    name: "Trascendx #3",
    description: "#0003",
    imageUrl: "https://i.seadn.io/s/raw/files/7304dcff2f600c05631c08c1c92530de.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/3"
  },
  // ... Continua così fino a 40 NFT
  {
    id: 4,
    name: "Trascendx #4",
    description: "#0004",
    imageUrl: "https://i.seadn.io/s/raw/files/0bc989a3b3373b5a609881fefd1e3990.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/4"
  },
  {
    id: 5,
    name: "Trascendx #5",
    description: "#0005",
    imageUrl: "https://i.seadn.io/s/raw/files/7d26b66225db0d3924344310c625e1fc.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/5"
  },
  // Aggiungi i restanti NFT fino ad arrivare a 40...
  // Copia e incolla questo blocco modificando id, name, description, imageUrl e openseaUrl per tutti i 40 NFT.
];

const Gallery = () => {
  return (
    <div className="gallery-container">
      {staticNfts.length > 0 ? (
        staticNfts.map(nft => (
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
              <a
                href={nft.openseaUrl || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="nft-link"
              >
                Vedi su OpenSea
              </a>
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
