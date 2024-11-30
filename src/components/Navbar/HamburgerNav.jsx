import React, { useState } from 'react';

const HamburgerNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav id="hamburger-nav">
      <div className="logo">SRIDHAR</div>
      <div className="hamburger-menu">
        <div className={`hamburger-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className={`menu-links ${isOpen ? 'open' : ''}`}>
          <li><a href="#about" onClick={toggleMenu}>About</a></li>
          <li><a href="#Skills" onClick={toggleMenu}>Skills</a></li>
          <li><a href="#projects" onClick={toggleMenu}>Projects</a></li>
          <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
        </div>
      </div>
    </nav>
  );
};

export default HamburgerNav; 