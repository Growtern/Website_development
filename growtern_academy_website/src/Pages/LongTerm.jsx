import React, { useState, useEffect } from 'react';
import OnlineTraining from '../components/Onlinetraining'
import TopCompany from '../components/Companies'
import Placement from '../components/PlacedStudent'
import Review from '../components/ReviewRating'
import Courseflow from "../components/CourseFlowchat/OurCourseFlow"
import MentorSection from '../components/MentorSection'
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import Marquee from "react-fast-marquee";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import AdditionalTechKnowledge from '../components/AdditionalTechKnowledge';

import "../Styles/LongTerm.css"

// Import Job leading image
import whuimage from "../assets/Images/Why Chose Us_image.png"
import CustomModal from '../ui/Modal'

// Job leading modal
import JobleadingModal from '../components/Modals/JobleadingModal';
import { positionalKeys } from 'framer-motion';


// Key Feature section Data
const Cards = [
  {
    id: 1,
    Logo: "🎯",
    Name: "Personalized Mentorship",
    Message: "Get one-on-one guidance from expert mentors to achieve your career goals."
  },
  {
    id: 2,
    Logo: "💼",
    Name: "Placement Assistance",
    Message: "We help you prepare resumes, mock interviews, and connect with top companies."
  },
  {
    id: 3,
    Logo: "🏆",
    Name: "Industry Certifications",
    Message: "Earn certificates recognized by leading employers to boost your career."
  },
  {
    id: 4,
    Logo: "🔥",
    Name: "Real-World Projects",
    Message: "Work on hands-on projects to gain practical experience and build your portfolio."
  },
  {
    id: 5,
    Logo: "📈",
    Name: "Average salary hike of 50%.",
    Message: "Upskill and grow your career to achieve higher roles and better pay."
  },
  {
    id: 6,
    Logo: "📄",
    Name: "No Career Break",
    Message: "Complete training with internships without pausing your career."
  }
];


// Hero Features
const features = [
  {
    id: 1,
    icon: "👨‍🏫",
    title: "Trained by Industry Professionals",
    desc: "Learn from experts with real-world experience.",
  },
  {
    id: 2,
    icon: "🕒",
    title: "24×7 Doubt Clearing Assistance",
    desc: "Get your queries resolved anytime by our support team.",
  },
  {
    id: 3,
    icon: "🧑‍💼",
    title: "Mock Interviews for Placement",
    desc: "Prepare for placements with real interview simulations.",
  },
  {
    id: 4,
    icon: "💰",
    title: "Affordable & Best-in-Class",
    desc: "Premium quality training at student-friendly prices.",
  },
];


const API_URL = import.meta.env.VITE_API_URL;

const LongTerm = () => {

  const [courses, setCourses] = useState([]);
  const [loadingCourses, setLoadingCourses] = useState(true);
  const [courseError, setCourseError] = useState("");

  // fetch courses
  useEffect(() => {

    const fetchCourses = async () => {

      try {

        setLoadingCourses(true);
        setCourseError("");

        const response = await fetch(
          `${API_URL}/api/job-courses`
        );

        const result = await response.json();

        if (!response.ok || !result.success) {
          throw new Error(
            result.message ||
            "Failed to fetch job courses."
          );
        }

        setCourses(result.data || []);

        console.log(result.data);

      } catch (error) {

        console.error(
          "Failed to fetch Job Guaranteed Courses:",
          error
        );

        setCourseError(
          error.message ||
          "Unable to load courses."
        );

      } finally {

        setLoadingCourses(false);

      }
    };

    fetchCourses();

  }, []);


  const [showdemo, setShowDemo] = useState(false);
  const showdemoClose = () => setShowDemo(false);
  const showdemoShow = () => setShowDemo(true);
  const navigate = useNavigate();

  // AI background particle effect
  useEffect(() => {
    const canvas = document.getElementById("particleCanvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    function resizeCanvas() {
      canvas.width = window.innerWidth;
      const section = document.querySelector(".Courses-Section");
      if (section) {
        canvas.height = section.offsetHeight;
      }
    }

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    // Responsive particle count
    const isMobile = window.innerWidth < 768;
    const particleCount = isMobile ? 30 : 80;
    let particles = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) *
          (isMobile ? 0.3 : 0.6),
        vy: (Math.random() - 0.5) *
          (isMobile ? 0.3 : 0.6),
      });

    }
    const mouse = {
      x: null,
      y: null
    };
    const handleMouseMove = (e) => {
      mouse.x = e.x;
      mouse.y = e.y;
    };
    window.addEventListener(
      "mousemove",
      handleMouseMove
    );
    function draw() {
      ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
      );

      ctx.fillStyle = "#67d4f8";

      particles.forEach((p) => {

        p.x += p.vx;
        p.y += p.vy;

        if (
          p.x < 0 ||
          p.x > canvas.width
        ) {
          p.vx *= -1;
        }

        if (
          p.y < 0 ||
          p.y > canvas.height
        ) {
          p.vy *= -1;
        }

        ctx.beginPath();

        ctx.arc(
          p.x,
          p.y,
          isMobile ? 1.5 : 2,
          0,
          Math.PI * 2
        );

        ctx.fill();


        particles.forEach((p2) => {

          const dist = Math.hypot(
            p.x - p2.x,
            p.y - p2.y
          );

          const maxDist =
            isMobile ? 80 : 120;

          if (dist < maxDist) {

            ctx.strokeStyle =
              `rgba(0, 200, 255, ${1 - dist / maxDist})`;

            ctx.lineWidth = 0.4;

            ctx.beginPath();

            ctx.moveTo(
              p.x,
              p.y
            );

            ctx.lineTo(
              p2.x,
              p2.y
            );

            ctx.stroke();
          }

        });


        if (
          mouse.x &&
          Math.hypot(
            p.x - mouse.x,
            p.y - mouse.y
          ) <
          (isMobile ? 100 : 150)
        ) {

          ctx.strokeStyle =
            "rgba(255, 255, 255, 0.4)";

          ctx.beginPath();

          ctx.moveTo(
            p.x,
            p.y
          );

          ctx.lineTo(
            mouse.x,
            mouse.y
          );

          ctx.stroke();
        }

      });

      requestAnimationFrame(draw);
    }
    draw();

    return () => {

      window.removeEventListener(
        "resize",
        resizeCanvas
      );

      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );

    };

  }, []);


  // for scrolling animation in mobile responsive
  const [currentIndex, setCurrentIndex] =
    useState(0);


  // Auto-slide for mobile only
  useEffect(() => {
    const isMobile =
      window.innerWidth <= 768;

    if (!isMobile) return;

    const interval = setInterval(() => {

      setCurrentIndex(
        (prev) =>
          (prev + 1) % features.length
      );

    }, 2500);

    return () =>
      clearInterval(interval);

  }, []);


  return (
    <>
      <section className='Courses-Section'>

        <canvas id="particleCanvas"></canvas>

        <div className='container'>

          <div
            className='row align-items-center'
            style={{
              position: "relative",
              zIndex: 1
            }}
          >

            <div className='col-md-7 p-0'>

              <div className='d-flex flex-column h-100 w-100'>

                <h6 className='Indias-Best my-2 p-0'>
                  India's Best Platform for Job
                </h6>

                <h2 className='Main-Heading p-0 mb-0'>

                  Land Your

                  <span
                    style={{
                      color: "#ddee1dff"
                    }}
                  >
                    Dream Job
                  </span>

                  With World-Class Training

                </h2>

                <h4 className='Hi-lite mt-3'>
                  100% Placement Guaranteed
                </h4>


                <Marquee
                  speed={40}
                  gradient={false}
                  pauseOnHover={true}
                  autoFill={true}
                >

                  {features.map(
                    (item, index) => (

                      <div
                        key={index}
                        className="Coursepage-feature-card text-white mx-3"
                      >

                        <div className="LT-heroKey-icon">
                          {item.icon}
                        </div>

                        <h6 className="feature-heading">
                          {item.title}
                        </h6>

                        <p className="feature-message">
                          {item.desc}
                        </p>

                      </div>

                    )
                  )}

                </Marquee>

              </div>

            </div>


            <div className='col-md-5 pt-4 p-0'>

              <div className='d-flex justify-content-center justify-content-md-end w-100'>

                <img
                  className='img-fluid Wcu-image'
                  src={whuimage}
                  alt="image"
                />

              </div>

            </div>

          </div>


          <div className='d-flex justify-content-center w-100 gap-5 mt-5'>

            <ScrollLink
              to="Jobleading"
              smooth={true}
              duration={800}
              offset={-70}
              className="animated-btn text-white"
              style={{
                textDecoration: "none",
                color: "white",
                background: "#ff7c09",
                padding: "10px 40px",
                borderRadius: "5px",
                fontWeight: "bold",
                cursor: "pointer"
              }}
            >
              Explore Programs
            </ScrollLink>

          </div>

        </div>

      </section>


      {/* Course Flowchat Section Start here */}
      <Courseflow />

      {/* additional kn sec */}
      <AdditionalTechKnowledge/>


      {/* Online Section Start here */}
      <OnlineTraining />


      {/* Key Features sections start here */}
      <section className='Key-Features'>

        <div className='container'>

          <h2 className='KeyFeatures-H'>

            Features for

            <span
              style={{
                color: "#fb9200ff"
              }}
            >
              Career Success
            </span>

          </h2>


          <div className='row g-4'>

            {Cards.map((Cards) => (

              <div
                className="col-md-4 p-0 p-sm-3"
                key={Cards.id}
              >

                <div className='keyCard'>

                  <h2 className='Key-icon'>
                    {Cards.Logo}
                  </h2>

                  <h5 className='text-center fw-bold'>
                    {Cards.Name}
                  </h5>

                  <p className='Card-message px-2 m-0 pb-0'>
                    {Cards.Message}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* Placement Student Section */}
      <Placement />


      {/* top Company Hearing Section */}
      <TopCompany />


      {/* Job Leading course Section */}
      <section
        className='Jonleading-Courses'
        id='Jobleading'
      >

        <div className='container'>

          <h2 className='Jobleading-heading'>
            Career {" "}
            <span
              style={{
                color: "rgb(243, 144, 1)"
              }}
            >
              Guarantee Programs
            </span>
          </h2>

          <p className='text-center text-white'>

            “We don’t just train you—we prepare you for success with 100% Placement Guaranteed programs that focus on real skills,

            <br />

            real projects, and real career outcomes.”

          </p>

          {/* Loading state */}
          {loadingCourses && (

            <div className="text-center py-5">

              <div
                className="spinner-border text-primary"
                role="status"
              >

                <span className="visually-hidden">
                  Loading...
                </span>

              </div>

              <p className="text-muted mt-3 mb-0">
                Loading courses...
              </p>

            </div>

          )}

          {/* Error state */}
          {!loadingCourses && courseError && (

            <div className="alert alert-danger text-center">

              {courseError}

            </div>

          )}


          {/* API Courses */}
          {!loadingCourses &&
            !courseError && (

              <div className='row g-4'>

                {courses.map((card) => {

                  // Get Standard plan from API
                  const plan =
                    card.plans?.find(
                      (item) =>
                        item.type === "Standard"
                    ) ||
                    card.plans?.[0] ||
                    {};


                  return (

                    <div
                      className="col-md-4 p-0 p-md-2"
                      key={card._id}
                    >

                      <div className="card-Div">

                        <div className="Img-Div">
                          <img
                            className="Card-Img p-0"
                            src={card.image.url}
                            alt={card.courseTitle}
                          />

                          <div className="Tag-Div">

                            <p className="Tag-msg mb-0">
                              100% PLACEMENT GUARANTEED
                            </p>

                          </div>

                          {/* <div className="Online-Tag">

                            <p className="mb-0 text-white">
                              {plan.mode || "Online"}
                            </p>

                          </div> */}
                        </div>

                        <div className="Card-ButtomDiv">
                          {/* Card heading */}
                          <h1 className="card-Innerheading">
                            {card.courseTitle}
                          </h1>

                          {/* Card Admission details */}
                          <div className="Admission-Details">

                            <div className="Div-1">

                              <h6 className="remander mb-0">
                                {card.nextBatchStartFrom
                                  ? new Date(
                                    card.nextBatchStartFrom
                                  ).toLocaleDateString(
                                    "en-GB"
                                  )
                                  : "-"}

                              </h6>

                              <p className="remander-etxt mb-0">
                                Batch Start
                              </p>

                            </div>

                            <div className="Div-2">

                              <h6 className="remander mb-0">
                                {plan.duration || "-"}
                              </h6>

                              <p className="remander-etxt mb-0">
                                Duration
                              </p>

                            </div>

                            <div className="Div-2">

                              <h6 className="remander mb-0">
                                {plan.batchSize || "-"}
                              </h6>

                              <p className="remander-etxt mb-0">
                                Batch Size
                              </p>

                            </div>

                          </div>

                          {/* Card AI highlight section */}
                          <div className='AiDevelop'>

                            <h6 className='mb-0 fw-bold'>
                              Learn Coding + AI Development
                            </h6>

                          </div>

                          {/* Price */}
                          <div className="my-3 mt-4">

                            <h2
                              className="mt-3 text-center fw-bold"
                              style={{
                                color: "#ff7c09",
                                fontSize: "1.6rem",
                                textShadow:
                                  "0 0 10px #000000ff, 0 0 20px #000000ff, 0 0 30px #000000ff",
                              }}
                            >

                              {plan.price
                                ? `₹${plan.price}`
                                : "-"}


                              <span
                                style={{
                                  marginLeft: "10px",
                                  fontSize: "0.9rem",
                                  color: "#ffffffff"
                                }}
                              >

                                {plan.originalPrice && (

                                  <del>
                                    ₹{plan.originalPrice}
                                  </del>

                                )}

                              </span>


                              <p
                                className="mt-2"
                                style={{
                                  fontSize: "0.8rem",
                                  color: "#ffffffff",
                                  margin: 0,
                                }}
                              >

                                (Included All taxes)

                              </p>

                            </h2>

                          </div>

                          {/* Buttons */}
                          <div className="d-flex justify-content-between w-100">

                            <button
                              className="View-Btn"
                              onClick={() => {

                                navigate(
                                  `/Course-Details/${card.slug}`
                                );

                                window.scrollTo(
                                  0,
                                  0
                                );

                              }}
                            >
                              DETAILS
                            </button>

                            <button
                              className="Apply-Btn"
                              onClick={
                                showdemoShow
                              }
                            >
                              APPLY
                            </button>

                          </div>

                        </div>

                      </div>

                    </div>

                  );

                })}

              </div>

            )}

        </div>

      </section>


      {/* Mentor Community Section */}
      <MentorSection />


      {/* Review and Rating section */}
      <Review />


      {/* Why Chose Us section */}

      <section className='WCU-Section'>

        <div className='container p-0'>

          <div className="WhyChooseUs">

            <h4 className="WCU-heading text-center mb-4">

              Why Choose

              <span
                style={{
                  color: "#F39001"
                }}
              >
                GROWTERN
              </span>?

            </h4>


            <ul className="Wcu-list">

              <li>

                <i className="bi bi-person-lines-fill"></i>

                Personalized Career Guidance & Mentorship

              </li>


              <li>

                <i className="bi bi-briefcase-fill"></i>

                Hands-on Real Industry Projects

              </li>


              <li
                style={{
                  color: "#d64908ff",
                  fontWeight: "600",
                  background: "white"
                }}
              >

                <i className="bi bi-trophy-fill"></i>

                100% Placement Guaranteed with Top Companies

              </li>


              <li>

                <i className="bi bi-file-earmark-text-fill"></i>

                Resume Building & Interview Preparation Sessions

              </li>


              <li>

                <i className="bi bi-headset"></i>

                24/7 Student Support & Career Counseling

              </li>

            </ul>

          </div>

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
            right: "4px"
          }}
        >
          &times;
        </span>

        <JobleadingModal />

      </CustomModal>

    </>
  );
};

export default LongTerm;