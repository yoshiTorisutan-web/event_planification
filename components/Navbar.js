import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 py-4 px-8">
      <ul className="flex space-x-4">
        <li>
          <Link href="/" className="text-white">
            Accueil
          </Link>
        </li>
        <li>
          <Link href="/events/new" className="text-white">
            Créer un événement
          </Link>
        </li>
        <li>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
