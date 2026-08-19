import React from "react";
import { Link as ScrollLink } from "react-scroll";;

// importing slider images
import ai_java_dev from "../../assets/internship_hero_slider_images/ai_java_dev.png";
import ai_python_dev from "../../assets/internship_hero_slider_images/ai_python_dev.png";
import ai_data_sceince_dev from "../../assets/internship_hero_slider_images/ai_data_sceince_dev.png";
import ai_webDesigner_dev from "../../assets/internship_hero_slider_images/ai_webDesigner_dev.png";
import ai_backend_dev from "../../assets/internship_hero_slider_images/ai_backend_dev.png";
import image from "../../assets/internship_hero_slider_images/image.png";

const CertificateCourses = () => {
  return (
    <section>
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="3500"
      >
        {/* Indicators */}
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>

          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>

          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>

          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>

          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="4"
            aria-label="Slide 5"
          ></button>

          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="5"
            aria-label="Slide 6"
          ></button>
        </div>

        <div className="carousel-inner">

          {/* Slide 1 */}
          <div
            className="carousel-item active position-relative"
            // style={{ height: "50vh" }}
          >
            <img
              src={image}
              className="d-block w-100 h-100"
              alt="Internship"
              style={{
                objectFit:"cover"    //need to give this cuz so css was conflicting and applying object fit cover on the img
              }}
            />

            {/* Overlay */}
            <div
              className="position-absolute top-0 start-0 w-100 h-100"
              style={{
                background: "rgba(0,0,0,.3)",
              }}
            ></div>

            {/* <div className="carousel-caption d-flex flex-column justify-content-center align-items-center text-center top-0 bottom-0 start-0 end-0">

              <h1
                className="fw-bold mb-3"
                style={{
                  color: "#fff",
                }}
              >
                AI Powered <br />
                <span style={{ color: "#ff7a18" }}>
                  Internship Programs
                </span>
              </h1>

              <p
                className="mx-2  text-white mb-4">
                Learn from industry experts & build real-world projects .
              </p>
            </div> */}
          </div>

          {/* Slide 2 */}
          <div
            className="carousel-item position-relative"
            // style={{ height: "50vh" }}
          >
            <img
              src={ai_backend_dev}
              className="d-block w-100 h-100"
              alt="Backend Development"
              style={{
                objectFit:"cover"    //need to give this cuz so css was conflicting and applying object fit cover on the img
              }}
            />

            <div
              className="position-absolute top-0 start-0 w-100 h-100"
              style={{
                background: "rgba( 0,0,0,.3)",
              }}
            ></div>

            {/* <div className="carousel-caption d-flex flex-column justify-content-center align-items-center text-center top-0 bottom-0 start-0 end-0">

              <h1
                className="fw-bold mb-3"
                style={{
                  color: "#fff",
                }}
              >
                AI Powered <br />
                <span style={{ color: "#ff7a18" }}>
                  Backend Development
                </span>
              </h1>

              <p
                className="  text-white mb-4 mx-2"
                style={{
                  //   maxWidth: "700px",
                }}
              >
                Master Node.js, Express.js, APIs, databases, authentication, and build
                scalable backend applications using AI.
              </p>

            </div> */}
          </div>

          {/* Slide 3 */}
          <div
            className="carousel-item position-relative"
            // style={{ height: "50vh" }}
          >
            <img
              src={ai_data_sceince_dev}
              className="d-block w-100 h-100"
              alt="Data Science"
              style={{
                objectFit:"cover"    //need to give this cuz so css was conflicting and applying object fit cover on the img
              }}
            />

            <div
              className="position-absolute top-0 start-0 w-100 h-100"
              style={{
                background: "rgba( 0,0,0,.3)",
              }}
            ></div>

            {/* <div className="carousel-caption d-flex flex-column justify-content-center align-items-center text-center top-0 bottom-0 start-0 end-0">

              <h1
                className="fw-bold mb-3"
                style={{
                  color: "#fff",
                }}
              >
                AI Powered <br />
                <span style={{ color: "#ff7a18" }}>
                  Data Science & Analytics
                </span>
              </h1>

              <p
                className="  text-white mb-4 mx-2"
              >
                Learn Python, Power BI, SQL, Machine Learning, and AI to solve
                real-world business problems with data.
              </p>


            </div> */}
          </div>

          {/* Slide 4 */}
          <div
            className="carousel-item position-relative"
            // style={{ height: "50vh" }}
          >
            <img
              src={ai_java_dev}
              className="d-block w-100 h-100"
              alt="Java Development"
              style={{
                objectFit:"cover"    //need to give this cuz so css was conflicting and applying object fit cover on the img
              }}
            />

            <div
              className="position-absolute top-0 start-0 w-100 h-100"
              style={{
                background: "rgba( 0,0,0,.3)",
              }}
            ></div>

            {/* <div className="carousel-caption d-flex flex-column justify-content-center align-items-center text-center top-0 bottom-0 start-0 end-0">

              <h1
                className="fw-bold mb-3"
                style={{
                  color: "#fff",
                }}
              >
                AI Powered <br />
                <span style={{ color: "#ff7a18" }}>
                  Java Full Stack Development
                </span>
              </h1>

              <p
                className="  text-white mb-4 mx-2"
              >
                Build enterprise-grade web applications using Java, Spring Boot,
                React.js, MySQL, and Generative AI.
              </p>


            </div> */}
          </div>

          {/* Slide 5 */}
          <div
            className="carousel-item position-relative"
            // style={{ height: "50vh" }}
          >
            <img
              src={ai_python_dev}
              className="d-block w-100 h-100"
              alt="Python Development"
              style={{
                objectFit: "cover"    //need to give this cuz so css was conflicting and applying object fit cover on the img
              }}
            />

            <div
              className="position-absolute top-0 start-0 w-100 h-100"
              style={{
                background: "rgba( 0,0,0,.3)",
              }}
            ></div>

            {/* <div className="carousel-caption d-flex flex-column justify-content-center align-items-center text-center top-0 bottom-0 start-0 end-0">

              <h1
                className="fw-bold mb-3"
                style={{
                  color: "#fff",
                }}
              >
                AI Powered <br />
                <span style={{ color: "#ff7a18" }}>
                  Python Full Stack Development
                </span>
              </h1>

              <p
                className="  text-white mb-4 mx-2"
              >
                Learn Django, React, REST APIs, databases, and AI tools to become a
                professional full stack Python developer.
              </p>


            </div> */}
          </div>

          {/* Slide 6 */}
          <div
            className="carousel-item position-relative"
            // style={{ height: "50vh" }}
          >
            <img
              src={ai_webDesigner_dev}
              className="d-block w-100 h-100"
              alt="Web Design"  
              style={{
                objectFit:"cover"    //need to give this cuz so css was conflicting and applying object fit cover on the img
              }}
            />

            <div
              className="position-absolute top-0 start-0 w-100 h-100"
              style={{
                background: "rgba( 0,0,0,.3)",
              }}
            ></div>

            {/* <div className="carousel-caption d-flex flex-column justify-content-center align-items-center text-center top-0 bottom-0 start-0 end-0">

              <h1
                className="fw-bold mb-3"
                style={{
                  color: "#fff",
                }}
              >
                AI Powered <br />
                <span style={{ color: "#ff7a18" }}>
                  UI/UX & Web Design
                </span>
              </h1>

              <p
                className="  text-white mb-4 mx-2"
              >
                Design beautiful websites and user experiences using Figma, responsive
                design, modern UI principles, and AI-powered workflows.
              </p>


            </div> */}
          </div>

        </div>

      </div>
    </section>
  );
};

export default CertificateCourses;