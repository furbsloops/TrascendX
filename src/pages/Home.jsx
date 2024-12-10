import React from 'react';
import HeroSection from '../components/HeroSection';
import FeaturedSection from '../components/FeaturedSection';
import './Home.css'; // Importa il tuo file CSS personalizzato

// Array di 20 NFT statici (esempio)
const staticNfts = [
  {
    id: 1,
    name: "#0001",
    imageUrl: "https://i.seadn.io/s/raw/files/83ef83dd7aa4caac87054e85484a47a5.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/1"
  },
  {
    id: 2,
    name: "#0002",
    imageUrl: "https://i.seadn.io/s/raw/files/844e9f24fcde5300504d0e1096730cbb.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/2"
  },
  {
    id: 3,
    name: "#0003",
    imageUrl: "https://i.seadn.io/s/raw/files/7304dcff2f600c05631c08c1c92530de.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/3"
  },
  {
    id: 4,
    name: "#0004",
    imageUrl: "https://i.seadn.io/s/raw/files/0bc989a3b3373b5a609881fefd1e3990.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/4"
  },
  {
    id: 5,
    name: "#0005",
    imageUrl: "https://i.seadn.io/s/raw/files/7d26b66225db0d3924344310c625e1fc.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/5"
  },
  {
    id: 6,
    name: "#0006",
    imageUrl: "https://i.seadn.io/s/raw/files/83ef83dd7aa4caac87054e85484a47a5.png", // Sostituisci con un'altra immagine
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/6"
  },
  {
    id: 7,
    name: "#0007",
    imageUrl: "https://i.seadn.io/s/raw/files/844e9f24fcde5300504d0e1096730cbb.png", // Sostituisci con un'altra immagine
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/7"
  },
  {
    id: 8,
    name: "#0008",
    imageUrl: "https://i.seadn.io/s/raw/files/7304dcff2f600c05631c08c1c92530de.png", // Sostituisci con un'altra immagine
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/8"
  },
  {
    id: 9,
    name: "#0009",
    imageUrl: "https://i.seadn.io/s/raw/files/0bc989a3b3373b5a609881fefd1e3990.png", // Sostituisci con un'altra immagine
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/9"
  },
  {
    id: 10,
    name: "#0010",
    imageUrl: "https://i.seadn.io/s/raw/files/7d26b66225db0d3924344310c625e1fc.png", // Sostituisci con un'altra immagine
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/10"
  },
  {
    id: 11,
    name: "#0011",
    imageUrl: "https://i.seadn.io/s/raw/files/83ef83dd7aa4caac87054e85484a47a5.png",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/11"
  },
  {
    id: 12,
    name: "#0012",
    imageUrl: "https://i.seadn.io/s/raw/files/844e9f24fcde5300504d0e1096730cbb.png",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/12"
  },
  {
    id: 13,
    name: "#0013",
    imageUrl: "https://i.seadn.io/s/raw/files/7304dcff2f600c05631c08c1c92530de.png",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/13"
  },
  {
    id: 14,
    name: "#0014",
    imageUrl: "https://i.seadn.io/s/raw/files/0bc989a3b3373b5a609881fefd1e3990.png",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/14"
  },
  {
    id: 15,
    name: "#0015",
    imageUrl: "https://i.seadn.io/s/raw/files/7d26b66225db0d3924344310c625e1fc.png",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/15"
  },
  {
    id: 16,
    name: "#0016",
    imageUrl: "https://i.seadn.io/s/raw/files/83ef83dd7aa4caac87054e85484a47a5.png",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/16"
  },
  {
    id: 17,
    name: "#0017",
    imageUrl: "https://i.seadn.io/s/raw/files/844e9f24fcde5300504d0e1096730cbb.png",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/17"
  },
  {
    id: 18,
    name: "#0018",
    imageUrl: "https://i.seadn.io/s/raw/files/7304dcff2f600c05631c08c1c92530de.png",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/18"
  },
  {
    id: 19,
    name: "#0019",
    imageUrl: "https://i.seadn.io/s/raw/files/0bc989a3b3373b5a609881fefd1e3990.png",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/19"
  },
  {
    id: 20,
    name: "#0020",
    imageUrl: "https://i.seadn.io/s/raw/files/7d26b66225db0d3924344310c625e1fc.png",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/20"
  },
];

const Home = () => {
  // Non facciamo più fetch, utilizziamo direttamente staticNfts
  const nfts = staticNfts;

  return (
    <div className="home-container">
      <div className="home-content">
        <HeroSection />

        <div className="media-section">
          <div className="image-wrapper">
            <img src="https://i.seadn.io/s/raw/files/0bc989a3b3373b5a609881fefd1e3990.png" alt="Unique Art" className="media-image" />
          </div>
          <div className="video-wrapper">
            <video width="100%" controls>
              <source src="../assets/TrascendXShort.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        <div className="intro-section">
          <h2>Utopia is an illusion</h2>
          <p>Welcome to the beating heart of the future:
            a window into alternate worlds, where mystery surrounds every pixel.
The future is just a vision coming true</p>
          <a
            href="https://opensea.io/collection/yourcollection"
            className="explore-button"
          >
            Explore Now
          </a>
        </div>

        {/* Mostra i primi 10 NFT nella sezione Featured */}
        <FeaturedSection nfts={nfts.slice(0, 10)} />

        <div className="more-nfts-section">
          <h3>More Exclusives Artworks</h3>
          <div className="nft-grid">
            {/* Mostra tutti i 20 NFT nella griglia sottostante */}
            {nfts.map(nft => (
              <div key={nft.id} className="nft-card">
                <img
                  src={nft.imageUrl}
                  alt={nft.name}
                  className="nft-image"
                />
                <div className="nft-info">
                  <h5>{nft.name}</h5>
                  {/* Puoi aggiungere una descrizione statica o lasciarla vuota */}
                  <a
                    href={nft.openseaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="nft-link"
                  >
                    OpenSea
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
