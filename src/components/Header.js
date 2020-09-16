import React from 'react';
import header from '../styles/Header.module.css';

const Header = () => (
  <header className={header.container}>
    <div className={header.logo}>
      MR
    </div>
    <nav>
      <ul className={header.navLinks}>
        <li><a href="/">Portfolio</a></li>
        <li><a href="/">About</a></li>
        <li><a href="/">Contact</a></li>
      </ul>
    </nav>
  </header>
);

export default Header;
