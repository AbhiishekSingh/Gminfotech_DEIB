import React from "react";
import "./box.css";

const Box = () => {
  return (
    <div className="container-add6">
      <h1 className="title-add6">Integrated DEIB Approach</h1>
      <p className="description-add6">
      DEIB should be embedded in every aspect of HR and leadership.
      We help companies implement best-in-class to  
      <span className="underline-add6"> DEIB strategies </span> to <span className="underline-add6">drive</span>, sustainable
      business results
      </p>

      <div className="grid-container-add6">
        <div className="grid-item-add6 left-add6">
          <h2 className="subtitle-add6">Diversity</h2>
          <p className="text-add6">
          Broaden your hiring strategies and ensure an equitable selection process
          {/* Expanding talent pools.
Implementing unbiased hiring techniques.
Driving diverse recruitment strategies. */}

          </p>
          <button className="button-add6 diversity-add6">View Services</button>
        </div>

        <div className="grid-item-add6 right-add6">
          <h2 className="subtitle-add6">Inclusion</h2>
          <p className="text-add6">
          Foster a workplace culture where every employee feels valued and heard.
          {/* 🔹 Implementing inclusive workplace policies.
🔹 Conducting allyship and leadership training.
🔹 Building psychologically safe environments. */}

          </p>
          <button className="button-add6 inclusion-add6">View Services</button>
        </div>
        <hr className="horizontal-line-add6" />

        <div className="grid-item-add6 left-add6">
          <h2 className="subtitle-add6">Equity</h2>
          <p className="text-add6">
          Build fair and objective systems for career growth and compensation.
          {/* Ensuring salary transparency and pay equity.
🔹 Structuring fair promotions and performance management.
🔹 Training leaders to identify and correct bias. */}

          </p>
          <button className="button-add6 equity-add6">View Services</button>
        </div>

        <div className="grid-item-add6 right-add6">
          <h2 className="subtitle-add6">Belonging</h2>
          <p className="text-add6">
          Engage employees with a sense of psychological safety and connectedness.
          {/* 🔹 Strengthening Employee Resource Groups (ERGs).
🔹 Enhancing leadership commitment to DEIB.
Building an environment of trust and openness. */}

          </p>
          <button className="button-add6 belonging-add6">View Services</button>
        </div>
      </div>
    </div>
  );
};

export default Box;
