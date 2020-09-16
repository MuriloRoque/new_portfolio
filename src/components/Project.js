import project from '../styles/Project.module.css';
import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import ProjectDetails from './ProjectDetails';

const Project = ({ title, stacks, description, liveLink, repo, images, imageM }) => (
  <article className={project.container}>
    <img src={imageM} alt={title}/>
    <h1>{title}</h1>
    <div className={project.stacks}>
      {
        stacks.map(stack => (
          <span key={stack}>{stack}</span>
        ))
      }
    </div>
    <Popup trigger={<button className={project.popup}>See the project</button>} position="right center">
      <ProjectDetails
        title={title} 
        stacks={stacks} 
        description={description} 
        liveLink={liveLink}
        repo={repo}
        images={images}
      />
    </Popup>
  </article>
);

export default Project;