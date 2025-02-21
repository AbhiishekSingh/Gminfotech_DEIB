import React from "react";
import Team from "./BenefitsGrid";
import "./Career.css";
import BenefitsGrid from "./BenefitsGrid";
import HiringProcess from "./HireProcess";
import TalentList from "./TalentList";

const Career = () => {
  return (
    <div>
    <section className="team-container1">
      <h2 className="team-heading1">
        Join a team where <br /> you can <span className="team-highlight1">belong</span>
      </h2>
      <div className="team-gallery1">
        <div className="team-card1">
          <img src="https://s3.us-east-1.amazonaws.com/peoplism.s8/careers/_575x430_contain_center-center_none/axe-peoplism.jpg" alt="Team Activity" className="team-img" />
        </div>
        <div className="team-card1 team-highlight1-img1">
          <img src="https://s3.us-east-1.amazonaws.com/peoplism.s8/careers/_575x430_contain_center-center_none/la-peoplism-griffith.jpg" alt="Hiking Team" className="team-img" />
          <div className="sun-icon">☀️</div>
        </div>
        <div className="team-card1">
          <img src="https://s3.us-east-1.amazonaws.com/peoplism.s8/careers/_575x430_contain_center-center_none/sushi-peoplism.jpg" alt="Team Dinner" className="team-img" />
        </div>
      </div>
    </section>
    <BenefitsGrid/>
    <HiringProcess/>
    <TalentList/>
    </div>
  );
};

export default Career;
