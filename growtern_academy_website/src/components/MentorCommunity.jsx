import React from "react";
import "../Styles/MentorCommunity.css";

// Import all images
import cognizent from "../assets/Images/Delta.png"
import infosys from "../assets/Images/Infosys.png"
import wipro from "../assets/Images/Wipro.png"
import tcs from "../assets/Images/Tcs.png"

const MentorCommunity = () => {
    const companies = [
        { name: "Delta", img: cognizent },
        { name: "infosys", img: infosys },
        { name: "wipro", img: wipro },
        { name: "TCS", img: tcs }
    ];

    return (
        <section className="mentorComunity-section  text-center py-5">
            <div className="container">
                <h2 className="fw-bold text-dark mb-3"><span style={{ color: "#ff7b00ff" }}>Mentors</span> Community</h2>
                <p className="text-secondary mb-4">
                    Our mentors love to share their knowledge! <br />
                    We work with experts from top companies to help guide you on your learning journey.
                </p>

                <div className="row justify-content-center align-items-center g-4">
                    {companies.map((company, index) => (
                        <div className="col-4 col-md-2 col-lg-2" key={index}>
                            <img
                                src={company.img}
                                alt={company.name}
                                className="company-logo img-fluid"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MentorCommunity;
