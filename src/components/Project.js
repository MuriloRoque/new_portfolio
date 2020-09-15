import project from '../styles/Project.module.css';
import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import ProjectDetails from './ProjectDetails';

const Project = ({ title, stacks, description, liveLink, repo, images }) => (
  <article>
    <img src={images[0]} alt={title}/>
    <div>
      {
        stacks.map(stack => {
          <span>{stack}</span>
        })
      }
    </div>
    <Popup trigger={<button>See the project</button>} position="right center">
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