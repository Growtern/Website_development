import React from "react";
import "../../Styles/Internship_styles/Goodis_section.css";
import GiftImage from "../../assets/Images/Internship/Growtern_Welcome_Kit (1).png"; // your gift image

const GoodiesBannerBootstrap = () => {

  return (
    <div className="container-fluid px-3 px-md-4 goodies-banner-section">
      <div className="container p-0">
        <div className="goodies-banner">

          {/* Animated Background */}
          <div className="goodies-bg-pattern">
            <div className="blob blob-1"></div>
            <div className="blob blob-2"></div>
            <div className="blob blob-3"></div>
          </div>

          {/* Light Sweep */}
          <div className="light-sweep">
            <div className="light-sweep-gradient"></div>
          </div>

          <div className="goodies-content">
            <div className="container-fluid">
              <div className="row align-items-center">

                {/* LEFT CONTENT */}
                <div className="col-lg-7 col-md-7 mb-4 mb-md-0">

                  <div className="goodies-badge">
                    <span className="pulse-dot"></span>
                    <span className="badge-text">LIMITED TIME OFFER</span>
                  </div>

                  <h2 className="goodies-title">
                    ENROLL NOW
                    <span className="goodies-title-gradient d-block">
                      AND GET GOODIES
                    </span>
                  </h2>

                  <p className="goodies-description">
                    Join today and receive exclusive merchandise, course materials,
                    and special certificates worth ₹5000+
                  </p>

                </div>

                {/* RIGHT SIDE GIFT IMAGE */}
                <div className="col-lg-5 col-md-5 d-flex justify-content-center">

                  <div className="goodies-content-right">

                    <img
                      src={GiftImage}
                      alt="Internship Goodies"
                      className="goodies-gift-image"
                    />

                    {/* Sparkles */}
                    <div className="sparkle sparkle-1"></div>
                    <div className="sparkle sparkle-2"></div>
                    <div className="sparkle sparkle-3"></div>

                  </div>

                </div>

              </div>
            </div>
          </div>

          {/* Bottom Stats */}
          <div className="goodies-stats">
            <div className="container-fluid">
              <div className="row text-center py-3 g-3">

                <div className="col-6 col-md-3">
                  <div className="stat-item">
                    <div className="Goodis-Name yellow">T-Shirt</div>
                  </div>
                </div>

                <div className="col-6 col-md-3">
                  <div className="stat-item">
                    <div className="Goodis-Name pink">Notebook</div>
                  </div>
                </div>

                <div className="col-6 col-md-3">
                  <div className="stat-item">
                    <div className="Goodis-Name cyan">Certificate</div>
                  </div>
                </div>

                <div className="col-6 col-md-3">
                  <div className="stat-item">
                    <div className="Goodis-Name green">Pen</div>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default GoodiesBannerBootstrap;