import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function JobGuaranteedEnroll() {
  const [accepted, setAccepted] = useState(false);

  return (
    <>
     {/* Agreement */}
      <div className="form-check mt-3">
        <input
          className="form-check-input"
          type="checkbox"
          id="jobAgree"
          checked={accepted}
          onChange={(e) => setAccepted(e.target.checked)}
        />
        <label className="form-check-label" htmlFor="jobAgree">
          I have read and agree to the{" "}
          <Link
            to="/termscondition"
            target="_blank"
            className="text-warning fw-bold"
            // style={{ textDecoration: "underline" }}
          >
            Term & Conditions.
          </Link>
        </label>
      </div>

      {!accepted && (
        <small className="text-danger d-block mt-1">
          You must accept the Job Guarantee Terms to continue.
        </small>
      )}

      {/* Enroll Button */}
      <button
        className="btn btn-lg btn-success  mt-4"
        disabled={!accepted}
        onClick={() => alert("Proceed to Registration / Payment")}
      >
        Enroll Now
      </button>
    </>

     

   
  );
}
