import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import hero from "../assets/about_hero_img.png";
import { TypeAnimation } from "react-type-animation";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import LegalIdentity from "../components/About/LegalIdentity";

// importing mui icons
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import WorkspacePremiumRoundedIcon from "@mui/icons-material/WorkspacePremiumRounded";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
import WorkRoundedIcon from "@mui/icons-material/WorkRounded";
import RocketLaunchRoundedIcon from "@mui/icons-material/RocketLaunchRounded";
import VisibilityRoundedIcon from "@mui/icons-material/VisibilityRounded";

const AboutUs = () => {
  // added a comment
 
  return (
    <div >
      {/* Hero Section */}
      {/* ================= HERO SECTION ================= */}
      <section
        className="py-5"
        style={{
          backgroundImage: `
      linear-gradient(
        rgba(6, 36, 77, 0.75),
        rgba(0, 159, 227, 0.75)
      ),
      url(${hero})
    `,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container py-lg-5">

          <div className="row align-items-center gy-5">

            {/* Left Side */}
            <div className="col-12 text-white text-center text-md-start ">

              <span
                className="badge rounded-pill px-3 py-2 mb-4 d-inline-flex justify-content-center align-items-center gap-2"
                style={{
                  background: "rgba(255,255,255,.15)",
                  backdropFilter: "blur(8px)",
                }}
              >
                <span
                  style={{
                    width: "8px",
                    height: "8px",
                    backgroundColor: "#ED7225",
                    borderRadius: "50%",
                    display: "inline-block",
                  }}
                ></span>
                <span>About Growtern Academy</span>
              </span>

              <h1 className="fw-bold mb-2">
                Get{" "}
                <TypeAnimation
                  sequence={[
                    "Future Ready",
                    1500,
                    "Industry Ready",
                    1500,
                    "Job Ready",
                    1500,
                    "Career Ready",
                    1500,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                  style={{
                    color: "#ED7225",
                    display: "inline-block",
                  }}
                />{" "}
                With Us
              </h1>

              <p
                className="mb-4"
              >
                Growtern Academy empowers students with practical IT skills,
                industry-focused training, real-world projects, internships,
                and placement support to build successful careers.
              </p>

              <div className="d-flex flex-wrap gap-3 justify-content-center justify-content-md-start ">

                <Button
                  variant="contained"
                  component={Link}
                  to="/Job-Oriented-Courses"

                  sx={{
                    bgcolor: "#F39001",

                    borderRadius: "12px",
                    textTransform: "none",
                    fontWeight: 600,
                    fontSize: "1rem",
                    boxShadow: "0 8px 20px rgba(243,144,1,.35)",
                    "&:hover": {
                      bgcolor: "#d97900",
                      boxShadow: "0 10px 24px rgba(243,144,1,.45)",
                    },
                  }}
                >
                  Explore Courses
                </Button>

                <Button
                  variant="outlined"
                  component={Link}
                  to="/contact-us"
                  sx={{
                    color: "#fff",
                    borderColor: "#fff",
                    borderWidth: "2px",

                    borderRadius: "12px",
                    textTransform: "none",
                    fontWeight: 600,
                    fontSize: "1rem",
                    "&:hover": {
                      bgcolor: "rgba(255,255,255,.08)",
                      borderColor: "#fff",
                      borderWidth: "2px",
                    },
                  }}
                >
                  Contact Us
                </Button>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-5 bg-white">

        <div className="container py-lg-5">

          <div className="row align-items-center gy-5">

            {/* LEFT */}
            <div className="col-lg-6 text-center text-md-start">

              <span
                className="badge rounded-pill px-3 py-2 mb-4 d-inline-flex justify-content-center align-items-center gap-2"
                style={{
                  background: "#EAF6FF",
                  // backdropFilter: "blur(8px)",
                  color: "black"
                }}
              >
                <span
                  style={{
                    width: "8px",
                    height: "8px",
                    backgroundColor: "#ED7225",
                    borderRadius: "50%",
                    display: "inline-block",
                  }}
                ></span>
                <span>Our Purpose</span>
              </span>


              <h1
                className=" fw-bold mb-4"
              >
                Mission & 
                <span style={{ color: "#F39001" }}>
                  Vision
                </span>
              </h1>

              <p>To bridge the gap between education and industry by providing high-quality, practical, and career-focused training that equips students with the skills, confidence, and experience required to thrive in the modern IT industry.</p>

              <p>
               To become one of India's most trusted technology education platforms by nurturing future-ready professionals through innovation, practical learning, and strong industry collaboration.
              </p>

            </div>

            {/* RIGHT */}

            <div className="col-lg-6">

              <div
                className="bg-white rounded-5 shadow-lg p-4"
                style={{
                  border: "1px solid #edf2f7",
                }}
              >

                {/* Card */}

                <div className="d-flex align-items-center p-3 rounded-4 border mb-3"
                  style={{
                    transition: "all 0.3s ease",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-8px)";
                    e.currentTarget.style.boxShadow = "0 15px 35px rgba(0,0,0,.12)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "";
                  }}
                >

                  <div
                    className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0 me-3"
                    style={{
                      width: "clamp(48px, 8vw, 60px)",
                      height: "clamp(48px, 8vw, 60px)",
                      background: "#EAF6FF",
                    }}
                  >
                    <SchoolRoundedIcon
                      sx={{
                        color: "#009FE3",
                        fontSize: "clamp(22px, 4vw, 30px)",
                      }}
                    />
                  </div>

                  <div>
                    <h6 className="fw-bold mb-1">
                      Industry-Oriented Learning
                    </h6>

                    <small className="text-secondary">
                      Curriculum designed according to current IT industry needs.
                    </small>

                  </div>

                </div>

                {/* Card */}

                <div className="d-flex align-items-center p-3 rounded-4 border mb-3"
                  style={{
                    transition: "all 0.3s ease",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-8px)";
                    e.currentTarget.style.boxShadow = "0 15px 35px rgba(0,0,0,.12)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "";
                  }}
                >

                  <div
                    className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0 me-3"
                    style={{
                      width: "clamp(48px, 8vw, 60px)",
                      height: "clamp(48px, 8vw, 60px)",
                      background: "#FFF3E5",
                    }}
                  >
                    <WorkspacePremiumRoundedIcon
                      sx={{
                        color: "#F39001",
                        fontSize: "clamp(22px, 4vw, 30px)",
                      }}
                    />
                  </div>

                  <div>

                    <h6 className="fw-bold mb-1">
                      Expert Mentorship
                    </h6>

                    <small className="text-secondary">
                      Learn directly from experienced industry professionals.
                    </small>

                  </div>

                </div>

                {/* Card */}

                <div className="d-flex align-items-center p-3 rounded-4 border mb-3"
                  style={{
                    transition: "all 0.3s ease",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-8px)";
                    e.currentTarget.style.boxShadow = "0 15px 35px rgba(0,0,0,.12)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "";
                  }}
                >

                  <div
                    className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0 me-3"
                    style={{
                      width: "clamp(48px, 8vw, 60px)",
                      height: "clamp(48px, 8vw, 60px)",
                      background: "#EAF6FF",
                    }}
                  >
                    <GroupsRoundedIcon
                      sx={{
                        color: "#009FE3",
                        fontSize: "clamp(22px, 4vw, 30px)",
                      }}
                    />
                  </div>

                  <div>

                    <h6 className="fw-bold mb-1">
                      Practical Learning
                    </h6>

                    <small className="text-secondary">
                      Hands-on projects, internships, and real-world assignments.
                    </small>

                  </div>

                </div>

                {/* Card */}

                <div className="d-flex align-items-center p-3 rounded-4 border"
                  style={{
                    transition: "all 0.3s ease",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-8px)";
                    e.currentTarget.style.boxShadow = "0 15px 35px rgba(0,0,0,.12)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "";
                  }}
                >

                  <div
                    className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0 me-3"
                    style={{
                      width: "clamp(48px, 8vw, 60px)",
                      height: "clamp(48px, 8vw, 60px)",
                      background: "#FFF3E5",
                    }}
                  >
                    <WorkRoundedIcon
                      sx={{
                        color: "#F39001",
                        fontSize: "clamp(22px, 4vw, 30px)",
                      }}
                    />
                  </div>

                  <div>

                    <h6 className="fw-bold mb-1">
                      Placement Assistance
                    </h6>

                    <small className="text-secondary">
                      Career guidance, resume building, and interview preparation.
                    </small>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* Legally Identity Section */}
     <LegalIdentity />

    </div>
  );
};

export default AboutUs;
