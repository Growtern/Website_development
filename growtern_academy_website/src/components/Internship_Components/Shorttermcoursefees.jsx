import React, { useState } from "react";
import "../../Styles/Internship_styles/Shorttermcoursefees.css";
import CustomModal from "../../ui/Modal";
import ApplyNowModal from "../Modals/ApplyNowModal";
import CareerModal from "../Modals/CareerModal";
import Payment from "../Payment";

const Shorttermcoursefees = ({ Internship }) => {

  const [courseType, setCourseType] = useState("default");
  const [show, setShow] = useState(false);
  const [showdemo, setShowDemo] = useState(false);

  return (
    <>
      <section className="fees-ui-section py-5">

        <div className="container p-0">

          <div className="row align-items-center g-5">

            {/* LEFT CONTENT */}
            <div className="col-lg-7">

              <div className="fees-eyebrow mb-2">
                <span className="live-dot"></span> Enroll Today
              </div>

              <h2 className="fees-heading mb-0">
                Internship <span className="accent">Fees</span><br />
                & Pricing Plans
              </h2>

              <div className="fees-desktop-content">
                <p className="fees-desc mt-3">
                  Enroll in our <strong className="text-white">Website Designing Course</strong> and
                  become industry-ready with structured learning and complete placement support.
                </p>

                <div className="feat-list">

                  <div className="feat-item">
                    <div className="feat-icon">
                      <i className="bi bi-display"></i>
                    </div>
                    <div className="feat-text text-white">
                      <strong style={{ color: "#ff9c4b" }}>Live Instructor-Led Sessions</strong>
                      <span> Real-time doubt solving & mentorship</span>
                    </div>
                  </div>

                  <div className="feat-item">
                    <div className="feat-icon orange">
                      <i className="bi bi-patch-check"></i>
                    </div>
                    <div className="feat-text text-white">
                      <strong style={{ color: "#ff9c4b" }}>Industry Certificate</strong>
                      <span> Verified on course completion</span>
                    </div>
                  </div>

                  <div className="feat-item">
                    <div className="feat-icon">
                      <i className="bi bi-person-check"></i>
                    </div>
                    <div className="feat-text text-white">
                      <strong style={{ color: "#ff9c4b" }}>Interview Preparation</strong>
                      <span> Mock interviews & career guidance</span>
                    </div>
                  </div>

                </div>
              </div>

            </div>

            {/* RIGHT CARD */}
           <div className="col-lg-5">

  <div
    style={{
      background: "#fff",
      borderRadius: "20px",
      padding: "28px",
      boxShadow: "0 15px 35px rgba(0,0,0,.08)",
      border: "1px solid #edf2f7",
    }}
  >

    {/* Top */}
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "25px",
      }}
    >
      <span
        style={{
          background: "#eef6ff",
          color: "#0d6efd",
          padding: "8px 18px",
          borderRadius: "10px",
          fontWeight: "600",
        }}
      >
        Online
      </span>

      <span
        style={{
          background: "linear-gradient(90deg,#ff5f6d,#7b2ff7)",
          color: "#fff",
          padding: "8px 20px",
          borderRadius: "8px",
          fontWeight: "700",
        }}
      >
        Save 38%
      </span>
    </div>

    {/* Price */}

    <p
      style={{
        textDecoration: "line-through",
        color: "#8b8b8b",
        fontSize: "20px",
        marginBottom: "5px",
      }}
    >
      ₹{Internship?.actualParice}
    </p>

    <h1
      style={{
        fontWeight: "800",
        fontSize: "52px",
        margin: 0,
      }}
    >
      <span style={{ color: "#111" }}>₹ {Internship?.finalPrice}</span>
    </h1>

    <p
      style={{
        color: "#666",
        marginTop: "5px",
        marginBottom: "30px",
      }}
    >
      Including all taxes
    </p>

    {/* Buttons */}

    <div
      style={{
        display: "flex",
        gap: "15px",
      }}
    >

      <div style={{ flex: 1 }}>

        <Payment
          buttonText="Book Seat"
          amount={1999}
          user={{
            name: "Enter Your Name",
            email: "Enter Your Email",
            phone: "Enter mobile number to continue",
          }}
          buttonBg="#f39001"
          buttonColor="#ffffff"
        />

      </div>

      <button
        onClick={() => setShow(true)}
        style={{
          flex: 1,
          border: "none",
          borderRadius: "10px",
          background: "#0b7fc2",
          color: "#fff",
          fontWeight: "600",
          fontSize: "17px",
          cursor: "pointer",
          minHeight: "52px",
        }}
      >
        Callback
      </button>

    </div>

  </div>

</div>
          </div>
        </div>
      </section>

      {/* APPLY MODAL */}
      <CustomModal show={showdemo} handleClose={() => setShowDemo(false)} modalSize="small">
        <span className="modal-close" onClick={() => setShowDemo(false)}>&times;</span>
        <ApplyNowModal type={courseType} />
      </CustomModal>

      {/* LEAD MODAL */}
      <CustomModal show={show} handleClose={() => setShow(false)} modalSize="small">
        <span className="modal-close" onClick={() => setShow(false)}>&times;</span>
        <CareerModal type="internship" />
      </CustomModal>

    </>
  );
};

export default Shorttermcoursefees;