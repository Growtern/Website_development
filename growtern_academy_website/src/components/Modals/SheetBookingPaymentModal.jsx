import React, { useState } from "react";
import { useParams, useLocation } from "react-router-dom";

const SheetBookingPaymentModal = ({ onFormSubmit }) => {
  const { slug } = useParams();
  const location = useLocation();

  const path = location.pathname;

  const secondDropdownSlugs = [
    "python-development",
    "website-design",
    "data-analytics",
    "backend-nodejs",
    "core-java",
    "advance-frontend",
  ];

  const isAdmissionPage = path === "/admission-form";
  const showSecondDropdown = secondDropdownSlugs.includes(slug);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    contactNumber: "",
    whatsappNumber: "",
    qualification: "",
    course: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation(); // ✅ Propagation rokna
    console.log("=== FORM DATA BEFORE SUBMIT ===");
    console.log(formData);
    onFormSubmit(formData);
  };

  const defaultCourses = [
    "PGPP in Artificial Intelligence & Machine Learning",
    "PGPP in Data Science & Analytics with Gen AI",
    "PGPP in MERN Stack with Gen AI",
    "PGPP in Python Full Stack Development with Gen AI",
    "PGPP in Java Full Stack Development with Gen AI",
  ];

  const internshipCourses = [
    "AI-powered Python Developer",
    "AI-powered Website Designer",
    "AI-powered Data Science & Analytics",
    "AI-powered Backend Development(Node Js)",
    "AI-powered Java Developer",
    "AI-powered Advance Frontend Development",
  ];

  let courses = [];
  if (isAdmissionPage) {
    courses = [...defaultCourses, ...internshipCourses];
  } else if (showSecondDropdown) {
    courses = internshipCourses;
  } else {
    courses = defaultCourses;
  }

  return (
    // ✅ CHANGE 1: onSubmit mein sirf preventDefault
    <form
      className="career-form"
      onSubmit={handleSubmit}
      style={{ display: "flex", flexWrap: "wrap", gap: "15px" }}
    >
      <input
        type="text"
        name="fullName"
        placeholder="Full Name"
        required
        value={formData.fullName}
        onChange={handleChange}
        style={{ flex: "1 1 calc(50% - 15px)" }}
      />

      <input
        type="email"
        name="email"
        placeholder="Email ID"
        required
        value={formData.email}
        onChange={handleChange}
        style={{ flex: "1 1 calc(50% - 15px)" }}
      />

      <input
        name="contactNumber"
        placeholder="Contact Number"
        type="tel"
        maxLength={10} 
        pattern="[0-9]{10}"
        required
        value={formData.contactNumber}
        onChange={handleChange}
        style={{ flex: "1 1 calc(50% - 15px)" }}
      />

      <input
        type="tel"
        maxLength={10} 
        pattern="[0-9]{10}"
        name="whatsappNumber"
        required   //added required for validation
        placeholder="WhatsApp Number"
        value={formData.whatsappNumber}
        onChange={handleChange}
        style={{ flex: "1 1 calc(50% - 15px)" }}
      />

      <select
        name="qualification"
        required
        value={formData.qualification}
        onChange={handleChange}
        style={{ flex: "1 1 calc(50% - 15px)" }}
      >
        <option value="" disabled>
          Select Qualification
        </option>
        <option value="12th">12th</option>
        <option value="Diploma">Diploma</option>
        <option value="B-tech">B-tech</option>
        <option value="B.sc">B.sc</option>
        <option value="M-tech">M-tech</option>
        <option value="MCA">MCA</option>
        <option value="BCA">BCA</option>
        <option value="Others">Others</option>
      </select>

      <select
        name="course"
        required
        value={formData.course}
        onChange={handleChange}
        style={{ flex: "1 1 calc(50% - 15px)" }}
      >
        <option value="">Choose Your Interest</option>
        {courses.map((course, index) => (
          <option key={index} value={course}>
            {course}
          </option>
        ))}
      </select>

      <div className="btn-container" style={{ flex: "1 1 100%" }}>
        {/* ✅ CHANGE 2: type="button" aur onClick={handleSubmit} */}
        <button
          type="submit"
          className="Modal-Button"
        >
          Proceed To Payment
        </button>
      </div>
    </form>
  );
};

export default SheetBookingPaymentModal;