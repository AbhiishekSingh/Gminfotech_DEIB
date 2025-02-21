import React from "react";
import { Link } from "react-router-dom";
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
          
          <Link to="/Contact" className="partner-button">Partner with us</Link>
        </div>
       
        <div className="footer-links-container">
        <div className="make-footer-space"> 
        {/* <ul className="footer-links">
          ©2025 DEIB Innovation, LLC. All rights reserved. | Site by Series Eight
        </ul> */}
        </div>
         <div className="make-footer-space"> 
          <ul className="footer-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/resources">Resources</Link>
            </li>
            <li>
              <Link to="/about-us">About us</Link>
            </li>
            <li>
              <Link to="/Career">Careers</Link>
            </li>
            <li>
              <Link to="/impact">Impact</Link>
            </li>
          </ul>
          </div>
          <div className="make-footer-space"> 
          <ul className="footer-meta-links">
            <li>
              <Link to="/terms">Terms & Conditions</Link>
            </li>
            <li>
              <Link to="/privacy">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/sitemap">Sitemap</Link>
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
