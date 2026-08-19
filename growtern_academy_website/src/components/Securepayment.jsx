// SecurePayment.jsx

import React from "react";
import "../Styles/SecurePayment.css";

const SecurePayment = () => {
  return (
    <div className="sp-payment-wrapper">

      {/* Secure Badge */}
      <div className="sp-secure-badge">
        <span className="sp-secure-icon">✔</span>
        100% safe &amp; secure payment
      </div>

      {/* Razorpay Badge */}
      <div className="sp-razorpay-badge">
        <span className="sp-razorpay-logo">
          <span className="sp-razorpay-arrow">⚡</span>
          Razorpay
        </span>
      </div>

    </div>
  );
};

export default SecurePayment;