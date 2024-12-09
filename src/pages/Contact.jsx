import React, { useState } from 'react';
import './Contact.css'; // Importa il file CSS

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Qui potresti aggiungere la logica per inviare i dati a un server
    console.log(formData);
  };

  return (
    <div className="contact-container">
      <h1 className="contact-title">Contatti</h1>
      <div className="contact-content">
        {/* Link alla collezione OpenSea */}
        <div className="opensea-section">
          <p>
            Scopri la nostra collezione unica su OpenSea:
          </p>
          <a
            href="https://opensea.io/collection/your-collection-name"
            target="_blank"
            rel="noopener noreferrer"
            className="opensea-button"
          >
            Visita la collezione su OpenSea
          </a>
        </div>

        {/* Modulo di contatto */}
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Nome</label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Messaggio</label>
            <textarea
              name="message"
              id="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="submit"
            className="submit-button"
          >
            Invia
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
