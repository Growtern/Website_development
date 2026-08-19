import React from "react";
import "../Styles/ProgramOverview.css";

const ProgramOverview = () => {
  const overviewData = [
    {
      title: "COURSES INCLUDED",
      desc: "Gain hands-on experience in Full Stack, AI Development, and Cloud Deployment — all in one integrated program.",
      img: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    },
    {
      title: "WHO CAN APPLY",
      desc: "Ideal for B.Tech, MCA, BCA, M.Tech, or BE students and professionals aiming to upskill in modern development.",
      img: "https://cdn-icons-png.flaticon.com/512/3135/3135823.png",
    },
    {
      title: "TRAINING FORMAT",
      desc: "6 months of blended learning with live interactive sessions, real-world projects, and mentorship from industry experts.",
      img: "https://cdn-icons-png.flaticon.com/512/12650/12650036.png",
    },
    {
      title: "CAREER & GLOBAL SUPPORT",
      desc: "Get 100% placement assistance, interview preparation, and guidance for global master’s opportunities.",
      img: "https://cdn-icons-png.flaticon.com/512/3135/3135820.png",
    },
  ];

  return (
    <section className="program-section">
      <div className="container text-center">
        <h2 className="Academic-outline-heading">Academic Outline</h2>
        <p className="program-subtext">
          Explore a career-focused learning path designed to help you master
          real-world coding skills, gain practical experience, and secure your
          dream role in tech.
        </p>
        <div className="row g-4">
          {overviewData.map((item, index) => (
            <div key={index} className="col-md-6 col-lg-3">
              <div className="program-card h-100">
                <div className="w-100 d-flex align-items-center justify-content-center">
                  <img src={item.img} alt={item.title} />
                </div>
                <h5>{item.title}</h5>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramOverview;
