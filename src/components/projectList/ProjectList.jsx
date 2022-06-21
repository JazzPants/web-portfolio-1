import React from "react";
import { projects } from "../../data";
import Project from "../project/Project";
import "./projectList.css";
import ecommerceWebsite from "../../img/ecommercewebsite.png";
import jazzpantsio from "../../img/jazzpantsio.png";
import snakegame from "../../img/snakegame.png";
import hungrynow from "../../img/hungrynow.png";
import budgets from "../../img/budgets.png";

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
        {/* <Project />
        <Project />
        <Project />
        <Project /> */}
        <div className="project">
          <div className="project-browser">
            <div className="project-circle"></div>
            <div className="project-circle"></div>
            <div className="project-circle"></div>
          </div>
          <a
            href="https://github.com/JazzPants"
            target="_blank"
            rel="noreferrer"
          >
            <img src={hungrynow} alt="" className="project-image" />
          </a>
        </div>
        <div className="project">
          <div className="project-browser">
            <div className="project-circle"></div>
            <div className="project-circle"></div>
            <div className="project-circle"></div>
          </div>
          <a
            href="https://github.com/JazzPants"
            target="_blank"
            rel="noreferrer"
          >
            <img src={jazzpantsio} alt="" className="project-image" />
          </a>
        </div>
        <div className="project-still">
          <div className="project-browser">
            <div className="project-circle"></div>
            <div className="project-circle"></div>
            <div className="project-circle"></div>
          </div>
          <a
            href="https://github.com/JazzPants"
            target="_blank"
            rel="noreferrer"
          >
            <img src={snakegame} alt="" className="project-still-image" />
          </a>
        </div>
        <div className="project">
          <div className="project-browser">
            <div className="project-circle"></div>
            <div className="project-circle"></div>
            <div className="project-circle"></div>
          </div>
          <a
            href="https://github.com/JazzPants"
            target="_blank"
            rel="noreferrer"
          >
            <img src={budgets} alt="" className="project-still-image" />
          </a>
        </div>
        <div className="project-still">
          <div className="project-browser">
            <div className="project-circle"></div>
            <div className="project-circle"></div>
            <div className="project-circle"></div>
          </div>
          <a
            href="https://github.com/JazzPants"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={ecommerceWebsite}
              alt=""
              className="project-still-image"
            />
          </a>
        </div>
        <div className="project">
          <div className="project-browser">
            <div className="project-circle"></div>
            <div className="project-circle"></div>
            <div className="project-circle"></div>
          </div>
          <a
            href="https://github.com/JazzPants"
            target="_blank"
            rel="noreferrer"
          >
            <img src={ecommerceWebsite} alt="" className="project-image" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectList;
