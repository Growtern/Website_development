import React from "react";
import "../Styles/PlacedStudent.css";

import StudentDats from "../data/PlaceStudentData.jsx";




const PlacedStudent = () => {
  return (
    <section className="Student-Section">
      <div className="container p-0">
        <h3 className="PlacedStudent-heading" 
        // style={{
        //   textDecoration: "underline double",
        //   textDecorationColor: "#ffffff75",
        //   textDecorationThickness: "2px",
        //   textUnderlineOffset: "7px",
        // }}
        >
          Our Proud <span style={{ color: "#f8a42fff" }}>Achievers</span>
        </h3>
        <p>
          Meet the learners who turned their skills into successful careers —
          your journey to success starts here!
        </p>

        <div className="carousel manual-scroll">
          <div className="carousel-track">
            {StudentDats.map((Data) => (
              <div className="student-Card" key={Data.id}>
                <img className="Student-img" src={Data.Image} alt={Data.Name} />
                <div className="text-center">
                  <h5 className="mb-0 Name">{Data.Name}</h5>
                  <p className="mb-0 fw-bold Role text-center">{Data.Role}</p>
                  <p className="mb-0 mt-0 Role text-center">{Data.comp}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlacedStudent;
