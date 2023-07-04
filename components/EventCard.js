import React from 'react';

const EventCard = ({ event }) => {
  return (
    <div className="bg-white p-4 shadow-md">
      <h3 className="text-lg font-bold mb-2">{event.title}</h3>
      <p className="text-gray-500">Date: {event.date}</p>
      {/* Ajouter d'autres informations de l'événement */}
    </div>
  );
};

export default EventCard;
