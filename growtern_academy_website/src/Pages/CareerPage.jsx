import { useState } from "react";
import "../Styles/CareerPage.css";
import { toast } from "react-toastify";
import axios from 'axios';

/* ─────────────────────────────────────────
   DATA
───────────────────────────────────────── */
const JOBS = [
  {
    id: 1,
    title: "MERN Stack Developer Intern",
    department: "Engineering",
    type: "Internship",
    location: "Bhubaneswar / Remote",
    lastDate: "July 15, 2026",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&q=80",
    jd: {
      overview:
        "Join our core product team as a MERN Stack Developer and help build the next generation of our edtech platform.",
      responsibilities: [
        "Develop and maintain full-stack features on our platform",
        "Build REST APIs with Node.js and Express",
        "Work with MongoDB for data modeling",
        "Implement authentication, payments, and notifications",
        "Ensure application performance and scalability",
      ],
      requirements: [
        "2+ years of experience with MERN stack",
        "Strong understanding of MongoDB, Express, React, Node.js",
        "Experience with JWT authentication",
        "Knowledge of Git and CI/CD workflows",
        "Problem-solving mindset",
      ],
      stipend: "₹3 – ₹6 LPA",
      duration: "Full-Time",
    },
  },
  {
    id: 2,
    title: "UI/UX Designer Intern",
    department: "Design",
    type: "Internship",
    location: "Remote",
    lastDate: "July 5, 2025",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&q=80",
    jd: {
      overview:
        "Shape the visual identity and user experience of Growtern's platform. You'll work directly with product and engineering teams.",
      responsibilities: [
        "Design wireframes, prototypes, and high-fidelity mockups",
        "Conduct user research and usability testing",
        "Maintain and evolve our design system",
        "Create landing pages, banners, and marketing assets",
        "Iterate designs based on user feedback",
      ],
      requirements: [
        "Proficiency in Figma",
        "Understanding of UX principles and design thinking",
        "Strong portfolio with at least 2–3 projects",
        "Eye for detail and visual aesthetics",
        "Basic knowledge of HTML/CSS is a bonus",
      ],
      stipend: "₹4,000 – ₹8,000/month",
      duration: "3–6 Months",
    },
  },
  {
    id: 3,
    title: "Content Writer",
    department: "Content",
    type: "Freelancer",
    location: "Remote",
    lastDate: "July 20, 2026",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&q=80",
    jd: {
      overview:
        "Create insightful, engaging content that educates and inspires our community of students and professionals.",
      responsibilities: [
        "Write blog posts, articles, and course descriptions",
        "Create SEO-optimized content for our website",
        "Develop email newsletters and social media captions",
        "Research industry trends in edtech and career development",
        "Collaborate with designers for infographic content",
      ],
      requirements: [
        "Excellent written English and Hindi (preferred)",
        "Understanding of SEO content writing",
        "Experience with WordPress or similar CMS",
        "Ability to meet deadlines independently",
        "Interest in education, tech, or career guidance",
      ],
      stipend: "₹500 – ₹1,500/article",
      duration: "Part-Time / Freelance",
    },
  },
  {
    id: 4,
    title: "Business Development Executive",
    department: "Sales",
    type: "Full-Time",
    location: "Bhubaneswar",
    lastDate: "June 28, 2025",
    image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=400&q=80",
    jd: {
      overview:
        "Drive growth by identifying new partnerships, institutional tie-ups, and student outreach programs for Growtern Academy.",
      responsibilities: [
        "Identify and onboard college and university partners",
        "Manage student enrollment and sales pipeline",
        "Represent Growtern at career fairs and events",
        "Build and maintain relationships with placement cells",
        "Achieve monthly enrollment and revenue targets",
      ],
      requirements: [
        "Strong communication and negotiation skills",
        "0–2 years of sales/business development experience",
        "Passion for education and student success",
        "Self-motivated and target-oriented",
        "Willingness to travel locally for meetings",
      ],
      stipend: "₹2.4 – ₹4.8 LPA + Incentives",
      duration: "Full-Time",
    },
  },
];

const GALLERY = [
  { src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80", label: "Team Collaboration" },
  { src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&q=80", label: "Live Training Sessions" },
  { src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&q=80", label: "Student Success" },
  { src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&q=80", label: "Workshops & Events" },
  { src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80", label: "Mentorship Culture" },
  { src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80", label: "Team Celebrations" },
];

const VALUES = [
  { icon: "🎯", title: "Mission Driven", desc: "Every decision is rooted in student success and real impact." },
  { icon: "🌱", title: "Grow Together", desc: "We invest in your growth as much as our own." },
  { icon: "🤝", title: "Collaborative", desc: "Open culture where ideas flow freely across teams." },
  { icon: "🔥", title: "Move Fast", desc: "We iterate, ship, and learn at startup speed." },
];

const FILTERS = ["All", "Engineering", "Design", "Marketing", "Content", "Sales"];

const EMPTY_FORM = { name: "", email: "", phone: "", portfolio: "", message: "", resume: null };

const typeMod = (type) => {
  if (type === "Internship") return "cp-badge--internship";
  if (type === "Full-Time") return "cp-badge--fulltime";
  return "cp-badge--parttime";
};

export default function CareersPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [activeJD, setActiveJD] = useState(null);
  const [applyJob, setApplyJob] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [resumeName, setResumeName] = useState("");
  const [form, setForm] = useState(EMPTY_FORM);

  const visibleJobs = activeFilter === "All" ? JOBS : JOBS.filter((j) => j.department === activeFilter);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleFormChange = (e) => {
    if (e.target.name === "resume") {
      setForm({ ...form, resume: e.target.files[0] });
      setResumeName(e.target.files[0]?.name || "");
      return;
    }

    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleFormSubmit = async (e) => {
    e.preventDefault();
  };

  const closeModals = () => {
    setActiveJD(null);
    setApplyJob(null);
    setSubmitted(false);
    setResumeName("");
    setForm(EMPTY_FORM);
  };

  const openApplyFromJD = () => {
    const job = activeJD;
    setActiveJD(null);
    setApplyJob(job);
  };

  return (
    <>
      <div className="careers-page">
        <section className="cp-hero">
          <div className="cp-hero__orb cp-hero__orb--orange" aria-hidden="true" />
          <div className="cp-hero__orb cp-hero__orb--blue" aria-hidden="true" />

          <div className="cp-hero__container">
            <div className="cp-hero__content">
              <div className="cp-hero__badge"> We're Hiring — Join Us</div>

              <h1 className="cp-hero__title">
                Careers at
                <span className="cp-hero__title-highlight"> Growtern </span>
                Grow Together.   Lead the Future

              </h1>

              <p className="cp-hero__subtitle mt-2">
                • Work on real-world projects <br />
                • Grow with a passionate team <br />
                • Build skills, innovation & impact
              </p>

              <div className="cp-hero__cta">
                <button className="cp-btn cp-btn--primary" onClick={() => scrollToSection("careers")}>View Open Roles</button>
                <button className="cp-btn cp-btn--outline" onClick={() => scrollToSection("about")}>Our Culture</button>
              </div>
            </div>

            <div className="cp-hero__image-wrapper">
              <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=700&q=80" alt="Growtern team at work" className="cp-hero__image" />
              <div className="cp-hero__float-card cp-hero__float-card--top">
                <div className="cp-hero__float-icon" aria-hidden="true">💼</div>
                <div className="cp-hero__float-text"><strong>6 Open Positions</strong>Engineering, Design &amp; More</div>
              </div>
              <div className="cp-hero__float-card cp-hero__float-card--bottom">
                <div className="cp-hero__float-icon" aria-hidden="true">⭐</div>
                <div className="cp-hero__float-text"><strong>Great Culture</strong>Remote-friendly workplace</div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="cp-about">
          <div className="cp-about__container">
            <div className="cp-about__image-wrapper">
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=700&q=80" alt="Growtern team collaborating" className="cp-about__image" />

            </div>

            <div className="cp-about__content">
              <p style={{ color: "#ff7b00", fontSize: "1.2rem", fontWeight: "600" }}>About Growtern</p>
              <h2 className="cp-section__title">Where Passion Meets Purpose</h2>
              <p className="cp-about__text">Growtern Academy is Odisha's fastest-growing edtech platform dedicated to skill-based learning, internship training, and real-world career development. We offer industry-ready courses with a 100% job guarantee.</p>
              <p className="cp-about__text">At Growtern, our team is our greatest asset. We believe in a culture of continuous learning, collaboration, and growth — both personal and professional. Every voice matters here.</p>
            </div>
          </div>
          <div className="cp-about__values">
            {VALUES.map((v) => (
              <div className="cp-value-card" key={v.title}>
                <span className="cp-value-card__icon" aria-hidden="true">{v.icon}</span>
                <h4 className="cp-value-card__title">{v.title}</h4>
                <p className="cp-value-card__desc">{v.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="cp-gallery">
          <div className="cp-gallery__container">
            <div className="cp-section__header cp-section__header--center">
              <p className="cp-section__eyebrow">Life at Growtern</p>
              <h2 className="cp-section__title">A Sneak Peek Inside</h2>
              <p className="cp-section__subtitle">From intense brainstorming sessions to vibrant celebrations — life at Growtern is everything but boring.</p>
            </div>

            <div className="cp-gallery__grid">
              {GALLERY.map((item) => (
                <div className="cp-gallery__item" key={item.label}>
                  <img src={item.src} alt={item.label} className="cp-gallery__image" />
                  <div className="cp-gallery__overlay" aria-hidden="true"><span className="cp-gallery__label">{item.label}</span></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="careers" className="cp-careers">
          <div className="cp-careers__container">
            <div className="cp-section__header cp-section__header--center">
              <p style={{ color: "#ff7b00", fontSize: "1.2rem", fontWeight: "600" }}>Open Positions</p>
              <h2 className="cp-section__title">Find Your Role</h2>
              <p className="cp-section__subtitle">We're always looking for talented people across engineering, design, marketing, and beyond.</p>
            </div>

            <div className="cp-careers__filters" role="group" aria-label="Filter jobs by department">
              {FILTERS.map((f) => (
                <button key={f} className={`cp-filter-btn${activeFilter === f ? " cp-filter-btn--active" : ""}`} onClick={() => setActiveFilter(f)}>{f}</button>
              ))}
            </div>

            <div className="cp-careers__grid">
              {visibleJobs.map((job) => (
                <article className="cp-job-card" key={job.id}>
                  <div className="cp-job-card__thumbnail">
                    <img src={job.image} alt={job.title} className="cp-job-card__image" />
                    <span className="cp-job-card__dept">{job.department}</span>
                  </div>

                  <div className="cp-job-card__body">
                    <span className={`cp-job-card__badge ${typeMod(job.type)}`}>{job.type}</span>
                    <h3 className="cp-job-card__title">{job.title}</h3>

                    <ul className="cp-job-card__meta">
                      <li className="cp-job-card__meta-item"><span className="cp-job-card__meta-icon" aria-hidden="true">📍</span>{job.location}</li>
                      <li className="cp-job-card__meta-item"><span className="cp-job-card__meta-icon" aria-hidden="true">⏱️</span>{job.jd.duration}</li>
                    </ul>

                    <p className="cp-job-card__deadline">Last Date: <strong className="cp-job-card__deadline-date">{job.lastDate}</strong></p>

                    <div className="cp-job-card__actions">
                      <button className="cp-btn cp-btn--ghost" onClick={() => setActiveJD(job)} aria-label={`View job description for ${job.title}`}>📄 JD</button>
                      <button className="cp-btn cp-btn--primary" onClick={() => setApplyJob(job)} aria-label={`Apply for ${job.title}`}>Apply Now →</button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {activeJD && (
          <div className="cp-modal-backdrop" role="dialog" aria-modal="true" aria-label={`Job description: ${activeJD.title}`} onClick={closeModals}>
            <div className="cp-modal" onClick={(e) => e.stopPropagation()}>
              <div className="cp-modal__header">
                <div className="cp-modal__header-text">
                  <h2 className="cp-modal__title">{activeJD.title}</h2>
                  <p className="cp-modal__meta">{activeJD.department} · {activeJD.location} · {activeJD.type}</p>
                </div>
                <button className="cp-modal__close" onClick={closeModals} aria-label="Close modal">✕</button>
              </div>

              <div className="cp-modal__body">
                <div className="cp-jd__section"><h3 className="cp-jd__section-title">Overview</h3><p className="cp-jd__overview">{activeJD.jd.overview}</p></div>
                <div className="cp-jd__section"><h3 className="cp-jd__section-title">Responsibilities</h3><ul className="cp-jd__list">{activeJD.jd.responsibilities.map((r, i) => <li key={i} className="cp-jd__list-item">{r}</li>)}</ul></div>
                <div className="cp-jd__section"><h3 className="cp-jd__section-title">Requirements</h3><ul className="cp-jd__list">{activeJD.jd.requirements.map((r, i) => <li key={i} className="cp-jd__list-item">{r}</li>)}</ul></div>
                <div className="cp-jd__section">
                  <h3 className="cp-jd__section-title">Package Details</h3>
                  <div className="cp-jd__chips">
                    <div className="cp-jd__chip"><span className="cp-jd__chip-value">{activeJD.jd.stipend}</span><span className="cp-jd__chip-label">Compensation</span></div>
                    <div className="cp-jd__chip"><span className="cp-jd__chip-value">{activeJD.jd.duration}</span><span className="cp-jd__chip-label">Duration</span></div>
                    <div className="cp-jd__chip"><span className="cp-jd__chip-value">{activeJD.location}</span><span className="cp-jd__chip-label">Location</span></div>
                  </div>
                </div>
                <button className="cp-btn cp-btn--primary cp-btn--full" onClick={openApplyFromJD}>Apply for This Role →</button>
              </div>
            </div>
          </div>
        )}

        {applyJob && (
          <div className="cp-modal-backdrop" role="dialog" aria-modal="true" aria-label={`Apply for ${applyJob.title}`} onClick={closeModals}>
            <div className="cp-modal" onClick={(e) => e.stopPropagation()}>
              <div className="cp-modal__header">
                <div className="cp-modal__header-text">
                  <h2 className="cp-modal__title">{submitted ? "Application Sent!" : `Apply — ${applyJob.title}`}</h2>
                  {!submitted && <p className="cp-modal__meta">Fill the form below and attach your resume</p>}
                </div>
                <button className="cp-modal__close" onClick={closeModals} aria-label="Close modal">✕</button>
              </div>

              <div className="cp-modal__body">
                {submitted ? (
                  <div className="cp-success">
                    <div className="cp-success__icon" aria-hidden="true">✅</div>
                    <h3 className="cp-success__title">You're all set!</h3>
                    <p className="cp-success__message">Thanks <strong>{form.name}</strong>! Your application for <strong>{applyJob.title}</strong> has been received. Our team will reach out at <strong>{form.email}</strong> within 3–5 business days.</p>
                    <button className="cp-btn cp-btn--primary cp-success__back-btn" onClick={closeModals}>Back to Careers</button>
                  </div>
                ) : (
                  <form className="cp-apply-form" onSubmit={handleFormSubmit} noValidate>
                    <div className="cp-apply-form__row">
                      <div className="cp-form-field"><label className="cp-form-field__label" htmlFor="name">Full Name *</label><input id="name" name="name" type="text" className="cp-form-field__input" placeholder="Rahul Sharma" required value={form.name} onChange={handleFormChange} /></div>
                      <div className="cp-form-field"><label className="cp-form-field__label" htmlFor="email">Email Address *</label><input id="email" name="email" type="email" className="cp-form-field__input" placeholder="rahul@email.com" required value={form.email} onChange={handleFormChange} /></div>
                    </div>

                    <div className="cp-apply-form__row">
                      <div className="cp-form-field"><label className="cp-form-field__label" htmlFor="phone">Phone Number *</label><input id="phone" name="phone" type="tel" className="cp-form-field__input" placeholder="+91 9876543210" required value={form.phone} onChange={handleFormChange} /></div>
                      <div className="cp-form-field"><label className="cp-form-field__label" htmlFor="portfolio">Portfolio / LinkedIn</label><input id="portfolio" name="portfolio" type="url" className="cp-form-field__input" placeholder="linkedin.com/in/..." value={form.portfolio} onChange={handleFormChange} /></div>
                    </div>

                    <div className="cp-form-field"><label className="cp-form-field__label" htmlFor="message">Why do you want to join Growtern? *</label><textarea id="message" name="message" className="cp-form-field__textarea" placeholder="Tell us about yourself and your motivation..." required value={form.message} onChange={handleFormChange} /></div>

                    <div className="cp-form-field">
                      <label className="cp-form-field__label">Resume (PDF) *</label>
                      <div className="cp-resume-upload">
                        <input type="file" name="resume" accept=".pdf" required className="cp-resume-upload__input" onChange={handleFormChange} aria-label="Upload resume PDF" />
                        <span className="cp-resume-upload__icon" aria-hidden="true">📎</span>
                        {resumeName ? <p className="cp-resume-upload__filename">✅ {resumeName}</p> : <p className="cp-resume-upload__placeholder">Click to upload or drag &amp; drop<span className="cp-resume-upload__hint">PDF only · Max 5 MB</span></p>}
                      </div>
                    </div>

                    <button type="submit" className="cp-btn cp-btn--primary cp-btn--full">Submit Application →</button>
                  </form>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </>

  );
}

