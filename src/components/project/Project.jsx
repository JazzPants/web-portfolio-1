import "./project.css";
import ecommerceWebsite from "../../img/ecommercewebsite.png";

const Project = ({ image, link }) => {
  return (
    <div className="project">
      <div className="project-browser">
        <div className="project-circle"></div>
        <div className="project-circle"></div>
        <div className="project-circle"></div>
        card
      </div>
      <a href="https://github.com/JazzPants" target="_blank" rel="noreferrer">
        <img src={ecommerceWebsite} alt="" className="project-image" />
      </a>
    </div>
  );
};

export default Project;
