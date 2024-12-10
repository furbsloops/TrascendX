import React, { useState, useEffect } from 'react';
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
    imageUrl: "https://i.seadn.io/s/raw/files/4036ae57e5f36f2a0b01d4ea810a1f91.png?auto=format&dpr=1&w=1000", // Sostituisci con un'altra immagine
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/6"
  },
  {
    id: 7,
    name: "#0007",
    imageUrl: "https://i.seadn.io/s/raw/files/8af874de596017fe86329e81f1e1ac89.png?auto=format&dpr=1&w=1000", // Sostituisci con un'altra immagine
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/7"
  },
  {
    id: 8,
    name: "#0008",
    imageUrl: "https://i.seadn.io/s/raw/files/303f52e027a0f387900c374103ce18e7.png?auto=format&dpr=1&w=1000", // Sostituisci con un'altra immagine
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/8"
  },
  {
    id: 9,
    name: "#0009",
    imageUrl: "https://i.seadn.io/s/raw/files/c48468fed24edd74bf83b711c0ba5340.png?auto=format&dpr=1&w=1000", // Sostituisci con un'altra immagine
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/9"
  },
  {
    id: 10,
    name: "#0010",
    imageUrl: "https://i.seadn.io/s/raw/files/8487d9e4f519d10f91ac9a9ae5fc1c94.png?auto=format&dpr=1&w=1000", // Sostituisci con un'altra immagine
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/10"
  },
  {
    id: 11,
    name: "#0011",
    imageUrl: "https://i.seadn.io/s/raw/files/766569e00de317d38bd6bb09924029f0.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/11"
  },
  {
    id: 12,
    name: "#0012",
    imageUrl: "https://i.seadn.io/s/raw/files/229820b0656b39b8d40416249997442f.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/12"
  },
  {
    id: 13,
    name: "#0013",
    imageUrl: "https://i.seadn.io/s/raw/files/d3492da6380e3f94ff0d2a9218b9e202.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/13"
  },
  {
    id: 14,
    name: "#0014",
    imageUrl: "https://i.seadn.io/s/raw/files/f19c9f339fd1e6699d98c2e3b028b190.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/14"
  },
  {
    id: 15,
    name: "#0015",
    imageUrl: "https://i.seadn.io/s/raw/files/9d435852a616761f69bc91bfbedb6daf.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/15"
  },
  {
    id: 16,
    name: "#0016",
    imageUrl: "https://i.seadn.io/s/raw/files/597c53a9db9f9c9f97e7d770f90d03cc.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/16"
  },
  {
    id: 17,
    name: "#0017",
    imageUrl: "https://i.seadn.io/s/raw/files/25d5ac4912666bfb7b52dc63eb5bf927.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/17"
  },
  {
    id: 18,
    name: "#0018",
    imageUrl: "https://i.seadn.io/s/raw/files/5da1806e517f52000ceabed857f3e482.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/18"
  },
  {
    id: 19,
    name: "#0019",
    imageUrl: "https://i.seadn.io/s/raw/files/87a7636a22175f6803d588caef3f5571.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/19"
  },
  {
    id: 20,
    name: "#0020",
    imageUrl: "https://i.seadn.io/s/raw/files/4c7562960fdb000b5889e7766196a35a.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/20"
  },
];

const Home = () => {
    const [currentIndex, setCurrentIndex] = useState(0); // Aggiungi questo stato per gestire l'indice corrente
    const [reverseIndex, setReverseIndex] = useState(staticNfts.length - 1); // Aggiungi questo stato per gestire l'indice inverso
  const nfts = staticNfts;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % nfts.length); // Incrementa l'indice
      setReverseIndex((prevIndex) => (prevIndex - 1 + nfts.length) % nfts.length); // Decrementa l'indice, loop alla fine dell'array
    }, 1000); // Cambia immagine ogni secondo

    return () => {
      clearInterval(intervalId); // Pulisce l'intervallo
    };
  }, [nfts.length]);

  return (
    <div className="home-container">
      <div className="home-content">
        <HeroSection />

        <div className="media-section">
          <div className="image-wrapper">
            <img src={nfts[currentIndex].imageUrl} alt={nfts[currentIndex].name} className="media-image" />
          </div>
          <div className="image-wrapper video-square">
            <img src={nfts[reverseIndex].imageUrl} alt={nfts[reverseIndex].name} className="media-image" />
          </div>
        </div>

        <div className="intro-section">
          <h2>Utopia is an illusion</h2>
          <p>Welcome to the beating heart <br/> of the future: a window into alternate worlds, where mystery <br/> surrounds every pixel. <br/> The future <br/> is just a vision coming true.</p>
          <a href="https://opensea.io/collection/trascendx" className="explore-button">
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
