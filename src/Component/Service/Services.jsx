import React from "react";
import "./Services.css";

const services = [
  {
    title: "Inclusive Hiring & Outreach ",
    description:
      "Attract, Recruit & Retain top diverse talent.",
    icon: "https://s3.us-east-1.amazonaws.com/peoplism.s8/services/_70x70_fit_center-center_none/Undermining-Bias-in-Hiring-Training.png", 
  },
  {
    title: "Diverse Leadership Development ",
    description:
      "Cultivate a pipeline of future-ready leaders.",
    icon: "https://s3.us-east-1.amazonaws.com/peoplism.s8/services/_70x70_fit_center-center_none/Hiring-Funnel-Analysis.png", 
  },
  {
    title: "Supplier Diversity & Partnerships ",
    description:
      "Strengthen your brands impact by partnering with diverse suppliers & supporting inclusive sourcing practices.",
    icon: "https://s3.us-east-1.amazonaws.com/peoplism.s8/services/_70x70_fit_center-center_none/Recruiting-Hiring-Design.png", 
  },
];

const Services = () => {
  return (
    <div className="services-container">
      <hr className="services-divider" />
      <h3 className="services-title">SERVICES</h3>
      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-item" key={index}>
            <img src={service.icon} alt={service.title} className="service-icon" />
            <h4 className="service-heading">{service.title}</h4>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
