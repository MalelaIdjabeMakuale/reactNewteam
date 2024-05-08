import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-newteamstroke p-4">
      <div className="flex justify-center items-center">
       
        <button 
          onClick={toggleMenu} 
          className="md:hidden text-white focus:outline-none">
          Menu
        </button>
      </div>
      <ul className={`md:flex ${isOpen ? 'block' : 'hidden'}`}>
        <li className="my-2 mx-4">
          <Link to="" onClick={closeMenu} className="text-white px-3 py-2 hover:text-newteamhighligth">Home</Link>
        </li>
        <li className="my-2 mx-4">
          <Link to="/Noticias" onClick={closeMenu} className="text-white py-2 px-3 hover:text-newteamhighligth">Noticias</Link>
        </li>
        <li className="my-2 mx-4">
          <Link to="/Video" onClick={closeMenu} className="text-white px-3  py-2 hover:text-newteamhighligth">Video</Link>
        </li>
        <li className="my-2 mx-4">
          <Link to="/Plantilla" onClick={closeMenu} className="text-white px-3  py-2 hover:text-newteamhighligth">Plantilla</Link>
        </li>
        <li className="my-2 mx-4">
          <Link to="/Tienda" onClick={closeMenu} className="text-white px-3 py-2 hover:text-newteamhighligth">Tienda</Link>
        </li>
        <li className="my-2 mx-4">
          <Link to="/About" onClick={closeMenu} className="text-white px-3  py-2 hover:text-newteamhighligth">Sobre nosotros</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
