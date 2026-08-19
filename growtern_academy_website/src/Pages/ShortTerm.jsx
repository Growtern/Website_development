"use client";
import '../Styles/ShortTerm.css'
import { FaLaptopCode, FaUserGraduate, FaChartLine} from "react-icons/fa";
import CourseCard from "../components/Internship_Components/shortTermcourdecard.jsx"
import PlacedStudents from "../components/PlacedStudent"
import Hiringpartner from "../components/Companies"
import Reviews from "../components/ReviewRating"
import Hero_section from '../components/Internship_Components/hero_section';
import Collabration_Section from '../components/Internship_Components/collaboration-section.jsx';
import Goodies_section from '../components/Internship_Components/Goodis_section.jsx'
import Event_Gallery from "../components/Universal_Components/News&Events.jsx"
import Mobile_FixedButton from '../components/Internship_Components/FixedMobile_Button.jsx'

import { useState } from 'react';
import CustomModal from '../ui/Modal'
import ApplyNowModal from '../components/Modals/ApplyNowModal'

import { MdWorkspacePremium } from "react-icons/md";

//import all Images
import VideoPoster from "../assets/Images/Youtube_thumbNill_for_Website.png"

const KeyfeatureData = [
  {
    icon: <FaLaptopCode />,
    title: "Work on Live-Projects",
    desc: "Work on real-world projects to gain practical skills.",
  },
  {
    icon: <FaUserGraduate />,
    title: "Trained by Expert Mentors",
    desc: "Get guided by industry experts who help you write optimized code.",
  },
  {
    icon: <MdWorkspacePremium />,
    title: "Global Recognition Certificate",
    desc: "Earn a verified internship certificate and boost your career prospects.",
  },
  // {
  //   icon: <AiOutlineTeam />,
  //   title: "Team Collaboration",
  //   desc: "Collaborate with a talented community and improve your teamwork skills.",
  // },
  {
    icon: <FaChartLine />,
    title: "NextGen AI Training ⭐",
    desc: "Gain clarity, skills, and support to advance your tech career.",
  },
  // {
  //   icon: <BsFillClipboardCheckFill />,
  //   title: "Performance Feedback",
  //   desc: "Get expert feedback to improve your skills, performance, and confidence",
  // },
];
const ShortTerm = () => {

  const [showdemo, setShowDemo] = useState(false);
  const showdemoClose = () => setShowDemo(false);
  // const showdemoShow = () => setShowDemo(true);

  // video
  const [isVideoOpen, setIsVideoOpen] = useState(false);


  return (
    <>
      {/* Mobile Fixed Button */}
      {/* <Mobile_FixedButton /> */}

      {/* Hero section */}
      < Hero_section />

      {/* goodis section */}
      <Goodies_section />

      {/* Internship Benifite section  */}
      <section className="benefits-section  py-5 ">
        <div className="container">
          <div className="text-center mb-4">
            <h4 className="Internship-Benefit-title  "><span style={{ color: "rgb(239, 116, 15)" }}>Benefits</span> for Our Internship</h4>
            <p className="section-text text-white">
              Get the right guidance, clean code, and strategies to boost your skills
              and achieve success in your journey.
            </p>
          </div>

          <div className="row align-items-center">
            <div className="col-md-5" >
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>

                {/* Video Thumbnail */}
                <div className="course-intro-video">
                  <img
                    src={VideoPoster}
                    alt="Course Preview"
                    className="course-intro-video__thumbnail"
                  />

                  <div className="course-intro-video__overlay">
                    <button
                      className="course-intro-video__play-button"
                      onClick={() => setIsVideoOpen(true)}
                    >
                      ▶
                    </button>
                  </div>
                </div>

                {/* Video Modal */}
                {isVideoOpen && (
                  <div
                    className="video-modal"
                    onClick={() => setIsVideoOpen(false)}
                  >
                    <div
                      className="video-modal__content"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <iframe
                        src="https://www.youtube.com/embed/auVyiCt5LM0?autoplay=1"
                        title="Full Stack Course Introduction"
                        frameBorder="0"
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                      ></iframe>

                      <button
                        className="video-modal__close"
                        onClick={() => setIsVideoOpen(false)}
                      >
                        ✕
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className='col-md-7'>
              <div className='row'>
                {KeyfeatureData.map((benefit, index) => (
                  <div key={index} className="col-md-6 col-sm-6 mb-4 ">
                    <div className="ShortTerm-benefitcard flex-fill kye-card">
                      <div className="benefit-icon fs-1">{benefit.icon}</div>
                      <h5 className="benefit-title text-dark">{benefit.title}</h5>
                      <p className="benefit-desc text-black">{benefit.desc}</p>
                    </div>
                  </div>
                ))}

              </div>
            </div>
          </div>
        </div>
      </section>

      {/*  */}
      <Hiringpartner />

      {/* Collabration_Section */}
      <Collabration_Section />

      {/* Certificate  course card section */}
      <CourseCard />

      {/*Placement Students  */}
      <PlacedStudents />

      {/* Event Gallery Section */}
      <Event_Gallery />

      {/* Review and Ratings */}
      <Reviews />

      {/* Why Chose Us section */}
      <section className='WCU-Section '>
        <div className='container p-0'>
          <div className="WhyChooseUs ">
            <h4 className="WCU-heading text-center mb-4">Why Choose <span style={{ color: "#F39001" }}>GROWTERN</span>?</h4>

            <ul className="Wcu-list">
              <li>
                <i className="bi bi-person-lines-fill"></i>
                Personalized Career Guidance & Mentorship
              </li>
              <li>
                <i className="bi bi-briefcase-fill"></i>
                Hands-on Real Industry Projects
              </li>
              <li style={{ color: "#d64908ff", fontWeight: "600", background: "white" }}>
                <i className="bi bi-trophy-fill" ></i>
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

      {/* <CustomModal show={showdemo} handleClose={showdemoClose} modalSize="small">
        <span className="modal-close" onClick={showdemoClose}>&times;</span>
        <ApplyNowModal />
      </CustomModal> */}

    </>
  )
}

export default ShortTerm