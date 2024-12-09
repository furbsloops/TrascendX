import React, { useEffect, useState } from 'react';
import axios from 'axios';
import HeroSection from '../components/HeroSection';
import FeaturedSection from '../components/FeaturedSection';
import Footer from '../components/Footer';
import './Home.css'; // Importa il tuo file CSS personalizzato

const Home = () => {
  const [nfts, setNfts] = useState([]);

  useEffect(() => {
    // Puoi sostituire con l'endpoint reale dell'API di OpenSea
    axios.get('https://api.yourdomain.com/nfts')
      .then(response => {
        setNfts(response.data);
      })
      .catch(error => {
        console.error('Error fetching NFTs:', error);
        // Dati placeholder in caso di errore
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
    <div className="home-container">
      <div className="home-content">
        <HeroSection />

        <div className="media-section">
          <div className="image-wrapper">
            <img src="path_to_your_image.jpg" alt="Unique Art" className="media-image" />
          </div>
          <div className="video-wrapper">
            <video width="100%" controls>
              <source src="path_to_your_video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        <div className="intro-section">
          <h2>Scopri l'Arte Digitale Unica</h2>
          <p>Esplora la nostra esclusiva collezione di NFT su OpenSea</p>
          <a
            href="https://opensea.io/collection/yourcollection"
            className="explore-button"
          >
            Esplora Ora
          </a>
        </div>

        <FeaturedSection nfts={nfts.slice(0, 10)} />

        <div className="more-nfts-section">
          <h3>Scopri altri NFT</h3>
          <div className="nft-grid">
            {nfts.map(nft => (
              <div key={nft.id} className="nft-card">
                <img
                  src={nft.imageUrl}
                  alt={nft.name}
                  className="nft-image"
                />
                <div className="nft-info">
                  <h5>{nft.name}</h5>
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
