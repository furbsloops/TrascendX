import React from 'react';
import CookieConsent from 'react-cookie-consent';
import './CookieBanner.css';

const CookieBanner = () => {
  return (
    <CookieConsent
      location="bottom" // Posizione del banner
      buttonText="Accetto" // Testo del bottone di accettazione
      cookieName="userAcceptCookies" // Nome del cookie per tracciare l'accettazione
      style={{ background: "#2B373B" }} // Stile del background del banner
      buttonStyle={{ color: "#4e503b", fontSize: "13px" }} // Stile del bottone
      expires={150} // Numero di giorni dopo cui il cookie scade
      onAccept={() => {
        console.log("Cookies accettati.");
      }}
    >
      Questo sito utilizza cookies per migliorare l'esperienza utente.{' '}
      <span style={{ fontSize: "10px" }}>Accetta per continuare la navigazione.</span>
    </CookieConsent>
  );
};

export default CookieBanner;
