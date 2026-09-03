import React from 'react';
import {
  FaGraduationCap,
  FaAward,
  FaUsers,
  FaBriefcase,
  FaLaptopCode,
  FaRocket
} from "react-icons/fa";

const Cards = [
  {
    id: 1,
    Logo: <FaGraduationCap />,
    Name: "Industry-Focused Learning",
    Message:
      "Learn practical skills and concepts that are directly relevant to today's industry.",
    iconColor: "#009FE3",
    iconBg: "#FFF4E6"
  },
  {
    id: 2,
    Logo: <FaAward />,
    Name: "Certification",
    Message:
      "Earn certifications that help you showcase your skills and strengthen your profile.",
    iconColor: "#FB9200",
    iconBg: "#FFF4E6"
  },
  {
    id: 3,
    Logo: <FaUsers />,
    Name: "Expert Mentorship",
    Message:
      "Get guidance and support from experienced professionals throughout your learning journey.",
    iconColor: "#009FE3",
    iconBg: "#FFF4E6"
  },
  {
    id: 4,
    Logo: <FaBriefcase />,
    Name: "Job Preparation",
    Message:
      "Build the confidence and skills you need to perform well in interviews and secure opportunities.",
    iconColor: "#FB9200",
    iconBg: "#FFF4E6"
  },
  {
    id: 5,
    Logo: <FaLaptopCode />,
    Name: "Hands-on Projects",
    Message:
      "Work on real-world projects and gain practical experience while learning.",
    iconColor: "#009FE3",
    iconBg: "#FFF4E6"
  },
  {
    id: 6,
    Logo: <FaRocket />,
    Name: "Career Growth",
    Message:
      "Develop the skills and confidence needed to take the next step in your career.",
    iconColor: "#FB9200",
    iconBg: "#FFF4E6"
  }
];

const KeyFeatures = () => {
  return (
    <section className="Key-Features">
      <div className="container">

        <h2 className="KeyFeatures-H">
          Everything You Need for
          <span
            style={{
              color: "#fb9200ff"
            }}
          >
            {" "}Career Growth
          </span>
        </h2>

        <div className="row g-4">
          {Cards.map((card) => (
            <div
              className="col-md-4 p-0 p-sm-3"
              key={card.id}
            >
              <div className="keyCard">

                {/* Icon */}
                <div
                  className="Key-icon d-flex align-items-center justify-content-center mx-auto"
                  style={{
                    width: "60px",
                    height: "60px",
                    borderRadius: "50%",
                    backgroundColor: card.iconBg,
                    color: card.iconColor,
                    fontSize: "32px"
                  }}
                >
                  {card.Logo}
                </div>

                <h5 className="text-center fw-bold pt-2">
                  {card.Name}
                </h5>

                <p className="Card-message px-2 m-0 pb-0">
                  {card.Message}
                </p>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default KeyFeatures;