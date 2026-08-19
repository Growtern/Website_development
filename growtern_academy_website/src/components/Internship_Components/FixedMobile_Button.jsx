import { useState } from "react";
import { FaPaperPlane, FaPhoneAlt } from "react-icons/fa";
import CustomModal from "../../ui/Modal";
import ApplyNowModal from "../../components/Modals/ApplyNowModal";
import "../../Styles/Internship_styles/FixedMobile_Button.css";

const MobileBar = () => {

    const [courseType, setCourseType] = useState("default");

    const [showDemo, setShowDemo] = useState(false);

    const handleClose = () => setShowDemo(false);

    return (
        <>
            <div className="internship-mobile-bar">

                <a
                    href="#apply-internship"
                    className="internship-mobile-bar__btn internship-mobile-bar__apply-button"
                    onClick={() => {
                        setCourseType("internship");
                        setShowDemo(true); // ✅ FIX
                    }}
                >
                    <FaPaperPlane className="internship-mobile-bar__icon" />
                    Apply Now
                </a>

                <a
                    href="tel:6372348042"
                    className="internship-mobile-bar__btn internship-mobile-bar__call-btn"
                >
                    <FaPhoneAlt className="internship-mobile-bar__icon" />
                    Call Us
                </a>

            </div>

            <CustomModal show={showDemo} handleClose={handleClose} modalSize="small">
                <span className="modal-close" onClick={handleClose}>&times;</span>
                <ApplyNowModal type={courseType} />
            </CustomModal>
        </>
    );
};

export default MobileBar;