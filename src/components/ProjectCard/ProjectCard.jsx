import React from 'react';
import './ProjectCard.css';


function ProjectCard({ title, description, image, link }) {


    return (
        <div className="projectCard">
            <img src={image} alt={title} onClick={() => window.open(link, '_blank')} className="projectCardImage" />
            <div className="projectCardContent">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default ProjectCard;
