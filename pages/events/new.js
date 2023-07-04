// pages/events/new.js
import React, { useContext, useState } from 'react';
import EventForm from '../../components/EventForm';
import { EventContext } from '../../context/EventContext';

const NewEventPage = () => {
  const { createEvent } = useContext(EventContext);
  const [error, setError] = useState(null);

  const handleEventSubmit = (eventData) => {
    if (eventData.title && eventData.date) {
      createEvent(eventData);
    } else {
      setError('Veuillez remplir tous les champs du formulaire.');
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Créer un nouvel événement</h1>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <EventForm onSubmit={handleEventSubmit} />
    </div>
  );
};

export default NewEventPage;
