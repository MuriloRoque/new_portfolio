import React, { useEffect } from 'react';
import Intro from './Intro';
import ProjectsList from '../containers/ProjectsList';
import About from './About';
import Contact from './Contact';

const App = () => {
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const navHighlighter = () => {
      let scrollY = window.pageYOffset;
      sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute("id");
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          document.querySelector(".navbar a[href*=" + sectionId + "]").classList.add("active");
        } 
        else {
          document.querySelector(".navbar a[href*=" + sectionId + "]").classList.remove("active");
        }
      });
    }
    window.addEventListener("scroll", navHighlighter);
  });
  return (
  <>
    <main>
      <Intro />
      <ProjectsList />
      <About />
      <Contact />
    </main>
  </>
  )
};

export default App;
