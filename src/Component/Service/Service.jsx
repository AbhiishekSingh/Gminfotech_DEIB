import React from "react";
import { Link } from "react-router-dom";
import "./Services.css";
import Home from "../Homes/Home";
import Assessment from "./Assessment";
import DiversitySection from "./DiversitySection";
import Services from "./Services";
import Equity from "./Equity";
import Services2 from "./Services2";
import Inclusion from "./Inclusion";
import Services3 from "./Services3";
import Belonging from "./Belonging";
import Services4 from "./Services4";

const Service = () => {
  return (
    <div>
      <div className="service-dei-container">
        <div className="service-dei-content">
          <h1 className="service-dei-heading">
            Your DEI <br /> journey starts <br />
            <span className="service-dei-highlight">here</span>
            <div className="service-dei-container">From Awareness to Action. From Goals to Growth.</div>
          </h1>
          <p className="service-dei-description">
          Creating an <b>Inclusive, High-Performing</b> workplace isn’t just about intention—it’s about <b>strategic action.</b>
          </p>
        </div>
      </div>
      {/* <img className="service-image1" src="https://peoplism.com/assets/images/services-illo-1300.avif" alt="" /> */}
      <div className="service-deib-container">
        <div className="service-deib-content">
          <h2 className="service-deib-title">DEIB Assessment & Roadmap</h2>
          <p className="service-deib-description">
            We start by taking an expert lens to the processes and policies that most affect DEIB.
            We involve your people every step of the way to generate buy-in, enthusiasm, and increase 
            readiness for change. Finally, we work with you to create a comprehensive and long-term plan 
            to drive DEIB forward at your organization.
          </p>
          <Link to="/Contact" className="service-deib-button">Partner with us</Link>
        </div>
      </div>
      <Assessment/>
      <div className="service-next-container">
        <h2 className="service-next-title">What comes next</h2>
        <p className="service-next-text">
        Whether you choose to implement the roadmap internally or partner with us for execution, we’ve got you covered <br></br>
        Our tailored DEIB solutions accelerate progress, ensuring that your strategy doesn’t just sit on paper but drives real, lasting change. Let’s turn your DEI vision into reality—faster & more effectively.
        </p>
      </div>
      <div className="service-picture-service-img">
        <img src="https://s3.us-east-1.amazonaws.com/peoplism.s8/services/peoplism-services-diagram.svg" alt="" />
      </div>
      <DiversitySection/>
      <Services/>
      <Equity/>
      <Services2/>
      <Inclusion/>
      <Services3/>
      <Belonging/>
      <Services4/>
    </div>
  );
};

export default Service;
