import React from "react";
import "../Styles/JobGuaranteeCrateria.css";

export default function JobGuarantee() {
  return (
    <section className="job-guarantee-section ">
      <div className="container p-0">
        <div className="text-center mb-5">
          <h2 className="job-title"> Placement Guarantee Criteria</h2>
          <p className="job-subtitle">
            Our Job Guarantee is available only to students who complete the training
            and meet all job-readiness standards.
          </p>
        </div>

        <div className="row g-4">
          {/* Card 1 */}
          <div className="col-md-6 col-lg-6">
            <div className="jg-card">
              <h5>🎓 Education & Training Discipline</h5>
              <ul>
                <li>Any Degree / Diploma / Final year student</li>
                <li>Must attend placement and communication sessions</li>
                <li>Minimum 90% attendance</li>
                <li>80% assignments & labs completed</li>
                <li>Active in coding sessions & tests</li>
              </ul>
            </div>
          </div>
          {/* Card 2 */}
          <div className="col-md-6 col-lg-6">
            <div className="jg-card">
              <h5>💻 Projects & Interview Participation</h5>
              <ul>
                <li>Minimum 3 real-world projects</li>
                <li>1 final capstone project</li>
                <li>Active GitHub with approved code</li>
                <li>Resume, LinkedIn & portfolio ready</li>
                <li>Attend all scheduled interviews</li>
                <li>Maintain professional behavior</li>
              </ul>
            </div>
          </div>

        </div>

        {/* Important Box */}
        <div className="important-box mt-5">
          <h5>🔒 Important Conditions</h5>
          <ul>
            <li>100% Placement Guarantee applies only after full course completion</li>
            <li>Job offers depend on skills and company requirements</li>
            <li>Breaking training or placement rules may cancel the guarantee</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
