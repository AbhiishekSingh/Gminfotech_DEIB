import React from "react";
import {Link} from "react-router-dom";
import "./CaseStudies.css";

export default function CaseStudies() {
  const caseStudies = [
    {
      id: 1,
      logo: "https://s3.us-east-1.amazonaws.com/peoplism.s8/_AUTOx22_contain_center-center_none/springboardlogo.png",
      title: "Generic Engineering - Building an Inclusive Construction Workforce",
      details: "Employees: 5,000+ Location: India (Mumbai, Pune, Hyderabad)Impact: Implemented inclusive hiring policies, trained managers on bias-free leadership, and created mentorship programs for underrepresented employees",
      image: "https://s3.us-east-1.amazonaws.com/peoplism.s8/case-studies/_585x420_fit_center-center_none/image001-1.jpg",
    },
    {
      id: 2,
      logo: "https://s3.us-east-1.amazonaws.com/peoplism.s8/_AUTOx22_contain_center-center_none/springboardlogo.png",
      title: "GM Infotech - Transforming Tech Hiring Through DEIB",
      details: "Location: India (Mumbai, Bengaluru, Noida) Impact: Enhanced talent acquisition strategies by integrating DEIB principles into recruitment, reducing bias in hiring processes, and increasing female workforce participation by 40%. ",
      image: "https://s3.us-east-1.amazonaws.com/peoplism.s8/case-studies/_585x420_fit_center-center_none/image001-1.jpg",
    },
    {
      id: 3,
      logo: "https://s3.us-east-1.amazonaws.com/peoplism.s8/_AUTOx22_contain_center-center_none/springboardlogo.png",
      title: "Nxtdos Pvt Ltd - Inclusive HR Strategies for Workforce Retention",
      details: "Industry: HR Consulting & Staffing Solutions Employees: 200+ Location: India (Mumbai, Chennai, Kolkata) Impact: Developed DEIB-led policies for client organizations, reducing attrition rates, and fostering a culture of belonging through structured employee engagement programs. ",
      image: "https://s3.us-east-1.amazonaws.com/peoplism.s8/case-studies/_585x420_fit_center-center_none/image001-1.jpg",
    },
    {
      id: 4,
      logo: "https://s3.us-east-1.amazonaws.com/peoplism.s8/_AUTOx22_contain_center-center_none/springboardlogo.png",
      title: "Atria Group - Embedding DEIB in Education & Corporate Culture",
      details: "Industry: Education & Corporate Training Employees: 1,500+ Location: India (Bengaluru, Chennai, Hyderabad) Impact: Designed leadership development programs focusing on inclusive decision-making, unconscious bias training, and mentorship opportunities for diverse talent. ",
      image: "https://s3.us-east-1.amazonaws.com/peoplism.s8/case-studies/_585x420_fit_center-center_none/image001-1.jpg",
    },
    // Add more cards as needed
  ];

  return (
    <div className="case-studies-container">
    
      <h2 className="header-imp">CASE STUDIES</h2>
      {caseStudies.map((study, index) => (
        <div key={study.id} className={`case-study ${index % 2 === 0 ? "right" : "left"}`} style={{ backgroundColor: "#f9f9f9", textAlign: "center" }}>
          <div className="content">
            <img src={study.logo} alt={study.logo} className="logo" />
            <h3 className="title">{study.title}</h3>
            <p className="details">{study.details}</p>
            <Link to="/Contact" className="read-more">Read case study</Link>
          </div>
          <img src={study.image} alt={study.title} className="image" />
        </div>
      ))}
    </div>
  );
}