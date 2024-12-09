// In un componente NFT
const NFTCard = ({ nft }) => {
    return (
      <div className="nft-card">
        <img src={nft.image} alt={nft.name} />
        <div className="p-4">
          <h3>{nft.name}</h3>
          <a href={`https://opensea.io/assets/${nft.openseaLink}`} target="_blank" rel="noopener noreferrer">
            Vedi su OpenSea
          </a>
        </div>
      </div>
    );
  };
  
  export default NFTCard;
  