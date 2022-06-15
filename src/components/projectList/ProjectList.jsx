import React from "react";
import { projects } from "../../data";
import Project from "../project/Project";
import "./projectList.css";

const ProjectList = () => {
  return (
    <div className="project-list" id="project-list">
      <div className="project-list-text">
        <h1 className="project-list-title" id="project-list-title">
          My projects
        </h1>
        <p className="project-list-description">Description:</p>
      </div>
      <div className="project-list-list">
        {/* {projects.map(project=>(<Project />))} */}
        {/* <Project key={project.id} img={projects.image} link="https://github.com/JazzPants"/> */}
        <Project />
        <Project />
        <Project />
        <Project />
      </div>
    </div>
  );
};

export default ProjectList;
