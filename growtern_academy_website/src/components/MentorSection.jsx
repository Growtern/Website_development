import React from "react";
import "../Styles/MentorSection.css";

// Import profile photos
import Mentor1 from "../assets/Mentor Image/Soumi.jpeg";
import Mentor2 from "../assets/Mentor Image/Swaroopa.jpg";
import Mentor3 from "../assets/Mentor Image/Kalucharan.jpg";
import Mentor4 from "../assets/Images/Silsila Patra.jpeg";
import Mentor5 from "../assets/Mentor Image/Maheswa.jpeg";
import Mentor6 from "../assets/Mentor Image/Abhisekh.png";
import Mentor7 from "../assets/Mentor Image/Snehasish.png";
import Mentor8 from "../assets/Mentor Image/Purbesh copy.jpg";

const MentorSection = () => {
  const mentors = [
    {
      id: 1,
      name: "Soumik Thakur",
      company: <>Deputy Manager  @ <span style={{color:"#f7670e"}} >GSK</span></>,
      photo: Mentor1,
      linkedin: "https://www.linkedin.com/in/soumik-thakur-b1831632/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      message:
        "Ex-PWC Senior associate, Ex-EY senior financial analyst, now in GSK as Deputy Manager.",
    },
       {
      id: 2,
      name: "Abhishek Panigrahi",
      company: <> @ <span style={{color:"#f7670e"}}>Professional DS & DA</span></>,
      photo: Mentor6,
      linkedin: "https://www.linkedin.com/in/abhishekpanigrahi54/",
      message:
        "4 Years of Experience, Professional in Data Science & Data Analytics.",
    },
    {
      id: 3,
      name: "Snehasish Rayaguru",
      company: <> @ <span style={{color:"#f7670e"}}>Somniate Tech</span></>,
      photo: Mentor7,
      linkedin: "https://www.linkedin.com/in/snehasish-rayaguru-893778239/",
      message:
        "Ex-Squbix Digital, now working at Somniate Tech as AI Engineer.",
    },
       {
      id: 4,
      name: "Purbesh Swain",
      company: <>Asst. Professor @ <span style={{color:"#f7670e"}}>RCM</span></>,
      photo: Mentor8,
      linkedin: "https://www.linkedin.com/in/purbesh-swain-a1960919b/",
      message:
        "6 Years of Experience in MERN Stack Development, now working at RCM as Asst. Professor.",
    },
    {
      id: 5,
      name: "Swaroopa Swain",
      company: <>Senior Software Engineer @ <span style={{color:"#f7670e"}}>Wissen Technology</span></>,
      photo: Mentor2,
      linkedin: "https://www.linkedin.com/in/swaroopa-swain-66a0a4113/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      message:
        "Ex-Center for Study of Science, Technology and Policy. Software Developer, now a Senior Software Engineer at Wissen Technology.",
    },
    {
      id: 6,
      name: "Kalu Charan Bastia",
      company: <>@ <span style={{color:"#f7670e"}}>Deloitte</span></> ,
      photo: Mentor3,
      linkedin: "https://www.linkedin.com/in/kalu-charan-bastia-b44a21185/",
      message:
        "Ex-Infosys, now working at Deloitte as System Engineer.",
    },
    {
      id: 7,
      name: "Silsila Patra",
      company: <>Software Engineer @ <span style={{color:"#f7670e"}}>World Wide Technology</span></> ,
      photo: Mentor4,
      linkedin: "https://www.linkedin.com/in/silsila-patra-5598b984/",
      message:
        "Ex- IOS Developer at Delta Technology, now Software Engineer at World Wide Technology.",
    },
    {
      id: 8,
      name: "Maheswar Dora",
      company: <> @ <span style={{color:"#f7670e"}}>Infosys</span></>,
      photo: Mentor5,
      linkedin: "https://www.linkedin.com/in/maheswar-dora-3051b7163/",
      message:
        "Ex-YASH Technologies, now working at Infosys as System Engineer.",
    }

  ];

  return (
    <section className="mentor-section">
      <div className="container p-0">
        <div className="section-header text-center">
          <h2 className="MentorSection-Heading mb-3">Guided by Top <span style={{color:"#ed7225"}}>Industry Mentors</span></h2>
          <p className="text-center">Our mentors share their real career journeys, industry experiences, and lessons learned — helping students turn skills into successful tech careers.</p>
        </div>

        <div className="mentor-grid">
          {mentors.map((mentor) => (
            <div className="mentor-card" key={mentor.id}>
              {/* Profile Image */}
              <div className="mentor-img-box">
                <img
                  src={mentor.photo}
                  alt={mentor.name}
                  className="mentor-photo"
                />
              </div>


              {/* Name + Role */}
              <div className="mentor-info">
                <p className="mentor-name mb-0" style={{color:"#ffffff"}}>{mentor.name}</p>
                <p className="mentor-role" >{mentor.company}</p>
              </div>

              {/* Hover Content */}
              <div className="mentor-caption">
                <p style={{color:"#ffff"}}>{mentor.message}</p>
                <a
                  href={mentor.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="linkedin-btn"
                >
                  View LinkedIn
                </a>
              </div>
            </div>
          ))}
        </div>
        <h6 className="text-center mt-4">Many More...</h6>
      </div>
    </section>
  );
};

export default MentorSection;
