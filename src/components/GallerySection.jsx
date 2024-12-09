// In src/components/GallerySection.jsx
import React from 'react';

const GallerySection = () => {
    return (
        <div className="bg-gray-800 py-12">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl text-white font-bold mb-6">Featured NFTs</h2>
                <div className="grid grid-cols-3 gap-4">
                    {Array.from({ length: 6 }).map((_, index) => (
                        <div key={index} className="bg-gray-700 p-4 rounded-lg">
                            <img src={`https://via.placeholder.com/300x300?text=NFT+${index + 1}`} alt={`NFT ${index + 1}`} className="mb-4"/>
                            <p className="text-white">NFT Collection #{index + 1}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default GallerySection;
