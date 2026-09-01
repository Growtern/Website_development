import React from "react";

import {
  FaLaptopCode,
  FaWandMagicSparkles,
  FaRobot,
  FaPenNib,
  FaBullhorn,
  FaWordpress,
  FaCloudArrowUp,
  FaBriefcase,
  FaAward,
  FaScrewdriverWrench,
  FaChartLine,
  FaCertificate,
  FaGraduationCap,
  FaComments,
} from "react-icons/fa6";

const skills = [
  {
    number: "01",
    title: "WEB DESIGNING",
    color: "#0755ad",
    icon: FaLaptopCode,
    points: [
      "HTML, CSS, JavaScript",
      "Responsive Design",
      "UI/UX Principles",
      "Bootstrap & Modern UI",
      "Website Deployment",
    ],
  },
  {
    number: "02",
    title: "GENERATIVE AI",
    color: "#299b2f",
    icon: FaWandMagicSparkles,
    points: [
      "AI Fundamentals",
      "Prompt Engineering",
      "Content & Image Generation",
      "AI for Productivity",
      "AI Tools for Business",
    ],
  },
  {
    number: "03",
    title: "AGENTIC AI",
    color: "#0755ad",
    icon: FaRobot,
    points: [
      "AI Agents & Workflows",
      "Tool Calling & Integrations",
      "Multi-Agent Systems",
      "Automation with AI",
      "Real-world AI Projects",
    ],
  },
  {
    number: "04",
    title: "GRAPHIC DESIGNING",
    color: "#299b2f",
    icon: FaPenNib,
    points: [
      "Design Fundamentals",
      "Photoshop & Illustrator",
      "Logo & Brand Identity",
      "Social Media Design",
      "Portfolio Development",
      "Video Editing",
    ],
  },
  {
    number: "05",
    title: "SPOKEN ENGLISH",
    color: "#0755ad",
    icon: FaComments,
    points: [
      "English Communication Basics",
      "Vocabulary & Grammar",
      "Speaking & Pronunciation",
      "Group Discussion",
      "Interview Communication",
    ],
  },
  {
    number: "06",
    title: "DIGITAL MARKETING",
    color: "#299b2f",
    icon: FaBullhorn,
    points: [
      "SEO & SEM",
      "Social Media Marketing",
      "Google & Meta Ads",
      "Content & Email Marketing",
      "Analytics & Reporting",
    ],
  },
  {
    number: "07",
    title: "WORDPRESS",
    color: "#0755ad",
    icon: FaWordpress,
    points: [
      "WordPress Basics",
      "Themes & Plugins",
      "Page Building",
      "WooCommerce",
      "Website Security & SEO",
    ],
  },
  {
    number: "08",
    title: "CLOUD & DEVOPS FUNDAMENTALS",
    color: "#299b2f",
    icon: FaCloudArrowUp,
    points: [
      "Cloud Computing Basics",
      "AWS / Azure / GCP Overview",
      "Linux & Networking",
      "Docker & CI/CD",
      "Deployment & Monitoring",
    ],
  },
];

const benefits = [
  {
    icon: FaBriefcase,
    title: "INDUSTRY RELEVANT",
    text: "Skills that employers value",
    color: "#0755ad",
  },
  {
    icon: FaAward,
    title: "CERTIFICATE OF COMPLETION",
    text: "8 Industry Recognized Certificates",
    color: "#299b2f",
  },
  {
    icon: FaScrewdriverWrench,
    title: "HANDS-ON LEARNING",
    text: "Practical Projects & Real-world Training",
    color: "#0755ad",
  },
  {
    icon: FaChartLine,
    title: "CAREER GROWTH",
    text: "Better Opportunities, Higher Potential",
    color: "#299b2f",
  },
];

function SkillCard({ skill }) {
  const Icon = skill.icon;

  return (
    <div className="col-12 col-md-6 col-xl-3">
      <div
        className="h-100 position-relative bg-white rounded-4 shadow-sm overflow-hidden"
        style={{
          border: "1px solid #e9eef4",
          borderBottom: `5px solid ${skill.color}`,
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
          cursor: "pointer",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-8px)";
          e.currentTarget.style.boxShadow =
            "0 12px 25px rgba(0, 0, 0, 0.12)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow =
            "0 0.125rem 0.25rem rgba(0, 0, 0, 0.075)";
        }}
      >
        {/* Number */}
        <div
          className="position-absolute top-0 start-0 d-flex align-items-center justify-content-center rounded-circle text-white fw-bold"
          style={{
            width: "42px",
            height: "42px",
            backgroundColor: skill.color,
            transform: "translate(-3px, -3px)",
            fontSize: "14px",
            zIndex: 2,
          }}
        >
          {skill.number}
        </div>

        <div className="p-3 pt-4">
          <div className="row align-items-center g-2">

            {/* Icon */}
            <div className="col-4 text-center">
              <div
                className="rounded-circle d-flex align-items-center justify-content-center mx-auto"
                style={{
                  width: "82px",
                  height: "82px",
                  backgroundColor: "#f5f8fb",
                }}
              >
                <Icon
                  style={{
                    fontSize: "48px",
                    color: skill.color,
                  }}
                />
              </div>
            </div>

            {/* Content */}
            <div className="col-8">
              <h5
                className="fw-bold mb-2"
                style={{
                  color: skill.color,
                  fontSize: "16px",
                  lineHeight: "1.15",
                }}
              >
                {skill.title}
              </h5>

              <ul
                className="mb-0 ps-3"
                style={{
                  fontSize: "12px",
                  lineHeight: "1.65",
                  color: "#182033",
                }}
              >
                {skill.points.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

function BenefitItem({ benefit }) {
  const Icon = benefit.icon;

  return (
    <div className="col-12 col-sm-6 col-lg-3">
      <div className="d-flex align-items-center gap-3 h-100 px-2">

        {/* Benefit Icon */}
        <div
          className="rounded-circle flex-shrink-0 d-flex align-items-center justify-content-center text-white"
          style={{
            width: "58px",
            height: "58px",
            backgroundColor: benefit.color,
          }}
        >
          <Icon
            style={{
              fontSize: "27px",
            }}
          />
        </div>

        {/* Benefit Content */}
        <div>
          <h6
            className="fw-bold mb-1"
            style={{
              color: benefit.color,
              fontSize: "13px",
              lineHeight: "1.2",
            }}
          >
            {benefit.title}
          </h6>

          <p
            className="mb-0 text-secondary"
            style={{
              fontSize: "11px",
              lineHeight: "1.4",
            }}
          >
            {benefit.text}
          </p>
        </div>

      </div>
    </div>
  );
}

export default function AdditionalSkillsBanner() {
  return (
    <section
      className="w-100 overflow-hidden"
      style={{
        backgroundColor: "#ffffff",
      }}
    >
      <div className="container-fluid px-3 px-md-4 px-xl-5 py-4 py-lg-5">

        {/* =====================================
            8 EXTRA SKILLS STRIP
        ====================================== */}
        <div
          className="d-flex align-items-center rounded-4 overflow-hidden mb-4 shadow-sm"
          style={{
            border: "1px solid #d7e0ec",
            minHeight: "88px",
          }}
        >
          {/* Number */}

          {/* Text */}
          <div className="flex-grow-1 text-center px-2 px-md-4">
            <div
              className="fw-bold"
              style={{
                color: "#0755ad",
                fontSize: "clamp(20px, 3vw, 38px)",
                lineHeight: "1.1",
              }}
            >
              8 EXTRA SKILLS,{" "}
              <span style={{ color: "#FF7C09" }}>
                8 INDUSTRY CERTIFICATES
              </span>
            </div>
          </div>
        </div>

        {/* =====================================
            SKILL CARDS
        ====================================== */}
        <div className="row g-3 g-lg-4">
          {skills.map((skill) => (
            <SkillCard
              key={skill.number}
              skill={skill}
            />
          ))}
        </div>

        {/* =====================================
            BENEFITS
        ====================================== */}
        <div className="row g-4 mt-3 pt-4 border-top">
          {benefits.map((benefit, index) => (
            <BenefitItem
              key={index}
              benefit={benefit}
            />
          ))}
        </div>

      </div>
    </section>
  );
}