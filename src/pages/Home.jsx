import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NFTGrid from './NFTGrid';
import HeroSection from '../components/HeroSection';
import FeaturedSection from '../components/FeaturedSection';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Home = () => {
  const [nfts, setNfts] = useState([]);

  useEffect(() => {
    // Esempio di dati di esempio per visualizzare la griglia (puoi sostituire con i tuoi dati reali)
    axios.get('https://api.yourdomain.com/nfts')
      .then(response => {
        setNfts(response.data);
      })
      .catch(error => {
        console.error('Error fetching NFTs:', error);
        // Dati di esempio in caso di errore
        const placeholderNFTs = Array.from({ length: 12 }, (_, index) => ({
          id: index,
          name: `NFT ${index + 1}`,
          description: 'This is a placeholder NFT.',
          imageUrl: `https://picsum.photos/seed/${index}/200`
        }));
        setNfts(placeholderNFTs);
      });
  }, []);

  return (
    <div className="relative bg-gray-100" style={{ width: '100vw', overflowX: 'hidden' }}>
      <div className="pt-16 w-full">
        <HeroSection />
        <div className="container mx-auto px-4 flex flex-wrap justify-between">
          <div className="w-full lg:w-4/12">
            <img src="path_to_your_image.jpg" alt="Unique Art" className="w-full" />
          </div>
          <div className="w-full lg:w-8/12">
            <video width="100%" controls>
              <source src="path_to_your_video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        <div className="text-center p-8">
          <h2 className="text-4xl font-bold">Scopri l'Arte Digitale Unica</h2>
          <p className="text-xl mt-4">Esplora la nostra esclusiva collezione di NFT su OpenSea</p>
          <a
            href="https://opensea.io/collection/yourcollection"
            className="mt-4 inline-block bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
          >
            Esplora Ora
          </a>
        </div>
        <FeaturedSection nfts={nfts.slice(0, 10)} />
        {/* Griglia aggiunta sotto la sezione Featured */}
        <div className="container mx-auto p-4">
          <h3 className="text-3xl font-bold mb-4">Scopri altri NFT</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
            {nfts.map(nft => (
              <div
                key={nft.id}
                className="overflow-hidden shadow-lg rounded-lg cursor-pointer"
              >
                <img
                  src={nft.imageUrl}
                  alt={nft.name}
                  className="w-full h-auto"
                />
                <div className="p-4 bg-gray-900 text-white">
                  <h5 className="text-lg font-bold">{nft.name}</h5>
                  <p>{nft.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
