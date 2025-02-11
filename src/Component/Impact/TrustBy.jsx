import React from "react";
import "./TrustBy.css";

export default function TrustBy() {
  const logos = [
    "https://s3.us-east-1.amazonaws.com/peoplism.s8/press/_210xAUTO_fit_center-center_none/everlaw_logo_2019.png",
    "https://s3.us-east-1.amazonaws.com/peoplism.s8/press/_210xAUTO_fit_center-center_none/everlaw_logo_2019.png",
    "https://s3.us-east-1.amazonaws.com/peoplism.s8/press/_210xAUTO_fit_center-center_none/everlaw_logo_2019.png",
    "https://s3.us-east-1.amazonaws.com/peoplism.s8/press/_210xAUTO_fit_center-center_none/everlaw_logo_2019.png",
    "https://s3.us-east-1.amazonaws.com/peoplism.s8/press/_210xAUTO_fit_center-center_none/everlaw_logo_2019.png",
    "https://s3.us-east-1.amazonaws.com/peoplism.s8/press/_210xAUTO_fit_center-center_none/everlaw_logo_2019.png",
    "https://s3.us-east-1.amazonaws.com/peoplism.s8/press/_210xAUTO_fit_center-center_none/everlaw_logo_2019.png",
    "https://s3.us-east-1.amazonaws.com/peoplism.s8/press/_210xAUTO_fit_center-center_none/everlaw_logo_2019.png",
    "https://s3.us-east-1.amazonaws.com/peoplism.s8/press/_210xAUTO_fit_center-center_none/everlaw_logo_2019.png",
    "https://s3.us-east-1.amazonaws.com/peoplism.s8/press/_210xAUTO_fit_center-center_none/everlaw_logo_2019.png",
    "https://s3.us-east-1.amazonaws.com/peoplism.s8/press/_210xAUTO_fit_center-center_none/everlaw_logo_2019.png",
    "https://s3.us-east-1.amazonaws.com/peoplism.s8/press/_210xAUTO_fit_center-center_none/everlaw_logo_2019.png",
    "https://s3.us-east-1.amazonaws.com/peoplism.s8/press/_210xAUTO_fit_center-center_none/everlaw_logo_2019.png",
    "https://s3.us-east-1.amazonaws.com/peoplism.s8/press/_210xAUTO_fit_center-center_none/everlaw_logo_2019.png",
    "https://s3.us-east-1.amazonaws.com/peoplism.s8/press/_210xAUTO_fit_center-center_none/everlaw_logo_2019.png",
    // Add more logo URLs as needed
  ];

  return (
    <div className="trusted-by-container">
      <hr className="divider1" />
      <h2 className="header1">TRUSTED BY</h2>
      <div className="logos-container">
        {logos.map((logo, index) => (
          <img key={index} src={logo} alt={`Logo ${index + 1}`} className="logo" />
        ))}
      </div>
    </div>
  );
}