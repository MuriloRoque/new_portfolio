import projectDetails from '../styles/ProjectDetails.module.css';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import pop from '../assets/images/pop.png';
import github2 from '../assets/images/github2.png';

const ProjectDetails = ({ title, stacks, description, liveLink, repo, images }) => (
  <>
    <article className={projectDetails.container}>
      <Carousel>
        <div>
          <img className={projectDetails.carousel} src={images[0]}/>
        </div>
        <div>
          <img className={projectDetails.carousel} src={images[1]}/>
        </div>
        <div>
          <img className={projectDetails.carousel} src={images[2]}/>
        </div>
      </Carousel>
      <div className={projectDetails.buttons}>
        <a rel="noopener noreferrer" target='_blank'  href={liveLink}>
          <span>See live</span>
          <img className={projectDetails.pop} src={pop} alt="pop"/>
        </a>
        <a rel="noopener noreferrer" target='_blank'  href={repo}>
          <span>See Source</span>
          <img className={projectDetails.github} src={github2} alt="github"/>
        </a>
        <h1 className={projectDetails.title}>{title}</h1>
        <div className={projectDetails.stacks}>
          {
            stacks.map(stack => (
              <span>{stack}</span>
            ))
          }
        </div>
        <p>{description}</p>
      </div>
    </article>
    <div className={projectDetails.overlay}></div>
  </>
);

export default ProjectDetails;