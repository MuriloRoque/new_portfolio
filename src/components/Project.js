import React from 'react';
import { ModalButton } from 'react-modal-button';
import PropTypes from 'prop-types';
import project from '../styles/Project.module.css';
import ProjectDetails from './ProjectDetails';

const Project = ({
  title, stacks, description, liveLink, repo, images, imageM,
}) => (
  <article className={project.container}>
    <img src={imageM} alt={title} />
    <h1 className={project.title}>{title}</h1>
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
      width="100%"
      modal={() => (
        <ProjectDetails
          title={title}
          stacks={stacks}
          description={description}
          liveLink={liveLink}
          repo={repo}
          images={images}
        />
      )}
    >
      See the project
    </ModalButton>
  </article>
);

Project.propTypes = {
  title: PropTypes.string.isRequired,
  stacks: PropTypes.instanceOf(Array).isRequired,
  description: PropTypes.string.isRequired,
  liveLink: PropTypes.string.isRequired,
  repo: PropTypes.string.isRequired,
  images: PropTypes.instanceOf(Array).isRequired,
  imageM: PropTypes.string.isRequired,
};

export default Project;
