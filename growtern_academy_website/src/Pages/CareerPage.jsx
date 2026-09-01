import { useState } from "react";
import "../Styles/CareerPage.css";
import { toast } from "react-toastify";
import axios from "axios";
import team_collab from "../assets/Images/team_collab.jpeg"
import live_training_ses from "../assets/Images/live_training_ses.jpeg"
import std_suc from "../assets/Images/std_suc.jpeg"
import car_hero from "../assets/Images/car-hero.jpeg"

/* ─────────────────────────────────────────
   GOOGLE APPS SCRIPT URL
───────────────────────────────────────── */
const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbwIzPqelCCX95LwEOKAz5r2MqW293CTpJwnM1sqRcf2Exp1AUAuEFWkArJs4fF6p9VPSA/exec";

/* ─────────────────────────────────────────
   DATA
───────────────────────────────────────── */

const JOBS = [
  {
    id: 1,
    title: "MERN Stack Trainer Intern",
    department: "Engineering",
    type: "Internship",
    location: "Bhubaneswar / Remote",
    lastDate: "Sept 15 2026",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&q=80",
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
    title: "Content Creator",
    department: "Content",
    type: "Freelancer",
    location: "Remote",
    lastDate: "Sept 15 2026",
    image:
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&q=80",
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
    id: 3,
    title: "Business Development Executive",
    department: "Sales",
    type: "Full-Time",
    location: "Bhubaneswar",
    lastDate: "Sept 15 2026",
    image:
      "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=400&q=80",
    jd: {
      overview:
        "Join Growtern Academy as a Business Development Executive in our indoor admission counselling team. You will handle company-generated leads, counsel students and parents, follow up with interested candidates, book demo sessions, and convert enquiries into admissions. This is an on-site role with no outdoor or field work.",

      responsibilities: [
        "Handle company-generated leads from website, social media, WhatsApp, campaigns, referrals, and online forms",
        "Call new leads and understand the student's educational background, career goals, interests, and current skill level",
        "Counsel students and parents about suitable courses, syllabus, duration, fees, certification, internships, projects, and placement assistance",
        "Follow up with interested leads through calls, WhatsApp, and email",
        "Share course brochures, fee details, demo class details, and admission process with prospective students",
        "Book demo classes or counselling sessions and coordinate with the academic team",
        "Handle objections related to fees, timing, career scope, course value, competition, and parent approval",
        "Convert interested enquiries into paid admissions and achieve monthly admission targets",
        "Maintain lead status properly in CRM, Google Sheets, or the company tracking system",
        "Prepare daily call, follow-up, demo booking, and admission reports",
      ],

      requirements: [
        "Freshers can apply; prior experience is not mandatory",
        "Good communication skills in English, Hindi, and Odia",
        "Strong phone counselling, convincing, and follow-up skills",
        "Ability to explain courses clearly to students and parents",
        "Basic understanding of IT courses such as Web Development, Full Stack Development, Python, Java, Data Analytics, AI, and Digital Marketing",
        "Good listening, problem-solving, and objection-handling ability",
        "Basic computer knowledge and comfort with online tools",
        "Target-oriented mindset with a positive attitude and willingness to learn",
        "Candidates from BBA, MBA, B.Com, BA, B.Sc, and PGDM are preferred",
      ],

      stipend: "₹5,000 Basic + Incentive up to ₹35,000",
      duration: "Full-Time & Permanent",
    },
  },
];

const GALLERY = [
  {
    src: team_collab,
    label: "Team Collaboration",
  },
  {
    src: live_training_ses,
    label: "Live Training Sessions",
  },
  {
    src: std_suc,
    label: "Student Success",
  },
  {
    src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&q=80",
    label: "Workshops & Events",
  },
  {
    src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80",
    label: "Mentorship Culture",
  },
  {
    src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80",
    label: "Team Celebrations",
  },
];

const VALUES = [
  {
    icon: "🎯",
    title: "Mission Driven",
    desc: "Every decision is rooted in student success and real impact.",
  },
  {
    icon: "🌱",
    title: "Grow Together",
    desc: "We invest in your growth as much as our own.",
  },
  {
    icon: "🤝",
    title: "Collaborative",
    desc: "Open culture where ideas flow freely across teams.",
  },
  {
    icon: "🔥",
    title: "Move Fast",
    desc: "We iterate, ship, and learn at startup speed.",
  },
];

const FILTERS = [
  "All",
  "Engineering",
  "Design",
  "Marketing",
  "Content",
  "Sales",
];

const EMPTY_FORM = {
  name: "",
  email: "",
  phone: "",
  portfolio: "",
  message: "",
  resume: null,
};

const typeMod = (type) => {
  if (type === "Internship") return "cp-badge--internship";
  if (type === "Full-Time") return "cp-badge--fulltime";
  return "cp-badge--parttime";
};

/* ─────────────────────────────────────────
   FILE → BASE64
───────────────────────────────────────── */

const fileToBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onload = () => {
      resolve(reader.result);
    };

    reader.onerror = (error) => {
      reject(error);
    };
  });
};

export default function CareersPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [activeJD, setActiveJD] = useState(null);
  const [applyJob, setApplyJob] = useState(null);

  const [submitted, setSubmitted] = useState(false);

  const [resumeName, setResumeName] = useState("");

  const [form, setForm] = useState(EMPTY_FORM);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const visibleJobs =
    activeFilter === "All"
      ? JOBS
      : JOBS.filter(
          (j) => j.department === activeFilter
        );

  /* ─────────────────────────────────────────
     SCROLL
  ───────────────────────────────────────── */

  const scrollToSection = (id) => {
    document
      .getElementById(id)
      ?.scrollIntoView({
        behavior: "smooth",
      });
  };

  /* ─────────────────────────────────────────
     FORM CHANGE
  ───────────────────────────────────────── */

  const handleFormChange = (e) => {
    if (e.target.name === "resume") {
      const file = e.target.files[0];

      if (!file) {
        setForm({
          ...form,
          resume: null,
        });

        setResumeName("");

        return;
      }

      /* PDF validation */

      if (file.type !== "application/pdf") {
        toast.error("Only PDF resumes are allowed.");

        e.target.value = "";

        setForm({
          ...form,
          resume: null,
        });

        setResumeName("");

        return;
      }

      /* 5 MB validation */

      const maxSize = 5 * 1024 * 1024;

      if (file.size > maxSize) {
        toast.error(
          "Resume size must be less than 5 MB."
        );

        e.target.value = "";

        setForm({
          ...form,
          resume: null,
        });

        setResumeName("");

        return;
      }

      setForm({
        ...form,
        resume: file,
      });

      setResumeName(file.name);

      return;
    }

    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  /* ─────────────────────────────────────────
     FORM SUBMIT
  ───────────────────────────────────────── */

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    /* Prevent duplicate submission */

    if (isSubmitting) {
      return;
    }

    /* Validate resume */

    if (!form.resume) {
      toast.error("Please upload your resume.");
      return;
    }

    /* Validate PDF */

    if (form.resume.type !== "application/pdf") {
      toast.error("Only PDF resumes are allowed.");
      return;
    }

    /* Validate file size */

    const maxSize = 5 * 1024 * 1024;

    if (form.resume.size > maxSize) {
      toast.error(
        "Resume size must be less than 5 MB."
      );
      return;
    }

    try {
      setIsSubmitting(true);

      /* ─────────────────────────────────────
         Convert PDF → Base64
      ───────────────────────────────────── */

      const resumeBase64 =
        await fileToBase64(form.resume);

      /* ─────────────────────────────────────
         Prepare application data
      ───────────────────────────────────── */

      const payload = {
        /* Job information */

        jobTitle: applyJob?.title || "",
        department: applyJob?.department || "",
        jobType: applyJob?.type || "",

        /* Applicant information */

        name: form.name,
        email: form.email,
        phone: form.phone,
        portfolio: form.portfolio,
        message: form.message,

        /* Resume */

        resumeName: form.resume.name,
        resumeMimeType: form.resume.type,
        resumeBase64: resumeBase64,
      };

      console.log(
        "Submitting career application..."
      );

      /* ─────────────────────────────────────
         Send to Google Apps Script
      ───────────────────────────────────── */

      const response = await axios.post(
        GOOGLE_SCRIPT_URL,
        payload,
        {
          headers: {
            "Content-Type":
              "text/plain;charset=utf-8",
          },
        }
      );

      console.log(
        "Google Apps Script response:",
        response.data
      );

      /* ─────────────────────────────────────
         Check response
      ───────────────────────────────────── */

      if (
        response.data &&
        response.data.success === false
      ) {
        throw new Error(
          response.data.message ||
            "Application submission failed."
        );
      }

      /* ─────────────────────────────────────
         Success
      ───────────────────────────────────── */

      toast.success(
        "Application submitted successfully!"
      );

      setSubmitted(true);

    } catch (error) {
      console.error(
        "Career application submission error:",
        error
      );

      toast.error(
        "Unable to submit application. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  /* ─────────────────────────────────────────
     CLOSE MODALS
  ───────────────────────────────────────── */

  const closeModals = () => {
    setActiveJD(null);
    setApplyJob(null);
    setSubmitted(false);
    setResumeName("");
    setForm(EMPTY_FORM);
    setIsSubmitting(false);
  };

  /* ─────────────────────────────────────────
     APPLY FROM JD
  ───────────────────────────────────────── */

  const openApplyFromJD = () => {
    const job = activeJD;

    setActiveJD(null);
    setApplyJob(job);
  };

  return (
    <>
      <div className="careers-page">

        {/* =====================================
            HERO
        ====================================== */}

        <section className="cp-hero">

          <div
            className="cp-hero__orb cp-hero__orb--orange"
            aria-hidden="true"
          />

          <div
            className="cp-hero__orb cp-hero__orb--blue"
            aria-hidden="true"
          />

          <div className="cp-hero__container">

            <div className="cp-hero__content">

              <div className="cp-hero__badge">
                We're Hiring — Join Us
              </div>

              <h1 className="cp-hero__title">
                Careers at
                <span className="cp-hero__title-highlight">
                  {" "}
                  Growtern{" "}
                </span>
                Grow Together. Lead the Future
              </h1>

              <p className="cp-hero__subtitle mt-2">
                • Work on real-world projects
                <br />
                • Grow with a passionate team
                <br />
                • Build skills, innovation & impact
              </p>

              <div className="cp-hero__cta">

                <button
                  className="cp-btn cp-btn--primary"
                  onClick={() =>
                    scrollToSection("careers")
                  }
                >
                  View Open Roles
                </button>

                <button
                  className="cp-btn cp-btn--outline"
                  onClick={() =>
                    scrollToSection("about")
                  }
                >
                  Our Culture
                </button>

              </div>
            </div>

            <div className="cp-hero__image-wrapper">

              <img
                src={car_hero}
                alt="Growtern team at work"
                className="cp-hero__image"
              />

              <div className="cp-hero__float-card cp-hero__float-card--top">

                <div
                  className="cp-hero__float-icon"
                  aria-hidden="true"
                >
                  💼
                </div>

                <div className="cp-hero__float-text">
                  <strong>
                    6 Open Positions
                  </strong>
                  Engineering, Design &amp; More
                </div>

              </div>

              <div className="cp-hero__float-card cp-hero__float-card--bottom">

                <div
                  className="cp-hero__float-icon"
                  aria-hidden="true"
                >
                  ⭐
                </div>

                <div className="cp-hero__float-text">
                  <strong>
                    Great Culture
                  </strong>
                  Remote-friendly workplace
                </div>

              </div>

            </div>

          </div>

        </section>

        {/* =====================================
            ABOUT
        ====================================== */}

        <section
          id="about"
          className="cp-about"
        >

          <div className="cp-about__container">

            <div className="cp-about__image-wrapper">

              <img
                src={team_collab}
                alt="Growtern team collaborating"
                className="cp-about__image"
              />

            </div>

            <div className="cp-about__content">

              <p
                style={{
                  color: "#ff7b00",
                  fontSize: "1.2rem",
                  fontWeight: "600",
                }}
              >
                About Growtern
              </p>

              <h2 className="cp-section__title">
                Where Passion Meets Purpose
              </h2>

              <p className="cp-about__text">
                Growtern Academy is Odisha's
                fastest-growing edtech platform
                dedicated to skill-based learning,
                internship training, and real-world
                career development. We offer
                industry-ready courses with a 100%
                placement guarantee.
              </p>

              <p className="cp-about__text">
                At Growtern, our team is our greatest
                asset. We believe in a culture of
                continuous learning, collaboration,
                and growth — both personal and
                professional. Every voice matters here.
              </p>

            </div>

          </div>

          <div className="cp-about__values">

            {VALUES.map((v) => (
              <div
                className="cp-value-card"
                key={v.title}
              >

                <span
                  className="cp-value-card__icon"
                  aria-hidden="true"
                >
                  {v.icon}
                </span>

                <h4 className="cp-value-card__title">
                  {v.title}
                </h4>

                <p className="cp-value-card__desc">
                  {v.desc}
                </p>

              </div>
            ))}

          </div>

        </section>

        {/* =====================================
            GALLERY
        ====================================== */}

        <section className="cp-gallery">

          <div className="cp-gallery__container">

            <div className="cp-section__header cp-section__header--center">

              <p className="cp-section__eyebrow">
                Life at Growtern
              </p>

              <h2 className="cp-section__title">
                A Sneak Peek Inside
              </h2>

              <p className="cp-section__subtitle">
                From intense brainstorming sessions
                to vibrant celebrations — life at
                Growtern is everything but boring.
              </p>

            </div>

            <div className="cp-gallery__grid">

              {GALLERY.map((item) => (
                <div
                  className="cp-gallery__item"
                  key={item.label}
                >

                  <img
                    src={item.src}
                    alt={item.label}
                    className="cp-gallery__image"
                  />

                  <div
                    className="cp-gallery__overlay"
                    aria-hidden="true"
                  >
                    <span className="cp-gallery__label">
                      {item.label}
                    </span>
                  </div>

                </div>
              ))}

            </div>

          </div>

        </section>

        {/* =====================================
            CAREERS
        ====================================== */}

        <section
          id="careers"
          className="cp-careers"
        >

          <div className="cp-careers__container">

            <div className="cp-section__header cp-section__header--center">

              <p
                style={{
                  color: "#ff7b00",
                  fontSize: "1.2rem",
                  fontWeight: "600",
                }}
              >
                Open Positions
              </p>

              <h2 className="cp-section__title">
                Find Your Role
              </h2>

              <p className="cp-section__subtitle">
                We're always looking for talented
                people across engineering, design,
                marketing, and beyond.
              </p>

            </div>

            {/* Filters */}

            <div
              className="cp-careers__filters"
              role="group"
              aria-label="Filter jobs by department"
            >

              {FILTERS.map((f) => (
                <button
                  key={f}
                  className={`cp-filter-btn${
                    activeFilter === f
                      ? " cp-filter-btn--active"
                      : ""
                  }`}
                  onClick={() =>
                    setActiveFilter(f)
                  }
                >
                  {f}
                </button>
              ))}

            </div>

            {/* Job Cards */}

            <div className="cp-careers__grid">

              {visibleJobs.map((job) => (
                <article
                  className="cp-job-card"
                  key={job.id}
                >

                  <div className="cp-job-card__thumbnail">

                    <img
                      src={job.image}
                      alt={job.title}
                      className="cp-job-card__image"
                    />

                    <span className="cp-job-card__dept">
                      {job.department}
                    </span>

                  </div>

                  <div className="cp-job-card__body">

                    <span
                      className={`cp-job-card__badge ${typeMod(
                        job.type
                      )}`}
                    >
                      {job.type}
                    </span>

                    <h3 className="cp-job-card__title">
                      {job.title}
                    </h3>

                    <ul className="cp-job-card__meta">

                      <li className="cp-job-card__meta-item">
                        <span
                          className="cp-job-card__meta-icon"
                          aria-hidden="true"
                        >
                          📍
                        </span>
                        {job.location}
                      </li>

                      <li className="cp-job-card__meta-item">
                        <span
                          className="cp-job-card__meta-icon"
                          aria-hidden="true"
                        >
                          ⏱️
                        </span>
                        {job.jd.duration}
                      </li>

                    </ul>

                    <p className="cp-job-card__deadline">
                      Last Date:{" "}
                      <strong className="cp-job-card__deadline-date">
                        {job.lastDate}
                      </strong>
                    </p>

                    <div className="cp-job-card__actions">

                      <button
                        className="cp-btn cp-btn--ghost"
                        onClick={() =>
                          setActiveJD(job)
                        }
                        aria-label={`View job description for ${job.title}`}
                      >
                        📄 JD
                      </button>

                      <button
                        className="cp-btn cp-btn--primary"
                        onClick={() =>
                          setApplyJob(job)
                        }
                        aria-label={`Apply for ${job.title}`}
                      >
                        Apply Now →
                      </button>

                    </div>

                  </div>

                </article>
              ))}

            </div>

          </div>

        </section>

        {/* =====================================
            JOB DESCRIPTION MODAL
        ====================================== */}

        {activeJD && (
          <div
            className="cp-modal-backdrop"
            role="dialog"
            aria-modal="true"
            aria-label={`Job description: ${activeJD.title}`}
            onClick={closeModals}
          >

            <div
              className="cp-modal"
              onClick={(e) =>
                e.stopPropagation()
              }
            >

              <div className="cp-modal__header">

                <div className="cp-modal__header-text">

                  <h2 className="cp-modal__title">
                    {activeJD.title}
                  </h2>

                  <p className="cp-modal__meta">
                    {activeJD.department} ·{" "}
                    {activeJD.location} ·{" "}
                    {activeJD.type}
                  </p>

                </div>

                <button
                  className="cp-modal__close"
                  onClick={closeModals}
                  aria-label="Close modal"
                >
                  ✕
                </button>

              </div>

              <div className="cp-modal__body">

                <div className="cp-jd__section">

                  <h3 className="cp-jd__section-title">
                    Overview
                  </h3>

                  <p className="cp-jd__overview">
                    {activeJD.jd.overview}
                  </p>

                </div>

                <div className="cp-jd__section">

                  <h3 className="cp-jd__section-title">
                    Responsibilities
                  </h3>

                  <ul className="cp-jd__list">

                    {activeJD.jd.responsibilities.map(
                      (r, i) => (
                        <li
                          key={i}
                          className="cp-jd__list-item"
                        >
                          {r}
                        </li>
                      )
                    )}

                  </ul>

                </div>

                <div className="cp-jd__section">

                  <h3 className="cp-jd__section-title">
                    Requirements
                  </h3>

                  <ul className="cp-jd__list">

                    {activeJD.jd.requirements.map(
                      (r, i) => (
                        <li
                          key={i}
                          className="cp-jd__list-item"
                        >
                          {r}
                        </li>
                      )
                    )}

                  </ul>

                </div>

                <div className="cp-jd__section">

                  <h3 className="cp-jd__section-title">
                    Package Details
                  </h3>

                  <div className="cp-jd__chips">

                    <div className="cp-jd__chip">
                      <span className="cp-jd__chip-value">
                        {activeJD.jd.stipend}
                      </span>

                      <span className="cp-jd__chip-label">
                        Compensation
                      </span>
                    </div>

                    <div className="cp-jd__chip">
                      <span className="cp-jd__chip-value">
                        {activeJD.jd.duration}
                      </span>

                      <span className="cp-jd__chip-label">
                        Duration
                      </span>
                    </div>

                    <div className="cp-jd__chip">
                      <span className="cp-jd__chip-value">
                        {activeJD.location}
                      </span>

                      <span className="cp-jd__chip-label">
                        Location
                      </span>
                    </div>

                  </div>

                </div>

                <button
                  className="cp-btn cp-btn--primary cp-btn--full"
                  onClick={openApplyFromJD}
                >
                  Apply for This Role →
                </button>

              </div>

            </div>

          </div>
        )}

        {/* =====================================
            APPLICATION MODAL
        ====================================== */}

        {applyJob && (
          <div
            className="cp-modal-backdrop"
            role="dialog"
            aria-modal="true"
            aria-label={`Apply for ${applyJob.title}`}
            onClick={closeModals}
          >

            <div
              className="cp-modal"
              onClick={(e) =>
                e.stopPropagation()
              }
            >

              {/* Modal Header */}

              <div className="cp-modal__header">

                <div className="cp-modal__header-text">

                  <h2 className="cp-modal__title">
                    {submitted
                      ? "Application Sent!"
                      : `Apply — ${applyJob.title}`}
                  </h2>

                  {!submitted && (
                    <p className="cp-modal__meta">
                      Fill the form below and
                      attach your resume
                    </p>
                  )}

                </div>

                <button
                  className="cp-modal__close"
                  onClick={closeModals}
                  aria-label="Close modal"
                >
                  ✕
                </button>

              </div>

              {/* Modal Body */}

              <div className="cp-modal__body">

                {submitted ? (

                  /* =================================
                     SUCCESS
                  ================================== */

                  <div className="cp-success">

                    <div
                      className="cp-success__icon"
                      aria-hidden="true"
                    >
                      ✅
                    </div>

                    <h3 className="cp-success__title">
                      You're all set!
                    </h3>

                    <p className="cp-success__message">
                      Thanks{" "}
                      <strong>
                        {form.name}
                      </strong>
                      ! Your application for{" "}
                      <strong>
                        {applyJob.title}
                      </strong>{" "}
                      has been received. Our team
                      will reach out at{" "}
                      <strong>
                        {form.email}
                      </strong>{" "}
                      within 3–5 business days.
                    </p>

                    <button
                      className="cp-btn cp-btn--primary cp-success__back-btn"
                      onClick={closeModals}
                    >
                      Back to Careers
                    </button>

                  </div>

                ) : (

                  /* =================================
                     APPLICATION FORM
                  ================================== */

                  <form
                    className="cp-apply-form"
                    onSubmit={handleFormSubmit}
                    noValidate
                  >

                    {/* Name + Email */}

                    <div className="cp-apply-form__row">

                      <div className="cp-form-field">

                        <label
                          className="cp-form-field__label"
                          htmlFor="name"
                        >
                          Full Name *
                        </label>

                        <input
                          id="name"
                          name="name"
                          type="text"
                          className="cp-form-field__input"
                          placeholder="Rahul Sharma"
                          required
                          value={form.name}
                          onChange={handleFormChange}
                        />

                      </div>

                      <div className="cp-form-field">

                        <label
                          className="cp-form-field__label"
                          htmlFor="email"
                        >
                          Email Address *
                        </label>

                        <input
                          id="email"
                          name="email"
                          type="email"
                          className="cp-form-field__input"
                          placeholder="rahul@email.com"
                          required
                          value={form.email}
                          onChange={handleFormChange}
                        />

                      </div>

                    </div>

                    {/* Phone + Portfolio */}

                    <div className="cp-apply-form__row">

                      <div className="cp-form-field">

                        <label
                          className="cp-form-field__label"
                          htmlFor="phone"
                        >
                          Phone Number *
                        </label>

                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          className="cp-form-field__input"
                          placeholder="+91 9876543210"
                          required
                          value={form.phone}
                          onChange={handleFormChange}
                        />

                      </div>

                      <div className="cp-form-field">

                        <label
                          className="cp-form-field__label"
                          htmlFor="portfolio"
                        >
                          Portfolio / LinkedIn
                        </label>

                        <input
                          id="portfolio"
                          name="portfolio"
                          type="url"
                          className="cp-form-field__input"
                          placeholder="linkedin.com/in/..."
                          value={form.portfolio}
                          onChange={handleFormChange}
                        />

                      </div>

                    </div>

                    {/* Message */}

                    <div className="cp-form-field">

                      <label
                        className="cp-form-field__label"
                        htmlFor="message"
                      >
                        Why do you want to join
                        Growtern? *
                      </label>

                      <textarea
                        id="message"
                        name="message"
                        className="cp-form-field__textarea"
                        placeholder="Tell us about yourself and your motivation..."
                        required
                        value={form.message}
                        onChange={handleFormChange}
                      />

                    </div>

                    {/* Resume */}

                    <div className="cp-form-field">

                      <label className="cp-form-field__label">
                        Resume (PDF) *
                      </label>

                      <div className="cp-resume-upload">

                        <input
                          type="file"
                          name="resume"
                          accept=".pdf,application/pdf"
                          required
                          className="cp-resume-upload__input"
                          onChange={handleFormChange}
                          aria-label="Upload resume PDF"
                        />

                        <span
                          className="cp-resume-upload__icon"
                          aria-hidden="true"
                        >
                          📎
                        </span>

                        {resumeName ? (

                          <p className="cp-resume-upload__filename">
                            ✅ {resumeName}
                          </p>

                        ) : (

                          <p className="cp-resume-upload__placeholder">
                            Click to upload or
                            drag &amp; drop

                            <span className="cp-resume-upload__hint">
                              PDF only · Max 5 MB
                            </span>

                          </p>

                        )}

                      </div>

                    </div>

                    {/* Submit */}

                    <button
                      type="submit"
                      className="cp-btn cp-btn--primary cp-btn--full"
                      disabled={isSubmitting}
                      style={{
                        opacity: isSubmitting
                          ? 0.7
                          : 1,
                        cursor: isSubmitting
                          ? "not-allowed"
                          : "pointer",
                      }}
                    >
                      {isSubmitting
                        ? "Submitting..."
                        : "Submit Application →"}
                    </button>

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