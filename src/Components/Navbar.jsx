import React, { useState, useEffect, useLayoutEffect } from "react";
import { Link } from "react-scroll";
import logo from "../images/barber-2.webp";
import IconMoon from "../icons/IconMoon";
import IconSun from "../icons/IconSun";

const Navbar = () => {
  const getInitialDarkMode = () => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      return savedTheme === "dark";
    } else {
      return true; // Valor predeterminado para modo oscuro
    }
  };

  const [scrolling, setScrolling] = useState(false);
  const [darkMode, setDarkMode] = useState(getInitialDarkMode);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 0);
    };

    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useLayoutEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <nav
      className={`fixed top-0 z-10 bg-white bg-opacity-50 backdrop-blur-lg border border-white border-opacity-10 p-2 md:p-1 left-1/2 transform -translate-x-1/2 rounded-full transition-all duration-300 ${
        scrolling ? "top-2" : "top-0"
      }`}
    >
      <div className="max-w-5xl mx-auto flex justify-between items-center space-x-0 px-4 md:px-2 overflow-hidden">
        <img
          src={logo}
          alt="Logo Peluquería Pro"
          className="h-10 md:h-10 sm:h-8"
        />
        <div className="flex space-x-2 px-8 md:px-2 text-gray-900 text-sm md:text-xs items-center">
          <NavLink to="Hero">Inicio</NavLink>
          <NavLink to="about">Nosotros</NavLink>
          <NavLink to="services">Servicios</NavLink>
          <NavLink to="contact">Contacto</NavLink>
          <button onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? <IconSun /> : <IconMoon />}
          </button>
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
