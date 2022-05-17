import React from "react";
import Project from "../project/Project";
import "./projectList.css";

const ProjectList = () => {
  return (
    <div className="project-list">
      <div className="project-list-text">
        <h1 className="project-list-title">My projects</h1>
        <p className="project-list-description">Description:</p>
      </div>
      <div className="project-list-list">
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
      </div>
    </div>
  );
};

export default ProjectList;
