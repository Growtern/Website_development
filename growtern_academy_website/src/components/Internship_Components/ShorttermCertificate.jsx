import { useState } from "react";
import CustomModal from "../../ui/Modal";
import ApplyNowModal from "../Modals/ApplyNowModal";
import "../../Styles/Internship_styles/ShorttermCertificate.css";
import certificateImage from "../../assets/Certificates/InternshipCertificate.png";

export default function ShorttermCertificate() {

  const [courseType, setCourseType] = useState("default");

  const [showEnrollModal, setShowEnrollModal] = useState(false);

  const openEnrollModal = () => setShowEnrollModal(true);
  const closeEnrollModal = () => setShowEnrollModal(false);

  return (
    <>
      <section className="certificate-achievement-section py-5">

        <div className="">

          {/* Section Heading */}
          <div className="certificate-section-header text-center mb-5">
            <h2 className="certificate-section-title">
              Course <span className="highlight-text">Achievement</span> Certificate
            </h2>

            <p className="certificate-section-subtitle">
              A Certificate of Completion will be awarded after finishing the course
            </p>
          </div>

          {/* Main Content Card */}
          <div className="certificate-achievement-card">

            <div className="row align-items-center">

              {/* Certificate Image */}
              <div className="col-lg-6 certificate-image-container text-center">
                <img
                  src={certificateImage}
                  alt="Growtern Internship Certificate"
                  className="certificate-image"
                />
              </div>

              {/* Certificate Details */}
              <div className="col-lg-6 certificate-details">

                <h4 className="certificate-title">
                  Internship Certificate From Growtern
                </h4>

                <ul className="certificate-benefits-list">
                  <li>🏆 Gain Practical Experience</li>
                  <li>🎓 100% Live Sessions & 1:1 Mentorship</li>
                  <li>💼 Industry-Relevant Exposure</li>
                  <li>🏅 Globally Accepted Certificate</li>
                </ul>

                <button
                  className="certificate-enroll-btn"
                  onClick={() => {
                    setCourseType("internship");
                    openEnrollModal(); // ✅ correct function
                  }}
                >
                  Enroll Now
                </button>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* Modal */}
      <CustomModal show={showEnrollModal} handleClose={closeEnrollModal} modalSize="small">
        <span
          className="modal-close"
          onClick={closeEnrollModal}
        >
          &times;
        </span>

        <ApplyNowModal type={courseType} />
      </CustomModal>
    </>
  );
}