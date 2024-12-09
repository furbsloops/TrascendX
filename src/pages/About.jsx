import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8 overflow-auto">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Titolo */}
        <h1 className="text-5xl font-bold text-center text-gray-800">
          About Trascendx
        </h1>

        {/* Descrizione */}
        <p className="text-xl text-center text-gray-700 max-w-4xl mx-auto">
          Trascendx è una visione futuristica del mondo dell'arte digitale. 
          Combiniamo tecnologia avanzata e design unico per creare pezzi 
          collezionabili che spingono i confini della creatività. I nostri NFT 
          rappresentano il culmine dell'innovazione e della bellezza artistica.
        </p>

        {/* Immagine */}
        <div className="flex justify-center">
          <img 
            src="https://via.placeholder.com/600" 
            alt="About Trascendx" 
            className="w-full max-w-lg rounded-lg shadow-lg"
          />
        </div>

        {/* Missione */}
        <div className="text-center space-y-6">
          <h2 className="text-3xl font-semibold text-gray-800">
            La nostra missione
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Con Trascendx, miriamo a ridefinire il concetto di arte digitale, offrendo 
            a collezionisti e appassionati opere che non solo ispirano, ma aprono nuove 
            possibilità nel mondo del metaverso e della blockchain.
          </p>
        </div>

        {/* Perché scegliere Trascendx */}
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold text-center text-gray-800">
            Perché scegliere Trascendx?
          </h2>
          <ul className="list-disc text-lg text-gray-700 max-w-3xl mx-auto space-y-3 pl-10">
            <li>
              Opere d'arte uniche e limitate, garantite dalla tecnologia blockchain.
            </li>
            <li>
              Una comunità in crescita di artisti e collezionisti che condividono 
              la passione per l'innovazione.
            </li>
            <li>
              Un team dedicato a spingere i confini dell'arte digitale.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
