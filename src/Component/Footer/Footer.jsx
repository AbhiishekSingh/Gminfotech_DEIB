import React from "react";
import "./Footer.css";
import Chat from "./Chat";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="center-message">
          <p className="tagline">Ready to make 
            an</p>
          <p className="impact">
            <span>impact</span>?
          </p>
          <button className="partner-button">Partner with us</button>
        </div>
       
        <div className="footer-links-container">
        <div className="make-footer-space"> 
        <ul className="footer-links">
          ©2025 Peoplism, LLC. All rights reserved. | Site by Series Eight
        </ul>
        </div>
         <div className="make-footer-space"> 
          <ul className="footer-links">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#resources">Resources</a>
            </li>
            <li>
              <a href="#about-us">About us</a>
            </li>
            <li>
              <a href="#careers">Careers</a>
            </li>
            <li>
              <a href="#impact">Impact</a>
            </li>
          </ul>
          </div>
          <div className="make-footer-space"> 
          <ul className="footer-meta-links">
            <li>
              <a href="#terms">Terms & Conditions</a>
            </li>
            <li>
              <a href="#privacy">Privacy Policy</a>
            </li>
            <li>
              <a href="#sitemap">Sitemap</a>
            </li>
          </ul>
          </div>

      
        
      </div>
      <Chat/>
      </div>
     
    </footer>
  );
};

export default Footer;
