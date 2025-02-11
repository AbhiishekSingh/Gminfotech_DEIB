import React from "react";
import "./BenefitsGrid.css";
const benefits = [
  { title: "Work-Life Balance Matters", description: "We understand that DEIB work is deeply personal and requires emotional investment. That’s why we prioritize structured work schedules, mental well-being, and personal time to prevent burnout and create a sustainable work culture." },
  { title: "We Practice What We Preach", description: "We apply the same DEIB principles internally that we advocate for our clients. Fairness, inclusive decision-making, and continuous learning shape how we operate as a team."},
  { title: "Impact Over Buzzwords", description: "We focus on systemic change rather than superficial initiatives. Every project is designed for long-term transformation, ensuring that our work makes a measurable difference in organizations across India." },
  { title: "Empathy & Collaboration", description: "We foster a culture of psychological safety where team members feel valued, heard, and empowered. Empathy is central to our internal culture and external consulting approach." },
  // { title: "401(k)", description: "We offer the option of signing up for a 401(k)." },
  // { title: "Employee Profit Sharing", description: "When we hit our financial goals, we want everyone to share in that success." },
  // { title: "Learning & Development", description: "DEIB is a developing field so continuous learning is crucial for the work we do. We offer a yearly stipend for learning and professional development, and we have a budget for the team to plan L&D events for the whole group." },
  // { title: "Flexibility", description: "We care about output and impact—when you get your work done is up to you!" },
  // { title: "Wellness Programs", description: "We offer wellness programs to support mental and physical health." }
];

const BenefitsGrid = () => {
  return (
    <div>
      <div className="section-header-9">
        <hr className="divider-9" />
        <p className="section-title-9">OUR VALUES</p>
      </div>
      <div className="grid-container-9">
        {benefits.map((benefit, index) => (
          <div className="grid-item-9" key={index}>
            <h3>{benefit.title}</h3>
            <p>{benefit.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BenefitsGrid;
