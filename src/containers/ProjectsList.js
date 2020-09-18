import projectsList from '../styles/ProjectsList.module.css';
import React from 'react';
import PROJECTS from '../constants/projects';
import Project from '../components/Project';

const ProjectsList = () => (
  <section id="portfolio" className={projectsList.container}>
    <h1>My Portfolio</h1>
    <div className={projectsList.projects}>
      {
        PROJECTS.map(project => (
          <Project
            key={project.id}
            title={project.title} 
            stacks={project.stacks} 
            description={project.description} 
            liveLink={project.liveLink}
            repo={project.repo}
            images={project.images}
            imageM={project.imageM}
          />
        ))
      }
    </div>
  </section>
);

export default ProjectsList;