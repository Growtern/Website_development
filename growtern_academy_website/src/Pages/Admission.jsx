"use client";

import { useState } from "react";
import "../Styles/Admission.css"
import Payment from "../components/Payment";

// import {Paper,Box} from "@mui/material";

const Admission = () => {
  const initialFormData = {
    full_name: "",
    email: "",
    mobile: "",
    whatsapp: "",
    dob: "",
    qualification: "",
    college: "",
    year_passing: "",
    course: "",
    start_date: "",
    duration: "",
    counsellor: "",
    course_fee: "",
    gender: "",
    address: "",
    screenshort: null,
  };

  const [formData, setFormData] = useState(initialFormData);
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isJobLeading, setJobLeading] = useState(false)


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({
        ...prev,
        screenshort: file,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("");
    setIsSubmitting(true);

    try {
      let base64String = "";
      let fileType = "";
      let fileName = "";

      if (formData.screenshort) {
        const file = formData.screenshort;
        fileType = file.type;
        fileName = file.name;

        const reader = new FileReader();
        base64String = await new Promise((resolve, reject) => {
          reader.onload = () => resolve(reader.result.split(",")[1]);
          reader.onerror = reject;
          reader.readAsDataURL(file);
        });
      }

      // ✅ Create payload object with all fields
      const payload = {
        full_name: formData.full_name,
        email: formData.email,
        mobile: formData.mobile,
        whatsapp: formData.whatsapp,
        dob: formData.dob,
        qualification: formData.qualification,
        college: formData.college,
        year_passing: formData.year_passing,
        course: formData.course,
        start_date: formData.start_date,
        duration: formData.duration,
        counsellor: formData.counsellor,
        course_fee: formData.course_fee,
        gender: formData.gender,
        address: formData.address,
        screenshort: base64String,
        screenshortType: fileType,
        screenshortName: fileName,
      };

      console.log("Sending payload:", payload);

      // eslint-disable-next-line no-unused-vars
      //old = "https://script.google.com/macros/s/AKfycbzQ3IXrDJC4Raac8N3j2yIe2usDFs8txX59p3aB6DLfA1LU0n8FIcCZlHB5YGWSNKKR/exec",
      const response = await fetch(
        import.meta.env.VITE_ADMISSION_APP_SCRIPT_API,
        {
          method: "POST",
          mode: "no-cors", // ✅ Important for Apps Script
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams(payload),
        }
      );

      console.log("Form submitted successfully");

      setStatus(
        "✅ Great! We've received your admission form. Our team will contact you soon!"
      );

      setFormData(initialFormData);
      e.target.reset();
    } catch (error) {
      console.error("Submission error:", error);
      setStatus("❌ Something went wrong. Please try again!");
    } finally {
      setIsSubmitting(false);
    }
  };

  // const handleBooking = () => {
  //   const { course } = formData;

  //   const firstFour = [
  //     "Web Designing Internship",
  //     "UI/UX Designing Internship",
  //     "Node.js Development Internship",
  //     "Core Java Programming Internship",
  //     "Data Analyst Internship",
  //   ];

  //   const nextFour = [
  //     "MERN Stack With AI Prompt Engineering",
  //     "Python Full Stack with AI Prompt Engineering",
  //     "Java Full Stack with AI Prompt Engineering",
  //     "Advance Front-end Development with AI Prompt Engineering",
  //   ];

  //   if (firstFour.includes(course)) {
  //     window.open(
  //       "https://razorpay.com/payment-link/plink_RHDGnVdRS3NN1b",
  //       "_blank"
  //     );
  //   } else if (nextFour.includes(course)) {
  //     window.open(
  //       "https://razorpay.com/payment-link/plink_RHDOS3nUGqaASx",
  //       "_blank"
  //     );
  //   } else {
  //     alert("⚠️ Please select a valid course before booking!");
  //   }
  // };

  return (
    <>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
        rel="stylesheet"
      />

      {/* Admission Form Section */}
      <section
        className="From-section"
        style={{
          background: "linear-gradient(135deg, #097fe7ff 0%, #000428 100%)",
          minHeight: "100vh",
          padding: "60px 0",
        }}
      >
        <div className="container">
          <form
            onSubmit={handleSubmit}
            className="mx-auto shadow-lg py-5 form-body"
            style={{
              maxWidth: "900px",
              borderRadius: "20px",
              background: "rgba(255, 255, 255, 0.95)",
              backdropFilter: "blur(10px)",
              color: "#333",
            }}
          >
            <h2 className="text-center mb-4 fw-bold text-dark">
              Seat{" "}
              <span
                className="fw-bold"
                style={{
                  color: "#ff5e2e",
                  textShadow: "1px 1px 4px rgba(255, 94, 46, 0.3)",
                }}
              >
                Reservation
              </span>{" "}
              Form
            </h2>

            <div className="row g-3">
              <div className="col-md-6">
                <label className="form-label fw-medium">Select Course Type*</label>
                <select
                  name="coursetype"
                  value={isJobLeading ? "Job Leading" : "Internship"}
                  onChange={(e) => setJobLeading(e.target.value === "Job Leading")}
                  required
                  className="form-select"
                >
                  <option value="">-- Select Course Type --</option>
                  <option value="Job Leading">Job Leading</option>
                  <option value="Internship">Internship</option>
                </select>
              </div>
              {/* Name */}
              <div className="col-md-6">
                <label className="form-label fw-medium">Enter Your Full Name*</label>
                <input
                  type="text"
                  name="full_name"
                  placeholder="Full Name (As per certificate)"
                  value={formData.full_name}
                  onChange={handleChange}
                  required
                  className="form-control"
                />
              </div>

              {/* Email */}
              <div className="col-md-6">
                <label className="form-label fw-medium">Enter Your Email*</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email ID"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="form-control"
                />
              </div>

              {/* Mobile */}
              <div className="col-md-6">
                <label className="form-label fw-medium">Enter Your Mobile No*</label>
                <input
                  type="tel"
                  name="mobile"
                  placeholder="Mobile Number"
                  value={formData.mobile}
                  onChange={handleChange}
                  required
                  pattern="[0-9]{10}"
                  className="form-control"
                />
              </div>

              {/* WhatsApp */}
              <div className="col-md-6">
                <label className="form-label fw-medium">Enter Your WhatsApp Number*</label>
                <input
                  type="tel"
                  name="whatsapp"
                  placeholder="WhatsApp Number"
                  value={formData.whatsapp}
                  onChange={handleChange}
                  required
                  pattern="[0-9]{10}"
                  className="form-control"
                />
              </div>

              {/* DOB */}
              <div className="col-md-6">
                <label className="form-label fw-medium">Enter Your D.O.B *</label>
                <input
                  type="date"
                  name="dob"
                  value={formData.dob}
                  onChange={handleChange}
                  required
                  className="form-control"
                />
              </div>

              {/* Gender */}
              <div className="col-md-6">
                <label className="form-label fw-medium">Select Gender*</label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  required
                  className="form-select"
                >
                  <option value="" disabled>
                    -- Select Gender --
                  </option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Prefer not to say">Prefer not to say</option>
                </select>
              </div>

              {/* Qualification */}
              <div className="col-md-6">
                <label className="form-label fw-medium">Select Your Highest Qualification*</label>
                <select
                  name="qualification"
                  value={formData.qualification}
                  onChange={handleChange}
                  required
                  className="form-select"
                >
                  <option value="">-- Select Qualification --</option>
                  <option value="10th">10th</option>
                  <option value="12th">12th</option>
                  <option value="Diploma">Diploma</option>
                  <option value="B.tech">B.Tech</option>
                  <option value="M.tech">M.Tech</option>
                  <option value="MCA">MCA</option>
                  <option value="BA">BA</option>
                  <option value="Bcom">BCOM</option>
                  <option value="BCA">BCA</option>
                  <option value="Bse">BSE</option>
                  <option value="Post Graduation">Post Graduation</option>
                  <option value="PhD">PhD</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* College */}
              <div className="col-md-6">
                <label className="form-label fw-medium">Enter Your College and University*</label>
                <input
                  type="text"
                  name="college"
                  placeholder="College / University"
                  value={formData.college}
                  onChange={handleChange}
                  required
                  className="form-control"
                />
              </div>

              {/* Year */}
              <div className="col-md-6">
                <label className="form-label fw-medium">Select Year Of Passing*</label>
                <select
                  name="year_passing"
                  value={formData.year_passing}
                  onChange={handleChange}
                  required
                  className="form-select"
                >
                  <option value="">-- Select Year --</option>
                  {Array.from({ length: 41 }, (_, i) => {
                    const year = new Date().getFullYear() + 5 - i;
                    return (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    );
                  })}
                </select>
              </div>

              {/* Course */}
              <div className="col-md-6">
                <label className="form-label fw-medium">Select Course*</label>
                {isJobLeading ? <select
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  required
                  className="form-select"
                >
                  <option value="" disabled>
                    Course / Internship Applied For
                  </option>
                  <option value="PGPP in MERN Stack with Gen AI">
                    PGPP in MERN Stack with Gen AI
                  </option>
                  <option value="PGPP in Java Full Stack Development with Gen AI">
                    PGPP in Java Full Stack Development with Gen AI
                  </option>
                  <option value="PGPP in Python Full Stack Development with Gen AI">
                    PGPP in Python Full Stack Development with Gen AI
                  </option>
                  <option value="PGPP in Artificial Intelligence & Machine Learning">
                    PGPP in Artificial Intelligence & Machine Learning
                  </option>
                  {/* testing this  */}
                  <option value="PGPP in Data Science & Analytics with Gen AI">PGPP in Data Science & Analytics with Gen AI</option>
                </select> : <select
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  required
                  className="form-select"
                >
                  <option value="" disabled>
                    Course / Internship Applied For
                  </option>
                  <option value="AI-powered Website Designer">AI-powered Website Designer</option>
                  <option value="AI-powered Data Science & Analytics">AI-powered Data Science & Analytics</option>
                  <option value="AI-powered Backend Development(Node Js)">AI-powered Backend Development(Node Js)
                  </option>
                  <option value="AI-powered Java Developer">AI-powered Java Developer</option>
                  <option value="AI-powered Python Developer">AI-powered Python Developer</option>
                  <option value="AI-powered Python Developer">AI-powered Python Developer</option>
                  <option value="AI-powered Advance Frontend Development">AI-powered Advance Frontend Development</option>
                </select>}
              </div>

              {/* Duration */}
              <div className="col-md-6">
                <label className="form-label fw-medium">Select Duration</label>
                <select
                  name="duration"
                  value={formData.duration}
                  onChange={handleChange}
                  className="form-select"
                >
                  <option value="" disabled>
                    Select Duration
                  </option>
                  <option value="1 Month">1 Month</option>
                  <option value="2 Months">2 Months</option>
                  <option value="3 Months">3 Months</option>
                  <option value="4 Months">4 Months</option>
                  <option value="5 Months">5 Months</option>
                  <option value="6 Months">6 Months</option>
                  <option value="10 Months">10 Months</option>
                  <option value="1 Year">1 Year</option>
                </select>
              </div>

              {/* Counsellor */}
              <div className="col-md-6">
                <label className="form-label fw-medium">Enter Counsellor Name*</label>
                <input
                  type="text"
                  name="counsellor"
                  placeholder="Counsellor Name"
                  value={formData.counsellor}
                  onChange={handleChange}
                  className="form-control"
                  required
                />
              </div>

              {/* Address */}
              <div className="col-md-6">
                <label className="form-label fw-medium">Enter Your Address*</label>
                <input
                  name="address"
                  placeholder="Address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  className="form-control"
                />
              </div>

              {/* Fee */}
              <div className="col-md-6">
                <label className="form-label fw-medium">Enter Final Course Fee*</label>
                <input
                  type="number"
                  name="course_fee"
                  placeholder="Course Fee"
                  value={formData.course_fee}
                  onChange={handleChange}
                  required
                  className="form-control"
                />
              </div>



              {/* Booking Button */}
              {/* <div className="col-md-6">
                <div className="btn w-100 fw-semibold"
                  style={{
                    marginTop: "32px",
                    padding:"5px",
                    background:"#ff5e2e"
                  }}>
                  <Payment
                    buttonText="Book your seats now and pay just ₹1,999"
                    amount={1999}             // Price in INR
                    user={{                   // Logged-in user info
                      name: "Enter Your Name",
                      email: "Enter Your Email",
                      phone: "Enter mobile number to continue",
                    }}
                    buttonBg="#ff5e2e"        // Button and modal theme color
                    buttonColor="#ffffff"
                  />
                </div>




              </div> */}
              {/* Screenshot */}
              <div className="col-md-12">
                <label className="form-label fw-medium">Upload Your Payment Screenshot(discuss with Your Counsellor)*</label>
                <input
                  type="file"
                  name="screenshort"
                  onChange={handleFileChange}
                  required
                  className="form-control"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div style={{ display: "flex", justifyContent: "center" }}>
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn mt-4 fw-semibold"
                style={{
                  background: "linear-gradient(90deg, #007bff, #00c6ff)",
                  color: "white",
                  border: "none",
                  padding: "10px 40px",
                  borderRadius: "30px",
                }}
              >
                {isSubmitting ? "SUBMITTING..." : "SUBMIT"}
              </button>
            </div>

            {/* Status Message */}
            {status && (
              <div
                className={`alert mt-3 text-center ${status.startsWith("✅") ? "alert-success" : "alert-danger"
                  }`}
                role="alert"
              >
                {status}
              </div>
            )}
          </form>
        </div>
      </section>
    </>
  );
};

export default Admission;