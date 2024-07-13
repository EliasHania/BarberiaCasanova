import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import logo from '../images/barber-2.webp';

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      if (isScrolled !== scrolling) {
        setScrolling(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolling]);

  return (
    <nav
      className={`fixed top-0 z-10 bg-white bg-opacity-50 backdrop-blur-lg border border-white border-opacity-10 p-2 md:p-1 left-1/2 transform -translate-x-1/2 rounded-full transition-all duration-300 ${
        scrolling ? 'top-2' : 'top-0'
      }`}
    >
      <div className="max-w-5xl mx-auto flex justify-between items-center space-x-0 px-4 md:px-2 overflow-hidden">
          <img src={logo}  alt="Logo Peluquería Pro" className="h-10 md:h-10 sm:h-8" />
        <div className="flex space-x-2 px-8 md:px-2 text-gray-900 text-sm md:text-xs items-center">
          <NavLink to="Hero">Inicio</NavLink>
          <NavLink to="about">Nosotros</NavLink>
          <NavLink to="services">Servicios</NavLink>
          <NavLink to="contact">Contacto</NavLink>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ to, children }) => (
  <Link
    to={to}
    spy={true}
    smooth={true}
    duration={500}
    className="cursor-pointer text-black hover:text-gray-300"
  >
    {children}
  </Link>
);

export default Navbar;