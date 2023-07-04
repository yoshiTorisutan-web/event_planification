// pages/index.js
import React, { useContext } from 'react';
import EventList from '../components/EventList';
import { EventContext } from '../context/EventContext';

const HomePage = () => {
  const { events } = useContext(EventContext);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Liste des événements</h1>
      <EventList events={events} />
    </div>
  );
};

export default HomePage;
