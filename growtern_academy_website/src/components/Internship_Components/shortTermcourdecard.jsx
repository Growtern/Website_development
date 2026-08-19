import React, { useState } from 'react';
import { Calendar, Users, Clock, Star } from "lucide-react";
import { Link } from 'react-router-dom';
import "../../Styles/Internship_styles/shortTermcourdecard.css";

import CustomModal from '../../ui/Modal'
import ApplyNowModal from '../Modals/ApplyNowModal'
import CareerModal from "../Modals/CareerModal";

// Import images
import webdesign from "../../assets/Images/WebDesigning_image.avif";
import Backend from "../../assets/Images/Backend_image.jpg";
import Java from "../../assets/Images/Java_internship_image.jpg";
import Python from "../../assets/Images/python-developer.jpeg";
import DataAnalyst from "../../assets/Images/Internship_Data_Analyst_1_.jpg";

// Import Dates
import { InternshipStartingDate } from "../../data/Date";
import { BiFontSize } from 'react-icons/bi';

const courses = [
  {
    id: 1,
    image: webdesign,
    title: "AI-powered Website Designer",
    slug: "website-design",
    price: "₹4,999",
    students: 900,
    startDate: InternshipStartingDate,
    duration: "45 Days",
    capacity: "15 Students",
  },
  {
    id: 2,
    image: DataAnalyst,
    title: "AI-powered Data Science & Analytics",
    slug: "data-analytics",
    price: "₹4,999",
    students: 1900,
    startDate: InternshipStartingDate,
    duration: "45 Days",
    capacity: "15 Students",
  },

  {
    id: 3,
    image: Backend,
    title: " AI-powered Backend Development(Node Js)",
    slug: "backend-nodejs",
    price: "₹4,999",
    students: 1600,
    startDate: InternshipStartingDate,
    duration: "45 Days",
    capacity: "15 Students",
  },
  {
    id: 4,
    image: Java,
    title: "AI-powered Java Developer",
    slug: "core-java",
    price: "₹4,999",
    students: 1900,
    startDate: InternshipStartingDate,
    duration: "45 Days",
    capacity: "15 Students",
  },
  {
    id: 5,
    image: Python,
    title: "AI-powered Python Developer ",
    slug: "Python-development",
    price: "₹4,999",
    students: 2200,
    startDate: InternshipStartingDate,
    duration: "45 Days",
    capacity: "15 Students",
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1593720219276-0b1eacd0aef4?w=900&q=80",
    title: "AI-powered Advance Frontend Development",
    slug: "advance-frontend",
    price: "₹4,999",
    students: 3400,
    startDate: InternshipStartingDate,
    duration: "45 Days",
    capacity: "15 Students",
  },
];

export default function ShortTermCourseCard() {
  const [durationFilter, setDurationFilter] = useState("All");

  const filteredCourses = durationFilter === "All" ?
  courses : courses.filter((course)=> course.duration === durationFilter)

  const [courseType, setCourseType] = useState("default");

  const [showdemo, setShowDemo] = useState(false);
  const showdemoClose = () => setShowDemo(false);
  const showdemoShow = () => setShowDemo(true);

  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <>
      <section className="course-section py-5 position-relative overflow-hidden" id='Internships'>
        <div className="container position-relative">

          <div className="text-md-center mb-5">
            <h2 className="section-title">
              High-Demand <span>Internships</span>
            </h2>
            <p>The most hands-on, practical, and intensive coding-led courses to fulfill your ambitions.</p>
          </div>

          <div className="d-flex flex-wrap justify-content-center gap-2 mb-5">
            {["All", "30 Days", "45 Days", "60 Days", "90 Days"].map((item) => (
              <button
                key={item}
                onClick={() => setDurationFilter(item)}
                className={`btn ${durationFilter === item
                    ? "btn-primary"
                    : "btn-outline-primary"
                  } rounded-pill px-4`}
              >
                {item}
              </button>
            ))}
          </div>


          <div className="row g-4 mb-5">
            {filteredCourses.map((course) => (
              <div className="col-lg-4 col-md-6 p-0 p-md-3" key={course.id}>

                <div className="course-card-new">

                  {/* FULL WIDTH TOP IMAGE */}
                  <div className="card-image-wrapper">
                    <img src={course.image} alt={course.title} className="card-top-image" />
                  </div>

                  {/* TITLE + SUBTEXT */}
                  <div className="card-header-new2">
                    <h3 className="course-title-new">{course.title}</h3>
                  </div>

                  {/* DETAILS */}
                  <div className="details-box">
                    <div className="detail-item">
                      <Calendar size={20} className="detail-icon" />
                      <span className="detail-title">Start Date</span>
                      <span className="detail-value">{course.startDate}</span>
                    </div>

                    <div className="detail-item">
                      <Clock size={20} className="detail-icon" />
                      <span className="detail-title">Duration</span>
                      <span className="detail-value">{course.duration}</span>
                    </div>

                    <div className="detail-item">
                      <Users size={20} className="detail-icon" />
                      <span className="detail-title">Capacity</span>
                      <span className="detail-value">{course.capacity}</span>
                    </div>

                    <div className="detail-item">
                      <span className="detail-icon">₹</span>
                      <span className="detail-title">Internship Fee</span>
                      <span className="detail-value" style={{ fontSize: "30px", color:"#19dbf5", WebkitTextStroke: "0.5px black"}}>{course.price}
                        {/* <span style={{ fontSize: "11px",color:"#000000", textDecoration: "line-through", opacity: 0.7, marginLeft:"5px" }}>
                          ₹9999
                        </span> */}
                      </span>
                    </div>

                    {/* <div className="detail-item">
                      <Star size={20} className="detail-icon" />
                      <span className="detail-title">Rating</span>
                      <span className="detail-value">{course.rating}</span>
                    </div> */}
                  </div>
                  {/* BUTTONS */}
                  <div className="footer-buttons">
                    <Link
                      className="brochure-btn"
                      to={`/intenship-details/${course.slug}`}
                      onClick={() => window.scrollTo(0, 0)}
                      style={{ textDecoration: "none" }}
                    >
                      DETAILS
                    </Link>

                    {/* <button className="apply-btn" onClick={showdemoShow}>
                      APPLY NOW
                    </button> */}
                    <button
                      className="apply-btn"
                      onClick={() => {
                        setCourseType("internship"); // 👈 important
                        showdemoShow();
                      }}
                    >
                      APPLY NOW
                    </button>
                  </div>


                </div>

              </div>
            ))}
          </div>

          <div className="d-flex flex-column flex-sm-row justify-content-center align-items-center gap-3">
            <button onClick={handleShow} className="btn px-5 py-2 fw-semibold shadow text-white"
              style={{ background: "#2575fc", width: "280px" }}>
              Request a Callback
            </button>
          </div>

        </div>
      </section>

      <CustomModal show={showdemo} handleClose={showdemoClose} modalSize="small">
        <span className="modal-close" onClick={showdemoClose}>&times;</span>
        <ApplyNowModal type={courseType} />
      </CustomModal>

      <CustomModal show={show} handleClose={handleClose} modalSize="small">
        <span className="modal-close" onClick={handleClose}>&times;</span>
        <CareerModal type="internship" />
      </CustomModal>
    </>
  );
}
