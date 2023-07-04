// pages/events/[eventId].js
import React, { useContext, useState } from 'react';
import { useRouter } from 'next/router';
import { EventContext } from '../../context/EventContext.js';
import EventForm from '../../components/EventForm.js';

const EventDetailsPage = () => {
  const router = useRouter();
  const { eventId } = router.query;
  const { events, updateEvent } = useContext(EventContext);
  const event = events.find((event) => event.id === Number(eventId));
  const [error, setError] = useState(null);

  const handleEventSubmit = (eventData) => {
    if (eventData.title && eventData.date) {
      updateEvent(Number(eventId), eventData);
      router.push(`/events/${eventId}`);
    } else {
      setError('Veuillez remplir tous les champs du formulaire.');
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Modifier l'événement {eventId}</h1>
      {event ? (
        <>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <EventForm
            initialData={{ title: event.title, date: event.date }}
            onSubmit={handleEventSubmit}
          />
        </>
      ) : (
        <p>Cet événement n'existe pas.</p>
      )}
    </div>
  );
};

export default EventDetailsPage;
