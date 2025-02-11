import React from "react";
import "./Home.css";
import Testimonials from "./Testimonials";
import Box from "./Box";
import StatsSection from "./StatsSection";

const Home = () => {
  return (
    <div>
    <div className="home-container">
      {/* Heading Section */}
      <div className="heading-section">
        <h1>
        Creating a <span className="highlight"> More </span>Inclusive  {" "}
          <span className="highlight">thriving</span> and {" "}
          <span className="highlight">organization</span>.
        </h1>
        <p className="subheading">
        DEIB Innovation Lab is a consulting and training firm dedicated to advancing Diversity,
         Equity, Inclusion, and Belonging (DEIB) with measurable results.
        </p>
      </div>

      {/* Button Section */}
      <div className="button-section">
        <button className="partner-btn">Partner with us</button>
        <button className="services-btn">See our services</button>
      </div>

      {/* Logo Section */}
      <div className="logo-section">
        <div className="logo-slider">
          <div className="logo-item">
            <img
              src="https://s3.us-east-1.amazonaws.com/peoplism.s8/Facebook-logo.svg"
              alt="Logo 1"
            />
          </div>
          <div className="logo-item">
            <img
              src="https://s3.us-east-1.amazonaws.com/peoplism.s8/betterment2.svg"
              alt="Logo 2"
            />
          </div>
          <div className="logo-item">
            <img
              src="https://s3.us-east-1.amazonaws.com/peoplism.s8/thredup.svg"
              alt="Logo 3"
            />
          </div>
          <div className="logo-item">
            <img
              src="https://s3.us-east-1.amazonaws.com/peoplism.s8/_105x36_fit_center-center_none/lattice.png"
              alt="Logo 4"
            />
          </div>
          <div className="logo-item">
            <img
              src="https://s3.us-east-1.amazonaws.com/peoplism.s8/_105x36_fit_center-center_none/thinx.png"
              alt="Logo 5"
            />
          </div>
          <div className="logo-item">
            <img
              src="https://s3.us-east-1.amazonaws.com/peoplism.s8/classpass-logo.svg"
              alt="Logo 6"
            />
          </div>
        </div>
      </div>
    </div>
    <StatsSection/>
    <Box/>
    <Testimonials/>
    </div>
  );
};

export default Home;
