import React from "react";
import "../../Styles/OurCourseFlow.css"; 

//import images
import fundation from "../../assets/Logos/Fundation_logo.png"
import indepth from "../../assets/Logos/Indepth_logo.png"
import Mastery from "../../assets/Logos/Mastery_logo.png"
import placement from "../../assets/Logos/Placement_logo.png"

const LearningPath = () => {
  const steps = [
    { title: "Foundation", img: fundation },
    { title: "Building Depth", img: indepth },
    { title: "Mastery & Beyond", img: Mastery },
    { title: "Job Placements", img: placement },
  ];

  return (
    <section className="Courseflow-section text-center py-5">
      <div className="container">
        <h2 className="Flow-heading fw-bold  mb-4 position-relative d-inline-block">
          Our Learning Journey
          <span className="underline"></span>
        </h2>

        <div className="row mt-3  gap-5  justify-content-center align-items-center">
          {steps.map((step, index) => (
            <div
              className="col-5 col-md-2 position-relative text-center step-card shadow"
              key={index}
            >
              <div className=" mb-3">
                <img
                  src={step.img}
                  alt={step.title}
                  className="step-icon w-100"
                />
              </div>
              <p className=" learning-heading fw-semibold mb-0">{step.title}</p>

              {/* Connecting line (for all except last) */}
              {index !== steps.length - 1 && (
                <div className="connector d-none d-md-block"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearningPath;
