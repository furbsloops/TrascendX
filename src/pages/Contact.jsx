import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Qui potresti aggiungere una logica per inviare i dati a un server
    console.log(formData);
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen flex flex-col">
      <h1 className="text-4xl font-bold text-center text-gray-800">Contatti</h1>
      <div className="mt-8 max-w-md mx-auto space-y-8">
        {/* Link alla collezione OpenSea */}
        <div className="text-center">
          <p className="text-lg text-gray-700 mb-4">
            Scopri la nostra collezione unica su OpenSea:
          </p>
          <a
            href="https://opensea.io/collection/your-collection-name"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary-600 text-white py-2 px-6 rounded-md shadow hover:bg-primary-700 transition-colors"
          >
            Visita la collezione su OpenSea
          </a>
        </div>

        {/* Modulo di contatto */}
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-md shadow-md">
          <div className="mb-6">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nome</label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Messaggio</label>
            <textarea
              name="message"
              id="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-primary-600 text-white py-2 px-4 rounded-md hover:bg-primary-700 transition-colors"
          >
            Invia
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
