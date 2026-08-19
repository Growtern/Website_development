import { Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import example from "../assets/Images/Internship/Summer-Internship-Banner-worksho.jpeg";
import { useLocation } from "react-router-dom";
import ModalImage from "../assets/Certificates/ModalImage.png";

const CustomModal = ({ show, handleClose, title, children }) => {
  const location = useLocation();
  // location

  const getModalImage = () => {
    if (location.pathname.includes("/workshop-page")) {
      return example;
    }
    return null;
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      {title && (
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
      )}

      <Modal.Body className="text-center">
        <img
          src={getModalImage() || ModalImage}
          alt="Certificate Preview"
          style={{
            width: "100%",
            height: "auto",
            borderRadius: "7px 7px 0px 0px",
            marginBottom: "15px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
          }}
        />

        {children}

        <style>{`
          .modal-body {
            padding: 0 !important;
          }
        `}</style>
      </Modal.Body>
    </Modal>
  );
};

export default CustomModal;
