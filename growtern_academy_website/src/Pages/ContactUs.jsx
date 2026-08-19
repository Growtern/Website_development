import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import FAQAccordion from "../components/FAQAccordion";

import bg from "../assets/Images/ContactBg.jpg"

const faqs = [
  {
    question: "How soon will I get a reply after submitting the form?",
    answer:"We usually respond within 24 hours during business days.",
  },
  {
    question: "Can I visit your office in person?",
    answer: "Yes! Our Bhubaneswar office is open Mon–Sat during working hours.",
  },
  {
    question: "Do you offer remote collaboration?",
    answer:"Absolutely! We frequently collaborate with clients online via Zoom or Google Meet.",
  }
];

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneno: "",
    inquiryType: "General Inquiry",
    message: "",
  });



  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("");
    setIsSubmitting(true);

    try {
      const formDataToSend = new FormData();
      Object.entries(formData).forEach(([key, value]) =>
        formDataToSend.append(key, value)
      );

      const API = import.meta.env.VITE_CONTACT_US_APP_SCRIPT_API;
      const response = await fetch(
        API,
        {
          method: "POST",
          body: formDataToSend,
          mode: "no-cors"
        }
      );

      setStatus("✅ Thank you! Your message has been sent successfully.");
      setFormData({
        name: "",
        email: "",
        phoneno: "",
        inquiryType: "General Inquiry",
        message: "",
      });
    } catch (error) {
      console.error(error);
      setStatus("❌ Something went wrong. Please try again later.");
    }

    setIsSubmitting(false);
  };

  return (
    <div style={{ fontFamily: "'Poppins', sans-serif", backgroundColor: "#f7f9fc" }}>
      {/* HERO SECTION */}
      <section
        style={{
          backgroundImage: `url(${bg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "white",
          padding: "100px 0",
          textAlign: "center",
        }}
      >

        <div className="container">
          <h1 className="fw-bold display-5 mb-3">Let’s Build Something Great Together 🚀</h1>
          <p className="lead mb-4" style={{ maxWidth: "650px", margin: "0 auto" }}>
            We’re here to listen, collaborate, and grow. Reach out for partnerships, feedback,
            or general inquiries.
          </p>
          <a
            href="#contact"
            className="btn btn-light btn-lg rounded-pill px-5 fw-semibold shadow-sm"
          >
            Get in Touch
          </a>
          <img src="" alt="" />
        </div>
      </section>

      {/* QUICK CONTACT INFO GRID */}
      <section className="container py-5">
        <div className="row text-center g-4">
          <div className="col-md-4">
            <div className="p-4 rounded-4 bg-white shadow-sm h-100">
              <i className="bi bi-geo-alt-fill text-primary fs-1 mb-3"></i>
              <h5 className="fw-bold">Head Office</h5>
              <p className="text-secondary"> Jagamara, Bhubaneswar, Odisha, India.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="p-4 rounded-4 bg-white shadow-sm h-100">
              <i className="bi bi-envelope-paper-fill text-primary fs-1 mb-3"></i>
              <h5 className="fw-bold">Email Us</h5>
              <p className="text-secondary">support@growtern.com</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="p-4 rounded-4 bg-white shadow-sm h-100">
              <i className="bi bi-telephone-forward-fill text-primary fs-1 mb-3"></i>
              <h5 className="fw-bold">Call Us</h5>
              <p className="text-secondary">+91 6372348042</p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT FORM SECTION */}
      <section id="contact" className="py-5" style={{ backgroundColor: "#ffffff" }}>
        <div className="container">
          <div className="row align-items-stretch g-5">
            {/* Left: Contact Form */}
            <div className="col-lg-6">
              <div
                className="p-5 rounded-4 shadow bg-white h-100"
                style={{
                  borderTop: "5px solid #007bff",
                  transition: "transform 0.3s ease",
                }}
              >
                <h3 className="fw-bold text-primary mb-4 text-center">
                  Send Us a Message 💬
                </h3>

                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <input
                      type="text"
                      name="name"
                      className="form-control form-control-lg rounded-3"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <input
                      type="email"
                      name="email"
                      className="form-control form-control-lg rounded-3"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <input
                      type="tel"
                      name="phoneno"
                      className="form-control form-control-lg rounded-3"
                      placeholder="Your Phone Number"
                      value={formData.phoneno}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <select
                      name="inquiryType"
                      className="form-select form-select-lg rounded-3"
                      value={formData.inquiryType}
                      onChange={handleChange}
                    >
                      <option>General Inquiry</option>
                      <option>Admission</option>
                      <option>Want to Hire Skilled Student</option>
                    </select>
                  </div>

                  <div className="mb-4">
                    <textarea
                      name="message"
                      className="form-control rounded-3"
                      placeholder="Your Message"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary w-100 py-3 fw-semibold rounded-3 shadow-sm"
                    disabled={isSubmitting}
                    style={{
                      background: "linear-gradient(90deg, #007bff, #00b4d8)",
                      border: "none",
                      transition: "transform 0.2s ease",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.02)")}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>

                  {status && (
                    <p
                      className={`text-center mt-3 fw-semibold ${status.startsWith("✅") ? "text-success" : "text-danger"
                        }`}
                    >
                      {status}
                    </p>
                  )}
                </form>
              </div>
            </div>

            {/* Right: FAQ Section */}
            <div className="col-lg-6">
              <div
                className="p-5 rounded-4 shadow bg-white h-100"
                style={{
                  borderTop: "5px solid #00b4d8",
                }}
              >
                <h3 className="fw-bold text-primary mb-4 text-center">
                  Frequently Asked Questions 🤔
                </h3>

                <FAQAccordion faqs={faqs}/>
                {/* <div className="accordion" id="faqAccordion">
                  <div className="accordion-item mb-2 border-0 shadow-sm rounded-3">
                    <h2 className="accordion-header" id="faq1">
                      <button
                        className="accordion-button fw-semibold"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse1"
                      >
                        How soon will I get a reply after submitting the form?
                      </button>
                    </h2>
                    <div
                      id="collapse1"
                      className="accordion-collapse collapse show"
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body text-secondary">
                        We usually respond within 24 hours during business days.
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item mb-2 border-0 shadow-sm rounded-3">
                    <h2 className="accordion-header" id="faq2">
                      <button
                        className="accordion-button collapsed fw-semibold"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse2"
                      >
                        Can I visit your office in person?
                      </button>
                    </h2>
                    <div
                      id="collapse2"
                      className="accordion-collapse collapse"
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body text-secondary">
                        Yes! Our Bhubaneswar office is open Mon–Sat during working hours.
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item mb-2 border-0 shadow-sm rounded-3">
                    <h2 className="accordion-header" id="faq3">
                      <button
                        className="accordion-button collapsed fw-semibold"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse3"
                      >
                        Do you offer remote collaboration?
                      </button>
                    </h2>
                    <div
                      id="collapse3"
                      className="accordion-collapse collapse"
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body text-secondary">
                        Absolutely! We frequently collaborate with clients online via Zoom or Google Meet.
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default ContactUs;
