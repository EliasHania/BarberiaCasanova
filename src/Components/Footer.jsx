import React from 'react';

const Footer = () => {
  return (
    <footer className="py-4 bg-gray-900 text-center">
      <p>&copy; {new Date().getFullYear()} Barbería Casanova.</p>
    </footer>
  );
};

export default Footer;