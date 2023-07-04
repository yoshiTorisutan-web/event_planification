// components/EventForm.js
import React, { useState } from 'react';

const EventForm = ({ initialData, onSubmit }) => {
  const [title, setTitle] = useState(initialData?.title || '');
  const [date, setDate] = useState(initialData?.date || '');
  const [error, setError] = useState(null);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (title.trim() === '' || date.trim() === '') {
      setError('Veuillez remplir tous les champs du formulaire.');
      return;
    }

    onSubmit({ title, date });
  };

  return (
    <form onSubmit={handleFormSubmit}>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <div className="mb-4">
        <label htmlFor="title" className="block text-gray-700 font-bold mb-2">
          Titre
        </label>
        <input
          type="text"
          id="title"
          className="border border-gray-300 px-4 py-2 w-full"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="date" className="block text-gray-700 font-bold mb-2">
          Date
        </label>
        <input
          type="date"
          id="date"
          className="border border-gray-300 px-4 py-2 w-full"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Soumettre
      </button>
    </form>
  );
};

export default EventForm;
