import React, { useState } from "react";
import { toast } from "react-toastify";

const JobleadingModal = () => {
  // OLD -- "https://script.google.com/macros/s/AKfycbzZWzasvf5NJROYX46bP1epiC__K6XnlYv4CWHaKNPshePObiMF-8xzr-ZipKI-F2zz/exec";
  const API_URL = import.meta.env.VITE_JOB_LEADING_FORM_APP_SCRIPT_API;

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
      // 3️⃣ Create FormData object
      const form = new FormData();
      for (const key in formData) {
        form.append(key, formData[key]);
      }
      // form.append("pdfBase64", base64Only); --- only send the form name no need to send the pdfBase64
      form.append("pdfName", "Growtern Company Profile.pdf");

      // 4️⃣ Send data to Google Apps Script
      const response = await fetch(API_URL, {
        method: "POST",
        body: form,
      });

      await response.text();

      toast.success( "Application submitted successfully! We'll contact you shortly.");

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
          name="contactNumber"
          placeholder="Contact Number"
          value={formData.contactNumber}
          onChange={handleChange}
          required
          maxLength={10}
          pattern="[0-9]{10}"
          className="ms-md-3"
        />
        <input
          type="tel"
          name="whatsappNumber"
          placeholder="WhatsApp Number"
          value={formData.whatsappNumber}
          onChange={handleChange}
          maxLength={10}
          pattern="[0-9]{10}"
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

        <select
          name="course"
          value={formData.course}
          onChange={handleChange}
          required
          className="ms-md-3"
        >
          <option value="">Choose Your Interest</option>

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
            <option value="PGPP in Data Science & Analytics with Gen AI">PGPP in Data Science & Analytics with Gen AI</option>

        </select>

        <div className="btn-container">
          <button type="submit" className="Modal-Button" disabled={isSubmitting}>
            {isSubmitting ? "Applying..." : "Apply"}
          </button>
        </div>
      </form>

      {status && <p style={{ marginTop: "10px" }}>{status}</p>}
    </div>
  );
};

export default JobleadingModal;
