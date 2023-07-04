import React from 'react';

const Navigation = () => {
  return (
    <nav className="bg-gray-200 py-2">
      <div className="container mx-auto flex space-x-4 px-4">
        <a href="#about" className="nav-link">
          About Me
        </a>
        <a href="#portfolio" className="nav-link">
          Portfolio
        </a>
        <a href="#contact" className="nav-link">
          Contact
        </a>
        <a href="#resume" className="nav-link">
          Resume
        </a>
      </div>
    </nav>
  );
};

export default Navigation;
