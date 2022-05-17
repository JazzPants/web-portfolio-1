import React from "react";
import "./about.css";

const About = () => {
  //SHORTCUT: .about-right -> <div className="about-right"></div>
  //img.about-image
  return (
    <div className="about">
      <div className="about-left">
        <div className="about-card background"></div>
        <div className="about-card">
          <img
            src="https://images-assets.nasa.gov/image/PIA15415/PIA15415~orig.jpg"
            alt=""
            className="about-image"
          />
        </div>
      </div>
      <div className="about-right"></div>
    </div>
  );
};

export default About;
