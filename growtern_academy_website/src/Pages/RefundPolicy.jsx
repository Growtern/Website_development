import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function RefundPolicy() {
  return (
    <div
      style={{
        background: "linear-gradient(135deg, #0d47a1, #00b4d8)",
        color: "white",
        minHeight: "100vh",
        paddingTop: "10px",
        fontFamily: "Poppins, sans-serif",
        
      }}
    >
      <div className="container py-5">

        {/* Header */}
        <div className="text-center mb-5">
          <h1 className="fw-bold text-white"> Refund Policy <span style={{fontSize:"2rem"}}>💳</span></h1>
          <p className="text-white opacity-75">
            Job-Guaranteed Program – Clear, transparent & legally protected
          </p>
        </div>

        {/* Glass Card */}
        <div
          className="card border-0 shadow-lg rounded-4 p-4 p-md-5"
          style={{
            background: "rgba(255,255,255,0.12)",
            backdropFilter: "blur(14px)",
            color: "white",
          }}
        >

          {/* Highlights */}
          <div className="row g-4 mb-4">
            <div className="col-md-4">
              <div className="p-3 rounded-4 bg-dark bg-opacity-50 text-center">
                <h6>Seat Booking Fee</h6>
                <p className="mb-0 text-warning">₹1,999 (Non-Refundable)</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="p-3 rounded-4 bg-dark bg-opacity-50 text-center">
                <h6>Admission Fee</h6>
                <p className="mb-0 text-warning">7 Days (10% Deduction)</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="p-3 rounded-4 bg-dark bg-opacity-50 text-center">
                <h6>Course Fee</h6>
                <p className="mb-0 text-warning">Up to 50% Refund</p>
              </div>
            </div>
          </div>

          <Section title="1. Fee Structure">
            <li>Seat Reservation Fee – ₹1,999</li>
            <li>Admission & Onboarding Fee – ₹4,999</li>
            <li>Course / Training Fee – As per selected program</li>
            <li>Internship & Placement Fees – If applicable</li>
          </Section>

          <Section title="2. Seat Reservation Fee">
            <li>Seat fee is strictly non-refundable under all circumstances.</li>
          </Section>

          <Section title="3. Admission Fee Refund">
            <li>Refundable only within <b>7 days of joining</b></li>
            <li><b>10% processing fee</b> will be deducted</li>
            <li>Applicable only for genuine emergency cases</li>
            <li>After 7 days, admission fee becomes non-refundable</li>
          </Section>

          <Section title="4. Course Fee Refund">
            <li>Course fee is non-refundable after course completion</li>
            <li>50% refund only if Growtern fails to:</li>
            <li>Provide <b>interview opportunities</b></li>
            <li>Provide proper training & placement classes</li>
            <li>Follow the Job-Guaranteed program commitments</li>
          </Section>

          <Section title="5. Student Eligibility for Refund">
            <li>Minimum <b>90% attendance</b></li>
            <li>All assignments, labs & projects completed</li>
            <li>Attend all placement & interview sessions</li>
            <li>Maintain professional conduct</li>
          </Section>

          <Section title="6. Job Guarantee is NOT a Money-Back Guarantee">
            <li>Job guarantee = Interview opportunities + placement support</li>
            <li>No refund if job is delayed or rejected</li>
            <li>No guaranteed salary, company or location</li>
            <li>Offers depend on performance, market & company needs</li>
          </Section>

          <Section title="7. Internship & Placement Fees">
            <li>All internship & placement fees are non-refundable</li>
          </Section>

          <Section title="8. How to Request a Refund">
            <li>Email: <b>support@growtern.com</b></li>
            <li>Provide Transaction ID, Name, Email, Phone</li>
            <li>Reason for refund</li>
          </Section>

          <Section title="9. Refund Processing Time">
            <li>Reviewed within 7 working days</li>
            <li>Refund initiated in 30–45 days</li>
            <li>Credited within 7–10 business days</li>
          </Section>

          <Section title="10. Final Agreement">
            <li>Seat fee is non-refundable</li>
            <li>Admission fee follows 10–15 day + 10% deduction rule</li>
            <li>Course refund limited to 50% if Growtern fails</li>
            <li>Job Guarantee is not a money-back guarantee</li>
            <li>Attendance & placement participation is mandatory</li>
          </Section>

        </div>
      </div>
    </div>
  );
}

/* Reusable Section */
function Section({ title, children }) {
  return (
    <div className="mb-4">
      <h5 className="fw-bold text-warning mb-2">{title}</h5>
      <ul className="opacity-90">{children}</ul>
    </div>
  );
}
