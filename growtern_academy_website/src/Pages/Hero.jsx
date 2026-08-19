
import '../Styles/Hero.css'
import CourseCard from '../components/CourseCard'
import { Link } from 'react-router-dom'

import CompainesScrolling from '../components/Companies'
import PlacedStudent from '../components/PlacedStudent'
import Gallery from '../components/Gallery'
import Review from '../components/ReviewRating'
import { Helmet } from "react-helmet-async";
import JobGuarantee from '../components/JobGuaranteeCrateria.jsx'
import MentorSection from '../components/MentorSection.jsx'


// import all images
import herobg from "../assets/Images/Bg-Circle logo.png"
import heroimg from "../assets/Images/Girl-image1.png"
import bubble from "../assets/Images/bubble.png"
import OnlineTrainingimg from "../assets/Images/online_studey_girl.png"
import react from "../assets/Logos/Reactlogo.png"
import jslogo from "../assets/Logos/Jslogo.png"
import java from "../assets/Logos/Javalogo.png"
import MongoDB from "../assets/Logos/Mongodblogo.png"
import node from "../assets/Logos/Nodejslogo.png"
import Python from "../assets/Logos/Pythonlogo.png"
import Angular from "../assets/Logos/Angularlogo.png"
import SQLlogo from "../assets/Logos/SQLlogo.png"
import Html from "../assets/Logos/Htmllogo.png"
import Tailwind from "../assets/Logos/Tailwindlogo.png"
import { useState } from 'react'
import CustomModal from '../ui/Modal'
import ApplyNowModal from '../components/Modals/ApplyNowModal'
import Collaboration from '../components/Internship_Components/collaboration-section.jsx'

// import the TypeAnimation package
import { TypeAnimation } from "react-type-animation";
import ReferEarn from '../components/ReferEarn.jsx'


const Hero = () => {
  const [showdemo, setShowDemo] = useState(false);

  const showdemoClose = () => setShowDemo(false);

  // const showdemoShow = () => setShowDemo(true);
  return (
    <>
      {/* SEO */}
      <Helmet>
        <title>GROWTERN ACADEMY | 100% Job Guarantee Course</title>
        <meta
          name="description"
          content="Growtern Academy – 100% Job-Guaranteed, Internship, Training & Career Growth Platform"
        />
      </Helmet>


      {/* Hero Section Start Here */}
      <section className='Hero-Section ' id='Home'>
        <div className='container'>
          {/* Hero Section content text + Images Start Here */}
          <div className='row '>
            <div className='col-md-5 p-0 mt-md-5 mt-3'>
              <div className='p-0'>
                <span className='Job-Assurance '>100% Placement Guaranteed</span>
                <h1 className="Hero-heading mb-0">Best Online<br />Platform For<span className='fw-bold'></span>&nbsp;
                  <span className="text-changer " style={{ "--n": 10, "--interval": "1s" }}>
                    <span className="word py-1" style={{ "--i": 0 }}>Python Full Stack</span>
                    <span className="word " style={{ "--i": 1 }}> </span>
                    <span className="word py-1" style={{ "--i": 2 }}>Java Full Stack</span>
                    <span className="word " style={{ "--i": 3 }}></span>
                    <span className="word py-1" style={{ "--i": 4 }}>MERN Stack</span>
                    <span className="word " style={{ "--i": 5 }}></span>
                    <span className="word py-1" style={{ "--i": 6 }}>Data Analytics</span>
                    <span className="word " style={{ "--i": 7 }}></span>
                    <span className="word py-1" style={{ "--i": 8 }}>Generative AI</span>
                    <span className="word " style={{ "--i": 9 }}></span>
                  </span>

                </h1>
                <p className='hero-Msg text-white mb-0'>Online Live classes courses form the world’s leading
                  experts join learners today.
                </p>
                <div className='w-100 d-md-flex gap-4 mt-4'>

                  <Link
                    to="/Certificate-Courses"
                    onClick={() => window.scrollTo(0, 0)}
                    style={{ textDecoration: "none", color: "white" }}>
                    <button className='btn button-1' >
                      Short-Term Courses
                    </button>
                  </Link>

                  <Link to="/Job-Oriented-Courses"
                    onClick={() => window.scrollTo(0, 0)}
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    <button className='btn button-2'>
                      Placement Guaranteed Courses
                    </button>
                  </Link>

                </div>
                <div className='Icon-Div'>
                  <div className='Bg-Circle'>
                    <a href="https://www.facebook.com/share/17RMQ9EsN4/?mibextid=wwXIfr" target='balnk'><i className="bi bi-facebook Icon"></i></a>
                  </div>
                  <div className='Bg-Circle'>
                    <a target='balnk' href="https://www.instagram.com/growternacademy/"><i className="bi bi-instagram Icon"></i></a>
                  </div>
                  <div className='Bg-Circle'>
                    <a href="https://www.linkedin.com/company/internly-a-unit-of-jaymamta-industries-private-limited/" target='balnk'><i className="bi bi-linkedin Icon"></i></a>
                  </div>
                  <div className='Bg-Circle'>
                    <a href="https://www.threads.com/@growtern_online_training?igshid=NTc4MTIwNjQ2YQ==" target='balnk' style={{ textDecoration: "none", color: "white", fontSize: "1.3rem" }}><i className="bi bi-threads"></i></a>
                  </div>
                  <div className='Bg-Circle'>
                    <a href="https://www.youtube.com/@GrowternAcademy" target='balnk'><i className="bi bi-youtube Icon"></i></a>
                  </div>
                </div>
              </div>
            </div>
            {/* Hero image Block */}
            <div className='col-md-7 p-0'>
              <div style={{ position: "relative" }} className='heroright-Div'>
                <div className='Bg-LogoDiv w-100 d-flex justify-content-center align-items-center'>
                  <img className='Bg-Logo' src={herobg} alt="bg Cricule" />
                  <img className='HeroGirl-Img' src={heroimg} alt="hero-image" />
                </div>
                {/* Flying logos */}
                <img className='React' src={react} alt="react" />
                <img className='Javascript' src={jslogo} alt="Javascript" />
                <img className='Java' src={java} alt="Java" />
                <img className='MongoDB' src={MongoDB} alt="MongoDB" />
                <img className='Nodejs' src={node} alt="node" />
                <img className='Python' src={Python} alt="Python" />
                <img className='Angular' src={Angular} alt="Angular" />
                <img className='SQLlogo' src={SQLlogo} alt="SQLlogo" />
                <img className='Html' src={Html} alt="Html" />
                <img className='Tailwind' src={Tailwind} alt="Tailwind" />
              </div>
            </div>
          </div>
          {/* Hero Section content text + Images End Here */}
          {/* Flote Bubbels Start Here */}
          <div className=' container '>
            <div className="row ">
              <div className="col-md-12 p-0">
                <div className='bubbol-Div w-100'>
                  <img src={bubble} />
                  <img src={bubble} />
                  <img src={bubble} />
                  <img src={bubble} />
                  <img src={bubble} />
                </div>
              </div>
            </div>
          </div>
          {/* Flote Bubbels End Here */}
        </div>
      </section>
      {/* Hero Section End Here */}

      {/*About Card section */}
      <section className="AboutUs-Section py-5">
        <div className="container">
          <div className="row g-4 justify-content-center text-center">
            <div className="col-6 col-sm-4 col-md-2">
              <div className="Small-card">
                <h3 className="mb-0 count">500+</h3>
                <p className="mb-0 Name">Hiring Partners</p>
              </div>
            </div>

            <div className="col-6 col-sm-4 col-md-2">
              <div className="Small-card">
                <h3 className="mb-0 count">6 LPA</h3>
                <p className="mb-0 Name">Average Salary</p>
              </div>
            </div>

            <div className="col-6 col-sm-4 col-md-2">
              <div className="Small-card">
                <h3 className="mb-0 count">700+</h3>
                <p className="mb-0 Name">Students Placed</p>
              </div>
            </div>

            <div className="col-6 col-sm-4 col-md-2">
              <div className="Small-card">
                <h3 className="mb-0 count">500+</h3>
                <p className="mb-0 Name">Internships</p>
              </div>
            </div>

            <div className="col-6 col-sm-4 col-md-2">
              <div className="Small-card">
                <h3 className="mb-0 count">80+</h3>
                <p className="mb-0 Name">Instructors</p>
              </div>
            </div>

            <div className="col-6 col-sm-4 col-md-2">
              <div className="Small-card">
                <h3 className="mb-0 count">4.5/5</h3>
                <p className="mb-0 Name">Google Rating</p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Online training section start here */}
      <section className='Online-training'>
        <div className='container'>
          <div className='row align-items-center '>
            <div className='col-md-6  p-0'>
              <div className=' d-flex justify-content-center'>
                <img style={{ width: "80%" }} className='img-fluid ' src={OnlineTrainingimg} alt="image" />
              </div>
            </div>
            <div className='col-md-6 p-0'>
              <div>
                <h2 className='Online-heading'>Benefits of <span style={{ color: "#F39001" }}>1:1 Live</span> Training</h2>
                <ul className='List'>
                  <li>✅ 100% Live Sessions & 1:1 Mentorship</li>
                  <li>🎓 Industry Recognized Courses & Certificate</li>
                  <li>💻 Hands-on Practical & Live Projects</li>
                  <li>⏰ 24X7 doubt clearing assistance</li>
                  <li className="blink">🚀 100% Placement Guaranteed Courses</li>
                  <li>💰 Most affordable & Best in class</li>
                  <li>🧑‍💼 Mock Interviews for Placement preparation</li>
                  <li>🌍 Globally Accepted Certificate</li>
                  <li>🎯 No Career Break During Course</li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </section>

    {/* MentorSection Start Here */}
      <MentorSection />

      {/* Couse Card Section */}
      <section className='CourseCard-section '>
        <div className='container p-0'>
          <div className='p-0 m-0 text-center'>

            {/*the typeanimation */}
            <h2 className="main-heading">
              <TypeAnimation
                sequence={[
                  "High Demand",
                  1500,
                  "Industry Ready",
                  1500,
                  "Trending",
                  1500,
                  "Top Rated",
                  1500,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                style={{
                  color: "#fff",
                  display: "inline-block",
                }}
              />

              <span style={{ color: "#FFAE39" }}>
                {" "}Placement Guaranteed{" "}
              </span>

              Courses
            </h2>

            <p className='Message p-0'>Empowering you with real-world, project-based coding courses to achieve your goals.</p>
          </div>
          <CourseCard />
          <div className='Lower-ButtonDiv'>
            <Link to="/Job-Oriented-Courses" onClick={() => window.scrollTo(0, 0)}>
              <button className='JobLeading-Btn'>
                Placement Guaranteed Trainings
              </button>
            </Link>
            <Link to="/Certificate-Courses" onClick={() => window.scrollTo(0, 0)}>
              <button className=' Intenship-Btn'>Intenship Trainings</button>
            </Link>
          </div>
        </div>
      </section>

       {/* refer and earn */}
      <ReferEarn/>

      {/* Job Guaranteed seaction */}
      <JobGuarantee />

      {/* Collaborations */}
      <Collaboration/>

      {/* Placed Student Section */}
      <PlacedStudent />
      

      {/* Image Gallery Section */}
      <Gallery />

      {/* Review Section Start here */}
      <Review />


      <CustomModal show={showdemo} handleClose={showdemoClose} modalSize="small">
        <span className="modal-close" onClick={showdemoClose} style={{ color: "red", fontSize: "2rem", top: "-8px", right: "4px" }}>&times;</span>
        <ApplyNowModal />
      </CustomModal>

    </>
  )
}

export default Hero