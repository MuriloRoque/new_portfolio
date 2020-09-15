import React from 'react';
import Header from './Header';
import Intro from './Intro';
import ProjectsList from '../containers/ProjectsList';
import About from '../components/About';

const App = () => (
  <>
    <Header />
    <main>
      <Intro />
      <ProjectsList />
      <About />
    </main>
  </>
);

export default App;
