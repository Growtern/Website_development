import React, { useState } from "react";

import { toast } from "react-toastify";

const ApplyNowModal = ({ type = "default" }) => {
  // OLD --   "https://script.google.com/macros/s/AKfycbxUPpXwXV1qaEv3CrokaglNx8wlbg36Dtzi_L0NTEm9F77OdwV5YQJIiULVhtOM6a8tNA/exec";
  const API_URL = import.meta.env.VITE_APPLY_NOW_FORM_APP_SCRIPT_API

  const [formData, setFormData] = useState({
    fullName: "",
    contactNumber: "",
    whatsappNumber: "",
    email: "",
    qualification: "",
    course: "",
  });

  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Convert Blob → Base64
  const blobToBase64 = (blob) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("");
    setIsSubmitting(true);

    try {
      // 1️⃣ Fetch PDF from public folder
      // const pdfRes = await fetch("/GrowternCompany Profile.pdf");
      // if (!pdfRes.ok) throw new Error("Failed to fetch PDF");
      // const pdfBlob = await pdfRes.blob();

      // 2️⃣ Convert blob → Base64 string
      // const dataUrl = await blobToBase64(pdfBlob);
      // const base64Only = dataUrl.split(",")[1] || "";   -- commented 1 and 2 cuz no need directly access from public folder . No need to convert to blob

      // 3️⃣ Create FormData object
      const form = new FormData();
      for (const key in formData) {
        form.append(key, formData[key]);
      }
      // form.append("pdfBase64", base64Only); --- no need to send the base64 only send form name 
      form.append("pdfName", "Growtern Company Profile.pdf");

      // 4️⃣ Send data to Google Apps Script
      const response = await fetch(API_URL, {
        method: "POST",
        body: form,
        mode: "no-cors"
      });

      await response.text();

      toast.success(
        "Thank you for your interest! We will contact you shortly."
      );

      // Reset form after success
      setFormData({
        fullName: "",
        contactNumber: "",
        whatsappNumber: "",
        email: "",
        qualification: "",
        course: "",
      });
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <form className="career-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          maxLength={10}
          pattern="[0-9]{10}"
          name="contactNumber"
          placeholder="Contact Number"
          value={formData.contactNumber}
          onChange={handleChange}
          required
          className="ms-md-3"
        />
        <input
          type="tel"
          maxLength={10}
          pattern="[0-9]{10}"
          name="whatsappNumber"
          placeholder="WhatsApp Number"
          value={formData.whatsappNumber}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email ID"
          value={formData.email}
          onChange={handleChange}
          required
          className="ms-md-3"
        />

        <select
          name="qualification"
          value={formData.qualification}
          onChange={handleChange}
          required
        >
          <option value="" selected disabled>Select Qualification</option>
          <option value="12th">12th</option>
          <option value="Diploma">Diploma</option>
          <option value="B-tech">B-tech</option>
          <option value="B.sc">B.sc</option>
          <option value="M-tech">M-tech</option>
          <option value="MCA">MCA</option>
          <option value="BCA">BCA</option>
          <option value="Others">Others</option>
        </select>

        {/* <select
          name="course"
          value={formData.course}
          onChange={handleChange}
          required
          className="ms-md-3"
        >
          <option value="">Choose Your Interest</option>
          <option value="MERN Stack Development With AI">
            MERN Stack Development With AI
          </option>
          <option value="Java Full Stack Development With AI">
            Java Full Stack Development With AI
          </option>
          <option value="Python Full Stack Development With AI">
            Python Full Stack Development With AI
          </option>
           <option value="Front-end Development with AI ">
            Front-end Development with AI 
          </option>
          <option value="Short-term Internships">Short-term Internships</option>
        </select> */}

        <select
          name="course"
          value={formData.course}
          onChange={handleChange}
          required
          className="ms-md-3"
        >
          <option value="">Choose Your Interest</option>

          {(type === "internship"
            ? [
              "AI-powered Website Designer",
              "AI-powered Data Science & Analytics",
              "AI-powered Backend Development (Node Js)",
              "AI-powered Java Developer",
              "AI-powered Python Developer",
              "AI-powered Advance Frontend Development",
            ]
            : [
              "PGPP in MERN Stack with Gen AI",
              "PGPP in Java Full Stack Development with Gen AI",
              "PGPP in Python Full Stack Development with Gen AI",
              "PGPP in Artificial Intelligence & Machine Learning",
              "PGPP in Data Science & Analytics with Gen AI",
            ]
          ).map((course, index) => (
            <option key={index} value={course}>
              {course}
            </option>
          ))}
        </select>

        <div className="btn-container">
          <button
            type="submit"
            className="Modal-Button"
            disabled={isSubmitting}
            style={{
              background: "linear-gradient(90deg,#009dff,#08d9d6)",
              border: "none",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
            }}
          >
            {isSubmitting ? (
              <>
                <div
                  className="spinner-border spinner-border-sm text-light"
                  role="status"
                >
                  <span className="visually-hidden">Loading...</span>
                </div>

                Applying...
              </>
            ) : (
              "Apply"
            )}
          </button>
        </div>
      </form>

      {status && <p style={{ marginTop: "10px" }}>{status}</p>}
    </div>
  );
};

export default ApplyNowModal;
