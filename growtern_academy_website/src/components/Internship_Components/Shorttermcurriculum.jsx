import React, { useState } from "react";
import "../../Styles/Internship_styles/Shorttermcurriculum.css";
import { FaBookOpen, FaChevronDown } from "react-icons/fa";

const CourseCurriculum = ({curriculum}) => {
  const [active, setActive] = useState(null);



  const toggle = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <section className="curriculum-wrapper">
      <h2 className="curriculum-title">Course Curriculum</h2>

      <div className="timeline">
        {curriculum.map((module, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-dot"></div>
            <div className="timeline-line"></div>

            <div className="module-card">
              <div className="module-header" onClick={() => toggle(index)}>
                <div className="module-info">
                  <FaBookOpen className="module-icon" />
                  <div>
                    <h3>{module.title}</h3>
                    <p>{module.desc}</p>
                  </div>
                </div>

                <FaChevronDown
                  className={`arrow-icon ${active === index ? "rotate" : ""}`}
                />
              </div>

              <div
                className={`module-content ${
                  active === index ? "open" : ""
                }`}
              >
                <ul>
                  {module.topics.map((topic, i) => (
                    <li key={i}>{topic}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CourseCurriculum;
