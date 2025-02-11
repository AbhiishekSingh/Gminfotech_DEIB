import React from "react";
import "./HelpSection.css";

const HelpSection = () => {
  return (
    <div className="help-container">
      <div className="help-box">
        <h2 className="help-title">Need Expert Guidance?</h2>
        <p className="help-text">Book a free consultation with our DEIB experts to discuss customized strategies for your organization.</p>
        <button className="help-button">Let's chat</button>
      </div>
    </div>
  );
};

export default HelpSection;