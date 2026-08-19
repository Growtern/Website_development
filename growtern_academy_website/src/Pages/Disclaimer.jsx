import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/Disclaimer.css";

function Disclaimer() {
  return (
    <section className="disclaimer-section py-5">
      <div className="container p-0">
        <div className="disclaimer-card shadow-lg p-4 p-md-5 rounded-4">
          <h1 className="text-center mb-5 fw-bold text-gradient">Disclaimer</h1>

          <div className="disclaimer-content">
            <div className="mb-4">
              <h3>General Information</h3>
              <p>
                The information and training content provided on this website are for
                educational and skill development purposes only. Growtern is an
                independent training initiative dedicated to enhancing the technical
                and professional skills of learners in various domains of software
                development, design, and IT.
              </p>
              <p>
                All information, course materials, and resources made available on this
                platform are created and curated by our trainers and experts based on
                their personal knowledge, experience, and publicly available
                information.
              </p>
            </div>

            <div className="mb-4">
              <h4>No Institutional Affiliation</h4>
              <p>
                Growtern operates as an independent learning platform. It is not
                associated, affiliated, or endorsed by any external institute, academy,
                university, or organization.
              </p>
              <p>
                All activities, programs, and trainings conducted through Growtern are
                managed solely by its authorized team members and are not connected to
                any other institution or employer of the trainers involved.
              </p>
            </div>

            <div className="mb-4">
              <h4>Intellectual Property</h4>
              <p>
                All logos, course materials, videos, designs, graphics, and other
                content on this website are the intellectual property of Growtern unless
                otherwise stated. Reproduction, distribution, or use of any materials
                from this platform without prior written consent is strictly
                prohibited.
              </p>
            </div>

            <div className="mb-4">
              <h4>No Placement or Employment Guarantee</h4>
              <p>
                While Growtern provides training and career guidance to enhance job
                readiness, it does not guarantee employment, internships, or
                placements. Career opportunities depend on individual performance, skill
                development, and external market conditions.
              </p>
            </div>

            <div className="mb-4">
              <h4>Limitation of Liability</h4>
              <p>
                Growtern and its trainers make every effort to provide accurate,
                up-to-date, and useful information. However, we do not assume
                responsibility for any direct or indirect loss or damage that may occur
                as a result of using our website, materials, or services.
              </p>
            </div>

            <div className="mb-4">
              <h4>External Links</h4>
              <p>
                Our website may contain links to third-party websites or resources for
                additional learning. These external sites are not under our control,
                and we are not responsible for their content, privacy policies, or
                practices.
              </p>
            </div>

            <div className="mb-4">
              <h4>Changes to This Disclaimer</h4>
              <p>
                Growtern reserves the right to modify or update this disclaimer at any
                time without prior notice. Visitors are encouraged to review this page
                periodically to stay informed about the terms of use.
              </p>
            </div>

            <div>
              <h4>Contact</h4>
              <p>
                For any questions, concerns, or clarification regarding this disclaimer
                or our services, please contact:
              </p>
              <ul className="list-unstyled">
                <li>📧 support@growtern.com</li>
                <li>🌐 www.growtern.com</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Disclaimer;
