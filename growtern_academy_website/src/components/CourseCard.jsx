import React, { useEffect, useState } from 'react';
import "../Styles/CourseCard.css";

import { Link as RouterLink } from "react-router-dom";

import CustomModal from '../ui/Modal';
import ApplyNowModal from './Modals/ApplyNowModal';


const API_URL = import.meta.env.VITE_API_URL;


const CourseCard = () => {

  const [showdemo, setShowDemo] = useState(false);
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");


  const showdemoClose = () => setShowDemo(false);
  const showdemoShow = () => setShowDemo(true);


  // ==========================================
  // Fetch Featured Job Courses
  // ==========================================

  useEffect(() => {

    const fetchFeaturedCourses = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(
          `${API_URL}/api/job-courses`
        );

        const result = await response.json();
        if (!response.ok || !result.success) {
          throw new Error(
            result.message ||
            "Failed to fetch courses."
          );
        }

        // Only show featured courses
        const featuredCourses = (
          result.data || []
        ).filter(
          (course) => course.featured === true
        );
        setCourses(featuredCourses);

      } catch (error) {

        console.error(
          "Failed to fetch featured courses:",
          error
        );


        setError(
          error.message ||
          "Unable to load courses."
        );


      } finally {

        setLoading(false);

      }

    };
    fetchFeaturedCourses();
  }, []);


  return (

    <div className='row my-4 g-4'>

      {/* Loading */}
      {loading && (
        <div className="col-12 d-flex justify-content-center align-items-center py-5">
          <div
            className="spinner-border text-primary"
            role="status"
            style={{ width: "3rem", height: "3rem" }}
          >
            <span className="visually-hidden">
              Loading...
            </span>
          </div>
        </div>
      )}


      {/* Error */}
      {!loading && error && (
        <div className="col-12 text-center">
          <p className="text-danger">
            {error}
          </p>
        </div>
      )}


      {/* No Featured Courses */}
      {!loading && !error &&
        courses.length === 0 && (
          <div className="col-12 text-center">
            <p>
              No featured courses available.
            </p>
          </div>
        )}


      {/* Featured Courses */}
      {!loading &&
        !error &&
        courses.map((item) => {

          // Get Standard plan
          const standardPlan =
            item.plans?.find(
              (plan) =>
                plan.type === "Standard"
            ) ||
            item.plans?.[0] ||
            {};


          return (

            <div
              className='col-md-4 p-sm-2'
              key={item._id}
            >

              <div className='card-Div Featured-Course-Card'>
                {/* Card Image */}
                <div className='Image-Border'>
                  <img
                    className='Card-Img'
                    src={item.image.url}
                    alt={item.courseTitle}
                  />
                </div>

                {/* Card Content */}
                <div className='Card-ButtomDiv p-2'>

                  {/* <button className='Online-btn'>
                    {standardPlan.mode || "Online"}
                  </button> */}

                  <h1 className='card-heading'>
                    {item.courseTitle}
                  </h1>

                  <div className='d-flex justify-content-between'>
                    <div>
                      <i
                        className="bi bi-star-fill"
                        style={{
                          color: "#ffcd04ff"
                        }}
                      ></i>
                      <span>
                        4.7 (13k+ Students)
                      </span>
                      <br />
                      <i className="bi bi-hourglass-split"></i>
                      <span>
                        {standardPlan.duration ||
                          "-"}
                     </span>
                    </div>

                    <div className=''>
                      <i className="bi bi-calendar3"></i>
                      <span>
                        {item.nextBatchStartFrom
                          ? new Date(
                              item.nextBatchStartFrom
                            ).toLocaleDateString(
                              "en-GB"
                            )
                          : "-"}
                      </span>
                      <br />

                      <i className="bi bi-mortarboard-fill"></i>

                      <span>
                        {standardPlan.batchSize ||
                          "-"}
                      </span>
                    </div>

                  </div>

                  <div className='d-flex justify-content-between w-100'>

                    <button
                      className='Apply-Btn'
                      onClick={showdemoShow}
                    >
                      Apply
                    </button>

                    <button className="View-Btn">
                      <RouterLink
                        to={`/Course-Details/${item.slug}`}
                        style={{
                          textDecoration: "none",
                          color: "white"
                        }}
                        onClick={() =>
                          window.scrollTo(0, 0)
                        }
                      >
                        View Programs
                      </RouterLink>
                    </button>

                  </div>

                </div>

                {/* Placement gau tag */}
                <div className="Rec-TagDiv">
                  <p className="Rec-Tagmsg mb-0">
                    100% Placement Guaranteed
                  </p>
                </div>

              </div>
            </div>
          );
        })}

      {/* Apply Modal */}
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

        <h2 className="form-title">
          Apply Now
        </h2>

        <ApplyNowModal />
      </CustomModal>

    </div>
  );
};


export default CourseCard;