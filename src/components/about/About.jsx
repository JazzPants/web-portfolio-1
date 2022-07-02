import React from "react";
import "./about.css";
import RamenIcon from "../../svg/ramenIcon";

const About = () => {
  //SHORTCUT: .about-right -> <div className="about-right"></div>
  //img.about-image
  //to-do: icon/font change on darkmode toggle

  // padding-left: 20%;
  // padding-right: 20%;
  // padding-top: 50px;
  return (
    <div className="about" id="about">
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
      <div className="about-right">
        <h1 className="about-title">About Me</h1>
        <p className="about-subtitle">
          I'm a highly motivated, self-driven person, eager to learn new things
          everyday. I'm willing to put 200% into every goal and love
          collaborating with people to create a product of the highest quality.
        </p>
        {/* <p className="about-description">Lorem</p> */}
        {/* <h2>Things I love:</h2>
        <div className="about-flavour">
          <div className="about-flavour-image">
            <RamenIcon />
          </div>
          <div className="about-flavour-text">
            <h2>Things I love:</h2>
            <p>Ramen, Drums, Cars, Gaming </p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default About;
