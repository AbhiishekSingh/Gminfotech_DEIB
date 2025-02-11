import React from "react";
import "./Impact.css";
import CaseStudies from "./CaseStudies";
import TrustBy from "./TrustBy";
import ImpactSection from "./ImpactSection";

export default function Impact() {
  return (
    <div>
    <div className="impact-container">
      <div className="impact-title">
        <h1 className="impact-light">Our</h1>
        <span className="impact-bold italic">
          impact
          <span className="impact-underline">
            <img src="" alt="" />
          </span>
        </span>
      </div>
      <div className="impact-buttons">
        <button className="impact-button">Case Studies</button>
        <button className="impact-button">Clients</button>
      </div>
    </div>
    <CaseStudies/>
    <TrustBy/>
    <ImpactSection/>
    </div>
  );
}