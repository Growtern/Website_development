import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";

const WorkshopRequestCallback = () => {
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const location = useLocation();
  const isWorkshopPage = location.pathname.includes("/workshop-page");


  //old --  "https://script.google.com/macros/s/AKfycbwc4Mk1El6AOitqRSywpUMTNEuQw0FC4AEwAL0Y7s6cxcXxA_3ZHchzT8eRgi4QxNRW/exec";
  const API_URL = import.meta.env.VITE_WORKSHOP_REQUEST_CALLBACK_API;

  // Convert Blob → Base64
  const blobToBase64 = (blob) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("");
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      formData.append("pdfName", "Growtern Company Profile.pdf");

      // 4️⃣ Send data to Apps Script
      const res = await fetch(API_URL, {
        method: "POST",
        body: formData,
        mode:"no-cors"
      });

      const ans = await res.text();
      console.log(ans)

      toast.success(
        "Thank you! Your request has been submitted successfully. Please check your email for further details."
      );
      form.reset();
    } catch (err) {
      console.error(err);
      toast.error(
        "Something went wrong. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <form className="career-form" onSubmit={handleSubmit}>
        <input type="text" name="fullName" placeholder="Full Name" required />
        <input type="email" name="email" placeholder="Email ID" required className="ms-md-3" />
        <input type="text" name="contactNumber" placeholder="Contact Number" required />
        <input type="text" name="whatsappNumber" placeholder="WhatsApp Number" className="ms-md-3" />
        <select name="qualification" required>
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

        {/* <select name="course" required className="ms-md-3">
          <option value="">Choose Your Interest</option>
          <option value="MERN Stack Development With AI">MERN Stack Development With AI</option>
          <option value="Java Full Stack Development With AI">Java Full Stack Development With AI</option>
          <option value="Python Full Stack Development With AI">Python Full Stack Development With AI</option>
          <option value="Front-end Development with AI ">Front-end Development with AI </option>
          <option value="Short-term Internships">Short-term Internships</option>
        </select> */}

        {!isWorkshopPage && (
          <select name="course" required className="ms-md-3">
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
        )}


        <div className="btn-container">
          <button type="submit" className="Modal-Button" disabled={isSubmitting}>
            {isSubmitting ? "Request Callback..." : "Request Callback"}
          </button>
        </div>
      </form>

      {status && <p style={{ marginTop: "10px" }}>{status}</p>}
    </div>
  );
};

export default WorkshopRequestCallback;
