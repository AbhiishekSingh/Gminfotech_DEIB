import React from "react";
import { Link } from "react-router-dom";  // ✅ Import Link
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
            Creating a <span className="highlight">More</span> Inclusive {" "}
            <span className="highlight">thriving</span> and {" "}
            <span className="highlight">organization</span>.
          </h1>
          <p className="subheading">
            At <b>DEIB Innovation</b>, we don’t just <b>advocate</b> for Diversity, Equity, Inclusion, and Belonging<b>—we engineer</b> it & make it happen. Our strategic data-driven solutions don’t just <b>move the needle</b>, they <b>redefine workplace culture</b> for measurable, lasting impact.
          </p>
        </div>

        {/* ✅ Fixed Button Section */}
        <div className="button-section">
          <Link to="/contact">  
            <button className="partner-btn">Partner with us</button>
          </Link>
          <Link to="/services">
            <button className="services-btn">See our services</button>
          </Link>
        </div>

        {/* Logo Section */}
        <div className="logo-section">
          <div className="logo-slider">
            <div className="logo-item">
              <img src="https://s3.us-east-1.amazonaws.com/peoplism.s8/Facebook-logo.svg" alt="Logo 1" />
            </div>
            <div className="logo-item">
              <img src="https://s3.us-east-1.amazonaws.com/peoplism.s8/betterment2.svg" alt="Logo 2" />
            </div>
            <div className="logo-item">
              <img src="https://s3.us-east-1.amazonaws.com/peoplism.s8/thredup.svg" alt="Logo 3" />
            </div>
            <div className="logo-item">
              <img src="https://s3.us-east-1.amazonaws.com/peoplism.s8/_105x36_fit_center-center_none/lattice.png" alt="Logo 4" />
            </div>
            <div className="logo-item">
              <img src="https://s3.us-east-1.amazonaws.com/peoplism.s8/_105x36_fit_center-center_none/thinx.png" alt="Logo 5" />
            </div>
            <div className="logo-item">
              <img src="https://s3.us-east-1.amazonaws.com/peoplism.s8/classpass-logo.svg" alt="Logo 6" />
            </div>
          </div>
        </div>
      </div>

      {/* Other Sections */}
      <StatsSection />
      <Box />
      <Testimonials />
    </div>
  );
};

export default Home;
