import React from 'react';
import "../Styles/Footer.css";
import { Link } from 'react-router-dom';

// Images
// import QRCode from "../assets/Images/QR Code.png";
import mail from "../assets/Images/outline-email.png";
import Location from "../assets/Images/mdi_location.png";
import mobile from "../assets/Images/Call-Outline.png";
// import Logo from "../assets/Logos/LOGO.png";
import Logo from "../assets/Logos/Footer_Logo_growtern.png";

// importing icon from mui
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";

const Footer = () => {
  return (
    <div>
      <section className='Footer-Section'>
        <div className='container'>
          <div className='row mb-5'>
            <div className='col-md-6 p-0'>
              <a href="/" style={{ textDecoration: "none" }}>
                <div className='d-flex align-items-start gap-2 flex-column py-1'>
                  <img className='Logo rounded' src={Logo} alt="logo" />
                  <p className='loge-msg mb-0'>A UNIT OF JAYMAMTA INDUSTRIES</p>
                </div>
              </a>
              <p className='F-content mt-3 text-md-start' style={{ fontSize: "1rem" }}>
                Your Career is Our Responsibility - Your Success is Our Vision! Join Growtern
                today and take the first step toward a brighter, job-secured future.
              </p>
            </div>

            <div className='col-md-6 p-0'>
              <div className='Footer-iconSec'>
                <div>
                  <h6 className='mb-2 FollowUs'>Follow Us On :</h6>
                  <div className='iconDiv'>
                    <a className='icon' href="https://www.youtube.com/@GrowternAcademy" target="_blank" aria-label="YouTube"><i className="bi bi-youtube"></i></a>
                    <a className='icon' href="https://www.facebook.com/share/17RMQ9EsN4/?mibextid=wwXIfr" target="_blank" aria-label="Facebook"><i className="bi bi-facebook"></i></a>
                    <a className='icon' href="https://www.threads.com/@growtern_online_training?igshid=NTc4MTIwNjQ2YQ==" target="_blank" aria-label="thread"><i className="bi bi-threads"></i></a>
                    {/* <a className='icon' href="#" aria-label="Telegram"><i className="bi bi-telegram"></i></a> */}
                    <a className='icon' href="https://www.instagram.com/growternacademy/" target="_blank" rel="noopener noreferrer">
                      <i className="bi bi-instagram"></i>
                    </a>
                    <a className='icon' href="https://www.linkedin.com/company/internly-a-unit-of-jaymamta-industries-private-limited/" target="_blank" rel="noopener noreferrer">
                      <i className="bi bi-linkedin"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='row mt-4 my-4 g-2'>
            <div className='col-md-4 col-6 p-0'>
              <div>
                <h6 className='Sub-heading'>Quick Links</h6>
                <div className='mb-4' style={{ width: "70%", border: "1px solid white" }}></div>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px", paddingRight: "5px" }}>
                  <Link to="/" onClick={() => window.scrollTo(0, 0)} className='F-content' style={{ textDecoration: "none" }}>Home</Link>
                  <Link to="/about-us" onClick={() => window.scrollTo(0, 0)} className='F-content' style={{ textDecoration: "none" }}>About</Link>
                  {/* <Link to="/admission-form" onClick={() => window.scrollTo(0, 0)} className='F-content' style={{ textDecoration: "none" }}>Admission</Link> */}
                  <Link to="/Job-Oriented-Courses" onClick={() => window.scrollTo(0, 0)} className='F-content' style={{ textDecoration: "none" }}>100% Placement Guaranteed Courses</Link>
                  <Link to="/Certificate-Courses" onClick={() => window.scrollTo(0, 0)} className='F-content' style={{ textDecoration: "none" }}>Internship</Link>
                  <Link to="/hostel-near-me" onClick={() => window.scrollTo(0, 0)} className='F-content' style={{ textDecoration: "none" }}>Hostel Near Me</Link>
                </div>
              </div>
            </div>

            <div className='col-md-4 col-6 p-0'>
              <div className='Useful-Links'>
                <h6 className='Sub-heading'>Useful Links</h6>
                <div className='mb-4' style={{ width: "70%", border: "1px solid white" }}></div>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  <Link className='F-content' to={"/privacy-policy"} onClick={() => window.scrollTo(0, 0)}>Privacy Policy</Link>
                  <Link className='F-content' to={"/refund-policy"} onClick={() => window.scrollTo(0, 0)}>Refund Policy</Link>
                  <Link className='F-content' to={"/termscondition"} onClick={() => window.scrollTo(0, 0)}>Terms & Condition</Link>
                  <Link className='F-content' to={"/disclaimer"} onClick={() => window.scrollTo(0, 0)}>Disclaimer</Link>
                </div>
              </div>
            </div>

            <div className='col-md-4 p-0'>
              <div className='mt-5 mt-md-0'>
                <h6 className='Sub-heading'>Contact info</h6>
                <div className='mb-4' style={{ width: "70%", border: "1px solid white" }}></div>
                <div>
                  <EmailIcon
                    sx={{
                      color: "white",
                      fontSize: 22,
                    }}
                  />  {/*added d-inline to img inorder to make the img and span in one line*/}
                  <span className='ms-2 F-content'>support@growtern.com</span>
                </div>
                <div className='my-3' >
                  <LocationOnIcon
                    sx={{
                      color: "white",
                      fontSize: 22,
                    }}
                  />
                  <span className='ms-2 F-content'>Jagamara, BBSR, Odisha, India.</span>
                </div>
                <div>
                  <PhoneIcon
                    sx={{
                      color: "white",
                      fontSize: 22,
                    }}
                  />
                  <span className='ms-2 F-content'>+91 6372348042</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className='Copyright'>
        <p className='mb-0 copyright-message'>© 2025 Growtern. All Rights Reserved.</p>
      </div>
    </div>
  )
}

export default Footer;
