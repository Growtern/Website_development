import React from "react";
import { Calendar, Clock, Users, Star, CheckCircle, } from "lucide-react";
import "../Styles/ShortDetailsPage.css";
import { useParams } from "react-router-dom";
import { IntershipData } from "../data/InternshipData";
import Certificate from "../components/Internship_Components/ShorttermCertificate"
import ShorttermKeyfeatures from "../components/Internship_Components/Internship_Benefits"
import Coursefees from "../components/Internship_Components/Shorttermcoursefees"
import Reviewsection from "../components/ReviewRating"
import CourseCurriculum from '../components/Internship_Components/Shorttermcurriculum'
import Goodies_Section from '../components/Internship_Components/Goodis_section'
import Mentors from '../components/MentorSection'
import Mobile_FixedButton from '../components/Internship_Components/FixedMobile_Button'
import FAQAccordion from "../components/FAQAccordion";

import { useState } from 'react'
import CustomModal from '../ui/Modal'
import ApplyNowModal from '../components/Modals/ApplyNowModal'

// Sample image
// import banner from "../assets/Images/Webdesign_imagefor_Detailsherosection.jpg";



const faqs = [
  {
    question: "Do I need a laptop to do the course?",
    answer:
      "Yes, a laptop is recommended to complete all exercises, assignments, and projects effectively.",
  },
  {
    question: "The course is available in which languages?",
    answer: "Currently, the course is available in English and Hindi.",
  },
  {
    question: "Is this program a Placement Assistance Program?",
    answer:
      <>Yes, we provide <span style={{ color: "#ff6200ff", fontWeight: "600" }}>100% Interview Guaranteed</span>  to help students prepare for and secure jobs in the industry.</>,
  },
  {
    question: "What is the duration of the course?",
    answer: <>The duration of the course is 6 months, <span style={{ color: "#ff6200ff", fontWeight: "600" }}>including hands-on projects</span>.</>,
  },
];

export default function ShortDetailsPage() {

  const { slug } = useParams();
  const Internship = IntershipData.find((item) => item.slug === slug);
  console.log(Internship);

   const [courseType, setCourseType] = useState("default");

  const [showdemo, setShowDemo] = useState(false);

  const showdemoClose = () => setShowDemo(false);

  const showdemoShow = () => setShowDemo(true);

  return (
    <>


      {/* Fixed mobile button */}
      <Mobile_FixedButton />


      {/* HERO Section */}
      <section className="modern-section">
        <div className="container p-0">
          <div className="row align-items-center hero-row">

            <div className="col-lg-6 ">
              <div className="hero-image-wrapper">
                <img
                  src={Internship.Image}
                  className="img-fluid hero-image"
                  alt="web design"
                />
                <span className="floating-badge">🔥 Most Popular</span>
              </div>
            </div>

            <div className="col-lg-6">
              <h1 className="hero-title">
                {/* Web Designing <span>Internship</span> */}
                {Internship.courseName}
              </h1>

              <p className="hero-desc">
                {Internship.description}
              </p>

              <div className="row g-3 mt-4">
                {Internship.KeyFeatures.map((item, i) => (
                  <div className=" col-md-6" key={i}>
                    <div className="stat-modern">
                      <span className="stat-icon">{item.icon}</span>
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 d-flex gap-3 flex-wrap">
                
                   <button
                      className="primary-btn"
                      onClick={() => {
                        setCourseType("internship"); // 👈 important
                        showdemoShow();
                      }}
                    >
                      Enroll Now
                    </button>
                <a href={Internship.sylabus}
                  download
                  className="outline-btn"
                  style={{
                    textDecoration: "none",
                    pointerEvents: Internship.sylabus ? "auto" : "none",
                    opacity: Internship.sylabus ? 1 : 0.5,
                  }}
                >
                  📄Download Syllabus
                </a>
              </div>
            </div>

          </div>

          {/* LEARNING SECTION */}
          <div className="learning-box mt-5 p-4">
            <h2 className="learning-title">What You Will Learn</h2>

            <div className="row g-4 mt-3">
              {Internship.Learning.map((item, i) => (
                <div className="col-md-6 col-lg-3" key={i}>
                  <div className="learning-card">
                    <h4 className="mb-0">{item.title}</h4>

                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Short term Key features section  */}
      <ShorttermKeyfeatures />

      {/* Certifivate section */}
      <Certificate />

      {/* Goodies section */}
      <Goodies_Section />

      {/* Course Curriculum section */}
      <CourseCurriculum curriculum={Internship.curriculum} />

      {/* Mentors section */}
      <Mentors />

      {/* course fees section */}
      <Coursefees Internship={Internship} />

      {/* Still Have Daubt section Start hete */}
      <section className="faq-section ">
        <div className="container p-0">
          <h2 className="faq-title text-center mb-3 fw-bold">
            Still have Doubts?
          </h2>
          <p className="faq-subtitle text-center mb-5">
            We have answered some of the frequent questions for you!
          </p>

          <FAQAccordion faqs={faqs}/>

          {/* <div className="accordion" id="faqAccordion">
            {faqs.map((faq, index) => (
              <div className="accordion-item mb-3 border-0 shadow-sm rounded-3" key={index}>
                <h2 className="accordion-header" id={`heading${index}`}>
                  <button
                    className="accordion-button collapsed fw-semibold"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#collapse${index}`}
                    aria-expanded="false"
                    aria-controls={`collapse${index}`}
                  >
                    {faq.question}
                  </button>
                </h2>
                <div
                  id={`collapse${index}`}
                  className="accordion-collapse collapse"
                  aria-labelledby={`heading${index}`}
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">{faq.answer}</div>
                </div>
              </div>
            ))}
          </div> */}
          
        </div>
      </section>

      {/* Review Section */}
      <Reviewsection />

      <CustomModal show={showdemo} handleClose={showdemoClose} modalSize="small">
        <span className="modal-close" onClick={showdemoClose} style={{ color: "red", fontSize: "2rem", top: "-8px", right: "4px" }}>&times;</span>
        <ApplyNowModal type={courseType}/>
      </CustomModal>
    </>
  );
}
