import React, { useState } from "react";
import Chip from "@mui/material/Chip";
import "../Styles/StandardPerium.css";

// imported this for scroll animation
import { scroller } from "react-scroll";

const StandardPerium = ({ plans, onClick }) => {
  const [planType, setPlanType] = useState("Standard");

  const courseList =
    plans?.filter((course) => course.type === planType) || [];

  return (
    <section className="sp-section">
      <div className="container">

        {/* Header */}
        <div className="mb-4 text-center">
          <h2 className="sp-title">Choose your course plan</h2>

          <p className="sp-subtitle">
            Select the best learning package for your future
          </p>
        </div>

        {/* Program Type */}
        <div className="d-flex justify-content-center flex-wrap gap-3 mb-5">

          <Chip
            label="Standard"
            clickable
            onClick={() => setPlanType("Standard")}
            sx={{
              px: 2,
              py: 2.5,
              width: "300px",
              borderRadius: "30px",
              fontWeight: 600,
              fontSize: ".95rem",
              bgcolor:
                planType === "Standard"
                  ? "#009FE3"
                  : "#fff",
              color:
                planType === "Standard"
                  ? "#fff"
                  : "#009FE3",
              border: "2px solid #009FE3",
              transition: ".25s",
              "&:hover": {
                bgcolor: "#009FE3",
                color: "#fff",
              },
            }}
          />

          <Chip
            label="Premium"
            clickable
            onClick={() => setPlanType("Premium")}
            sx={{
              px: 2,
              width: "300px",
              py: 2.5,
              borderRadius: "30px",
              fontWeight: 600,
              fontSize: ".95rem",
              bgcolor:
                planType === "Premium"
                  ? "#F39001"
                  : "#fff",
              color:
                planType === "Premium"
                  ? "#fff"
                  : "#F39001",
              border: "2px solid #F39001",
              transition: ".25s",
              "&:hover": {
                bgcolor: "#F39001",
                color: "#fff",
              },
            }}
          />

        </div>

        {/* Cards Grid */}
        <div className="row justify-content-center g-4">

          {courseList.map((course) => (
            <div
              className="col-lg-5 col-md-6 col-sm-10 col-12"
              key={course._id || `${course.type}-${course.title}`}
            >

              <div
                className={`sp-card ${
                  course.badge === "offline"
                    ? "sp-card--premium"
                    : ""
                }`}
              >

                {/* Popular Tag */}
                {course.popular && (
                  <span className="sp-popular-tag">
                    Most popular
                  </span>
                )}

                {/* Type Badge */}
                <span
                  className={`sp-badge sp-badge--${course.mode?.toLowerCase()}`}
                >
                  {course.mode === "Offline"
                    ? "★ "
                    : "⚡ "}

                  {course.mode}
                </span>

                {/* Course Info */}
                <p className="sp-course-label">
                  {course.subtitle}
                </p>

                <h3 className="sp-course-title">
                  {course.title}
                </h3>

                {/* Price */}
                <div className="sp-price-row">

                  <span className="sp-price">
                    ₹{course.price}
                  </span>

                  {course.originalPrice && (
                    <span className="sp-original-price">
                      <del>
                        ₹{course.originalPrice}
                      </del>
                    </span>
                  )}

                </div>

                {/* Duration */}
                <p className="sp-duration">

                  <span className="sp-duration-icon">
                    🕐
                  </span>

                  {course.duration}

                </p>

                <hr className="sp-divider" />

                {/* Features */}
                <ul className="sp-features">

                  {(course.features || []).map(
                    (feature, index) => (
                      <li
                        key={index}
                        className="sp-feature-item"
                      >

                        <span className="sp-check">
                          ✔
                        </span>

                        {feature ===
                          "100% Job Guaranteed Courses" ||
                        feature ===
                          "100% Placement Guaranteed" ||
                        feature ===
                          "100% Placement Preparations" ? (
                          <span className="sp-highlight-job">
                            🔥 {feature}
                          </span>
                        ) : (
                          feature
                            .split(
                              /(Online|Offline)/g
                            )
                            .map((part, i) =>
                              part === "Online" ||
                              part === "Offline" ? (
                                <strong key={i}>
                                  {part}
                                </strong>
                              ) : (
                                part
                              )
                            )
                        )}

                      </li>
                    )
                  )}

                </ul>

                {/* Buttons */}
                <div className="d-flex justify-content-center gap-3 flex-wrap mt-3">

                  <button
                    className="custom-btn enroll-btn"
                    onClick={() => {
                      scroller.scrollTo(
                        "admission-process",
                        {
                          smooth: true,
                          duration: 800,
                          offset: -80,
                        }
                      );
                    }}
                  >
                    Admission
                  </button>

                  <button
                    className="custom-btn callback-btn"
                    onClick={() =>
                      onClick && onClick(course)
                    }
                  >
                    Request Callback
                  </button>

                  <style>{`
                    .custom-btn {
                      flex: 1;
                      min-width: 160px;
                      max-width: 220px;
                      position: relative;
                      padding: 12px 15px;
                      font-size: 0.95rem;
                      font-weight: 600;
                      border: none;
                      border-radius: 12px;
                      cursor: pointer;
                      overflow: hidden;
                      color: #fff;
                      letter-spacing: 0.3px;
                    }

                    .enroll-btn {
                      background: linear-gradient(90deg, #ff9800, #ffb74d);
                      box-shadow: 0 0 10px rgba(255, 152, 0, 0.5);
                    }

                    .enroll-btn:hover {
                      transform: translateY(-3px) scale(1.05);
                      box-shadow: 0 0 20px rgba(255, 152, 0, 0.8);
                    }

                    .callback-btn {
                      background: linear-gradient(90deg, #2196f3, #64b5f6);
                      box-shadow: 0 0 10px rgba(33, 150, 243, 0.5);
                    }

                    .callback-btn:hover {
                      transform: translateY(-3px) scale(1.05);
                      box-shadow: 0 0 20px rgba(33, 150, 243, 0.8);
                    }

                    .custom-btn::after {
                      content: "";
                      position: absolute;
                      top: 0;
                      left: -75%;
                      width: 50%;
                      height: 100%;
                      background: rgba(255, 255, 255, 0.3);
                      transform: skewX(-25deg);
                      transition: left 0.6s ease;
                    }

                    .custom-btn:hover::after {
                      left: 130%;
                    }

                    @media (max-width: 768px) {
                      .custom-btn {
                        width: 80%;
                      }
                    }
                  `}</style>

                </div>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default StandardPerium;