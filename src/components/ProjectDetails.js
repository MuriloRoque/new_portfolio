import projectDetails from '../styles/ProjectDetails.module.css';
import React from 'react';
import ImageGallery from 'react-image-gallery';
import pop from '../assets/images/pop.png';
import github2 from '../assets/images/github2.png';

const ProjectDetails = ({ title, stacks, description, liveLink, repo, images }) => (
  <article>
    <ImageGallery items={images} />
    <a href={liveLink}>
      <span>See live</span>
      <img src={pop} alt="pop"/>
    </a>
    <a href={repo}>
      <span>See Source</span>
      <img src={github2} alt="github"/>
    </a>
    <h1>{title}</h1>
    <div>
      {
        stacks.map(stack => {
          <span>{stack}</span>
        })
      }
    </div>
    <p>{description}</p>
  </article>
);

export default ProjectDetails;