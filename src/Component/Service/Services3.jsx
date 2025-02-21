import React from "react";
import "./Services3.css";

const services3 = [
  {
    title: "Inclusive Leadership Training",
    description:
      "Equip managers to lead diverse teams effectively.",
    icon: "https://s3.us-east-1.amazonaws.com/peoplism.s8/services/_70x70_fit_center-center_none/Inclusion-Allyship-Workshop.png", 
  },
  {
    title: "Allyship & Unconscious Bias Training ",
    description:
      "Drive real behavioral change.",
    icon: "https://s3.us-east-1.amazonaws.com/peoplism.s8/services/_70x70_fit_center-center_none/Managing-for-Inclusion-Workshops.png", 
  },
  {
    title: "Neurodiversity & Disability Inclusion ",
    description:
      "Build an accessible, accommodating workplace.",
    icon: "https://s3.us-east-1.amazonaws.com/peoplism.s8/services/_70x70_fit_center-center_none/Sexual-Harassment-Training.png", 
  },
  {
    title: "Mentorship Program",
    description:
      "Create structured mentorship opportunities to foster career growth and inclusion.",
    icon: "https://s3.us-east-1.amazonaws.com/peoplism.s8/services/_70x70_fit_center-center_none/DEIB-Executive-Alignment.png", 
  },
];

const Services3 = () => {
  return (
    <div className="services3-container">
      <hr className="services3-divider" />
      <h3 className="services3-title">SERVICES</h3>
      <div className="services3-grid">
        {services3.map((service, index) => (
          <div className="services3-item" key={index}>
            <img src={service.icon} alt={service.title} className="services3-icon" />
            <h4 className="services3-heading">{service.title}</h4>
            <p className="services3-description">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services3;
