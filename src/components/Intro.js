import React from 'react';
import intro from '../styles/Intro.module.css';
import Header from './Header';
import github from '../assets/images/github.png';
import twitter from '../assets/images/twitter.png';
import linkedin from '../assets/images/linkedin.png';
import angellist from '../assets/images/angellist.png';
import medium from '../assets/images/medium.png';
import stack from '../assets/images/stack.png';
import facebook from '../assets/images/facebook.png';
import instagram from '../assets/images/instagram.png';

const Intro = () => (
  <section className={intro.container}>
    <Header />
    <h1>Murilo Roque</h1>
    <h4>Full-stack Developer</h4>
    <p>
      Hello, I’m Murilo, a Full-stack Developer and Chemical Engineer
      who specializes in Ruby, Rails, Javascript, Node, Express and React.
      Currently, I am exploring remote opportunities.
    </p>
    <div>
      <span>My works in social networks</span>
      <div className={intro.iconContainer}>
        <a rel="noopener noreferrer" target='_blank'  href="https://github.com/MuriloRoque">
          <img src={github} alt="github" />
        </a>
        <a rel="noopener noreferrer" target='_blank'  href="https://twitter.com/MuriloRoquePai1">
          <img src={twitter} alt="twitter" />
        </a>
        <a rel="noopener noreferrer" target='_blank'  href="https://www.linkedin.com/in/murilo-roque/">
          <img src={linkedin} alt="linkedin" />
        </a>
        <a rel="noopener noreferrer" target='_blank'  href="https://angel.co/u/murilo-roque-paiva-da-silva">
          <img src={angellist} alt="angellist" />
        </a>
        <a rel="noopener noreferrer" target='_blank'  href="https://medium.com/@muriloengqui">
          <img src={medium} alt="medium" />
        </a>
        <a rel="noopener noreferrer" target='_blank'  href="https://stackexchange.com/users/17775586/murilo-roque-paiva-da-silva">
          <img src={stack} alt="stack" />
        </a>
        <a rel="noopener noreferrer" target='_blank'  href="https://www.facebook.com/murilo.roque.52">
          <img src={facebook} alt="facebook" />
        </a>
        <a rel="noopener noreferrer" target='_blank'  href="https://www.instagram.com/muriloroquep/?hl=en">
          <img src={instagram} alt="instagram" />
        </a>
      </div>
    </div>
  </section>
);

export default Intro;
