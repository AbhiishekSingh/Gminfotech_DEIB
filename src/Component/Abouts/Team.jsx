import React, { useState } from "react";
import "./User.css";

const teamMembers = [
  {
    name: "Danielle Little",
    role: "Director",
    image: "https://s3.us-east-1.amazonaws.com/peoplism.s8/team/_264x264_contain_center-center_none/erick.jpeg", // Replace with actual image
    details: "Danielle is an expert in HR and strategy.",
  },
  {
    name: "Josh De Leon",
    role: "Senior Consultant",
    image: "https://s3.us-east-1.amazonaws.com/peoplism.s8/team/_264x264_contain_center-center_none/erick.jpeg",
    details: "Josh specializes in data-driven insights.",
  },
  {
    name: "Liz Kofman-Burns, Ph.D.",
    role: "Co-founder",
    image: "https://s3.us-east-1.amazonaws.com/peoplism.s8/team/_264x264_contain_center-center_none/erick.jpeg",
    details: "Liz has a Ph.D. in psychology and leadership.",
  },
  {
    name: "Amber Madison, LMHC",
    role: "Co-founder",
    image: "https://s3.us-east-1.amazonaws.com/peoplism.s8/team/_264x264_contain_center-center_none/erick.jpeg",
    details: "Amber is a mental health expert and consultant.",
  },
  {
    name: "Genevieve McGahey",
    role: "Senior Consultant",
    image: "https://s3.us-east-1.amazonaws.com/peoplism.s8/team/_264x264_contain_center-center_none/erick.jpeg",
    details: "Genevieve works on leadership development.",
  },
  {
    name: "Nancy Yuen, Ph.D.",
    role: "Manager",
    image: "https://s3.us-east-1.amazonaws.com/peoplism.s8/team/_264x264_contain_center-center_none/erick.jpeg",
    details: "Nancy focuses on diversity and inclusion.",
  },
  {
    name: "Nancy Yuen, Ph.D.",
    role: "Manager",
    image: "https://s3.us-east-1.amazonaws.com/peoplism.s8/team/_264x264_contain_center-center_none/erick.jpeg",
    details: "Nancy focuses on diversity and inclusion.",
  },
  {
    name: "Nancy Yuen, Ph.D.",
    role: "Manager",
    image: "https://s3.us-east-1.amazonaws.com/peoplism.s8/team/_264x264_contain_center-center_none/erick.jpeg",
    details: "Nancy focuses on diversity and inclusion.",
  },
  {
    name: "Nancy Yuen, Ph.D.",
    role: "Manager",
    image: "https://s3.us-east-1.amazonaws.com/peoplism.s8/team/_264x264_contain_center-center_none/erick.jpeg",
    details: "Nancy focuses on diversity and inclusion.",
  },
];

const Team = () => {
  const [expanded, setExpanded] = useState(null);

  const toggleDetails = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <div className="team-container">
      {teamMembers.map((member, index) => (
        <div className="team-member" key={index}>
          <img src={member.image} alt={member.name} className="profile-pic" />
          <h3 className="name">{member.name}</h3>
          <p className="role">{member.role}</p>
          <button className="expand-btn" onClick={() => toggleDetails(index)}>+</button>
          {expanded === index && <p className="details">{member.details}</p>}
       
        </div>
      ))}
    </div>
  );
};

export default Team;
