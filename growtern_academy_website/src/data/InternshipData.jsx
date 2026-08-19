// import Data 
import { InternshipStartingDate, InternshipLastApplyDate } from "./Date";
import Dataanalytics_Sylabus from "../assets/internshipSylabus/AI-powered Data Analytics Summer Internship Syllabus-Growtern Academy.pdf"

import Python_Sylabus from "../assets/internshipSylabus/AI-Power Python Developer Summer Internship Syllabus-Growtern Academy.pdf"
import Java_Sylabus from "../assets/internshipSylabus/AI-Power Java Developer Summer Internship Syllabus-Growtern Academy.pdf"

import Node_Sylabus from "../assets/internshipSylabus/AI-Power Backend Development Node Summer Internship Syllabus-Growtern Academy.pdf"

import webdesign_Sylabus from "../assets/internshipSylabus/AI-Power Website Designer Summer Internship Syllabus -Growtern Academy.pdf"


import advanceFrontend_Sylabus from "../assets/internshipSylabus/AI-Power Website Designer Summer Internship Syllabus -Growtern Academy.pdf"




export const IntershipData = [
  {
    id: 1,
    slug: "website-design",
    Image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=900&q=80",
    courseName: "AI-powered Website Designer",
    sylabus: webdesign_Sylabus,
    description:
      "Become job-ready in just 6 Weaks with hands-on UI, responsive design & modern frontend development.",
    KeyFeatures: [
      { icon: "⭐", label: "4.9/5 Rating" },
      { icon: "👥", label: "2,500+ Enrolled" },
      { icon: "💻", label: "6 Weaks" },
      { icon: "📅", label: InternshipStartingDate },
    ],
    Learning: [
      {
        title: "HTML-5",
        desc: "Build clean, semantic, SEO-friendly web page structures.",
      },
      {
        title: "CSS-3",
        desc: "Create responsive layouts with Flexbox, Grid & animations.",
      },
      {
        title: "Bootstrap-5",
        desc: "Use Bootstrap components to build mobile-first UI quickly.",
      },
      {
        title: "JavaScript (ES6)",
        desc: "Add interactivity using modern JS syntax & DOM manipulation.",
      },
    ],
    curriculum: [
      {
        title: "Module 1: Web Development Basics",
        desc: "Start your journey with understanding how websites work.",
        topics: [
          "Frontend vs Backend",
          "How Websites Load",
          "HTML + CSS + JS Overview",
          "Setting Up Your Environment",
        ],
      },
      {
        title: "Module 2: HTML5 Deep Concepts",
        desc: "Learn how to build structure for websites.",
        topics: ["Semantic HTML", "Tables & Forms", "SEO Tags", "Media & iFrames"],
      },
      {
        title: "Module 3: CSS3 & Modern UI Design",
        desc: "Master layout techniques and responsive design.",
        topics: [
          "Flexbox & Grid",
          "Animations & Transitions",
          "Responsive Design",
          "UI/UX Styling Basics",
        ],
      },
      {
        title: "Module 4: JavaScript Essentials",
        desc: "Learn the core programming concepts of JS.",
        topics: [
          "Variables & Operators",
          "Functions & Scope",
          "Arrays & Objects",
          "DOM Manipulation",
        ],
      },
    ],
    duration: "6 Weeks",
    startDate: InternshipStartingDate,
    actualParice: "9999.00",
    finalPrice: "5999.00",
    addmissionClose: InternshipLastApplyDate,
  },

  // 3️⃣ Back-End Development (Node.js)
  {
    id: 2,
    slug: "backend-nodejs",
    Image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=900&q=80",
    courseName: "AI-powered Backend Development(Node Js)",
    sylabus: Node_Sylabus,
    description:
      "Learn Node.js, APIs, MongoDB, Authentication & Backend Architecture.",
    KeyFeatures: [
      { icon: "⭐", label: "4.9/5 Rating" },
      { icon: "🛠️", label: "Real API Projects" },
      { icon: "⏱️", label: "4 Weaks" },
      { icon: "📅", label: InternshipStartingDate },
    ],
    Learning: [
      { title: "Node.js Basics", desc: "Learn server, modules & event loops." },
      { title: "Express.js", desc: "Build REST APIs with routing & middleware." },
      { title: "MongoDB", desc: "Work with NoSQL databases & aggregation." },
      { title: "Auth System", desc: "JWT, Cookies, Sessions & Protected Routes." },
    ],
    curriculum: [
      {
        title: "Module 1: Node.js Core",
        desc: "Learn basics of backend fundamentals.",
        topics: ["Modules", "File System", "NPM", "Event Loop"],
      },
      {
        title: "Module 2: Express.js",
        desc: "Build advanced REST backend.",
        topics: ["Middleware", "Routing", "MVC Architecture", "Error Handling"],
      },
      {
        title: "Module 3: MongoDB",
        desc: "Master database fundamentals.",
        topics: ["CRUD", "Schema Design", "Aggregation", "Indexes"],
      },
      {
        title: "Module 4: Authentication",
        desc: "Secure your application.",
        topics: ["JWT", "Hashing", "Cookies", "Auth Middleware"],
      },
    ],
    duration: "4 Weeks",
    startDate: InternshipStartingDate,
    actualParice: "9999.00",
    finalPrice: "4999.00",
    addmissionClose: InternshipLastApplyDate,
  },

  // 4️⃣ Core Java Programming
  {
    id: 3,
    slug: "core-java",
    Image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=900&q=80",
    courseName: "AI-powered Java Developer",
    sylabus: Java_Sylabus,
    description:
      "Learn OOP, Java Basics, Collections, Exception Handling, and Mini Projects.",
    KeyFeatures: [
      { icon: "⭐", label: "5.0/5 Rating" },
      { icon: "💻", label: "Hands-On Coding" },
      { icon: "⏱️", label: "4 Weaks" },
      { icon: "📅", label: InternshipStartingDate },
    ],
    Learning: [
      { title: "Java Basics", desc: "Variables, loops, conditions, operators." },
      { title: "OOP Concepts", desc: "Inheritance, Polymorphism, Encapsulation." },
      { title: "Collections", desc: "List, Map, Set, Sorting & Iterators." },
      { title: "Exception Handling", desc: "Try/catch, throw, custom exceptions." },
    ],
    curriculum: [
      {
        title: "Module 1: Java Basics",
        desc: "Start with fundamentals.",
        topics: ["Datatypes", "Operators", "Loops", "Arrays"],
      },
      {
        title: "Module 2: OOP",
        desc: "Master object-oriented programming.",
        topics: ["Class/Object", "Inheritance", "Interfaces", "Polymorphism"],
      },
      {
        title: "Module 3: Collections Framework",
        desc: "Learn how Java stores and manages data.",
        topics: ["ArrayList", "HashMap", "LinkedList", "HashSet"],
      },
      {
        title: "Module 4: Exception Handling",
        desc: "Handle errors in code gracefully.",
        topics: ["try/catch", "throw", "finally", "Custom Errors"],
      },
    ],
    duration: "4 Weeks",
    startDate: InternshipStartingDate,
    actualParice: "9999.00",
    finalPrice: "4999.00",
    addmissionClose: InternshipLastApplyDate,
  },

  // 5️⃣ Python Developer
  {
    id: 4,
    slug: "Python-development",
    Image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=900&q=80",
    courseName: "AI-powered Python Developer",
    sylabus: Python_Sylabus,
    description:
      "Learn Python Fundamentals, OOP Concepts, Exception Handling, and Real-World Projects.",
    KeyFeatures: [
      { icon: "⭐", label: "5.0/5 Rating" },
      { icon: "💻", label: "Hands-On Coding" },
      { icon: "⏱️", label: "4 Weaks" },
      { icon: "📅", label: InternshipStartingDate },
    ],
    Learning: [
      { title: "Python Basics", desc: "Python syntax and variables, Operators & expressions." },
      { title: "Control Flow & Functions", desc: "statements, Looping , Break, continue, pass." },
      { title: "Data Structures", desc: "Lists, tuples, sets, dictionaries, Working with JSON & CSV files." },
      { title: "Database", desc: "Database concepts, MySQL / SQLite basics, Mini project." },
    ],
    curriculum: [
      {
        title: "Module 1: Python Fundamentals",
        desc: "Start with fundamentals.",
        topics: ["Python syntax", "keywords and variables", "Data types", "Operators & expressions", "Conditional statements", "Looping", "Break, continue, pass"],
      },
      {
        title: "Module 2: Data Structures & File Handling",
        desc: "Master object-oriented programming.",
        topics: ["Lists, tuples, sets, dictionaries", "File handling", "Exception handling", "Working with JSON & CSV files"],
      },
      {
        title: "Module 3: Collections Framework",
        desc: "Python for Web Development.",
        topics: ["Flask / Django basics", "Routing & templates", "Forms & validation"],
      },
      {
        title: "Module 4: Python for Web Development",
        desc: "Handle errors in code gracefully.",
        topics: ["try/catch", "throw", "finally", "Custom Errors"],
      },
    ],
    duration: "4 Weeks",
    startDate: InternshipStartingDate,
    actualParice: "9999.00",
    finalPrice: "4999.00",
    addmissionClose: InternshipLastApplyDate,
  },

  // 6 Data Analytics
  {
    id: 5,
    slug: "data-analytics",
    Image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&q=80",
    courseName: "AI-powered Data Science & Analytics",
    sylabus: Dataanalytics_Sylabus,
    description:
      "Learn Excel, SQL, Power BI, Statistics, and Data Visualization.",
    KeyFeatures: [
      { icon: "⭐", label: "4.9/5 Rating" },
      { icon: "📊", label: "Power BI + SQL Training" },
      { icon: "⏱️", label: "4 Weaks" },
      { icon: "📅", label: InternshipStartingDate },
    ],
    Learning: [
      { title: "Excel Advanced", desc: "Pivot, formulas, charts, dashboards." },
      { title: "SQL Basics", desc: "Queries, Joins, Views, Subqueries." },
      { title: "Power BI", desc: "Data modeling, DAX, reports, KPI dashboards." },
      { title: "Statistics", desc: "Mean, median, deviation, correlations." },
    ],
    curriculum: [
      {
        title: "Module 1: Excel",
        desc: "Master spreadsheets.",
        topics: ["Formulas", "Pivot Tables", "Charts", "Dashboards"],
      },
      {
        title: "Module 2: SQL",
        desc: "Work with databases.",
        topics: ["Select", "Joins", "Constraints", "Aggregation"],
      },
      {
        title: "Module 3: Power BI",
        desc: "Visualize insights.",
        topics: ["DAX", "Data Models", "Reports", "KPIs"],
      },
      {
        title: "Module 4: Statistics",
        desc: "Learn analytical foundations.",
        topics: ["Probability", "Distribution", "Regression", "Correlation"],
      },
    ],
    duration: "4 Weeks",
    startDate: InternshipStartingDate,
    actualParice: "9999.00",
    finalPrice: "4999.00",
    addmissionClose: InternshipLastApplyDate,
  },
  // 7️⃣ Advance Frontend Development
  {
    id: 6,
    slug: "advance-frontend",
    Image: "https://images.unsplash.com/photo-1593720219276-0b1eacd0aef4?w=900&q=80",
    courseName: "AI-powered Advance Frontend Development",
    sylabus: advanceFrontend_Sylabus,
    description:
      "Master React.js, State Management, REST APIs, and modern frontend architecture for production-ready apps.",
    KeyFeatures: [
      { icon: "⭐", label: "4.9/5 Rating" },
      { icon: "⚛️", label: "React + Ecosystem" },
      { icon: "⏱️", label: "6 Weeks" },
      { icon: "📅", label: InternshipStartingDate },
    ],
    Learning: [
      { title: "React.js", desc: "Components, JSX, Props, State & Lifecycle." },
      { title: "React Hooks", desc: "useState, useEffect, useContext, custom hooks." },
      { title: "State Management", desc: "Redux Toolkit, Context API & global state patterns." },
      { title: "REST API Integration", desc: "Axios, Fetch, loading states & error handling." },
    ],
    curriculum: [
      {
        title: "Module 1: React Fundamentals",
        desc: "Build a strong foundation in React.",
        topics: ["JSX & Components", "Props & State", "Event Handling", "Conditional Rendering"],
      },
      {
        title: "Module 2: React Hooks & Routing",
        desc: "Master modern React patterns.",
        topics: ["useState & useEffect", "useRef & useMemo", "React Router v6", "Protected Routes"],
      },
      {
        title: "Module 3: State Management",
        desc: "Handle complex application state.",
        topics: ["Context API", "Redux Toolkit", "Async Thunks", "RTK Query"],
      },
      {
        title: "Module 4: API Integration & Deployment",
        desc: "Connect frontend with real backends.",
        topics: ["Axios & Fetch", "REST API Calls", "Environment Variables", "Deployment on Vercel"],
      },
    ],
    duration: "6 Weeks",
    startDate: InternshipStartingDate,
    actualParice: "9999.00",
    finalPrice: "5999.00",
    addmissionClose: InternshipLastApplyDate,
  },
];