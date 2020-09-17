import about from '../styles/About.module.css';
import React from 'react';
import resume from '../assets/documents/resume.pdf';

const About = () => (
  <section className={about.container}>
    <h1>About me</h1>
    <p>I’m Murilo, a full-stack developer who specializes in Ruby, 
       Rails, Javascript, React, and Redux. I recently graduated from Microverse, 
       a remote full-stack development program with a focus on git-standup and 
       peer to peer programming. Just in the past year, I’ve built 65 projects, 
       registered 1945 hours, and completed 96 coding challenges. Out of those projects, 
       my favorite is a Rails mobile app that tracks a user’s dietary health by measuring 
       the number of calories that were consumed daily. 
       Currently, I’m exploring full-stack development opportunities</p>
    <a rel="noopener noreferrer" target='_blank' href={resume}>Get my resume</a>
    <div>
      <article>
        <h2>Languages</h2>
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
        <h2>Frameworks</h2>
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
        <h2>Skills</h2>
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
    </div>
  </section>
);

export default About;