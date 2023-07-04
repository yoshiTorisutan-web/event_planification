import React from 'react';
import Navbar from '../components/NavBar.js';
import { EventProvider } from '../context/EventContext.js';
import 'tailwindcss/tailwind.css';

function MyApp({ Component, pageProps }) {
  return (
    <EventProvider>
      <div>
        <Navbar />
        <div className="container mx-auto p-4">
          <Component {...pageProps} />
        </div>
      </div>
    </EventProvider>
  );
}

export default MyApp;