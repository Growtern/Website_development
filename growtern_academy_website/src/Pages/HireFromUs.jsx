import React, { useState } from 'react'
import ComputerRoundedIcon from "@mui/icons-material/ComputerRounded";
import AnalyticsRoundedIcon from "@mui/icons-material/AnalyticsRounded";
import DesignServicesRoundedIcon from "@mui/icons-material/DesignServicesRounded";
import CloudRoundedIcon from "@mui/icons-material/CloudRounded";
import SecurityRoundedIcon from "@mui/icons-material/SecurityRounded";
import PhoneAndroidRoundedIcon from "@mui/icons-material/PhoneAndroidRounded";

const HireFromUs = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    requirements: '',
    positions: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Replace with your deployed Apps Script URL
  // old - https://script.google.com/macros/s/AKfycbwqIDtfDU2Dsx3n0U_-25bCgMoe8_11YQwb4j3IvPug0lPkyHBeXTIoLRcp10m25HtSFw/exec
  const APPS_SCRIPT_URL = import.meta.env.VITE_HIRE_FROM_US_APP_SCRIPT_API;

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      await fetch(APPS_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      })

      setSubmitStatus({
        type: 'success',
        message: 'Thank you for your interest! We will contact you shortly.'
      })

      // Reset form
      setFormData({
        companyName: '',
        contactPerson: '',
        email: '',
        phone: '',
        requirements: '',
        positions: ''
      })

    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus({
        type: 'error',
        message: 'There was an error submitting your request. Please try again.'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const talentPools = [
    {
      icon: <ComputerRoundedIcon sx={{ color: "#009FE3" }} />,
      bg: "#EAF6FF",
      title: "Software Development",
      desc: "MERN • Java • Python • Backend",
    },
    {
      icon: <DesignServicesRoundedIcon sx={{ color: "#F39001" }} />,
      bg: "#FFF3E5",
      title: "UI / UX & Web Design",
      desc: "Figma • Responsive Websites",
    },
    {
      icon: <AnalyticsRoundedIcon sx={{ color: "#009FE3" }} />,
      bg: "#EAF6FF",
      title: "Data Science & Analytics",
      desc: "AI • ML • Power BI • SQL",
    },
    {
      icon: <CloudRoundedIcon sx={{ color: "#F39001" }} />,
      bg: "#FFF3E5",
      title: "Cloud Computing",
      desc: "AWS • Azure • DevOps",
    },
    {
      icon: <SecurityRoundedIcon sx={{ color: "#009FE3" }} />,
      bg: "#EAF6FF",
      title: "Cyber Security",
      desc: "Ethical Hacking • SOC",
    },
    {
      icon: <PhoneAndroidRoundedIcon sx={{ color: "#F39001" }} />,
      bg: "#FFF3E5",
      title: "Mobile App Development",
      desc: "Flutter • Android",
    },
  ];

  return (
    <section
      className="py-5"
      style={{
        background: "#F8FBFF",
      }}
    >
      <div className="container py-2">

        {/* Heading */}

        <div className="text-center mb-5">

          <span
            className="badge rounded-pill px-3 py-2 mb-4 d-inline-flex justify-content-center align-items-center gap-2"
            style={{
              background: "#EAF6FF",
              // backdropFilter: "blur(8px)",
              color: "black"
            }}
          >
            <span
              style={{
                width: "8px",
                height: "8px",
                backgroundColor: "#ED7225",
                borderRadius: "50%",
                display: "inline-block",
              }}
            ></span>
            <span>Hire From Us</span>
          </span>

          <h2
            className="fw-bold display-5"
            style={{
              color: "black",
            }}
          >
            Hire Top
            <span style={{ color: "#F39001" }}>
              {" "}Talent
            </span>
          </h2>

          <p
            className="text-secondary mx-auto"
            style={{
              maxWidth: "700px",
            }}
          >
            Build your dream team by hiring industry-ready professionals trained
            through real-world projects and internships.
          </p>

        </div>

        <div className="row g-5 align-items-start">

          {/* ================= Left ================= */}

          <div className="col-lg-6">

            <div
              className="bg-white rounded-5 shadow-sm p-4 h-100"
              style={{
                border: "1px solid #edf2f7",
              }}
            >

              <h4
                className="fw-bold mb-4"
                style={{
                  color: "black",
                }}
              >
                Available Talent Pool
              </h4>

              {talentPools.map((item, index) => (
                <TalentCard
                  key={index}
                  icon={item.icon}
                  bg={item.bg}
                  title={item.title}
                  desc={item.desc}
                />
              ))}
            </div>

          </div>

          {/* ================= Right ================= */}

          <div className="col-lg-6">

            <div
              className="bg-white rounded-5 shadow-sm p-4"
              style={{
                border: "1px solid #edf2f7",
              }}
            >

              <h4
                className="fw-bold mb-4"
                style={{
                  color: "black",
                }}
              >
                Hire Talent
              </h4>

              <form onSubmit={handleSubmit}>

                <div className="row g-3">

                  <div className="col-md-6">
                    <input
                      type="text"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      className="form-control py-3"
                      placeholder="Company Name"
                      required
                    />
                  </div>

                  <div className="col-md-6">
                    <input
                      type="text"
                      name="contactPerson"
                      value={formData.contactPerson}
                      onChange={handleChange}
                      className="form-control py-3"
                      placeholder="Contact Person"
                      required
                    />
                  </div>

                  <div className="col-md-6">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="form-control py-3"
                      placeholder="Email Address"
                      required
                    />
                  </div>

                  <div className="col-md-6">
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="form-control py-3"
                      placeholder="Phone Number"
                      required
                    />
                  </div>

                  <div className="col-12">
                    <input
                      type="text"
                      name="positions"
                      value={formData.positions}
                      onChange={handleChange}
                      className="form-control py-3"
                      placeholder="Open Positions"
                      required
                    />
                  </div>

                  <div className="col-12">
                    <textarea
                      rows="5"
                      name="requirements"
                      value={formData.requirements}
                      onChange={handleChange}
                      className="form-control"
                      placeholder="Describe your hiring requirements..."
                      required
                    ></textarea>
                  </div>

                  {submitStatus && (
                    <div className="col-12">
                      <div
                        className={`alert ${submitStatus.type === "success"
                          ? "alert-success"
                          : "alert-danger"
                          } mb-0`}
                      >
                        {submitStatus.message}
                      </div>
                    </div>
                  )}

                  <div className="col-12">

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn w-100 py-3 fw-semibold text-white"
                      style={{
                        background: "#F39001",
                        borderRadius: "12px",
                      }}
                    >
                      {isSubmitting
                        ? "Submitting..."
                        : "Request Talent"}
                    </button>

                  </div>

                </div>

              </form>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default HireFromUs

// reusable card component
const TalentCard = ({ icon, bg, title, desc }) => (
  <div
    className="d-flex align-items-center p-3 rounded-4 border mb-3"
    style={{
      transition: "all .3s ease",
      cursor: "pointer",
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = "translateY(-6px)";
      e.currentTarget.style.boxShadow = "0 15px 30px rgba(0,0,0,.08)";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = "translateY(0)";
      e.currentTarget.style.boxShadow = "";
    }}
  >
    <div
      className="rounded-circle d-flex justify-content-center align-items-center me-3 flex-shrink-0"
      style={{
        width: "60px",
        height: "60px",
        background: bg,
      }}
    >
      {icon}
    </div>

    <div>
      <h6 className="fw-bold mb-1">{title}</h6>

      <small className="text-secondary">
        {desc}
      </small>
    </div>
  </div>
);
