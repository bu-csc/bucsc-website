import React from 'react';
import './projectcard.css';

function ProjectCard ({ title, type, description, sourceCode, webLink, image }) {
    return (
        <div className="project-card">
            <img src={image} alt="project card"/>
            <article>
                <h2>{title}</h2>
                <p className="project-type">{type}</p>
                <p className="projectcard-description">{description}</p>
                <a href={webLink || sourceCode} target="_blank" rel="noreferrer">
                    {webLink ? "Visit Site" : "Visit Repository"}
                </a>
            </article>
        </div>
    );
}

export default ProjectCard;