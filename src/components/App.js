import React from 'react';
import Header from './Header';
import Intro from './Intro';
import ProjectsList from '../containers/ProjectsList';

const App = () => (
  <>
    <Header />
    <main>
      <Intro />
      <ProjectsList />
    </main>
  </>
);

export default App;
