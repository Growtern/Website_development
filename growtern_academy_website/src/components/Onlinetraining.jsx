import React, { useState } from "react";
import "../Styles/training.css"


// impotr All images
import secimage from "../assets/Images/online_studey_girl.png";
import mockupVd from "../assets/Video/mockup.mp4"
import CustomModal from "../ui/Modal";
import JobleadingModal from "./Modals/JobleadingModal";

function OnlineTraining() {

    const [showdemo, setShowDemo] = useState(false);

    const showdemoClose = () => setShowDemo(false);

    const showdemoShow = () => setShowDemo(true);
    const benefits = [
        { icon: "👨‍🏫", text: "100% Live Sessions & 1:1 Mentorship" },
        { icon: "🎓", text: "Industry Recognized Courses & Certificate" },
        { icon: "💻", text: "Hands-on Practical & Live Projects" },
        { icon: "⏰", text: "24X7 doubt clearing assistance" },
        { icon: "🚀", text: "100% Placement Guaranteed Programs", highlight: true },
        { icon: "💰", text: "Most affordable & Best in class" },
        { icon: "🧑‍💼", text: "Mock Interviews for Placement" },
        { icon: "🎯", text: "No Career Break During Course" },
    ];

    return (
        <>
            <section className="training-section">
                <div className="container">
                    <div className="row">
                        {/* Left Image */}
                        <div className="col-md-6 ">
                            <div className="d-flex align-items-center h-100">
                                <img
                                    src={secimage}
                                    alt="Online Study"
                                    className="training-image"
                                />
                                {/* <video
                                    src={mockupVd}
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    width="100%"
                                ></video> */}
                            </div>
                        </div>

                        {/* Right Content */}
                        <div className="col-md-6 ">
                            <div>
                                <h2 className="training-heading">
                                    Benefits of <span style={{ color: "#fdac3cff" }}>1:1 Live</span> Training
                                </h2>

                                <div className="grid">
                                    {benefits.map((item, index) => (
                                        <div
                                            key={index}
                                            className={`benefit-card ${item.highlight ? "highlight" : ""}`}
                                        >
                                            <span style={{ color: "#f39001" }} className="icon">{item.icon}</span>
                                            <p>{item.text}</p>
                                        </div>
                                    ))}
                                </div>

                                <button className="cta-btn" onClick={showdemoShow}> Enroll Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <CustomModal show={showdemo} handleClose={showdemoClose} modalSize="small">
                <span className="modal-close" onClick={showdemoClose} style={{color:"red", fontSize:"2rem", top:"-8px", right:"4px"}}>&times;</span>
                <JobleadingModal />
            </CustomModal>
        </>



    );
}

export default OnlineTraining;
