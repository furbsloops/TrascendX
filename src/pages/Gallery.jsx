import React from 'react';
import { motion } from 'framer-motion';
import './Gallery.css';

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
  // ... Continua così fino a 40 NFT
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
  // Aggiungi i restanti NFT fino ad arrivare a 40...
    // Aggiungi i restanti NFT fino ad arrivare a 40...
      // Aggiungi i restanti NFT fino ad arrivare a 40...
        // Aggiungi i restanti NFT fino ad arrivare a 40...
          // Aggiungi i restanti NFT fino ad arrivare a 40...
            // Aggiungi i restanti NFT fino ad arrivare a 40...
  {
    id: 6,
    name: "#0001",
    imageUrl: "https://i.seadn.io/s/raw/files/83ef83dd7aa4caac87054e85484a47a5.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/1"
  },
  {
    id: 7,
    name: "#0002",
    imageUrl: "https://i.seadn.io/s/raw/files/844e9f24fcde5300504d0e1096730cbb.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/2"
  },
  {
    id: 8,
    name: "#0003",
    imageUrl: "https://i.seadn.io/s/raw/files/7304dcff2f600c05631c08c1c92530de.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/3"
  },
  // ... Continua così fino a 40 NFT
  {
    id: 9,
    name: "#0004",
    imageUrl: "https://i.seadn.io/s/raw/files/0bc989a3b3373b5a609881fefd1e3990.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/4"
  },
  {
    id: 10,
    name: "#0005",
    imageUrl: "https://i.seadn.io/s/raw/files/7d26b66225db0d3924344310c625e1fc.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/5"
  },
  {
    id: 11,
    name: "#0001",
    imageUrl: "https://i.seadn.io/s/raw/files/83ef83dd7aa4caac87054e85484a47a5.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/1"
  },
  {
    id: 12,
    name: "#0002",
    imageUrl: "https://i.seadn.io/s/raw/files/844e9f24fcde5300504d0e1096730cbb.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/2"
  },
  {
    id: 13,
    name: "#0003",
    imageUrl: "https://i.seadn.io/s/raw/files/7304dcff2f600c05631c08c1c92530de.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/3"
  },
  // ... Continua così fino a 40 NFT
  {
    id: 14,
    name: "#0004",
    imageUrl: "https://i.seadn.io/s/raw/files/0bc989a3b3373b5a609881fefd1e3990.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/4"
  },
  {
    id: 15,
    name: "#0005",
    imageUrl: "https://i.seadn.io/s/raw/files/7d26b66225db0d3924344310c625e1fc.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/5"
  },
  {
    id: 16,
    name: "#0001",
    imageUrl: "https://i.seadn.io/s/raw/files/83ef83dd7aa4caac87054e85484a47a5.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/1"
  },
  {
    id: 17,
    name: "#0002",
    imageUrl: "https://i.seadn.io/s/raw/files/844e9f24fcde5300504d0e1096730cbb.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/2"
  },
  {
    id: 18,
    name: "#0003",
    imageUrl: "https://i.seadn.io/s/raw/files/7304dcff2f600c05631c08c1c92530de.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/3"
  },
  // ... Continua così fino a 40 NFT
  {
    id: 19,
    name: "#0004",
    imageUrl: "https://i.seadn.io/s/raw/files/0bc989a3b3373b5a609881fefd1e3990.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/4"
  },
  {
    id: 20,
    name: "#0005",
    imageUrl: "https://i.seadn.io/s/raw/files/7d26b66225db0d3924344310c625e1fc.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/5"
  },
  {
    id: 21,
    name: "#0001",
    imageUrl: "https://i.seadn.io/s/raw/files/83ef83dd7aa4caac87054e85484a47a5.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/1"
  },
  {
    id: 22,
    name: "#0002",
    imageUrl: "https://i.seadn.io/s/raw/files/844e9f24fcde5300504d0e1096730cbb.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/2"
  },
  {
    id: 23,
    name: "#0003",
    imageUrl: "https://i.seadn.io/s/raw/files/7304dcff2f600c05631c08c1c92530de.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/3"
  },
  // ... Continua così fino a 40 NFT
  {
    id: 24,
    name: "#0004",
    imageUrl: "https://i.seadn.io/s/raw/files/0bc989a3b3373b5a609881fefd1e3990.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/4"
  },
  {
    id: 25,
    name: "#0005",
    imageUrl: "https://i.seadn.io/s/raw/files/7d26b66225db0d3924344310c625e1fc.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/5"
  },
  {
    id: 26,
    name: "#0001",
    imageUrl: "https://i.seadn.io/s/raw/files/83ef83dd7aa4caac87054e85484a47a5.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/1"
  },
  {
    id: 27,
    name: "#0002",
    imageUrl: "https://i.seadn.io/s/raw/files/844e9f24fcde5300504d0e1096730cbb.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/2"
  },
  {
    id: 28,
    name: "#0003",
    imageUrl: "https://i.seadn.io/s/raw/files/7304dcff2f600c05631c08c1c92530de.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/3"
  },
  // ... Continua così fino a 40 NFT
  {
    id: 29,
    name: "#0004",
    imageUrl: "https://i.seadn.io/s/raw/files/0bc989a3b3373b5a609881fefd1e3990.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/4"
  },
  {
    id: 30,
    name: "#0005",
    imageUrl: "https://i.seadn.io/s/raw/files/7d26b66225db0d3924344310c625e1fc.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/5"
  },
  {
    id: 31,
    name: "#0001",
    imageUrl: "https://i.seadn.io/s/raw/files/83ef83dd7aa4caac87054e85484a47a5.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/1"
  },
  {
    id: 32,
    name: "#0002",
    imageUrl: "https://i.seadn.io/s/raw/files/844e9f24fcde5300504d0e1096730cbb.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/2"
  },
  {
    id: 33,
    name: "#0003",
    imageUrl: "https://i.seadn.io/s/raw/files/7304dcff2f600c05631c08c1c92530de.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/3"
  },
  // ... Continua così fino a 40 NFT
  {
    id: 34,
    name: "#0004",
    imageUrl: "https://i.seadn.io/s/raw/files/0bc989a3b3373b5a609881fefd1e3990.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/4"
  },
  {
    id: 35,
    name: "#0005",
    imageUrl: "https://i.seadn.io/s/raw/files/7d26b66225db0d3924344310c625e1fc.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/5"
  },
  {
    id: 36,
    name: "#0001",
    imageUrl: "https://i.seadn.io/s/raw/files/83ef83dd7aa4caac87054e85484a47a5.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/1"
  },
  {
    id: 37,
    name: "#0002",
    imageUrl: "https://i.seadn.io/s/raw/files/844e9f24fcde5300504d0e1096730cbb.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/2"
  },
  {
    id: 38,
    name: "#0003",
    imageUrl: "https://i.seadn.io/s/raw/files/7304dcff2f600c05631c08c1c92530de.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/3"
  },
  // ... Continua così fino a 40 NFT
  {
    id: 39,
    name: "#0004",
    imageUrl: "https://i.seadn.io/s/raw/files/0bc989a3b3373b5a609881fefd1e3990.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/4"
  },
  {
    id: 40,
    name: "#0005",
    imageUrl: "https://i.seadn.io/s/raw/files/7d26b66225db0d3924344310c625e1fc.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/5"
  },
  {
    id: 41,
    name: "#0001",
    imageUrl: "https://i.seadn.io/s/raw/files/83ef83dd7aa4caac87054e85484a47a5.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/1"
  },
  {
    id: 42,
    name: "#0002",
    imageUrl: "https://i.seadn.io/s/raw/files/844e9f24fcde5300504d0e1096730cbb.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/2"
  },
  {
    id: 43,
    name: "#0003",
    imageUrl: "https://i.seadn.io/s/raw/files/7304dcff2f600c05631c08c1c92530de.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/3"
  },
  // ... Continua così fino a 40 NFT
  {
    id: 44,
    name: "#0004",
    imageUrl: "https://i.seadn.io/s/raw/files/0bc989a3b3373b5a609881fefd1e3990.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/4"
  },
  {
    id: 45,
    name: "#0005",
    imageUrl: "https://i.seadn.io/s/raw/files/7d26b66225db0d3924344310c625e1fc.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/5"
  },
  {
    id: 46,
    name: "#0001",
    imageUrl: "https://i.seadn.io/s/raw/files/83ef83dd7aa4caac87054e85484a47a5.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/1"
  },
  {
    id: 47,
    name: "#0002",
    imageUrl: "https://i.seadn.io/s/raw/files/844e9f24fcde5300504d0e1096730cbb.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/2"
  },
  {
    id: 48,
    name: "#0003",
    imageUrl: "https://i.seadn.io/s/raw/files/7304dcff2f600c05631c08c1c92530de.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/3"
  },
  // ... Continua così fino a 40 NFT
  {
    id: 49,
    name: "#0004",
    imageUrl: "https://i.seadn.io/s/raw/files/0bc989a3b3373b5a609881fefd1e3990.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/4"
  },
  {
    id: 50,
    name: "#0005",
    imageUrl: "https://i.seadn.io/s/raw/files/7d26b66225db0d3924344310c625e1fc.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/5"
  },
  {
    id: 51,
    name: "#0001",
    imageUrl: "https://i.seadn.io/s/raw/files/83ef83dd7aa4caac87054e85484a47a5.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/1"
  },
  {
    id: 52,
    name: "#0002",
    imageUrl: "https://i.seadn.io/s/raw/files/844e9f24fcde5300504d0e1096730cbb.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/2"
  },
  {
    id: 53,
    name: "#0003",
    imageUrl: "https://i.seadn.io/s/raw/files/7304dcff2f600c05631c08c1c92530de.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/3"
  },
  // ... Continua così fino a 40 NFT
  {
    id: 54,
    name: "#0004",
    imageUrl: "https://i.seadn.io/s/raw/files/0bc989a3b3373b5a609881fefd1e3990.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/4"
  },
  {
    id: 55,
    name: "#0005",
    imageUrl: "https://i.seadn.io/s/raw/files/7d26b66225db0d3924344310c625e1fc.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/5"
  },
  {
    id: 56,
    name: "#0001",
    imageUrl: "https://i.seadn.io/s/raw/files/83ef83dd7aa4caac87054e85484a47a5.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/1"
  },
  {
    id: 57,
    name: "#0002",
    imageUrl: "https://i.seadn.io/s/raw/files/844e9f24fcde5300504d0e1096730cbb.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/2"
  },
  {
    id: 58,
    name: "#0003",
    imageUrl: "https://i.seadn.io/s/raw/files/7304dcff2f600c05631c08c1c92530de.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/3"
  },
  // ... Continua così fino a 40 NFT
  {
    id: 59,
    name: "#0004",
    imageUrl: "https://i.seadn.io/s/raw/files/0bc989a3b3373b5a609881fefd1e3990.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/4"
  },
  {
    id: 60,
    name: "#0005",
    imageUrl: "https://i.seadn.io/s/raw/files/7d26b66225db0d3924344310c625e1fc.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/5"
  },
  {
    id: 61,
    name: "#0001",
    imageUrl: "https://i.seadn.io/s/raw/files/83ef83dd7aa4caac87054e85484a47a5.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/1"
  },
  {
    id: 62,
    name: "#0002",
    imageUrl: "https://i.seadn.io/s/raw/files/844e9f24fcde5300504d0e1096730cbb.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/2"
  },
  {
    id: 63,
    name: "#0003",
    imageUrl: "https://i.seadn.io/s/raw/files/7304dcff2f600c05631c08c1c92530de.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/3"
  },
  // ... Continua così fino a 40 NFT
  {
    id: 64,
    name: "#0004",
    imageUrl: "https://i.seadn.io/s/raw/files/0bc989a3b3373b5a609881fefd1e3990.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/4"
  },
  {
    id: 65,
    name: "#0005",
    imageUrl: "https://i.seadn.io/s/raw/files/7d26b66225db0d3924344310c625e1fc.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/5"
  },
  {
    id: 66,
    name: "#0001",
    imageUrl: "https://i.seadn.io/s/raw/files/83ef83dd7aa4caac87054e85484a47a5.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/1"
  },
  {
    id: 67,
    name: "#0002",
    imageUrl: "https://i.seadn.io/s/raw/files/844e9f24fcde5300504d0e1096730cbb.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/2"
  },
  {
    id: 68,
    name: "#0003",
    imageUrl: "https://i.seadn.io/s/raw/files/7304dcff2f600c05631c08c1c92530de.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/3"
  },
  // ... Continua così fino a 40 NFT
  {
    id: 69,
    name: "#0004",
    imageUrl: "https://i.seadn.io/s/raw/files/0bc989a3b3373b5a609881fefd1e3990.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/4"
  },
  {
    id: 70,
    name: "#0005",
    imageUrl: "https://i.seadn.io/s/raw/files/7d26b66225db0d3924344310c625e1fc.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/5"
  },
  {
    id: 71,
    name: "#0001",
    imageUrl: "https://i.seadn.io/s/raw/files/83ef83dd7aa4caac87054e85484a47a5.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/1"
  },
  {
    id: 72,
    name: "#0002",
    imageUrl: "https://i.seadn.io/s/raw/files/844e9f24fcde5300504d0e1096730cbb.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/2"
  },
  {
    id: 73,
    name: "#0003",
    imageUrl: "https://i.seadn.io/s/raw/files/7304dcff2f600c05631c08c1c92530de.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/3"
  },
  // ... Continua così fino a 40 NFT
  {
    id: 74,
    name: "#0004",
    imageUrl: "https://i.seadn.io/s/raw/files/0bc989a3b3373b5a609881fefd1e3990.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/4"
  },
  {
    id: 75,
    name: "#0005",
    imageUrl: "https://i.seadn.io/s/raw/files/7d26b66225db0d3924344310c625e1fc.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/5"
  },
  {
    id: 76,
    name: "#0001",
    imageUrl: "https://i.seadn.io/s/raw/files/83ef83dd7aa4caac87054e85484a47a5.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/1"
  },
  {
    id: 77,
    name: "#0002",
    imageUrl: "https://i.seadn.io/s/raw/files/844e9f24fcde5300504d0e1096730cbb.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/2"
  },
  {
    id: 78,
    name: "#0003",
    imageUrl: "https://i.seadn.io/s/raw/files/7304dcff2f600c05631c08c1c92530de.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/3"
  },
  // ... Continua così fino a 40 NFT
  {
    id: 79,
    name: "#0004",
    imageUrl: "https://i.seadn.io/s/raw/files/0bc989a3b3373b5a609881fefd1e3990.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/4"
  },
  {
    id: 80,
    name: "#0005",
    imageUrl: "https://i.seadn.io/s/raw/files/7d26b66225db0d3924344310c625e1fc.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/5"
  },
  {
    id: 81,
    name: "#0001",
    imageUrl: "https://i.seadn.io/s/raw/files/83ef83dd7aa4caac87054e85484a47a5.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/1"
  },
  {
    id: 82,
    name: "#0002",
    imageUrl: "https://i.seadn.io/s/raw/files/844e9f24fcde5300504d0e1096730cbb.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/2"
  },
  {
    id: 83,
    name: "#0003",
    imageUrl: "https://i.seadn.io/s/raw/files/7304dcff2f600c05631c08c1c92530de.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/3"
  },
  // ... Continua così fino a 40 NFT
  {
    id: 84,
    name: "#0004",
    imageUrl: "https://i.seadn.io/s/raw/files/0bc989a3b3373b5a609881fefd1e3990.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/4"
  },
  {
    id: 85,
    name: "#0005",
    imageUrl: "https://i.seadn.io/s/raw/files/7d26b66225db0d3924344310c625e1fc.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/5"
  },
  {
    id: 86,
    name: "#0001",
    imageUrl: "https://i.seadn.io/s/raw/files/83ef83dd7aa4caac87054e85484a47a5.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/1"
  },
  {
    id: 87,
    name: "#0002",
    imageUrl: "https://i.seadn.io/s/raw/files/844e9f24fcde5300504d0e1096730cbb.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/2"
  },
  {
    id: 88,
    name: "#0003",
    imageUrl: "https://i.seadn.io/s/raw/files/7304dcff2f600c05631c08c1c92530de.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/3"
  },
  // ... Continua così fino a 40 NFT
  {
    id: 89,
    name: "#0004",
    imageUrl: "https://i.seadn.io/s/raw/files/0bc989a3b3373b5a609881fefd1e3990.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/4"
  },
  {
    id: 90,
    name: "#0005",
    imageUrl: "https://i.seadn.io/s/raw/files/7d26b66225db0d3924344310c625e1fc.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/5"
  },
  {
    id: 91,
    name: "#0001",
    imageUrl: "https://i.seadn.io/s/raw/files/83ef83dd7aa4caac87054e85484a47a5.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/1"
  },
  {
    id: 92,
    name: "#0002",
    imageUrl: "https://i.seadn.io/s/raw/files/844e9f24fcde5300504d0e1096730cbb.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/2"
  },
  {
    id: 93,
    name: "#0003",
    imageUrl: "https://i.seadn.io/s/raw/files/7304dcff2f600c05631c08c1c92530de.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/3"
  },
  // ... Continua così fino a 40 NFT
  {
    id: 94,
    name: "#0004",
    imageUrl: "https://i.seadn.io/s/raw/files/0bc989a3b3373b5a609881fefd1e3990.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/4"
  },
  {
    id: 95,
    name: "#0005",
    imageUrl: "https://i.seadn.io/s/raw/files/7d26b66225db0d3924344310c625e1fc.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/5"
  },
  {
    id: 96,
    name: "#0001",
    imageUrl: "https://i.seadn.io/s/raw/files/83ef83dd7aa4caac87054e85484a47a5.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/1"
  },
  {
    id: 97,
    name: "#0002",
    imageUrl: "https://i.seadn.io/s/raw/files/844e9f24fcde5300504d0e1096730cbb.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/2"
  },
  {
    id: 98,
    name: "#0003",
    imageUrl: "https://i.seadn.io/s/raw/files/7304dcff2f600c05631c08c1c92530de.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/3"
  },
  // ... Continua così fino a 40 NFT
  {
    id: 99,
    name: "#0004",
    imageUrl: "https://i.seadn.io/s/raw/files/0bc989a3b3373b5a609881fefd1e3990.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/4"
  },
  {
    id: 100,
    name: "#0005",
    imageUrl: "https://i.seadn.io/s/raw/files/7d26b66225db0d3924344310c625e1fc.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/5"
  },
  {
    id: 101,
    name: "#0001",
    imageUrl: "https://i.seadn.io/s/raw/files/83ef83dd7aa4caac87054e85484a47a5.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/1"
  },
  {
    id: 102,
    name: "#0002",
    imageUrl: "https://i.seadn.io/s/raw/files/844e9f24fcde5300504d0e1096730cbb.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/2"
  },
  {
    id: 103,
    name: "#0003",
    imageUrl: "https://i.seadn.io/s/raw/files/7304dcff2f600c05631c08c1c92530de.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/3"
  },
  // ... Continua così fino a 40 NFT
  {
    id: 104,
    name: "#0004",
    imageUrl: "https://i.seadn.io/s/raw/files/0bc989a3b3373b5a609881fefd1e3990.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/4"
  },
  {
    id: 105,
    name: "#0005",
    imageUrl: "https://i.seadn.io/s/raw/files/7d26b66225db0d3924344310c625e1fc.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/5"
  },
  {
    id: 106,
    name: "#0001",
    imageUrl: "https://i.seadn.io/s/raw/files/83ef83dd7aa4caac87054e85484a47a5.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/1"
  },
  {
    id: 107,
    name: "#0002",
    imageUrl: "https://i.seadn.io/s/raw/files/844e9f24fcde5300504d0e1096730cbb.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/2"
  },
  {
    id: 108,
    name: "#0003",
    imageUrl: "https://i.seadn.io/s/raw/files/7304dcff2f600c05631c08c1c92530de.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/3"
  },
  // ... Continua così fino a 40 NFT
  {
    id: 109,
    name: "#0004",
    imageUrl: "https://i.seadn.io/s/raw/files/0bc989a3b3373b5a609881fefd1e3990.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/4"
  },
  {
    id: 110,
    name: "#0005",
    imageUrl: "https://i.seadn.io/s/raw/files/7d26b66225db0d3924344310c625e1fc.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/5"
  },
  {
    id: 111,
    name: "#0001",
    imageUrl: "https://i.seadn.io/s/raw/files/83ef83dd7aa4caac87054e85484a47a5.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/1"
  },
  {
    id: 112,
    name: "#0002",
    imageUrl: "https://i.seadn.io/s/raw/files/844e9f24fcde5300504d0e1096730cbb.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/2"
  },
  {
    id: 113,
    name: "#0003",
    imageUrl: "https://i.seadn.io/s/raw/files/7304dcff2f600c05631c08c1c92530de.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/3"
  },
  // ... Continua così fino a 40 NFT
  {
    id: 114,
    name: "#0004",
    imageUrl: "https://i.seadn.io/s/raw/files/0bc989a3b3373b5a609881fefd1e3990.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/4"
  },
  {
    id: 115,
    name: "#0005",
    imageUrl: "https://i.seadn.io/s/raw/files/7d26b66225db0d3924344310c625e1fc.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/5"
  },
  {
    id: 116,
    name: "#0001",
    imageUrl: "https://i.seadn.io/s/raw/files/83ef83dd7aa4caac87054e85484a47a5.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/1"
  },
  {
    id: 117,
    name: "#0002",
    imageUrl: "https://i.seadn.io/s/raw/files/844e9f24fcde5300504d0e1096730cbb.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/2"
  },
  {
    id: 118,
    name: "#0003",
    imageUrl: "https://i.seadn.io/s/raw/files/7304dcff2f600c05631c08c1c92530de.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/3"
  },
  // ... Continua così fino a 40 NFT
  {
    id: 119,
    name: "#0004",
    imageUrl: "https://i.seadn.io/s/raw/files/0bc989a3b3373b5a609881fefd1e3990.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/4"
  },
  {
    id: 120,
    name: "#0005",
    imageUrl: "https://i.seadn.io/s/raw/files/7d26b66225db0d3924344310c625e1fc.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/5"
  },
  {
    id: 121,
    name: "#0001",
    imageUrl: "https://i.seadn.io/s/raw/files/83ef83dd7aa4caac87054e85484a47a5.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/1"
  },
  {
    id: 122,
    name: "#0002",
    imageUrl: "https://i.seadn.io/s/raw/files/844e9f24fcde5300504d0e1096730cbb.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/2"
  },
  {
    id: 123,
    name: "#0003",
    imageUrl: "https://i.seadn.io/s/raw/files/7304dcff2f600c05631c08c1c92530de.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/3"
  },
  // ... Continua così fino a 40 NFT
  {
    id: 124,
    name: "#0004",
    imageUrl: "https://i.seadn.io/s/raw/files/0bc989a3b3373b5a609881fefd1e3990.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/4"
  },
  {
    id: 125,
    name: "#0005",
    imageUrl: "https://i.seadn.io/s/raw/files/7d26b66225db0d3924344310c625e1fc.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/5"
  },
  {
    id: 126,
    name: "#0001",
    imageUrl: "https://i.seadn.io/s/raw/files/83ef83dd7aa4caac87054e85484a47a5.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/1"
  },
  {
    id: 127,
    name: "#0002",
    imageUrl: "https://i.seadn.io/s/raw/files/844e9f24fcde5300504d0e1096730cbb.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/2"
  },
  {
    id: 128,
    name: "#0003",
    imageUrl: "https://i.seadn.io/s/raw/files/7304dcff2f600c05631c08c1c92530de.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/3"
  },
  // ... Continua così fino a 40 NFT
  {
    id: 129,
    name: "#0004",
    imageUrl: "https://i.seadn.io/s/raw/files/0bc989a3b3373b5a609881fefd1e3990.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/4"
  },
  {
    id: 130,
    name: "#0005",
    imageUrl: "https://i.seadn.io/s/raw/files/7d26b66225db0d3924344310c625e1fc.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/5"
  },
  {
    id: 131,
    name: "#0001",
    imageUrl: "https://i.seadn.io/s/raw/files/83ef83dd7aa4caac87054e85484a47a5.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/1"
  },
  {
    id: 132,
    name: "#0002",
    imageUrl: "https://i.seadn.io/s/raw/files/844e9f24fcde5300504d0e1096730cbb.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/2"
  },
  {
    id: 133,
    name: "#0003",
    imageUrl: "https://i.seadn.io/s/raw/files/7304dcff2f600c05631c08c1c92530de.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/3"
  },
  // ... Continua così fino a 40 NFT
  {
    id: 134,
    name: "#0004",
    imageUrl: "https://i.seadn.io/s/raw/files/0bc989a3b3373b5a609881fefd1e3990.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/4"
  },
  {
    id: 135,
    name: "#0005",
    imageUrl: "https://i.seadn.io/s/raw/files/7d26b66225db0d3924344310c625e1fc.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/5"
  },
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
              <a
                href={nft.openseaUrl || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="nft-link"
              >
                OpenSea
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
