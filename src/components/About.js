import about from '../styles/About.module.css';
import React from 'react';

const About = () => (
  <section>
    <h1>About me</h1>
    <a href={resume}>Get my resume</a>
    <article>
      <h1>Languages</h1>
      <ul>
        <li>JavaScript (ES5/ES6)</li>
        <li>Ruby</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>Python</li>
        <li>Node.js</li>
      </ul>
    </article>
    <article>
      <h1>Frameworks</h1>
      <ul>
        <li>Bootstrap</li>
        <li>Ruby on Rails</li>
        <li>RSpec</li>
        <li>Capybara</li>
        <li>Selenium</li>
        <li>Express</li>
        <li>SASS</li>
        <li>Phaser 3</li>
      </ul>
    </article>
    <article>
      <h1>Skills</h1>
      <ul>
        <li>Bootstrap</li>
        <li>Git</li>
        <li>Github</li>
        <li>Gitlab</li>
        <li>Bitbucket</li>
        <li>Pair Programming</li>
        <li>Remote Work</li>
      </ul>
    </article>
  </section>
);

export default About;