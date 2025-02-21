import React from "react";
import "./Resources.css";
import Bot from "./bot";
import Press from "./Press";
import HelpSection from "./HelpSection";
import BlogGrid from "./BlogGrid";

const Resources = () => {
  return (
    <div className="resources-container">
    <div >
      <div className="resources-text">
        Resources by <br /> us for <span className="italic-text">you <span className="underline"></span></span>
      </div>
      <div className="button-group">
        <button className="resource-button">Resources</button>
        <button className="resource-button">Press</button>
        <button className="resource-button">Blog</button>
      </div>
    </div>
    <Bot/>
    <Press/>
    <HelpSection/>
    <BlogGrid/>
    </div>
  );
};

export default Resources;
