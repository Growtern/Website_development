import React, { useState } from "react";
import { toast } from "react-toastify";

const DemoClassModal = () => {
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Convert PDF Blob → Base64
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
      formData.append("pdfName", "Company Profile.pdf");

      // 4️ Send all form data to Google Apps Script endpoint
      //old -  "https://script.google.com/macros/s/AKfycbzR16Kv1tqSJvmZlGkMVioUc_L9VXZeiPR58f83NDU8Wvi5lv1vH7V-pnnm6wlYLKRDDg/exec",
      const response = await fetch(
        import.meta.env.VITE_DEMO_CLASS_APP_SCRIPT_API, 
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();
      console.log(data)

      toast.success(
        "Great! Your demo class has been booked successfully. We've sent the confirmation details to your email."
      );
      form.reset();
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
        <input
          type="tel"
          name="contactNumber"
          placeholder="Contact Number"
          required
          maxLength={10}
          pattern="[0-9]{10}"
        />
        <input
          type="tel"
          name="whatsappNumber"
          placeholder="WhatsApp Number"
          required className="ms-md-3" 
          maxLength={10}
          pattern="[0-9]{10}"
        />
        <input
          type="text"
          name="qualification"
          placeholder="Enter Your Qualification"
          required className="me-md-3" 
        />
        <select name="course" required >
          
          <option value="" >Choose Your Interest</option>
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
            {isSubmitting ? "Submitting..." : "BOOK NOW"}
          </button>
        </div>
      </form>

      {status && <p style={{ marginTop: "10px" }}>{status}</p>}
    </div>
  );
};

export default DemoClassModal;
