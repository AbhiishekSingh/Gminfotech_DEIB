import React, { useRef } from "react";
import "./testimonials.css";

const testimonials = [
  {
    text: "DEIB Innovation Lab transformed our hiring strategy, making our workplace more inclusive.",
    name: "Lucy Babbage",
    title: "VP of People",
    company: "Betterment",
    logo: "https://s3.us-east-1.amazonaws.com/peoplism.s8/_AUTOxAUTO_fit_center-center_none/everlaw.png",
    photo: "https://s3.us-east-1.amazonaws.com/peoplism.s8/testimonial/_37x43_contain_center-center_none/aj-everlaw.jpeg",
  },
  {
    text: "Thanks to DEIB Innovation Lab, our leadership now fosters a culture of inclusivity and psychological safety, improving employee retention by 30%.",
    name: "AJ Shankar",
    title: "CEO",
    company: "Everlaw",
    logo: "https://s3.us-east-1.amazonaws.com/peoplism.s8/_AUTOxAUTO_fit_center-center_none/everlaw.png",
    photo: "https://s3.us-east-1.amazonaws.com/peoplism.s8/testimonial/_37x43_contain_center-center_none/aj-everlaw.jpeg",
  },
  {
    text: "Peoplism's ability to bring proven practices into the real world was invaluable.",
    name: "Nick Gaehde",
    title: "President",
    company: "Lexia",
    logo: "https://s3.us-east-1.amazonaws.com/peoplism.s8/_AUTOxAUTO_fit_center-center_none/everlaw.png",
    photo: "https://s3.us-east-1.amazonaws.com/peoplism.s8/testimonial/_37x43_contain_center-center_none/aj-everlaw.jpeg",
  },
  {
    text: "Our culture improved because of their work.",
    name: "Joanna L.",
    title: "HR Manager",
    company: "CompanyX",
    logo: "https://s3.us-east-1.amazonaws.com/peoplism.s8/_AUTOxAUTO_fit_center-center_none/everlaw.png",
    photo: "https://s3.us-east-1.amazonaws.com/peoplism.s8/testimonial/_37x43_contain_center-center_none/aj-everlaw.jpeg",
  },
  {
    text: "The team provided exceptional insights and solutions.",
    name: "James T.",
    title: "Director of HR",
    company: "CompanyY",
    logo: "https://s3.us-east-1.amazonaws.com/peoplism.s8/_AUTOxAUTO_fit_center-center_none/everlaw.png",
    photo: "https://s3.us-east-1.amazonaws.com/peoplism.s8/testimonial/_37x43_contain_center-center_none/aj-everlaw.jpeg",
  },
];

const Testimonials = () => {
  const containerRef = useRef(null);

  const scrollLeft = () => {
    containerRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    containerRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <section className="testimonials-section">
      
      <div className="header1">
        <h3 className="title">FROM OUR CLIENTS</h3>
        <div className="arrows">
          <button className="arrow" onClick={scrollLeft}>&#8249;</button>
          <button className="arrow" onClick={scrollRight}>&#8250;</button>
        </div>
      </div>
      <div className="carousel" ref={containerRef}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <p className="testimonial-text">“{testimonial.text}”</p>
            <div className="card-footer">
              <div className="user-info">
                <img
                  src={testimonial.photo}
                  alt={testimonial.name}
                  className="user-photo"
                />
                <div>
                  <p className="user-name">{testimonial.name}</p>
                  <p className="user-title">{testimonial.title}</p>
                </div>
              </div>
              <img
                src={testimonial.logo}
                alt={testimonial.company}
                className="company-logo"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
