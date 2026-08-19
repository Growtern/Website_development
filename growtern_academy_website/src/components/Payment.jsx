import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

import CustomModal from "../ui/Modal";
import SheetBookingPaymentModal from "./Modals/SheetBookingPaymentModal";
import WorkshopModal from "./Modals/WorkshopModal";
import WorkshopRequestCallback from "./Modals/WorkshopRequestCallback";


// ✅ Simple Toast Notification Component (alert() replace)
const Toast = ({ message, type, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 4000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div
      style={{
        position: "fixed",
        top: "20px",
        right: "20px",
        zIndex: 99999,
        background: type === "success" ? "#28a745" : "#dc3545",
        color: "#fff",
        padding: "14px 24px",
        borderRadius: "10px",
        fontWeight: "600",
        fontSize: "15px",
        boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
        minWidth: "280px",
        textAlign: "center",
      }}
    >
      {message}
    </div>
  );
};

export default function Payment({
  amount,
  buttonBg,
  buttonColor,
  buttonText,
}) {
  const [showdemo, setShowDemo] = useState(false);
  const [loading, setLoading] = useState(false);

  // ✅ Toast state (alert() ki jagah)
  const [toast, setToast] = useState({ show: false, message: "", type: "" });

  const location = useLocation();
  const isWorkshopPage = location.pathname.includes("/workshop-page");

  const API_URL = import.meta.env.VITE_API_URL;
  const RAZORPAY_KEY = import.meta.env.VITE_RAZORPAY_KEY;

  const showdemoClose = () => setShowDemo(false);
  const showdemoShow = () => setShowDemo(true);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  // ✅ Toast helper
  const showToast = (message, type = "success") => {
    setToast({ show: true, message, type });
  };

  const hideToast = () => {
    setToast({ show: false, message: "", type: "" });
  };

  // Load Razorpay script once
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleFormSubmit = async (formData) => {
    setShowDemo(false);
    setLoading(true);

    try {
      const orderResponse = await axios.post(
        `${API_URL}/api/payment/order`,
        { amount }
      );

      const { order } = orderResponse.data;

      const options = {
        key: RAZORPAY_KEY,
        amount: order.amount,
        currency: "INR",
        name: "Growtern Academy",
        description: isWorkshopPage
          ? "Workshop Payment"
          : "Sheet Booking Payment",
        image: "https://growtern.com/assets/Inte_logo-CRYEwrjA.png",
        order_id: order.id,

        prefill: {
          name: formData.fullName,
          email: formData.email,
          contact: formData.contactNumber,
        },

        theme: { color: buttonBg },

        handler: async (response) => {
          const verificationData = {
            razorpay_order_id: response.razorpay_order_id,
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_signature: response.razorpay_signature,
            fullName: formData.fullName,
            email: formData.email,
            contactNumber: formData.contactNumber,
            whatsappNumber: formData.whatsappNumber,
            qualification: formData.qualification,
            course: formData.course,
            paymentType: isWorkshopPage ? "WORKSHOP" : "SHEET_BOOKING",
            amount,
          };

          try {
            await axios.post(
              `${API_URL}/api/payment/verify`,
              verificationData
            );
            // ✅ alert() hata ke toast use karo — page reload nahi hoga
            showToast("✅ Payment Successful! Please upload your screenshot below.", "success");
          } catch (err) {
            console.error("Verification failed", err);
            // ✅ alert() hata ke toast use karo
            showToast("❌ Payment verification failed. Please contact support.", "error");
          } finally {
            setLoading(false);
          }
        },

        modal: {
          ondismiss: () => setLoading(false),
        },
      };

      const rzp = new window.Razorpay(options);

      // ✅ Razorpay ke hidden form submit ko rok do
      rzp.on("payment.failed", (response) => {
        console.error("Payment failed:", response.error);
        showToast("❌ Payment failed. Please try again!", "error");
        setLoading(false);
      });

      rzp.open();
    } catch (error) {
      console.error("Failed to create order", error);
      // ✅ alert() hata ke toast use karo
      showToast("❌ Failed to create order. Please try again!", "error");
      setLoading(false);
    }
  };

  return (
    <>
      {/* ✅ Toast Notification */}
      {toast.show && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={hideToast}
        />
      )}

      <CustomModal show={showdemo} handleClose={showdemoClose}>
        <span
          className="modal-close"
          onClick={showdemoClose}
          style={{
            color: "red",
            fontSize: "2rem",
            top: "-8px",
            right: "4px",
            cursor: "pointer",
          }}
        >
          &times;
        </span>

        {isWorkshopPage ? (
          <WorkshopModal onFormSubmit={handleFormSubmit} />
        ) : (
          <SheetBookingPaymentModal onFormSubmit={handleFormSubmit} />
        )}
      </CustomModal>

      <button
        onClick={showdemoShow}
        disabled={loading}
        style={{
          width: "100%",
          backgroundColor: loading ? "#ccc" : buttonBg,
          color: buttonColor,
          height: "100%",
          fontWeight: "600",
          borderRadius: "6px",
          border: "none",
          cursor: loading ? "not-allowed" : "pointer",
        }}
      >
        {loading ? (
          <>
          {/* added spinner animation */}
            <span
              className="spinner-border spinner-border-sm me-2"
              role="status"
              aria-hidden="true"
            />
            Processing...
          </>
        ) : (
          buttonText || "Book Your Seat"
        )}
      </button>

      <CustomModal show={show} handleClose={handleClose} modalSize="small">
        <span
          className="modal-close"
          onClick={handleClose}
          style={{
            color: "red",
            fontSize: "2rem",
            top: "-8px",
            right: "4px",
          }}
        >
          &times;
        </span>
        <WorkshopRequestCallback />
      </CustomModal>
    </>
  );
}