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
      <p className="about-description">
      We are a <b>boutique consulting and training firm</b> dedicated to embedding <b>Diversity, Equity, Inclusion, and Belonging (DEIB)</b> into the core of every organization. As a <b>startup with a bold vision,</b> we bring <b>fresh, innovative, and customized</b> solutions that drive <b>real business impact.</b>
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
