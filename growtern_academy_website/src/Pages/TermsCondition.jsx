

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AgreementUI from "../components/AgreementUI";

const TermsCondition = () => {
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
        <div
          className="card shadow-lg border-0 rounded-4 p-4"
          style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
        >
          <h1 className="text-center fw-bold mb-4 text-light">
           Terms & Conditions
          </h1>

          {/* 1 */}
          <section className="mb-4">
            <h4 className="fw-semibold text-warning">1. Program Nature</h4>
            <p className="text-light">
              This is a Job-Guaranteed Training Program. The job guarantee applies
              only when the student fulfills all eligibility, attendance,
              performance, and placement participation rules mentioned on our
              website and offer page. The guarantee is conditional, not automatic.
            </p>
          </section>

          {/* 2 */}
          <section className="mb-4">
            <h4 className="fw-semibold text-warning">
              2. Eligibility for Job Guarantee
            </h4>
            <ul className="text-light">
              <li>Valid Degree, Diploma, or Final-year student</li>
              <li>Minimum 90% attendance</li>
              <li>At least 80% assignments, labs, and tasks completed</li>
              <li>Active participation in coding sessions and assessments</li>
              <li>Minimum 3 real-world projects</li>
              <li>1 final capstone project</li>
              <li>Active GitHub with approved code</li>
              <li>Job-ready resume, LinkedIn, and portfolio</li>
              <li>Attend all interviews scheduled by placement team</li>
              <li>Professional behavior and communication</li>
            </ul>
            <p className="fw-semibold text-light">
              Failure to meet any one of the above will cancel the Job Guarantee.
            </p>
          </section>

          {/* 3 */}
          <section className="mb-4">
            <h4 className="fw-semibold text-warning">3. Job Guarantee Meaning</h4>
            <p className="text-light">
              Job Guarantee means we will provide interview opportunities and
              placement support until the student receives at least one valid
              job offer, provided all rules are followed.
            </p>
            <p className="fw-semibold text-light">It does NOT mean:</p>
            <ul className="text-light">
              <li>Guaranteed salary</li>
              <li>Guaranteed job location</li>
              <li>Guaranteed company</li>
              <li>Government job</li>
              <li>Remote job</li>
            </ul>
            <p className="text-light">
              Job offers depend on student skill level, company requirements, and
              market demand.
            </p>
          </section>

          {/* 4 */}
          <section className="mb-4">
            <h4 className="fw-semibold text-warning">
              4. Offer Acceptance Rule
            </h4>
            <p className="text-light">
              If a student rejects a valid job offer, the Job Guarantee is
              considered fulfilled and closed.
            </p>
            <p className="fw-semibold text-light">A valid offer means:</p>
            <ul className="text-light">
              <li>The company has conducted an interview</li>
              <li>The role is related to the trained field</li>
              <li>Appointment letter or email confirmation is provided</li>
            </ul>
          </section>

          {/* 5 */}
          <section className="mb-4">
            <h4 className="fw-semibold text-warning">5. Placement Conduct</h4>
            <ul className="text-light">
              <li>Attend interviews on time</li>
              <li>Be honest in resume and interviews</li>
              <li>No fake skills or experience</li>
              <li>Maintain professional behavior</li>
            </ul>
            <p className="text-light">
              If a student is blacklisted by a hiring company due to misconduct,
              the Job Guarantee becomes invalid.
            </p>
          </section>

          {/* 6 */}
          <section className="mb-4">
            <h4 className="fw-semibold text-warning">
              6. Course Completion Requirement
            </h4>
            <ul className="text-light">
              <li>All modules must be completed</li>
              <li>All projects and assessments must be submitted</li>
              <li>Placement preparation training must be completed</li>
            </ul>
            <p className="text-light">
              Dropping out, long absence, or incomplete training cancels the Job
              Guarantee.
            </p>
          </section>

          {/* 7 */}
          <section className="mb-4">
            <h4 className="fw-semibold text-warning">7. Refund & Fee Policy</h4>
            <ul className="text-light">
              <li>All fees are non-refundable</li>
              <li>Job Guarantee is not a money-back guarantee</li>
              <li>We provide training and interview opportunities, not refunds</li>
              <li>Click here to go <a href="/refund-policy" style={{fontSize:"1.2rem",color:"#0037ff" }} >Refund-Policy</a>.</li>
            </ul>
          </section>

          {/* 8 */}
          <section className="mb-4">
            <h4 className="fw-semibold text-warning">
              8. Market & Hiring Factors
            </h4>
            <p className="text-light">
              Job placement depends on market demand, company hiring needs, and
              student performance. We are not responsible for hiring freezes,
              rejections, or market changes.
            </p>
          </section>

          {/* 9 */}
          <section className="mb-4">
            <h4 className="fw-semibold text-warning">9. Disciplinary Action</h4>
            <p className="text-light">
              We may cancel training, placement support, or Job Guarantee if a
              student violates rules, behaves abusively, submits fake documents,
              copies projects, or disrupts training.
            </p>
          </section>

          {/* 10 */}
          <section>
            <h4 className="fw-semibold text-warning">10. Agreement</h4>
            <p className="text-light">
              By enrolling, the student confirms that they have read and
              understood all rules, agree that the Job Guarantee is conditional,
              and accept these Terms & Conditions.
            </p>
          </section>
          
        </div>
      </div>
    </div>
  );
};

export default TermsCondition;
