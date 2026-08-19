import React, { useState } from "react";
import { Link } from 'react-router-dom'
import { BsWhatsapp } from "react-icons/bs";
import { FaPhoneAlt } from "react-icons/fa";
import "../Styles/WhatsappAndCall.css";
import CustomModal from '../ui/Modal'
import CareerModal from '../components/Modals/CareerModal'

const FloatingButtons = () => {
  
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const [action, setAction] = useState("");

  const openWhatsappModal = () => {
    setAction("whatsapp");
    setShow(true);
  }

  const openCallModal = () => {
    setAction("call");
    setShow(true);
  }

  return (
    <div className="floating-buttons">
      {/* WhatsApp Button */}
      <button
        onClick={openWhatsappModal}
        rel="noopener noreferrer"
        className="whatsapp-btn"
        aria-label="Chat on WhatsApp"
      >
        <BsWhatsapp size={26} />
      </button>

      {/* Call Button */}
      <Link
        className="call-btn"
        aria-label="Call Us"
        onClick={openCallModal} 
      >
        <FaPhoneAlt size={22} />
      </Link>

      
      {/* modal */}
      <CustomModal show={show} handleClose={handleClose} modalSize="small">
        <span className="modal-close" onClick={handleClose} style={{ color: "red", fontSize: "2rem", top: "-8px", right: "4px" }}>&times;</span>
        <CareerModal
          action={action}
          onSuccess={handleClose}
        />
      </CustomModal>
    </div>
  );
};

export default FloatingButtons;
