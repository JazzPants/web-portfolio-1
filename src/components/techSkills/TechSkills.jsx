import "./techSkills.css";
import SkeletonIcon from "../../svg/skeletonIcon";
import MuscleIcon from "../../svg/muscleIcon";
import SuitIcon from "../../svg/suitIcon";
import LibraryIcon from "../../svg/libraryIcon";
import { ThemeContext } from "../../context";
import { useContext } from "react";

const TechSkills = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="techskills" id="techskills">
      <div className="techskills-title">
        <h1>Technical Skills</h1>
      </div>
      <div className="techskills-wrapper">
        <div className="techskills-icons-wrapper-left">
          <h3>Front-End</h3>
          <div className="techskills-item">
            <div className="techskills-item-icon">
              <SkeletonIcon fill={darkMode ? "white" : "rgb(0, 150, 142)"} />
            </div>
            <div className="techskills-item-text">HTML</div>
          </div>
          <div className="techskills-item">
            <div className="techskills-item-icon">
              <SuitIcon fill={darkMode ? "white" : "rgb(0, 150, 142)"} />
            </div>
            <div className="techskills-item-text">CSS</div>
          </div>
          <div className="techskills-item">
            <div className="techskills-item-icon">
              <MuscleIcon fill={darkMode ? "white" : "rgb(0, 150, 142)"} />
            </div>
            <div className="techskills-item-text">Javascript</div>
          </div>
          <div className="techskills-item">
            <div className="techskills-item-icon">
              <LibraryIcon fill={darkMode ? "white" : "rgb(0, 150, 142)"} />
            </div>
            <div className="techskills-item-text">React</div>
          </div>
        </div>
        <div className="techskills-icons-wrapper-right">
          <h3>Back-End</h3>
          <div className="techskills-item">
            <div className="techskills-item-icon">
              <SkeletonIcon fill={darkMode ? "white" : "rgb(0, 150, 142)"} />
            </div>
            <div className="techskills-item-text">HTML</div>
          </div>
          <div className="techskills-item">
            <div className="techskills-item-icon">
              <SuitIcon fill={darkMode ? "white" : "rgb(0, 150, 142)"} />
            </div>
            <div className="techskills-item-text">CSS</div>
          </div>
          <div className="techskills-item">
            <div className="techskills-item-icon">
              <MuscleIcon fill={darkMode ? "white" : "rgb(0, 150, 142)"} />
            </div>
            <div className="techskills-item-text">Javascript</div>
          </div>
          <div className="techskills-item">
            <div className="techskills-item-icon">
              <LibraryIcon fill={darkMode ? "white" : "rgb(0, 150, 142)"} />
            </div>
            <div className="techskills-item-text">React</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechSkills;
