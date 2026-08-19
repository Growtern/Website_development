import React from "react";
import { Play, Factory, FileBadge2, BookOpen } from "lucide-react";
import "../../Styles/Internship_styles/Internship_Benefits.css";

const Internship_Benefits = () => {
  const STKfeatures = [
    {
      icon: <BookOpen className="icon" />,
      title: "Easy to Learn",
      desc: "No prior knowledge required",
      color: "#7e57c2",
    },
    {
      icon: <Play className="icon" />,
      title: " Online Mode",
      desc: "As per your convenience",
      color: "#ff9800",
    },
    {
      icon: <Factory className="icon" />,
      title: "Industry Relevant",
      desc: "Complying skills grow exponentially",
      color: "#4caf50",
    },
    {
      icon: <FileBadge2 className="icon" />,
      title: "Internship Letter",
      desc: "From Growtern",
      color: "#ff7043",
    },
  ];

  return (
    <section className="quick-feature-section">
      <div className="container">
        <h2 className="quick-title">
          Key <span style={{ color: "#ff8615ff" }}>Features</span>
        </h2>
        <div className="row g-4">
          {STKfeatures.map((f, i) => (
            <div className="col-md-3 " key={i}>
              <div className="quick-card shadow-sm">
                <div
                  className="quick-icon"
                  style={{ backgroundColor: f.color }}
                >
                  {f.icon}
                </div>
                <h5 className="fw-semibold mt-3">{f.title}</h5>
                <p className="quick-desc">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Internship_Benefits;
