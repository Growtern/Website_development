import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";

const CareerModal = ({ type = "default", action}) => {
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // const location = useLocation();
  // const isWorkshopPage = location.pathname.includes("/workshop-page");


  const API_URL = import.meta.env.VITE_CAREER_APP_SCRIPT_API;

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
        mode: "no-cors"
      });

      toast.success("Thank you! Your request has been submitted successfully. We've sent the company profile to your email.");
      form.reset();

      // redirect based the call or whatsapp.
      setTimeout(() => {
        if (action === "whatsapp") {
          console.log("Action:", action);
          window.location.href = "https://wa.me/916372348042";
        } else if (action === "call") {
          window.location.href = "tel:+916372348042";
        }
      }, 800);


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
        <input type="text" name="fullName" placeholder="Full Name" required />
        <input type="email" name="email" placeholder="Email ID" required className="ms-md-3" />
        <input type="tel" maxLength={10} pattern="[0-9]{10}" name="contactNumber" placeholder="Contact Number" required />
        <input type="tel" maxLength={10} pattern="[0-9]{10}" name="whatsappNumber" placeholder="WhatsApp Number" className="ms-md-3" />
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

        {/* {!isWorkshopPage && (
          <select name="course" required className="ms-md-3">
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
            <option value="Front-end Development with AI">
              Front-end Development with AI
            </option>
            <option value="Short-term Internships">Short-term Internships</option>
          </select>
        )} */}

        {type !== "workshop" && (
          <select name="course" required className="ms-md-3">
            <option value="">Choose Your Interest</option>

            {(type === "internship"
              ? [
                "AI-powered Website Designer",
                "AI-powered Data Analytics",
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
        )}

        <div className="btn-container">
          <button type="submit" className="Modal-Button" disabled={isSubmitting}>
            {isSubmitting
              ? (action === "whatsapp"
                ? "Starting Chat..."
                : "Requesting Callback...")
              : (action === "whatsapp"
                ? "Start Chatting"
                : "Request Callback")}
          </button>
        </div>
      </form>

      {status && <p style={{ marginTop: "10px" }}>{status}</p>}
    </div>
  );
};

export default CareerModal;
