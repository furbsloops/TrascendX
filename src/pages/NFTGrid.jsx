// In src/components/NFTGrid.jsx
import React from 'react';

const NFTGrid = ({ nfts }) => {
  return (
    <div className="grid grid-cols-6 gap-4">
      {nfts.map((nft, index) => (
        <div key={nft.id} className={`col-span-1 animation-${index % 2 === 0 ? 'right' : 'left'}`}>
          <a href={nft.url}>
            <img src={nft.imageUrl} alt={nft.name} />
          </a>
        </div>
      ))}
    </div>
  );
};

export default NFTGrid;
