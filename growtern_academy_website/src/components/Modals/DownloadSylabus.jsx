import React, { useState } from "react";
import { toast } from "react-toastify";

const DownloadSylabus = ({
  syllabusPdf,
  courseTitle,
}) => {
  const API_URL =
    import.meta.env.VITE_DOWNLOAD_SYLLABUS_FORM_APP_SCRIPT_API;

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

  // ==========================================
  // Get PDF URL from API
  // ==========================================

  const getSyllabusPdfUrl = () => {
    if (!syllabusPdf) {
      return "";
    }

    // If API returns a direct URL string
    if (typeof syllabusPdf === "string") {
      return syllabusPdf;
    }

    // If API returns an object with url
    if (syllabusPdf.url) {
      return syllabusPdf.url;
    }

    // If API returns an object with secure_url
    if (syllabusPdf.secure_url) {
      return syllabusPdf.secure_url;
    }

    return "";
  };

  // ==========================================
  // Download syllabus PDF from API
  // ==========================================

  const downloadSyllabusPDF = async () => {
    try {
      const pdfUrl = getSyllabusPdfUrl();

      if (!pdfUrl) {
        throw new Error(
          "Syllabus PDF is not available for this course."
        );
      }

      // Fetch PDF from API/Cloudinary URL
      const response = await fetch(pdfUrl);

      if (!response.ok) {
        throw new Error(
          "Failed to fetch syllabus PDF."
        );
      }

      const blob = await response.blob();

      // Create temporary URL
      const url = window.URL.createObjectURL(blob);

      // Create download link
      const link = document.createElement("a");

      link.href = url;

      // Create filename from course title
      const fileName = `${(
        courseTitle ||
        formData.course ||
        "Course"
      )
        .replace(/[<>:"/\\|?*]+/g, "")
        .trim()}-Syllabus.pdf`;

      link.download = fileName;

      document.body.appendChild(link);

      link.click();

      // Cleanup
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);

      return fileName;
    } catch (error) {
      console.error(
        "Error downloading syllabus PDF:",
        error
      );

      throw error;
    }
  };

  // ==========================================
  // Form change
  // ==========================================

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // ==========================================
  // Form submit
  // ==========================================

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus("");
    setIsSubmitting(true);

    try {
      // Create FormData
      const form = new FormData();

      for (const key in formData) {
        form.append(key, formData[key]);
      }

      // ==========================================
      // Download syllabus from API
      // ==========================================

      const pdfName =
        await downloadSyllabusPDF();

      console.log(
        "Downloaded PDF:",
        pdfName
      );

      // Send only the PDF name to Google Apps Script
      form.append("pdfName", pdfName);

      // ==========================================
      // Send form data to Google Apps Script
      // ==========================================

      const response = await fetch(API_URL, {
        method: "POST",
        body: form,
        mode: "no-cors",
      });

      toast.success(
        "Syllabus downloaded successfully! Check your email for more details."
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

      toast.error(
        "Something went wrong. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <form
        className="career-form"
        onSubmit={handleSubmit}
      >
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
          className="ms-md-3"
          maxLength={10}
          pattern="[0-9]{10}"
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
          <option value="" disabled>
            Select Qualification
          </option>

          <option value="12th">
            12th
          </option>

          <option value="Diploma">
            Diploma
          </option>

          <option value="B-tech">
            B-tech
          </option>

          <option value="B.sc">
            B.sc
          </option>

          <option value="M-tech">
            M-tech
          </option>

          <option value="MCA">
            MCA
          </option>

          <option value="BCA">
            BCA
          </option>

          <option value="Others">
            Others
          </option>
        </select>

        <select
          name="course"
          value={formData.course}
          onChange={handleChange}
          required
          className="ms-md-3"
        >
          <option value="">
            Choose Your Interest
          </option>

          <option value="PGPP in Artificial Intelligence & Machine Learning">
            PGPP in Artificial Intelligence & Machine Learning
          </option>

          <option value="PGPP in Java Full Stack Development with Gen AI">
            PGPP in Java Full Stack Development with Gen AI
          </option>

          <option value="PGPP in Python Full Stack Development with Gen AI">
            PGPP in Python Full Stack Development with Gen AI
          </option>

          <option value="PGPP in Data Science & Analytics with Gen AI">
            PGPP in Data Science & Analytics with Gen AI
          </option>

          <option value="PGPP in MERN Stack with Gen AI">
            PGPP in MERN Stack with Gen AI
          </option>
        </select>

        <div className="btn-container">
          <button
            type="submit"
            className="Modal-Button"
            disabled={isSubmitting}
          >
            {isSubmitting
              ? "Downloading..."
              : "Download"}
          </button>
        </div>
      </form>

      {status && (
        <p style={{ marginTop: "10px" }}>
          {status}
        </p>
      )}
    </div>
  );
};

export default DownloadSylabus;