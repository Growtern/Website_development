import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const PrivacyPolicy = () => {
  return (
    <div
      style={{
        background: "linear-gradient(135deg, #0d47a1, #00b4d8)",
        color: "white",
        minHeight: "100vh",
        paddingTop: "10px",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      <div className="container py-5">
        <div
          className="card shadow-lg border-0 rounded-4 p-4"
          style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
        >
          {/* Hero Section */}
          <div className="text-center mb-4">
            <span className="badge bg-light text-dark px-3 py-2 rounded-pill shadow-sm">
              🔒 Privacy First
            </span>
            <h1 className="fw-bold mt-3 text-light">Privacy Policy</h1>
            <p className="text-light opacity-75">
              Your data, your control. This document explains what we collect,
              why we collect it, and how you can manage it.
            </p>
            <div className="d-flex flex-wrap justify-content-center gap-2 mt-3">
              <span className="badge bg-dark bg-opacity-50 px-3 py-2">
                Last updated: Aug 21, 2025
              </span>
              <span className="badge bg-dark bg-opacity-50 px-3 py-2">
                Jurisdiction: India
              </span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="row g-4 align-items-start">
            <div className="col-md-4">
              <div
                className="bg-white text-dark rounded-4 p-4 h-100 shadow-lg"
                style={{ borderTop: "5px solid #2196f3" }}
              >
                <h4 className="fw-semibold text-primary mb-3">Quick Navigation</h4>
                <ul className="list-unstyled">
                  {[
                    "1. Information We Collect",
                    "2. How We Use Data",
                    "3. Cookies & Tracking",
                    "4. Sharing & Third Parties",
                    "5. Your Rights",
                    "6. Data Security",
                    "7. Data Retention",
                    "8. Children’s Privacy",
                    "9. Contact",
                  ].map((item, index) => (
                    <li key={index} className="mb-2">
                      <a
                        href={`#${item.split(". ")[1].toLowerCase().replace(/ /g, "-")}`}
                        className="text-decoration-none text-dark d-block p-2 rounded"
                        style={{ transition: "all 0.3s ease", background: "rgba(0,123,255,0.05)" }}
                        onMouseOver={(e) => {
                          e.target.style.background = "#e3f2fd";
                          e.target.style.paddingLeft = "10px";
                        }}
                        onMouseOut={(e) => {
                          e.target.style.background = "rgba(0,123,255,0.05)";
                          e.target.style.paddingLeft = "8px";
                        }}
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Content Section */}
            <div className="col-md-8">
              <div
                className="bg-white text-dark rounded-4 p-4 shadow-lg"
                style={{ borderTop: "5px solid #00bcd4" }}
              >
                <h4 className="fw-semibold text-primary mb-3">Highlights</h4>
                <div className="row g-3 mb-4">
                  {[
                    "✅ No sale of personal data",
                    "🔐 Encryption in transit & at rest",
                    "🗂️ Export & delete on request",
                    "🍪 Clear cookie controls",
                  ].map((text, i) => (
                    <div key={i} className="col-md-6">
                      <div
                        className="p-3 rounded-3 shadow-sm text-center fw-semibold"
                        style={{
                          background: "linear-gradient(145deg, #f8f9fa, #ffffff)",
                          border: "1px solid #e0e0e0",
                          transition: "0.3s",
                        }}
                        onMouseOver={(e) => {
                          e.target.style.background = "#e3f2fd";
                          e.target.style.transform = "scale(1.03)";
                        }}
                        onMouseOut={(e) => {
                          e.target.style.background = "linear-gradient(145deg, #f8f9fa, #ffffff)";
                          e.target.style.transform = "scale(1)";
                        }}
                      >
                        {text}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Detailed Content */}
                <article style={{ lineHeight: "1.8" }}>
                  {/* 1. Information */}
                  <h4 id="information-we-collect" className="fw-bold text-primary mt-3 mb-3">
                    1. Information We Collect
                  </h4>
                  <p>
                    We collect information you provide (name, email, phone, resume details), usage data (pages visited, actions), and technical data (IP, device, browser). Payment details are processed securely by our payment partners; we never store full card numbers.
                  </p>

                  {/* 2. How We Use Data */}
                  <h4 id="how-we-use-data" className="fw-bold text-primary mt-4 mb-3">
                    2. How We Use Data
                  </h4>
                  <ul>
                    <li>Provide and improve internships, courses, and placement services.</li>
                    <li>Account creation, authentication, and customer support.</li>
                    <li>Security, fraud prevention, and compliance with law.</li>
                    <li>Product analytics and optional marketing (with consent/opt-out).</li>
                  </ul>

                  {/* 3. Cookies */}
                  <h4 id="cookies-tracking" className="fw-bold text-primary mt-4 mb-3">
                    3. Cookies & Tracking
                  </h4>
                  <p>
                    We use essential cookies (required for login), analytics cookies (aggregate usage), and optional marketing cookies. You can manage non-essential cookies anytime from your browser settings.
                  </p>

                  {/* 4. Sharing & Third Parties */}
                  <h4 id="sharing-third-parties" className="fw-bold text-primary mt-4 mb-3">
                    4. Sharing & Third Parties
                  </h4>
                  <p>
                    We may share data with service providers (hosting, analytics, payments) under strict contracts. We do not sell personal information. If legally required, we may disclose limited data to authorities.
                  </p>

                  {/* 5. Your Rights */}
                  <h4 id="your-rights" className="fw-bold text-primary mt-4 mb-3">
                    5. Your Rights
                  </h4>
                  <ul>
                    <li>Access, correction, deletion, and portability of your data.</li>
                    <li>Withdraw consent for marketing communications.</li>
                    <li>Raise complaints with your local data authority.</li>
                  </ul>

                  {/* 6. Data Security */}
                  <h4 id="data-security" className="fw-bold text-primary mt-4 mb-3">
                    6. Data Security
                  </h4>
                  <p>
                    We follow industry best practices, least-privilege access, and routine audits. Report vulnerabilities to our security team for swift resolution.
                  </p>

                  {/* 7. Data Retention */}
                  <h4 id="data-retention" className="fw-bold text-primary mt-4 mb-3">
                    7. Data Retention
                  </h4>
                  <p>
                    We retain data only as long as necessary for the purposes described or as required by law, after which it is securely deleted or anonymized.
                  </p>

                  {/* 8. Children’s Privacy */}
                  <h4 id="children’s-privacy" className="fw-bold text-primary mt-4 mb-3">
                    8. Children’s Privacy
                  </h4>
                  <p>
                    Our services are not intended for children under 13. If you believe a child has provided us personal data, contact us to remove it.
                  </p>

                  {/* 9. Contact */}
                  <h4 id="contact" className="fw-bold text-primary mt-4 mb-3">
                    9. Contact Us
                  </h4>
                  <div
                    className=" p-3 rounded shadow-sm"
                    style={{ borderLeft: "4px solid #2196f3" }}
                  >
                    <p className="mb-0">
                      For privacy questions or requests, email us at{" "}
                      <a href="mailto:info@jaymamta.com" className="text-primary fw-semibold">
                        support@growtern.com
                      </a>
                    </p>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
