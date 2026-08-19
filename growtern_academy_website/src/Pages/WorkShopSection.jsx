
import "../Styles/WorkShopSection.css"
import { Link } from "react-router-dom";

// import images
import certificateImage from '../assets/Certificates/GrowternAcademyWorkShopCertificate.jpeg';
import Payment from '../components/Payment';
import mentor01 from '../assets/Mentor Image/Soumi.jpeg';
import mentor02 from '../assets/Mentor Image/Silsila.jpg';
import mentor03 from '../assets/Mentor Image/Akshya.jpg';
import mentor04 from '../assets/Mentor Image/Purbesh.jpg';
import Card01 from '../assets/Images/WorkShop/First-step-into-IT.jpg'
import Card02 from '../assets/Images/WorkShop/Domy-workshop.jpg'

// Date and Time
import {WorkshopDate} from "../data/Date"
import {WorkshipTime} from "../data/Date"

import Newsandevents from '../components/Universal_Components/News&Events'

import MentorSection from "../components/MentorSection";


// Sample workshop data
const workshopsData = [
  {
    id: 1,
    image: Card01,
    courseName: "How to Become a Software Developer ?",
    date: WorkshopDate,
    time: WorkshipTime,
    trainer: "Soumik Thakur",
    status: "live",
  },
  {
    id: 2,
    image: Card02,
    courseName: "Features of Data Analytics",
    date: "Upcoming",
    time: " Upcoming",
    trainer: "Soumik Thakur",
    status: "upcoming",
  },
  {
    id: 3,
    image: Card02,
    courseName: "Digital Marketing Mastery",
    date: "Upcoming",
    time: "Upcoming",
    trainer: "Mike Johnson",
    status: "upcoming",
  }
];


// mentors data
// const mentorWorkshopData = [
//   {
//     id: 1,
//     name: "Soumik Thakur",
//     role: "Senior Data Analyst",
//     experience: "8+ Years Experience",
//     company: "GSK",
//     image: mentor01,
//   },
//   {
//     id: 2,
//     name: "Silsila Patra",
//     role: "Senior Software Engineer",
//     experience: "6+ Years Experience",
//     company: "World Wide Technology",
//     image: mentor02,
//   },
//   {
//     id: 3,
//     name: "Akshey Vaishanava",
//     role: "Tech Lead & Mentor",
//     experience: "8+ Years Experience",
//     company: "Cognizant",
//     image: mentor03,
//   },
//   {
//     id: 4,
//     name: "Purbesh Swain",
//     role: "Senior Developer",
//     experience: "5+ Years Experience",
//     company: "RCM ",
//     image: mentor04,
//   }
// ];

const WorkshopPage = () => {

  // Sort live first
  const workshops = workshopsData.sort((a, b) => {
    if (a.status === "live" && b.status !== "live") return -1;
    if (a.status !== "live" && b.status === "live") return 1;
    return 0;
  });

  // Check if any workshop is live
  const hasLiveWorkshop = workshops.some(
    (workshop) => workshop.status === "live"
  );

  return (
    <>
    <div className="workshop-page">
      {/* Hero Section */}
      <section className="workshop-hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="Workshop-hero-title" >Real <span style={{ color: "#ff8000" }}>Project</span>  Workshop</h1>
            <p className="hero-subtitle">
              From classroom learning to real project experience </p>
          </div>
        </div>
      </section>

      {/* Certificate Section */}
      <section className="certificate-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h2 className="Certificate-section-heading text-white">Career Boost <span style={{ color: "#ff9225" }}> Certificate</span> </h2>
            
              <ul class="certificate-text">
                <li> Get an official <strong>Growtern Academy Certificate</strong>.</li>
                <li> Globally accepted <strong>Industry-recognized</strong> certification.</li>
                <li> <strong>Boosts resume</strong> and career opportunities.</li>
                <li> Builds <strong>credibility</strong> and professional value.</li>
              </ul>
            </div>
            <div className="col-lg-6">
              <div className="certificate-image">
                <img
                  src={certificateImage}
                  alt="Workshop Certificate"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="Workahop-benefits-section">
        <div className="container">
          <h2 className="Workshop-Benefits-title">What<span style={{ color: "#ff7300" }}> Benefits</span> ?</h2>
          <div className="row">
            <div className="col-lg-6">
              <div className="benefit-item">
                <div className="benefit-number">1</div>
                <div className="benefit-content mb-0">
                  <h4>Industry Expert Trainers</h4>
                  <p>Learn from professionals working in the industry</p>
                </div>
              </div>
              <div className="benefit-item">
                <div className="benefit-number">2</div>
                <div className="benefit-content mb-0">
                  <h4>Hands-on Practice</h4>
                  <p>Work on real projects and Boost Your Skill</p>
                </div>
              </div>

            </div>
            <div className="col-lg-6">
              <div className="benefit-item">
                <div className="benefit-number">3</div>
                <div className="benefit-content mb-0">
                  <h4>Career Boost Certificate</h4>
                  <p>Receive a verified certificate upon completion</p>
                </div>
              </div>
              <div className="benefit-item">
                <div className="benefit-number">4</div>
                <div className="benefit-content mb-0">
                  <h4>Affordable Pricing</h4>
                  <p>Pay 99/- for Certificate only to Boost your Career</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workshop Cards Section */}
      <section className="workshops-section">
        <div className="container">
          <h2 className="Workshop-title">
            <span style={{ color: "#ff9729" }}>Industry-Oriented</span> Workshops
          </h2>

          <div className="row">
            {workshops.map((workshop) => {
              const isDisabled =
                hasLiveWorkshop && workshop.status !== "live";

              return (
                <div key={workshop.id} className="col-lg-4 col-md-6 mb-4">
                  <div
                    className={`workshop-card ${isDisabled ? "workshop-disabled" : ""
                      }`}
                  >
                    {workshop.status === "live" && (
                      <div className="live-tag">
                        <span>● LIVE</span>
                      </div>
                    )}

                    <div className="workshop-image">
                      <img
                        src={workshop.image}
                        alt={workshop.courseName}
                      />
                    </div>

                    <div className="workshop-content">
                      <div className="price-tag">₹99</div>

                      <h3 className="course-name">
                        {workshop.courseName}
                      </h3>

                      <div className="workshop-details">
                        <div className="detail-item m-0">
                          <i>🗓️</i>
                          <span>{workshop.date}</span>
                        </div>
                        <div className="detail-item m-0">
                          <i>🕐</i>
                          <span>{workshop.time}</span>
                        </div>
                        <div className="detail-item m-0">
                          <i>👨‍🏫</i>
                          <span className="fw-bold">
                            {workshop.trainer}
                          </span>
                        </div>
                      </div>

                      {/* Payment logic */}
                      {!isDisabled ? (
                        <Payment
                          amount={99}
                          user={{
                            name: "Enter Your Name",
                            email: "Enter Your Email",
                            phone: "Enter mobile number to continue",
                          }}
                          buttonBg="#ff8400"
                          buttonColor="#ffffff"
                        />
                      ) : (
                        <button
                          className="btn btn-secondary w-100"
                          disabled
                        >
                          Coming Soon
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mentor Workshop Section */}
      {/* <section className="mentorX-section">
        <div className="container p-0">
          <div className="text-center mb-5">
            <h2 className="mentorX-title"><span style={{ color: "#ff7300" }}>Industry-Expert</span> Mentors</h2>
            <p className="mentorX-subtitle">
              Learn directly from industry mentors working on real projects
            </p>
          </div>
          <div className="row g-4">
            {mentorWorkshopData.map((mentor) => (
              <div className="col-lg-3 col-md-6" key={mentor.id}>
                <div className="mentorX-card">
                  <div className="mentorX-img-wrap">
                    <img src={mentor.image} alt={mentor.name} />
                  </div>

                  <h5 className="mentorX-name">{mentor.name}</h5>
                  <p className="mentorX-role" >{mentor.role}</p>

                  <div className="mentorX-info">
                    <span style={{ color: "#ff7300" }}>{mentor.experience}</span>
                    <span>Working at {mentor.company}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}
      <MentorSection/>

      {/* News and Events */}
        < Newsandevents />

      {/* Job Guaranteed Highlight Section */}
      <section className="jobGlow-section">
        <div className="container">
          <div className="jobGlow-box">


            <div className="jobGlow-content">
              <div className="jobGlow-text">
                <span className="jobGlow-badge">
                  <span className="jobGlow-badge-icon">🎯</span>
                  100% Job Guarantee Training
                </span>
                <p>
                  Select career programs include <span style={{ color: "#ff0000", fontWeight: "800" }}>100% Job Guarantee</span> with structured training,
                  real projects, and placement support.
                </p>
              </div>
              <Link
                className="jobGlow-btn"
                to={"/Job-Oriented-Courses"}
                onClick={() => window.scrollTo(0, 0)}
              >
                <span>View Courses</span>
                <span className="jobGlow-btn-arrow">→</span>
              </Link>
            </div>
            <div className="jobGlow-decoration"></div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default WorkshopPage;