// components/EventList.js
import React, { useContext } from 'react';
import { EventContext } from '../context/EventContext';

const EventList = ({ events }) => {
  const { deleteEvent } = useContext(EventContext);

  const handleDeleteEvent = (eventId) => {
    deleteEvent(eventId);
  };

  return (
    <div>
      {events.map((event) => (
        <div key={event.id} className="border p-4 mb-4">
          <h3 className="text-lg font-bold mb-2">{event.title}</h3>
          <p className="text-gray-500">Date: {event.date}</p>
          <button
            onClick={() => handleDeleteEvent(event.id)}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Supprimer
          </button>
        </div>
      ))}
    </div>
  );
};

export default EventList;
