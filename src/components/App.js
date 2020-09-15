import React from 'react';
import Header from './Header';
import Intro from './Intro';
import ProjectsList from '../containers/ProjectsList';
import About from './About';
import Contact from './Contact';

const App = () => (
  <>
    <Header />
    <main>
      <Intro />
      <ProjectsList />
      <About />
      <Contact />
    </main>
  </>
);

export default App;
