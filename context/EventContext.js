// context/EventContext.js
import React, { createContext, useState } from 'react';

export const EventContext = createContext();

export const EventProvider = ({ children }) => {
  const [events, setEvents] = useState([]);

  const createEvent = (eventData) => {
    const newEvent = {
      id: Date.now(),
      ...eventData,
    };
    setEvents([...events, newEvent]);
  };

  const updateEvent = (eventId, eventData) => {
    const updatedEvents = events.map((event) =>
      event.id === eventId ? { ...event, ...eventData } : event
    );
    setEvents(updatedEvents);
  };

  const deleteEvent = (eventId) => {
    const updatedEvents = events.filter((event) => event.id !== eventId);
    setEvents(updatedEvents);
  };

  return (
    <EventContext.Provider value={{ events, createEvent, updateEvent, deleteEvent }}>
      {children}
    </EventContext.Provider>
  );
};
