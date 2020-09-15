import projectsList from '../styles/ProjectsList.module.css';
import React from 'react';
import PROJECTS from '../constants/projects';
import Project from '../components/Project';

const ProjectsList = () => (
  <section>
    <h1>My Portfolio</h1>
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
        />
      ))
    }
  </section>
);

export default ProjectsList;