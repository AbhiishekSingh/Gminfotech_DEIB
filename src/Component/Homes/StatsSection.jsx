import React from "react";
import "./StatsSection.css";

const statsData = [
  {
    percentage: "+30%",
    description: "Employees say leadership actively fosters inclusion",
    // logo: "/images/dddd.jpeg", // Replace with actual logo URL
  },
  {
    percentage: "+22%",
    description: "Employees believe performance management is fair & unbiased ",
    // logo: "https://via.placeholder.com/150", // Replace with actual logo URL
  },
  {
    percentage: "+88%",
    description: "Employees feel a stronger sense of belonging",
    // logo: "https://via.placeholder.com/150", // Replace with actual logo URL
  },
];

const StatsSection = () => {
  return (
    <div className="stats-container">
      <div className="stats-heading">
        Work with us to <br /> <span className="move-text">move</span> the needle
      </div>
      <div className="stats-grid">
        {statsData.map((stat, index) => (
          <div key={index} className="stats-card">
            <h2 className="stats-percentage">{stat.percentage}</h2>
            <p className="stats-description">{stat.description}</p>
            {/* <img src={stat.logo} alt="Company Logo" className="stats-logo" /> */}
            {index < statsData.length -1}
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsSection;
