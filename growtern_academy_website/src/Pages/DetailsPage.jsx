import React, { useState, useEffect } from "react";
import "../Styles/DetailsPage.css";
import { useParams } from "react-router-dom";

// Import All images
import Doubtimage from "../assets/Images/Universial_image_for_Doubtclearing_class.png";

// Import All Components
import Certificate from "../components/Certificate";
import PlacementStudent from "../components/PlacedStudent";
import HiringPertner from "../components/Companies";
import MentorSection from "../components/MentorSection";
import GoogleReview from "../components/ReviewRating";
import ProgramDetails from "../components/ProgramDetails";
// import MERNflowchat from "../components/CourseFlowchat/MERN"
import ProgramOverview from "../components/ProgramOverview";
import AdmissionProcess from "../components/AdimissionProcess";
import JobGuarantee from "../components/JobGuaranteeCrateria";
import CareerRoles from "../components/CareerRoles";
import FAQAccordion from "../components/FAQAccordion";

import CustomModal from "../ui/Modal";
import ApplyNowModal from "../components/Modals/ApplyNowModal";
import CareerModal from "../components/Modals/CareerModal";
import DownloadSylabus from "../components/Modals/DownloadSylabus";
import JobleadingModal from "../components/Modals/JobleadingModal";
import StandardPerium from "./StandardPerium";

import Collaboration from "../components/Internship_Components/collaboration-section";
import Goodies_Section from "../components/Internship_Components/Goodis_section";

import Offers from "../components/Offers";

import { Link as RouterLink } from "react-router-dom";

import FrontendTechFlow from "../components/CourseFlowchat/Frontend";
import JavaTechFlow from "../components/CourseFlowchat/Java";
import MERNTechFlow from "../components/CourseFlowchat/MERN";
import PythonTechFlow from "../components/CourseFlowchat/Python";
import DataScienceTechFlow from "../components/CourseFlowchat/DataScience";
import AiMlFlowChat from "../components/CourseFlowchat/AiMlFlowChat";

// Hero section key highlights data
const highlights = [
  {
    id: 1,
    emoji: "👨‍🏫",
    title: "100% Live Sessions & 1:1 Mentorship",
    desc: "Get personalized guidance and real-time feedback from expert mentors.",
  },
  {
    id: 2,
    emoji: "🌐",
    title: "Lifetime Access to Learning Material",
    desc: "Your learning journey doesn’t end with the course — explore, revise, and upskill anytime",
  },
  {
    id: 3,
    emoji: "⏰",
    title: "24×7 Doubt Clearing Assistance",
    desc: "Never stay stuck — get help anytime through chat, calls, or live support.",
  },
  {
    id: 4,
    emoji: "💻",
    title: "Hands-on Full-Stack Projects",
    desc: "Build real-world applications using MongoDB, Express.js, React.js, and Node.js.",
  },
  {
    id: 5,
    emoji: "💰",
    title: "100% Placement Guaranteed",
    desc: "From resumes to mock interviews to LinkedIn polish — we prepare you for every step until you land your dream job",
  },
  {
    id: 6,
    emoji: "⏰",
    title: "24×7 Doubt Clearing Assistance",
    desc: "Never stay stuck — get help anytime through chat, calls, or live support.",
  },
];

// Status bar Data
const stats = [
  { value: "500+", label: "Hiring Partners" },
  { value: "4-8 LPA", label: "Average Salary" },
  { value: "50+", label: "Instructors" },
  { value: "1000+", label: "Placed Students" },
  { value: "50+", label: "Internship Programs" },
  { value: "4.9/5", label: "Google Rating" },
];

// Key Features Data
const features = [
  {
    title: "Course Duration",
    desc: "6 Months",
    color: "#2D6CDF",
    icon: "bi bi-clock-history",
  },
  {
    title: "Delivery Mode",
    desc: "Live Virtual Classes & 1:1 live Sessions",
    color: "#E93B81",
    icon: "bi bi-person-video3",
  },
  {
    title: "Daily Duration",
    desc: "2 Hours Class",
    color: "#7C3AED",
    icon: "bi bi-alarm",
  },
  {
    title: "Doubt Clearing",
    desc: "Live Chat & On call doubt clearing with trainer ",
    color: "#00B884",
    icon: "bi bi-chat-dots",
  },
  {
    title: "Online Portfolio",
    desc: "15+ projects to showcase",
    color: "#28C2FF",
    icon: "bi bi-file-earmark-person",
  },
  {
    title: "Cretificate",
    desc: "Globally accepted certificate, internship, LOR and course complete certificate",
    color: "#FDBA3B",
    icon: "bi bi-people",
  },
  {
    title: "100% Placement Guaranteed",
    desc: "100% Placement Guaranteed, resume building & mock interviews",
    color: "#F05454",
    icon: "bi bi-briefcase",
  },
  {
    title: "Gen AI",
    desc: "Advance skills on most demanding language nowadays genetic AI",
    color: "#3A49D9",
    icon: "bi bi-robot",
  },
];

// Price comparison section data
const comparisonData = [
  {
    feature: "Placement Promise",
    growtern: (
      <>
        <span
          style={{
            color: "#ff6200ff",
            fontWeight: "600",
          }}
        >
          100% Placement Guaranteed
        </span>{" "}
        — We connect you directly with hiring partners until you get placed.
      </>
    ),
    others:
      "No guaranteed interviews — placement is 'subject to availability.'",
  },

  {
    feature: "Learning Mode",
    growtern: (
      <>
        <span
          style={{
            color: "#ff6200ff",
            fontWeight: "600",
          }}
        >
          100% Live Interactive{" "}
        </span>
        Classes with industry mentors who teach after office hours.
      </>
    ),
    others:
      "Mostly recorded videos or part-time trainers — limited live sessions.",
  },

  {
    feature: "Curriculum Focus",
    growtern: (
      <>
        <span
          style={{
            color: "#ff6200ff",
            fontWeight: "600",
          }}
        >
          Industry-based syllabus
        </span>{" "}
        updated every quarter to match company hiring trends
      </>
    ),
    others:
      "Outdated syllabus — often theoretical and not aligned with job requirements.",
  },

  {
    feature: "Projects & Portfolio",
    growtern: (
      <>
        <span
          style={{
            color: "#ff6200ff",
            fontWeight: "600",
          }}
        >
          Build real-world projects
        </span>{" "}
        and host them live to show employers your skills
      </>
    ),
    others:
      "Limited or demo-based projects, not deployment-ready.",
  },

  {
    feature: "Mentorship",
    growtern: (
      <>
        <span
          style={{
            color: "#ff6200ff",
            fontWeight: "600",
          }}
        >
          1:1 personal mentorship
        </span>{" "}
        + weekly code reviews by experts
      </>
    ),
    others:
      "Large batches with no personal feedback or individual guidance.",
  },

  {
    feature: "Interview Preparation",
    growtern: (
      <>
        <span
          style={{
            color: "#ff6200ff",
            fontWeight: "600",
          }}
        >
          Mock interviews
        </span>
        , soft skills training, and resume + LinkedIn optimization
      </>
    ),
    others:
      "Basic resume help only, no real interview practice.",
  },

  {
    feature: "Support Duration",
    growtern: (
      <>
        Continued{" "}
        <span
          style={{
            color: "#ff6200ff",
            fontWeight: "600",
          }}
        >
          career support until placement
        </span>{" "}
        — we don’t stop after the course
      </>
    ),
    others: "Support ends after course completion.",
  },

  {
    feature: "Batch Timing",
    growtern: (
      <>
        <span
          style={{
            color: "#ff6200ff",
            fontWeight: "600",
          }}
        >
          Flexible evening & weekend classes
        </span>{" "}
        for working students & 6 Days Classes per weak
      </>
    ),
    others:
      "Fixed timing — hard for working professionals & 2 Days Class per weak.",
  },

  {
    feature: "Cost vs Outcome",
    growtern: (
      <>
        <span
          style={{
            color: "#ff6200ff",
            fontWeight: "600",
          }}
        >
          Affordable fees
        </span>{" "}
        + assured job interviews = higher ROI
      </>
    ),
    others: "High fees + uncertain job outcomes.",
  },

  {
    feature: "Learning Experience",
    growtern: (
      <>
        <span
          style={{
            color: "#ff6200ff",
            fontWeight: "600",
          }}
        >
          live projects
        </span>
        , and community access
      </>
    ),
    others:
      "Traditional classroom model with less engagement.",
  },
];

// FAQ section data
const faqs = [
  {
    question: "Do I need a laptop to do the course?",
    answer:
      "Yes, a laptop is recommended to complete all exercises, assignments, and projects effectively.",
  },
  {
    question: "The course is available in which languages?",
    answer:
      "Currently, the course is available in English and Hindi.",
  },
  {
    question:
      "Is this program a 100% Placement Guaranteed Program?",
    answer: (
      <>
        Yes, we provide{" "}
        <span
          style={{
            color: "#ff6200ff",
            fontWeight: "600",
          }}
        >
          100% Placement Guaranteed
        </span>{" "}
        to help students prepare for and secure jobs in the industry, t&c Apply.
      </>
    ),
  },
  {
    question: "What is the duration of the course?",
    answer: (
      <>
        The duration of the course is 6 months,{" "}
        <span
          style={{
            color: "#ff6200ff",
            fontWeight: "600",
          }}
        >
          including hands-on projects
        </span>
        .
      </>
    ),
  },
];

// Hostel image
import hostel_near_us from "../assets/hostel_near_us.jpg";

// Flowchart mapping
const flowChartMap = {
  "pgpp-in-mern-stack-with-gen-ai": <MERNTechFlow />,
  "pgpp-in-python-full-stack-development-with-gen-ai": (
    <PythonTechFlow />
  ),
  "pgpp-in-java-full-stack-development-with-gen-ai": (
    <JavaTechFlow />
  ),
  "pgpp-in-data-science-analytics-with-gen-ai": (
    <DataScienceTechFlow />
  ),
  "pgpp-in-artificial-intelligence-machine-learning": (
    <AiMlFlowChat />
  ),
};

const DetailsPage = () => {
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [current, setCurrent] = useState(0);
  const [show, setShow] = useState(false);

  const [showdemo, setShowDemo] = useState(false);

  const [showdownloadModal, setShowDownloadModal] =
    useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const showdemoClose = () => setShowDemo(false);
  const showdemoShow = () => setShowDemo(true);

  const showDownlodModalClose = () =>
    setShowDownloadModal(false);

  const showDownloadModal = () =>
    setShowDownloadModal(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(
        (prev) => (prev + 1) % highlights.length
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const { slug } = useParams();

  const API_URL = import.meta.env.VITE_API_URL;

  // ==========================================
  // Fetch Course From API
  // ==========================================
  useEffect(() => {
    const fetchCourse = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(
          `${API_URL}/api/job-courses/${slug}`
        );

        const result = await response.json();

        if (!response.ok || !result.success) {
          throw new Error(
            result.message ||
              "Failed to fetch course."
          );
        }

        setCourse(result.data);
      } catch (error) {
        console.error(
          "Failed to fetch Job Course:",
          error
        );

        setError(
          error.message ||
            "Unable to load course."
        );
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchCourse();
    }
  }, [slug]);

  // ==========================================
  // API COURSE DATA
  // ==========================================
  const standardPlan = course?.plans?.find(
  (plan) => plan.type === "Standard"
);

const premiumPlan = course?.plans?.find(
  (plan) => plan.type === "Premium"
);

  const flowChart = course
    ? flowChartMap[course.slug]
    : null;

  // ==========================================
  // Loading
  // ==========================================

  if (loading) {
    return (
      <div className="container py-5 text-center">
        <div
          className="spinner-border text-primary"
          role="status"
        >
          <span className="visually-hidden">
            Loading...
          </span>
        </div>
      </div>
    );
}

  // ==========================================
  // Error
  // ==========================================

  if (error || !course) {
    return (
      <div className="container py-5 text-center">
        <h4>
          {error || "Course not found."}
        </h4>
      </div>
    );
  }

  return (
    <>
      {/* Details Page Hero Section */}
      <section className="Detailspage-section">
        <div className="container">
          <div className="row ">
            <div className="col-md-7 p-0">
              <div className="Detailspage-Tag">
                <p className="Tag-msg mb-0">
                  100% PLACEMENT GUARANTEED
                </p>
              </div>

              <h2 className="text-white fw-bold fs-1">
                <span>{course.courseTitle}</span>
                <br />
              </h2>

              {/* Batch Card */}
              <div className="batch-card py-1">
                <div className="row text-center align-items-center justify-content-center m-0">

                  {/* Column 1 */}
                  <div className="col-6 col-md-6 mb-2 mb-md-0 p-0">
                    <div className="batch-label mb-1">
                      Last Apply Date:
                    </div>

                    <div className="batch-value">
                      {course.nextBatchStartFrom
                        ? new Date(course.nextBatchStartFrom).toLocaleDateString("en-GB")
                        : "-"}
                    </div>
                  </div>

                  {/* Column 2 */}
                  <div className="col-6 col-md-6 mb-2 mb-md-0 p-0">
                    <div className="batch-label mb-1">
                      Review by learners :
                    </div>

                    <div className="batch-value">
                      ⭐⭐⭐⭐⭐(4.9)
                    </div>
                  </div>

                </div>
              </div>

              <div className="w-75 d-flex justify-content-center gap-4 in-mobile">
                <button
                  className="btn Enroll-Btn flex-fill"
                  onClick={showdemoShow}
                >
                  Enroll Now
                </button>

                <button
                  className="btn Download-btn flex-fill"
                  onClick={showDownloadModal}
                >
                  Download Syllabus
                </button>
              </div>
            </div>

            <div className="col-md-5 p-0">
              <div className="highlight-slider">
                {highlights.map((item) => (
                  <div
                    key={item.id}
                    className={`highlight-slide ${
                      item.id === current + 1
                        ? "active"
                        : ""
                    }`}
                  >
                    <span>{item.emoji}</span>

                    <h3>{item.title}</h3>

                    <p>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {flowChart}
          </div>
        </div>
      </section>

      {/* Key Highlight Section */}
      <section className="KeyHighlight-section">
        <div className="container">
          <div className="status-MainDeiv d-none d-md-block">
            <div className="stats-row">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="stat-item"
                >
                  <div className="stat-content">
                    <div className="stat-value">
                      {stat.value}
                    </div>

                    <div className="stat-label">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div
          className="container py-md-5 features-section"
          style={{
            fontFamily: "Poppins, sans-serif",
            textAlign: "center",
          }}
        >
          <h2 className="fw-bold mb-3">
            Key Features
          </h2>

          <div
            className="mx-auto mb-4"
            style={{
              width: "60px",
              height: "3px",
              backgroundColor: "#E93B81",
            }}
          ></div>

          <p className="text-center">
            Get{" "}
            <span className="fw-bold text-danger">
              100% Placement Guaranteed
            </span>{" "}
            when you maintain{" "}
            <span className="fw-bold">
              90% Attendance
            </span>{" "}
            — your consistency drives your success
          </p>

          <div className="features-wrapper">
            {features.map((item, index) => (
              <div
                className="feature-card"
                key={index}
                style={{
                  backgroundColor:
                    item.color,
                }}
              >
                <i
                  className={`${item.icon} fs-1 mb-3 d-block`}
                ></i>

                <h6 className="fw-bold mb-2">
                  {item.title}
                </h6>

                <p className="mb-0">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Doubt Clearing Section */}
      {/*
      <section className="Doubtclearing-Section">
        <div className="container p-0">
          <div className="Doubt-MainDiv rounded-3 p-4">
            <div className="row align-items-center">

              <div className="col-md-6 text-start text-white">
                <h2 className="fw-bold">
                  <span className="highlight">
                    100+ Doubts
                  </span>
                  <br />
                  are resolved within
                </h2>

                <h1 className="fw-bold mb-3">
                  60 minutes{" "}
                  <span className="highlight">
                    Every day!
                  </span>
                </h1>
              </div>

              <div className="col-md-6 text-center position-relative mt-4 mt-md-0">
                <img
                  src={Doubtimage}
                  alt="image"
                  className="img-fluid"
                  style={{ width: "45%" }}
                />
              </div>

            </div>
          </div>
        </div>
      </section>
      */}

      {/* Offer Section */}
      <Offers />

      {/* Goodies Section */}
      <Goodies_Section />

      {/* Hiring Partner section */}
      <HiringPertner />

      {/* Placement students section */}
      <PlacementStudent />

      {/* Certificate Section */}
      <section>
        {<Certificate />}
      </section>

      {/* Pricing Section */}
      <section className="comparison-section ">
        <div className="container ">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <h2 className="training-heading text-center fw-bold mb-0">
              COMPARE WITH OTHERS
            </h2>
          </div>

          <p className="text-center text-light my-4 fs-5">
            Build the foundation for your future career.
            An investment that pays lifelong returns.
          </p>

          <div className="row g-4">

            {/* Other Institutes Table */}
            <div className="col-12 col-md-6 p-0 pe-md-3">
              <div className="program-card h-100 p-3 rounded shadow border">

                <h4 className="fw-bold mb-4 text-center text-dark">
                  Other Training Institutes
                </h4>

                <div className="table-responsive">
                  <table className="program-table text-white mb-5">
                    <tbody>
                      {comparisonData.map(
                        (row, i) => (
                          <tr key={i}>
                            <td className="p-3 border fw-bold">
                              {row.feature}
                            </td>

                            <td className="p-3 border">
                              {row.others}
                            </td>
                          </tr>
                        )
                      )}
                    </tbody>
                  </table>

                  <h2
                    className="mt-5 text-center fw-bold"
                    style={{
                      color: "#ff7c09",
                      textShadow:
                        "0 0 10px #000000ff, 0 0 20px #000000ff, 0 0 30px #000000ff",
                    }}
                  >
                    ₹ 99,999{" "}

                    <span
                      style={{
                        marginLeft: "10px",
                        fontSize: "1.1rem",
                        color: "#ffffffff",
                      }}
                    >
                      <del>
                        ₹ 1,49,999
                      </del>
                    </span>

                    <p
                      className="mt-2"
                      style={{
                        fontSize: "0.8rem",
                        color: "#ffffffff",
                        margin: 0,
                      }}
                    >
                      <del>
                        (Excluding GST)
                      </del>
                    </p>
                  </h2>
                </div>
              </div>
            </div>

            {/* Growtern Table */}
            <div className="col-12 col-md-6 p-0 ps-md-3">
              <div className="program-card h-100 p-3 shadow border">

                <h4
                  className="fw-bold mb-4 text-center"
                  style={{
                    color: "#f46333ff",
                  }}
                >
                  At Growtern Academy
                </h4>

                <div
                  className="table-responsive"
                  style={{
                    border:
                      "4px solid #f06a17ff",
                  }}
                >
                  <table className="program-table text-white">
                    <tbody>
                      {comparisonData.map(
                        (row, i) => (
                          <tr key={i}>
                            <td className="p-3 border fw-bold">
                              {row.feature}
                            </td>

                            <td
                              className={`p-3 border ${
                                row.growtern ===
                                "100% Interview Guaranteed "
                                  ? "text-danger fw-semibold"
                                  : "text-dark"
                              }`}
                            >
                              {row.growtern}
                            </td>
                          </tr>
                        )
                      )}
                    </tbody>
                  </table>

                  {/* Price section */}
                  <h2
                    className="mt-3 text-center fw-bold"
                    style={{
                      color: "#ff7c09",
                      textShadow:
                        "0 0 10px #000000ff, 0 0 20px #000000ff, 0 0 30px #000000ff",
                    }}
                  >
                    {standardPlan?.price}{" "}

                    <span
                      style={{
                        marginLeft: "10px",
                        fontSize: "1.1rem",
                        color: "#ffffffff",
                      }}
                    >
                      <del>
                        {standardPlan?.originalPrice}
                      </del>
                    </span>

                    <p
                      className="mt-2"
                      style={{
                        fontSize: "0.8rem",
                        color: "#ffffffff",
                        margin: 0,
                      }}
                    >
                      (Limited time offer)
                    </p>
                  </h2>
                </div>

                <div className="Most-Tag-Div fw-bold">
                  Most Affordable
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Plans */}
      <StandardPerium
        plans={course.plans}
        onClick={handleShow}
      />

      {/* Roles Eligibility */}
      <CareerRoles
        roles={course.roles || []}
      />

      {/* Admission Process */}
      <AdmissionProcess />

      {/* Collaboration */}
      <Collaboration />

      {/* Hostel and PG Section */}
      <section className="py-5 bg-white">
        <div className="container">

          <div
            className="rounded-4 p-4 p-lg-5"
            style={{
              background: "#fff",
              border: "1px solid #E5EDF5",
              boxShadow:
                "0 10px 25px rgba(0,0,0,0.06), 0 4px 10px rgba(0,0,0,0.04)",
              transition: "all .3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform =
                "translateY(-4px)";

              e.currentTarget.style.boxShadow =
                "0 18px 40px rgba(0,0,0,.10)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform =
                "translateY(0)";

              e.currentTarget.style.boxShadow =
                "0 10px 25px rgba(0,0,0,0.06), 0 4px 10px rgba(0,0,0,0.04)";
            }}
          >

            <div className="row align-items-center">

              {/* Image */}
              <div className="col-12 col-lg-4 text-center mb-4 mb-lg-0">
                <img
                  src={hostel_near_us}
                  alt="Hostel Near Growtern"
                  className="img-fluid rounded-4"
                  style={{
                    objectFit: "contain",
                  }}
                />
              </div>

              {/* Content */}
              <div className="col-12 col-lg-8 text-center text-lg-start">

                <h2 className="fw-bold mb-3">
                  Find
                  <span
                    style={{
                      color: "#F39001",
                    }}
                  >
                    {" "}
                    Hostels or PG{" "}
                  </span>
                  Near Us
                </h2>

                <p className="mb-4">
                  Moving from another city? We've
                  curated a list of affordable,
                  comfortable, and verified hostels &
                  PG accommodations located within
                  walking distance of Growtern Academy.
                </p>

                <RouterLink
                  to="/hostel-near-me"
                  className="btn"
                  onClick={() =>
                    window.scrollTo(0, 0)
                  }
                  style={{
                    background: "#F39001",
                    color: "#fff",
                    padding: "12px 32px",
                    borderRadius: "12px",
                    fontWeight: "600",
                    textDecoration: "none",
                    transition: "all .3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background =
                      "#e07f00";
                    e.target.style.transform =
                      "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background =
                      "#F39001";
                    e.target.style.transform =
                      "translateY(0)";
                  }}
                >
                  View All
                </RouterLink>

              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Job Guarantee */}
      <JobGuarantee />

      {/* Course program details section */}
      <ProgramDetails
        CurriculumData={course.curriculum}
        moduleData={course.modules || []}
      />

      {/* Program Overview Section */}
      <ProgramOverview />

      {/* Our trainers section */}
      <MentorSection />

      {/* Google Review Section */}
      <GoogleReview />

      {/* Still Have Doubt section */}
      <section className="faq-section ">
        <div className="container p-0">

          <h2 className="faq-title text-center mb-4 fw-bold">
            Still have Doubts?
          </h2>

          <FAQAccordion
            faqs={faqs}
            defaultExpanded={false}
          />

        </div>
      </section>

      {/* Demo Modal */}
      <CustomModal
        show={showdemo}
        handleClose={showdemoClose}
        modalSize="small"
      >
        <span
          className="modal-close"
          onClick={showdemoClose}
          style={{
            color: "red",
            fontSize: "2rem",
            top: "-8px",
            right: "4px",
          }}
        >
          &times;
        </span>

        <JobleadingModal />
      </CustomModal>

      {/* Career Modal */}
      <CustomModal
        show={show}
        handleClose={handleClose}
        modalSize="small"
      >
        <span
          className="modal-close"
          onClick={handleClose}
          style={{
            color: "red",
            fontSize: "2rem",
            top: "-8px",
            right: "4px",
          }}
        >
          &times;
        </span>

        <CareerModal />
      </CustomModal>

      {/* Download Syllabus Modal */}
      <CustomModal
        show={showdownloadModal}
        handleClose={showDownlodModalClose}
        modalSize="small"
      >
        <span
          className="modal-close"
          onClick={showDownlodModalClose}
          style={{
            color: "red",
            fontSize: "2rem",
            top: "-8px",
            right: "4px",
          }}
        >
          &times;
        </span>

        <DownloadSylabus
  syllabusPdf={course.syllabusPdf}
  courseTitle={course.courseTitle}
/>
      </CustomModal>
    </>
  );
};

export default DetailsPage;