import project from '../styles/Project.module.css';
import React from 'react';
import { ModalButton } from "react-modal-button";
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
    <ModalButton
      buttonClassName={project.popup}
      height={400}
      width='100%'
      modal={props => (
      <ProjectDetails
        title={title} 
        stacks={stacks} 
        description={description} 
        liveLink={liveLink}
        repo={repo}
        images={images}
      />
    )}>
      See the project
    </ModalButton>
  </article>
);

export default Project;