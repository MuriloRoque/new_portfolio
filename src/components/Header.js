import React from 'react';
import header from '../styles/Header.module.css';

const Header = () => (
  <header className={header.container}>
    <div className={header.logo}>
      MR
    </div>
    <nav className="navbar">
      <ul className={header.navLinks}>
        <li><a href="#intro">Intro</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  </header>
);

export default Header;
