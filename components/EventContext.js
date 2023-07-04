// context/EventContext.js
import React, { createContext, useState } from 'react';

export const EventContext = createContext();

export const EventProvider = ({ children }) => {
  const [events, setEvents] = useState([]);
  const [error, setError] = useState(null);

  const createEvent = (eventData) => {
    try {
      const newEvent = { id: events.length + 1, ...eventData };
      setEvents((prevEvents) => [...prevEvents, newEvent]);
      setError(null);
    } catch (err) {
      setError('Une erreur s\'est produite lors de la création de l\'événement.');
    }
  };

  const updateEvent = (eventId, eventData) => {
    try {
      setEvents((prevEvents) =>
        prevEvents.map((event) =>
          event.id === eventId ? { ...event, ...eventData } : event
        )
      );
      setError(null);
    } catch (err) {
      setError('Une erreur s\'est produite lors de la mise à jour de l\'événement.');
    }
  };

  const deleteEvent = (eventId) => {
    try {
      setEvents((prevEvents) =>
        prevEvents.filter((event) => event.id !== eventId)
      );
      setError(null);
    } catch (err) {
      setError('Une erreur s\'est produite lors de la suppression de l\'événement.');
    }
  };

  return (
    <EventContext.Provider
      value={{ events, error, createEvent, updateEvent, deleteEvent }}
    >
      {children}
    </EventContext.Provider>
  );
};
