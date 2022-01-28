import React from "react";
import "./intro.css";
// import me from "../../img/me.jpg"; //{me}
// import Avatar1 from "../../img/Avatar1-magicbrush.png";
import Me from "../../img/Avatar1.png";
// import { ReactComponent as svgScroll } from "./";

const Intro = () => {
  return (
    <div className="introduction">
      <div className="introduction-left">
        <div className="introduction-left-wrapper">
          <h2 className="introduction-introduction">Hello, my name is</h2>
          <h1 className="introduction-name">Leighton</h1>
          <div className="introduction-title">
            <div className="introduction-title-wrapper">
              <div className="introduction-title-item">Web Developer</div>
              <div className="introduction-title-item">Musician</div>
              <div className="introduction-title-item">Content Creator</div>
              <div className="introduction-title-item">Gamer</div>
              <div className="introduction-title-item">Foodie</div>
            </div>
          </div>
          <p className="introduction-description">
            I love designing and developing memorable services for my clients.
            Let's create a beautiful, modern website, service, or online store
            for your business.
          </p>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0"
          y="0"
          enableBackground="new 0 0 214.311 214.311"
          version="1.1"
          viewBox="0 0 214.311 214.311"
          xmlSpace="preserve"
          stroke="black"
          className="introduction-scroll"
        >
          <path d="M134.455 0H79.857C56.236 0 37.018 19.228 37.018 42.862V146.121c0 37.599 30.594 68.19 68.197 68.19h3.881c37.603 0 68.197-30.59 68.197-68.19V42.862C177.294 19.228 158.076 0 134.455 0zM44.811 42.862c0-19.338 15.721-35.069 35.046-35.069h54.597c19.325 0 35.046 15.731 35.046 35.069v35.069H44.811V42.862zm124.69 103.259c0 33.303-27.097 60.397-60.404 60.397h-3.881c-33.307 0-60.404-27.093-60.404-60.397V85.724h124.689v60.397z"></path>
          <path d="M107.156 23.379a3.896 3.896 0 00-3.897 3.897v35.286a3.896 3.896 0 003.897 3.897 3.896 3.896 0 003.897-3.897V27.276a3.896 3.896 0 00-3.897-3.897z"></path>
        </svg>
      </div>

      <div className="introduction-right">
        <div className="introduction-background">
          <img src={Me} alt="" className="introduction-img" />
        </div>
      </div>
    </div>
  );
};

export default Intro;
