  import React, { useState } from "react";
  import { FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
  import "./User.css";

  const teamMembers = [
    {
      name: "Neetu Mehta",
      role: "A DEI Catalyst, HR Strategist, and Changemaker",
      image: "/images/5.jpg",
      details: `As a polio survivor, my personal journey has shaped my unwavering commitment to creating inclusive and accessible workplaces. Having experienced firsthand the barriers that individuals with disabilities and diverse backgrounds face, I turned my lived experiences into a powerful force for change.

With years of expertise in HR, DEIB strategies, and organizational transformation, I founded DEIB Innovation Lab to help businesses move beyond token efforts and implement real, measurable inclusion. My mission is simple: to break barriers, shift mindsets, and build a corporate world where everyone belongs.
`,
      questions: [
        {
          emoji: "",
          question: "What drives me? ",
          answer: "The belief that diverse perspectives fuel innovation and that true inclusion starts when we listen, learn, and take action.",
        },
      ],
      social: {
        twitter: "https://twitter.com/ambermadison",
        linkedin: "https://linkedin.com/in/ambermadison",
        Instagram: "",
      },
    }, {
      name: "Justin Brown, United States",
      role: "Advisory Board Member",
      image: "/images/1.jpg",
      //details: `Amber is a licensed therapist, award-winning lecturer, and nationally noted author...`,
      questions: [
        {
          emoji: "",
          question: "Why DEIB?",
          answer: "True leadership is about creating spaces where every voice is heard, valued, and empowered. DEIB isn’t just an initiative it’s the foundation of innovation, growth, and lasting impact. I’m committed to driving meaningful change, ensuring that organizations don’t just talk about diversity, but truly embrace it in every decision they make",
        },
      ],
      social: {
        twitter: "https://twitter.com/ambermadison",
        linkedin: "https://linkedin.com/in/ambermadison",
        Instagram: "",
      },
    },
    {
      name: "Sunil",
      role: "Tech Expert",
      image: "/images/2.jpg",
      //details: `Genevieve is a dedicated consultant with years of experience in DEIB...`,
      questions: [
        {
          emoji: "",
          question: "Innovating for Inclusion",
          answer: "Inclusion starts with accessibility. My mission is to break digital barriers, ensuring every solution we create is built for all because true innovation is inclusive by design",
        },
      ],
      social: {
        twitter: "https://twitter.com/genevievec",
        linkedin: "https://linkedin.com/in/genevievec",
        Instagram: "",
      },
    },
    {
      name: "Preshita V",
      role: "Legal & Compliance",
      image: "/images/3.jpg",
      //details: `Nancy is a DEIB strategist with a Ph.D. in Sociology...`,
      questions: [
        {
          emoji: "📖",
          question: "Equity Starts with Fair Policies",
          answer: "Inclusion isn’t just about intent it’s about action. Through strong policies, fair regulations, and ethical compliance, we create workplaces where equity isn’t optional, but fundamental",
        },
      ],
      social: {
        twitter: "https://twitter.com/nancyyuen",
        linkedin: "https://linkedin.com/in/nancyyuen",
        Instagram: "",
      },
    },
    {
      name: "Koya",
      role: "Client & Employee Experience",
      image: "/images/4.jpg",
      //details: `Amber is a licensed therapist, award-winning lecturer, and nationally noted author...`,
      questions: [
        {
          emoji: "",
          question: "Belonging is More Than a Buzzword",
          answer: "A great experience isn’t just about policies or perks— it’s about how people feel. My goal is to build cultures where employees and clients feel valued, respected, and truly seen.",
        },
      ],
      social: {
        twitter: "https://twitter.com/ambermadison",
        linkedin: "https://linkedin.com/in/ambermadison",
        Instagram: "",
      },
    },
    {
      name: "Preksha",
      role: "Growth & Strategy",
      image: "https://s3.us-east-1.amazonaws.com/peoplism.s8/team/_264x264_contain_center-center_none/web-RT-8Y4A5874.jpg",
      details: `Diversity Fuels Innovation`,
      questions: [
        {
          emoji: "",
          question: "What Sets Us Apart?",
          answer: "Data + Strategy = Real Change  We combine deep analytics with tailored solutions to deliver impact.Beyond One-Size-Fits-All  Every organization is unique, so we customize every DEIB initiative.Sustainable, Not Surface-Level  We focus on long-term transformation, not just quick fixes.Human-Centered, Business-Aligned  Balancing people-first approaches with business objectives.",
        },
      ],
      social: {
        twitter: "https://twitter.com/genevievec",
        linkedin: "https://linkedin.com/in/genevievec",
        Instagram: "",
      },
    },
    {
      name: "Shyambahadur Prajapati",
      role: "Hr",
      image: "/images/6.enc",
      // details: `Nancy is a DEIB strategist with a Ph.D. in Sociology...`,
      questions: [
        {
          // emoji: "📖",
          // question: "Favorite book?",
          // answer: "‘The Color Purple’ by Alice Walker – it changed my perspective on storytelling.",
        },
      ],
      social: {
        twitter: "https://twitter.com/nancyyuen",
        linkedin: "https://linkedin.com/in/nancyyuen",
        Instagram: "",
      },
    },
  ];

  const Team = () => {
    const [expandedIndex, setExpandedIndex] = useState(null);
  
    const toggleDetails = (index) => {
      setExpandedIndex(expandedIndex === index ? null : index);
    };
  
    return (
      <div className="team-container">
        <hr className="top-divider" />
        <h2 className="meet-the-team1">Meet Our Team</h2>
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-member">
              <img src={member.image} alt={member.name} className="profile-image" />
              <h3 className="member-name">{member.name}</h3>
              <p className="member-role">{member.role}</p>
              <button className="expand-button" onClick={() => toggleDetails(index)}>
                {expandedIndex === index ? "✕" : "+"}
              </button>
              {expandedIndex === index && (
                <div className="details-container">
                  <div className="details-left">
                    <h4 className="connect-heading">Connect</h4>
                    <div className="social-links">
                      <a href={member.social.twitter} target="_blank" rel="noopener noreferrer">
                        <FaTwitter className="social-icon" />
                      </a>
                      <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="social-icon" />
                      </a>
                    </div>
                  </div>
                  <div className="details-right">
                    <p className="details-text">{member.details}</p>
                    {member.questions.map((q, idx) => (
                      <div key={idx} className="question-answer">
                        <strong>{q.question}</strong>
                        <p>{q.answer}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Team;