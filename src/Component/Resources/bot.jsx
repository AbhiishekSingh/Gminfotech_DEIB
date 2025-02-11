import React from "react";
import "./Bot.css";

const Bot = () => {
  return (
    <div className="resources-container1">
      <hr className="resources-divider1" />
      <h2 className="resources-title1">Resources</h2>
      <div className="resources-grid1">
        {/* Interviewbot Cards */}
        <div className="resource-card1">
          <img src="https://s3.us-east-1.amazonaws.com/peoplism.s8/resources/_630x318_fit_center-center_none/Resources-Slackbot.png" alt="Interviewbot" className="resource-image1" />
          <h3 className="resource-title1">Inclusive Hiring Assistant</h3>
          <p className="resource-text1">
          Struggling to make your hiring process bias-free? Our AI-powered tool helps recruiters craft inclusive,
           competency-based interview questions and job descriptions in just minutes.
          </p>
          <button className="resource-button1">Learn more</button>
        </div>
        <div className="resource-card1 change">
          <img src="https://s3.us-east-1.amazonaws.com/peoplism.s8/resources/_630x318_fit_center-center_none/Business-Case-for-DEIB.png" alt="Business Case for DEIB" className="resource-image1" />
          <h3 className="resource-title1">Business Case for DEIB</h3>
          <p className="resource-text1">
          Need leadership buy-in for DEIB initiatives? Download our India-specific
           business case that outlines data-driven
           insights and ROI of DEIB strategies tailored to the Indian corporate landscape.
          </p>
          <button className="resource-button1">Click here to download</button>
        </div>
        <div className="resource-card1">
          <img src="https://s3.us-east-1.amazonaws.com/peoplism.s8/resources/_630x318_fit_center-center_none/Equitable-Performance-Management-ebook.jpg" alt="Business Case for DEIB" className="resource-image1" />
          <h3 className="resource-title1">Equitable Performance Management eBook</h3>
          <p className="resource-text1">
          Performance evaluations should be fair and bias-free. This comprehensive guide helps
           organizations implement transparent and equitable performance management systems.
          </p>
          <button className="resource-button1">Click here to download</button>
        </div>
        <div className="resource-card1 change chnage1">
          <img src="https://s3.us-east-1.amazonaws.com/peoplism.s8/resources/_630x318_fit_center-center_none/Udemy-Course.png" alt="Interviewbot" className="resource-image1" />
          <h3 className="resource-title1">Online DEIB Certification Course</h3>
          <p className="resource-text1">
          Want to build a grassroots DEIB movement at your organization? Our online course, designed for Indian workplaces, provides practical strategies to integrate DEIB into HR policies, leadership training, and employee engagement.
          </p>
          <button className="resource-button1">Enroll Now</button>
        </div>
        
        {/* Business Case for DEIB Cards */}
        <div className="resource-card1">
          <img src="https://s3.us-east-1.amazonaws.com/peoplism.s8/resources/_630x318_fit_center-center_none/Yellow-Gradient-Modern-Webinar-LinkedIn-Image-Ad.png" alt="Business Case for DEIB" className="resource-image1" />
          <h3 className="resource-title1">DEIB Policy Templates</h3>
          <p className="resource-text1">
          Ensure compliance with Indian labor laws and global DEIB standards. Download ready-to-use DEIB policy templates
           for hiring, workplace accessibility, harassment prevention, and employee well-being.
          </p>
          <button className="resource-button1">Access Now</button>
        </div>
      </div>
    </div>
  );
};

export default Bot;