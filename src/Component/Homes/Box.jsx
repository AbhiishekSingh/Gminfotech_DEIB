import React from "react";
import { Link } from "react-router-dom";
import "./box.css";

const Box = () => {
  return (
    <div className="container-add6">
      <h1 className="title-add6">Integrated DEIB Approach</h1>
      <p className="description-add6">
        True inclusion isn’t an initiative—it’s the <b>backbone</b> of a high-performing workplace. 
        Our integrated approach ensures DEIB isn’t just a conversation, but a <b>tangible business advantage.</b>
      </p>

      <div className="grid-container-add6">
        <div className="grid-item-add6 left-add6">
          <h2 className="subtitle-add6">Diversity</h2>
          <p className="text-add6">
            Expand hiring pipelines & ensure equitable selection.
          </p>
          <Link to="/services" className="button-add6 diversity-add6">View Services</Link>
        </div>

        <div className="grid-item-add6 right-add6">
          <h2 className="subtitle-add6">Inclusion</h2>
          <p className="text-add6">
            Foster a culture where every voice matters.
          </p>
          <Link to="/services" className="button-add6 inclusion-add6">View Services</Link>
        </div>
        <hr className="horizontal-line-add6" />

        <div className="grid-item-add6 left-add6">
          <h2 className="subtitle-add6">Equity</h2>
          <p className="text-add6">
            Build fair and objective career & compensation systems.
          </p>
          <Link to="/services" className="button-add6 equity-add6">View Services</Link>
        </div>

        <div className="grid-item-add6 right-add6">
          <h2 className="subtitle-add6">Belonging</h2>
          <p className="text-add6">
            Create a workplace where employees feel valued & empowered.
          </p>
          <Link to="/services" className="button-add6 belonging-add6">View Services</Link>
        </div>
      </div>
    </div>
  );
};

export default Box;