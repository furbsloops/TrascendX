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

  {
    id: 6,
    name: "#0006",
    imageUrl: "https://i.seadn.io/s/raw/files/4036ae57e5f36f2a0b01d4ea810a1f91.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/6"
  },
  {
    id: 7,
    name: "#0007",
    imageUrl: "https://i.seadn.io/s/raw/files/8af874de596017fe86329e81f1e1ac89.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/7"
  },
  {
    id: 8,
    name: "#0008",
    imageUrl: "https://i.seadn.io/s/raw/files/303f52e027a0f387900c374103ce18e7.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/8"
  },
  // ... Continua così fino a 40 NFT
  {
    id: 9,
    name: "#0009",
    imageUrl: "https://i.seadn.io/s/raw/files/c48468fed24edd74bf83b711c0ba5340.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/9"
  },
  {
    id: 10,
    name: "#0010",
    imageUrl: "https://i.seadn.io/s/raw/files/8487d9e4f519d10f91ac9a9ae5fc1c94.png?auto=format&dpr=1&w=1000",
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
  // ... Continua così fino a 40 NFT
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
  // ... Continua così fino a 40 NFT
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
  {
    id: 21,
    name: "#0021",
    imageUrl: "https://i.seadn.io/s/raw/files/c44c521c893ddf544e7cf436906ec3a0.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/21"
  },
  {
    id: 22,
    name: "#0022",
    imageUrl: "https://i.seadn.io/s/raw/files/b8deca5aa22aedefcfae328243762db6.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/22"
  },
  {
    id: 23,
    name: "#0023",
    imageUrl: "https://i.seadn.io/s/raw/files/61ce4e8e778cdc1c04ad545f87bac94a.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/23"
  },


  {
    id: 24,
    name: "#0024",
    imageUrl: "https://i.seadn.io/s/raw/files/5174672340377d7dc0266cf06374789a.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/24"
  },
  {
    id: 25,
    name: "#0025",
    imageUrl: "https://i.seadn.io/s/raw/files/e4e9014fa621338559b492b6d870ac2c.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/25"
  },
  {
    id: 26,
    name: "#0026",
    imageUrl: "https://i.seadn.io/s/raw/files/452e83bea02e5955f80e5465e7f148ef.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/26"
  },
  {
    id: 27,
    name: "#0027",
    imageUrl: "https://i.seadn.io/s/raw/files/97545614ecda883ae33617fa9bf89ac3.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/2"
  },
  {
    id: 28,
    name: "#0028",
    imageUrl: "https://i.seadn.io/s/raw/files/9457efcb29284360ebe3632b61c4927a.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/28"
  },

  
  {
    id: 29,
    name: "#0029",
    imageUrl: "https://i.seadn.io/s/raw/files/f561c076e65e13d8fb42b2c9e6446c5f.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/29"
  },
  {
    id: 30,
    name: "#0030",
    imageUrl: "https://i.seadn.io/s/raw/files/eb2dc13eb00ba1294c01704dddea057d.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/30"
  },
  {
    id: 31,
    name: "#0031",
    imageUrl: "https://i.seadn.io/s/raw/files/49f3208ee21ad3b32b407da1362d0326.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/31"
  },
  {
    id: 32,
    name: "#0032",
    imageUrl: "https://i.seadn.io/s/raw/files/823724f67207398e9409feb8c456ed07.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/32"
  },
  {
    id: 33,
    name: "#0033",
    imageUrl: "https://i.seadn.io/s/raw/files/5378ef510dbc33362331feda0bfe7e55.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/33"
  },
  {
    id: 34,
    name: "#0034",
    imageUrl: "https://i.seadn.io/s/raw/files/b657ca6ad611babaac4a0042dd80c419.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/34"
  },
  {
    id: 35,
    name: "#0035",
    imageUrl: "https://i.seadn.io/s/raw/files/b511f46b0bbd1e55790f23ecbfa2aedf.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/35"
  },
  {
    id: 36,
    name: "#0036",
    imageUrl: "https://i.seadn.io/s/raw/files/939b306b9265c75a8c247fb6b2a1de40.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/36"
  },
  {
    id: 37,
    name: "#0037",
    imageUrl: "https://i.seadn.io/s/raw/files/e1bb6d0096f9da2974712deb25329376.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/37"
  },
  {
    id: 38,
    name: "#0038",
    imageUrl: "https://i.seadn.io/s/raw/files/06fe55afbcdd771b213f0d4c9b991e92.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/38"
  },
  {
    id: 39,
    name: "#0039",
    imageUrl: "https://i.seadn.io/s/raw/files/97ed0d87a9b0dc3c5856a575b6f25d6e.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/39"
  },
  {
    id: 40,
    name: "#0040",
    imageUrl: "https://i.seadn.io/s/raw/files/1beebb2ed32c3281deddd8962103dc06.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/40"
  },
  {
    id: 41,
    name: "#0041",
    imageUrl: "https://i.seadn.io/s/raw/files/cd5840d7a6ffc63ba90902d7850f9d83.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/41"
  },
  {
    id: 42,
    name: "#0042",
    imageUrl: "https://i.seadn.io/s/raw/files/f4c9242522e1f3b86e0c800584a8bc23.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/42"
  },
  {
    id: 43,
    name: "#0043",
    imageUrl: "https://i.seadn.io/s/raw/files/a7c243cb419dbed86479c7070043ca30.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/43"
  },
  {
    id: 44,
    name: "#0044",
    imageUrl: "https://i.seadn.io/s/raw/files/f4bec34567a2fc014a284913f89d51f4.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/44"
  },
  {
    id: 45,
    name: "#0045",
    imageUrl: "https://i.seadn.io/s/raw/files/4ee6db443a53f9486d185fa5dc4ef29d.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/45"
  },
  {
    id: 46,
    name: "#0046",
    imageUrl: "https://i.seadn.io/s/raw/files/89c897d0caf6563f1f1f0ad51f283172.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/46"
  },
  {
    id: 47,
    name: "#0047",
    imageUrl: "https://i.seadn.io/s/raw/files/e38208313cb35194486e7040695fcc32.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/47"
  },
  {
    id: 48,
    name: "#0048",
    imageUrl: "https://i.seadn.io/s/raw/files/683bf8f47fa55fa6fced3b639e43b629.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/48"
  },
  {
    id: 49,
    name: "#0049",
    imageUrl: "https://i.seadn.io/s/raw/files/77ebbbabb3a58f953b9e2e4c6e43fab7.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/49"
  },
  {
    id: 50,
    name: "#0050",
    imageUrl: "https://i.seadn.io/s/raw/files/59e6eda04c53a4df03e88b855a679c52.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/50"
  },
  {
    id: 51,
    name: "#0051",
    imageUrl: "https://i.seadn.io/s/raw/files/f14e51950bd041a2a320554741bf4d57.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/51"
  },
  {
    id: 52,
    name: "#0052",
    imageUrl: "https://i.seadn.io/s/raw/files/c333c56093f8437956a5357d5bd46729.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/52"
  },
  {
    id: 53,
    name: "#0053",
    imageUrl: "https://i.seadn.io/s/raw/files/20d786386feffb04743ccb99a129d5a7.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/53"
  },
  {
    id: 54,
    name: "#0054",
    imageUrl: "https://i.seadn.io/s/raw/files/c297e353c1e8f3bd0fcd96e51536f706.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/54"
  },
  {
    id: 55,
    name: "#0055",
    imageUrl: "https://i.seadn.io/s/raw/files/910dc16e29083bfa63e8845ecc6a9df7.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/55"
  },
  {
    id: 56,
    name: "#0056",
    imageUrl: "https://i.seadn.io/s/raw/files/1767f9215af5466917aafe69f8452d48.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/56"
  },
  {
    id: 57,
    name: "#0057",
    imageUrl: "https://i.seadn.io/s/raw/files/132f4f5a7dae794424b0e846c9e690aa.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/57"
  },
  {
    id: 58,
    name: "#0058",
    imageUrl: "https://i.seadn.io/s/raw/files/1273202d9ede00b166cac776ec6d2037.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/58"
  },
  {
    id: 59,
    name: "#0059",
    imageUrl: "https://i.seadn.io/s/raw/files/bc02d3e27a21f1963bcd605730517095.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/59"
  },
  {
    id: 60,
    name: "#0060",
    imageUrl: "https://i.seadn.io/s/raw/files/9425fbac04855f56a7fb9aa8932f9d15.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/60"
  },
  {
    id: 61,
    name: "#0061",
    imageUrl: "https://i.seadn.io/s/raw/files/799a0209bdde11ac1104b6f2afc09867.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/61"
  },
  {
    id: 62,
    name: "#0062",
    imageUrl: "https://i.seadn.io/s/raw/files/538affac114fd9cf3e47067f545b26b5.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/62"
  },
  {
    id: 63,
    name: "#0063",
    imageUrl: "https://i.seadn.io/s/raw/files/f2f003f68152038d957cd39d42bbca7c.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/63"
  },
  {
    id: 64,
    name: "#0064",
    imageUrl: "https://i.seadn.io/s/raw/files/0b69a784dc5811b18bf9d069b0f240eb.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/64"
  },
  {
    id: 65,
    name: "#0065",
    imageUrl: "https://i.seadn.io/s/raw/files/bef32ccabc70902032e89bc97f09cb53.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/65"
  },
  {
    id: 66,
    name: "#0066",
    imageUrl: "https://i.seadn.io/s/raw/files/12bb968a9d7c8b02241ea9b589c35613.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/66"
  },
  {
    id: 67,
    name: "#0067",
    imageUrl: "https://i.seadn.io/s/raw/files/21faa826ba3c076fcab02269dffaaaaa.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/67"
  },
  {
    id: 68,
    name: "#0068",
    imageUrl: "https://i.seadn.io/s/raw/files/9d5badb4c4ec62568f3dc63cb449952e.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/68"
  },
  {
    id: 69,
    name: "#0069",
    imageUrl: "https://i.seadn.io/s/raw/files/923982a66fc23f075cf0645460165e1a.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/69"
  },
  {
    id: 70,
    name: "#0070",
    imageUrl: "https://i.seadn.io/s/raw/files/b691aa28fc9a24d10ac29a3c03eb1bde.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/70"
  },
  {
    id: 71,
    name: "#0071",
    imageUrl: "https://i.seadn.io/s/raw/files/7f4b24095b7f808d6395e1b75812e336.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/71"
  },
  {
    id: 72,
    name: "#0072",
    imageUrl: "https://i.seadn.io/s/raw/files/3eae3274d21dc61d6a1a4db0dc34cb1b.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/72"
  },
  {
    id: 73,
    name: "#0073",
    imageUrl: "https://i.seadn.io/s/raw/files/efd956f4b5c349eb742bd1e694868f9d.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/73"
  },
  {
    id: 74,
    name: "#0074",
    imageUrl: "https://i.seadn.io/s/raw/files/2440c858d19236019351984b259384f6.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/74"
  },
  {
    id: 75,
    name: "#0075",
    imageUrl: "https://i.seadn.io/s/raw/files/495495c176edf04322da65c8f07921ed.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/75"
  },
  {
    id: 76,
    name: "#0076",
    imageUrl: "https://i.seadn.io/s/raw/files/53f5e2b24b689493d55409324dd81b21.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/76"
  },
  {
    id: 77,
    name: "#0077",
    imageUrl: "https://i.seadn.io/s/raw/files/2cd7926d4bfb103c3375d750157d859d.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/77"
  },
  {
    id: 78,
    name: "#0078",
    imageUrl: "https://i.seadn.io/s/raw/files/d90f39345bd1aa951c9b11904d9a07e3.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/78"
  },
  {
    id: 79,
    name: "#0079",
    imageUrl: "https://i.seadn.io/s/raw/files/4385bafef5b4e9286598fd551bb2dc32.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/79"
  },
  {
    id: 80,
    name: "#0080",
    imageUrl: "https://i.seadn.io/s/raw/files/7683017378aa6519a6c16f002a8fa01e.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/80"
  },
  {
    id: 81,
    name: "#0081",
    imageUrl: "https://i.seadn.io/s/raw/files/d4a2d2500cdf0895fa267706591fb1fe.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/81"
  },
  {
    id: 82,
    name: "#0082",
    imageUrl: "https://i.seadn.io/s/raw/files/dd4012106a4abe47920c17d3c7141806.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/82"
  },
  {
    id: 83,
    name: "#0083",
    imageUrl: "https://i.seadn.io/s/raw/files/f6c2160cc82ef6265de3799a25ff5624.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/83"
  },
  {
    id: 84,
    name: "#0084",
    imageUrl: "https://i.seadn.io/s/raw/files/7365527be3b266558c872b441ae1be85.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/84"
  },
  {
    id: 85,
    name: "#0085",
    imageUrl: "https://i.seadn.io/s/raw/files/e928a7a7413178c19b176a41df4a7955.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/85"
  },
  {
    id: 86,
    name: "#0086",
    imageUrl: "https://i.seadn.io/s/raw/files/a9e31f76445fdfc01f630ef936f6779e.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/86"
  },
  {
    id: 87,
    name: "#0087",
    imageUrl: "https://i.seadn.io/s/raw/files/8d743b1b2208f47d405d99839ef979ce.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/87"
  },
  {
    id: 88,
    name: "#0088",
    imageUrl: "https://i.seadn.io/s/raw/files/72e9892a8d34bea6e0939ffa8db22f91.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/88"
  },
    // Aggiungi i restanti NFT fino ad arrivare a 40...
    // Aggiungi i restanti NFT fino ad arrivare a 40...
      // Aggiungi i restanti NFT fino ad arrivare a 40...
        // Aggiungi i restanti NFT fino ad arrivare a 40...
          // Aggiungi i restanti NFT fino ad arrivare a 40...
            // completare il task fino ai mintati attuali...
  {
    id: 89,
    name: "#0089",
    imageUrl: "https://i.seadn.io/s/raw/files/3ee050b1205058870b2d57aaf8381de4.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/89"
  },
  {
    id: 90,
    name: "#0090",
    imageUrl: "https://i.seadn.io/s/raw/files/cb524bb7bef29071e094f6244a1cccab.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/90"
  },
  {
    id: 91,
    name: "#0091",
    imageUrl: "https://i.seadn.io/s/raw/files/838502d107b6b5828eec6d6735ee6195.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/91"
  },
  {
    id: 92,
    name: "#0092",
    imageUrl: "https://i.seadn.io/s/raw/files/caafc997bb61f59812ff02c4f1ccd858.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/92"
  },
  {
    id: 93,
    name: "#0093",
    imageUrl: "https://i.seadn.io/s/raw/files/0c7352e84668de0b92eb3c9210c7607f.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/93"
  },
  {
    id: 94,
    name: "#0094",
    imageUrl: "https://i.seadn.io/s/raw/files/dae03b3d8cd55deebea6fd807599ff3a.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/94"
  },
  {
    id: 95,
    name: "#0095",
    imageUrl: "https://i.seadn.io/s/raw/files/dc9e4c55ab0b1c28d08013054ecd3cf9.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/95"
  },
  {
    id: 96,
    name: "#0096",
    imageUrl: "https://i.seadn.io/s/raw/files/d9f4747716b3240e952279da9d67ad0b.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/96"
  },
  {
    id: 97,
    name: "#0097",
    imageUrl: "https://i.seadn.io/s/raw/files/a9e31f76445fdfc01f630ef936f6779e.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/97"
  },
  {
    id: 98,
    name: "#0098",
    imageUrl: "https://i.seadn.io/s/raw/files/475a87300cd219a5e198622c870c976b.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/98"
  },
  {
    id: 99,
    name: "#0099",
    imageUrl: "https://i.seadn.io/s/raw/files/0db6534600371c81dcd8c715993e18a8.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/99"
  },
  {
    id: 100,
    name: "#0100",
    imageUrl: "https://i.seadn.io/s/raw/files/f2017d42d6ddd0bba7634bbe85355a84.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/100"
  },
  {
    id: 101,
    name: "#0101",
    imageUrl: "https://i.seadn.io/s/raw/files/59d46d87b29d71bcb9fd7203039183f7.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/101"
  },
  {
    id: 102,
    name: "#0102",
    imageUrl: "https://i.seadn.io/s/raw/files/add4c4fba89ecbd31d25abc8bdddb023.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/102"
  },
  {
    id: 103,
    name: "#0103",
    imageUrl: "https://i.seadn.io/s/raw/files/151f38b049aa4a9c60a9a83da2038c06.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/103"
  },
  {
    id: 104,
    name: "#0104",
    imageUrl: "https://i.seadn.io/s/raw/files/b700059464393198345d2f16e9514afe.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/104"
  },
  {
    id: 105,
    name: "#0105",
    imageUrl: "https://i.seadn.io/s/raw/files/e334d666e8a3d8013e26e13c2424fe04.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/105"
  },
  {
    id: 106,
    name: "#0106",
    imageUrl: "https://i.seadn.io/s/raw/files/02dceb95bb0c8ea038b9b3894f974bcd.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/106"
  },
  {
    id: 107,
    name: "#0107",
    imageUrl: "https://i.seadn.io/s/raw/files/2b78758e41fa86484e5fa5d803afa1dd.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/107"
  },
  {
    id: 108,
    name: "#0108",
    imageUrl: "https://i.seadn.io/s/raw/files/671ce7545d151537e68e0dc3a7d0ef8c.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/108"
  },
  {
    id: 109,
    name: "#0109",
    imageUrl: "https://i.seadn.io/s/raw/files/b28dbf818d7902ddbe1837bf9d04584b.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/109"
  },
  {
    id: 110,
    name: "#0110",
    imageUrl: "https://i.seadn.io/s/raw/files/618fe0f23ce22ed05ecc66071adc6c0c.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/110"
  },
  {
    id: 111,
    name: "#0111",
    imageUrl: "https://i.seadn.io/s/raw/files/aac796dc0c8eb5a2fc5ac926b4715180.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/111"
  },
  {
    id: 112,
    name: "#0112",
    imageUrl: "https://i.seadn.io/s/raw/files/f5bc6e4f21b2fadfc68fe1855b2df86a.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/112"
  },
  {
    id: 113,
    name: "#0113",
    imageUrl: "https://i.seadn.io/s/raw/files/16746debac6653819760f954207f8288.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/113"
  },
  {
    id: 114,
    name: "#0114",
    imageUrl: "https://i.seadn.io/s/raw/files/a936984e80aa0cfcc465c29b18a0d215.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/114"
  },
  {
    id: 115,
    name: "#0115",
    imageUrl: "https://i.seadn.io/s/raw/files/950645908b407fa8d571a9036c0714ac.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/115"
  },
  {
    id: 116,
    name: "#0116",
    imageUrl: "https://i.seadn.io/s/raw/files/08d87ad95493b90d95a52e013d276cc7.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/116"
  },
  {
    id: 117,
    name: "#0117",
    imageUrl: "https://i.seadn.io/s/raw/files/14fade7e8bcef5a3dc66a63a31148abd.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/117"
  },
  {
    id: 118,
    name: "#0118",
    imageUrl: "https://i.seadn.io/s/raw/files/723215d24f63ed76512b55c90a008b17.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/118"
  },
  {
    id: 119,
    name: "#0119",
    imageUrl: "https://i.seadn.io/s/raw/files/20d1c7a49d1cd042087ece6272a2d6e0.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/119"
  },
  {
    id: 120,
    name: "#0120",
    imageUrl: "https://i.seadn.io/s/raw/files/e511838cd1e34844e54f03868cca1ad7.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/120"
  },
  {
    id: 121,
    name: "#0121",
    imageUrl: "hhttps://i.seadn.io/s/raw/files/35c086e04dc6089fe3ce0601e83b74b3.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/121"
  },
  {
    id: 122,
    name: "#0122",
    imageUrl: "https://i.seadn.io/s/raw/files/85839058d098a69657c3eff18c146676.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/122"
  },
  {
    id: 123,
    name: "#0123",
    imageUrl: "https://i.seadn.io/s/raw/files/eaf04e8eb49953d30130272ebe129ec2.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/123"
  },
  {
    id: 124,
    name: "#0124",
    imageUrl: "https://i.seadn.io/s/raw/files/1dd9c313b6656ed4b27a2023e4d583cf.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/124"
  },
  {
    id: 125,
    name: "#0125",
    imageUrl: "https://i.seadn.io/s/raw/files/b98d3adc7628cdf801532258e7365f9e.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/125"
  },
  {
    id: 126,
    name: "#0126",
    imageUrl: "https://i.seadn.io/s/raw/files/5e754394f4fa36b34a1fce78f2311e27.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/126"
  },
  {
    id: 127,
    name: "#0127",
    imageUrl: "https://i.seadn.io/s/raw/files/3fbe8b9f61281b52a1359813768f22d9.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/127"
  },
  {
    id: 128,
    name: "#0128",
    imageUrl: "https://i.seadn.io/s/raw/files/2260464467a0ae5263025b3c1be86ed4.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/128"
  },
  {
    id: 129,
    name: "#0129",
    imageUrl: "https://i.seadn.io/s/raw/files/998784bcb5754b59a656ad27a78fb075.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/129"
  },
  {
    id: 130,
    name: "#0130",
    imageUrl: "https://i.seadn.io/s/raw/files/79507aef1e2d3396faa0e87ccaf36818.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/130"
  },
  {
    id: 131,
    name: "#0131",
    imageUrl: "https://i.seadn.io/s/raw/files/36e660fdd80446547bff11a98b3d9bd3.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/131"
  },
  {
    id: 132,
    name: "#0132",
    imageUrl: "https://i.seadn.io/s/raw/files/67d10598b0760b8df66c268bf2d42cb2.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/132"
  },
  {
    id: 133,
    name: "#0133",
    imageUrl: "https://i.seadn.io/s/raw/files/4fea752a1ac973e6b54db790027ec4d0.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/133"
  },
  {
    id: 134,
    name: "#0134",
    imageUrl: "https://i.seadn.io/s/raw/files/74fc142556560fe73d49175cac728d19.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/134"
  },
  {
    id: 135,
    name: "#0135",
    imageUrl: "https://i.seadn.io/s/raw/files/409b62b69841ea3d39d420cb39ba0454.png?auto=format&dpr=1&w=1000",
    openseaUrl: "https://opensea.io/assets/matic/0x55ca8c033f230ef9dd09412784948a9d4734dccf/135"
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
