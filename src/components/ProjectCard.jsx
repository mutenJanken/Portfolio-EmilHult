import React from "react";

function ProjectCard({ project }) {
  return (
    <a className="project-wrapper" href={project.githubLink} target="_blank" rel="noopener noreferrer">
      <div className="project-desc-image-horizontal">
        <div className="project-description-wrapper">
          <h2 className="project-header">{project.title}</h2>
          <p className="project-description">{project.description}</p>
        </div>
        <div className="project-image-wrapper">
          <img className="project-image" src={project.image} alt="{project.image} Image" />
        </div>
      </div>
      <div className="project-desc-vertical">
        <div className="project-desc-horizontal">
          {project.techniques.map((tech) => (
            <div className="description" key={tech.id}>
              {tech.name}
            </div>
          ))}
        </div>
      </div>
      <div className="source-code-wrapper">
        <div className="source-code-link">View code on GitHub</div>
      </div>
    </a>
  );
}

export default ProjectCard;
