import React from "react";
import "./About.css";
import { div } from "framer-motion/client";
import Img from "./Img";
import Team from "./Team";

const About = () => {
  return (
    <div>
    <div className="who-we-are-container">
      {/* Section Title */}
      <div className="title-container">
        <h1 className="title">
          Who we <span className="highlight">are</span>
        </h1>
      </div>

      {/* Description */}
      <p className="description">
        Peoplism consultants are subject matter experts with deep experience in HR, learning and development, psychology, change management, and data science.
      </p>

      {/* Divider */}
      {/* <hr className="divider" /> */}
    </div>
    <Img/>
    <Team/>
    </div>
  );
};

export default About;
