import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "animate.css";
import LOR from "../assets/Certificates/LOR.jpeg";
import Internship from "../assets/Certificates/InternshipCertificate.png";
import CourseCertificate from "../assets/Certificates/Course_Certificate.png";

const Certificate = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  const certificates = [
    {
      id: 1,
      title: "Letter of Recommendation",
      desc: "Deserving students receive a Letter of Recommendation to showcase skills.",
      image: LOR,
    },
    {
      id: 2,
      title: "Internship Certificate",
      desc: "Receive an Industry-Recognized Internship Certificate that strengthens your resume.",
      image: Internship,
    },
    {
      id: 3,
      title: "Training Certificate",
      desc: "Receive a Training Certificate recognizing your skills and achievements.",
      image: CourseCertificate,
    },
  ];

  return (
    <>
      {/* ✅ Internal CSS (hover removed) */}
      <style>
        {`
          .certificate-card {
            border-radius: 15px;
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(10px);
            transform: scale(1);
            transition: all 0.3s ease;
          }
          .certificate-desc {
  min-height: 48px;
}
        `}
      </style>

      <div
        style={{
          background: "linear-gradient(135deg, #ffffff, #e8f6ff, #dff3ff)",
          color: "#0d47a1",
          fontFamily: "Poppins, sans-serif",
          paddingTop: "50px",
          paddingBottom: "50px",
          paddingLeft: "25px",
          paddingRight: "25px",
        }}
        className="certificate-section"
      >
        <div className="container text-center">
          <h2
            className="fw-bold mb-4 animate__animated animate__fadeInDown"
            style={{ letterSpacing: "1px" }}
          >
            Your <span style={{ color: "#ffa704ff" }}>Achievements</span> with Growtern
          </h2>
          <p className="mb-5 animate__animated animate__fadeIn animate__delay-1s text-dark">
            Explore our achievement <span className="fw-bold">certificates</span> – proof of dedication and success.
          </p>

          <div className="row justify-content-center g-4">
            {certificates.map((cert, index) => (
              <div className="col-md-4 col-12 p-0 p-md-2" key={cert.id}>
                <div
                  className={`card shadow-lg border-0 animate__animated animate__zoomIn animate__delay-${index}s certificate-card`}
                >
                  <div className="text-center mt-3">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="img-fluid rounded shadow-sm"
                      style={{
                        height: "150px",
                        width: "90%",
                        objectFit: "cover",
                        border: "2px solid #e0e0e0",
                        cursor: "pointer",
                        margin:"auto"
                      }}
                      data-bs-toggle="modal"
                      data-bs-target="#certificateModal"
                      onClick={() => setSelectedCert(cert)}
                    />
                  </div>

                  <div className="card-body">
                    <h5 className="fw-bold  mb-2 mt-3" style={{color:"#0d47a1" }}>  {/*removed the text-primary and added the style*/}
                      {cert.title}
                    </h5>
                    <p className="text-muted mb-3 text-center" style={{fontSize:"0.85rem"}}>{cert.desc}</p>   {/*chanted the text-justify to text center*/}
                    <button
                      className="btn btn-primary fw-semibold"
                      data-bs-toggle="modal"
                      data-bs-target="#certificateModal"
                      onClick={() => setSelectedCert(cert)}
                    >
                      View Certificate
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal */}
        <div
          className="modal fade"
          id="certificateModal"
          tabIndex="-1"
          aria-labelledby="certificateModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered modal-lg"> 
            {/* changed the modal from modal-xl to modal-lg */}
            <div className="modal-content border-0 shadow-lg rounded-4">
              <div className="modal-header border-0 bg-light">
                <h5
                  className="modal-title fw-bold text-primary"
                  id="certificateModalLabel"
                >
                  {selectedCert?.title}
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div
                className="modal-body text-center bg-white animate__animated animate__zoomIn"
                style={{ transition: "all 0.3s ease" }}
              >
                {selectedCert ? (
                  <img
                    src={selectedCert.image}
                    alt={selectedCert.title}
                    className="img-fluid rounded shadow-sm"
                    style={{
                      maxHeight: "80vh",
                      objectFit: "contain",
                      border: "1px solid #e0e0e0",
                       margin: "0 auto" // to center img
                    }}
                  />
                ) : (
                  <p>Loading...</p>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Responsive Padding */}
        <style>
          {`
            @media (max-width: 768px) {
              .certificate-section {
                padding-left: 25px !important;
                padding-right: 25px !important;
              }
            }
          `}
        </style>
      </div>
    </>
  );
};

export default Certificate;
