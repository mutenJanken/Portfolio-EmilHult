import { useState, useEffect } from "react";
import Project from "../models/ProjectModel";
import Techniques from "../models/TechniqueModel";
import projectData from "../data/projects.json";
import ProjectCard from "./ProjectCard";

function Portfolio() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const loadedProjects = projectData.projects.map((project) => {
      const techniques = project.techniques.map((tech) => new Techniques(tech.id, tech.name));
      return new Project(project.id, project.title, project.description, techniques, project.image, project.githubLink);
    });
    setProjects(loadedProjects);
  }, []);

  return (
    <div className="card-container">
      <div className="card-under-one">UNDER1</div>
      <div className="card-under-two">UNDER2</div>
      <section>
        <div className="portfolio-container">
          <div className="portfolio-wrapper">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Portfolio;
