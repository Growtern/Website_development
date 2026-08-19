// src/data/CourseData.jsx

import FrontendTechFlow from "../components/CourseFlowchat/Frontend";
import JavaTechFlow from "../components/CourseFlowchat/Java";
import MERNTechFlow from "../components/CourseFlowchat/MERN";
import PythonTechFlow from "../components/CourseFlowchat/Python";
import DataScienceTechFlow from "../components/CourseFlowchat/DataScience";
import AiMlFlowChat from "../components/CourseFlowchat/AiMlFlowChat";

import { BatchStartingDate } from "./Date";


const CourseData = [
  {
    id: 1,
    Sylabus: "MernSylabus",
    Course: <> PGPP in <span style={{ color: "#fcaa38ff" }}>MERN Stack</span> With <span style={{ color: "#fcaa38ff" }}>Gen AI</span></>,
    slug: "pgpp-in-mern-stack-with-gen-ai",
    flowChart: <MERNTechFlow />,
    NextBatchStartFrom: BatchStartingDate,
    SyllabusPDF: "/assets/syllabus/mern-syllabus.pdf",
    Curriculum:
      "Build production-ready full-stack web applications using MongoDB, Express.js, React, and Node.js — integrated with Generative AI and Prompt Engineering. This program is designed to make you job-ready as a modern MERN Stack Developer capable of building intelligent, scalable web solutions from scratch.",

    plans: {
      Standard: [
        {
          id: 1,
          type: "Online",
          badge: "online",
          title: "PGPP in MERN Stack with Gen AI",
          subtitle: "AI Powered",
          price: "₹34,999",
          originalPrice: "₹54,999",
          duration: "6 Months",
          batchSize: "15 Students",
          features: [
            "Live Online Classes",
            "15+ Real-World MERN Projects",
            "100% Placement Preparations",
            "Letter Of Recommendation",
            "1:1 Mentorship & Code Reviews",
            "Resume + LinkedIn Optimization",
            "Mock Interviews with Industry Experts",
            "Globally Accepted Certificate",
            "Spoken English Class"
          ],
          button: "Enroll Standard",
          popular: false,
        },
        {
          id: 2,
          type: "Offline",
          badge: "offline",
          title: "PGPP in MERN Stack with Gen AI",
          subtitle: "AI Powered",
          price: "₹44,999",
          originalPrice: "₹74,999",
          duration: "6 Months",
          batchSize: "15 Students",
          features: [
            "Live Offline Interactive Classes",
            "15+ Real-World MERN Projects",
            "100% Placement Preparations",
            "Letter Of Recommendation",
            "1:1 Mentorship & Code Reviews",
            "Resume + LinkedIn Optimization",
            "Mock Interviews with Industry Experts",
            "Globally Accepted Certificate",
            "Spoken English Class"
          ],
          button: "Enroll Premium",
          popular: true,
        },
      ],

      Premium: [
        {
          id: 3,
          type: "Online",
          badge: "online",
          title: "PGPP in MERN Stack with Gen AI",
          subtitle: "AI Powered",
          price: "₹54,999",
          originalPrice: "₹74,999",
          duration: "10 Months",
          batchSize: "15 Students",
          features: [
            "Live Online Classes",
            "15+ Real-World MERN Projects",
            "100% Placement Guaranteed",
            "Paid Internship + LOR",
            "1:1 Mentorship & Code Reviews",
            "Resume + LinkedIn Optimization",
            "Mock Interviews with Industry Experts",
            "Globally Accepted Certificate",
            "Spoken English Class"
          ],
          button: "Enroll Standard",
          popular: false,
        },
        {
          id: 4,
          type: "Offline",
          badge: "offline",
          title: "PGPP in MERN Stack with Gen AI",
          subtitle: "AI Powered",
          price: "₹69,999",
          originalPrice: "₹99,999",
          duration: "10 Months",
          batchSize: "15 Students",
          features: [
            "Live Offline Interactive Classes",
            "15+ Real-World MERN Projects",
            "100% Placement Guaranteed",
            "Paid Internship + LOR",
            "1:1 Mentorship & Code Reviews",
            "Resume + LinkedIn Optimization",
            "Mock Interviews with Industry Experts",
            "Globally Accepted Certificate",
            "Spoken English Class"
          ],
          button: "Enroll Premium",
          popular: true,
        },
      ],
    },

    Modules: [
      {
        name: "Fundamentals",
        category: "Frontend",
        points: [
          "Basic Of Internet",
          "Browser",
          "Client and Server Architecture",
          "Static and Dynamic Website",
          "Text editor and IDE"
        ]
      },
      {
        name: "HTML",
        category: "Frontend",
        points: [
          "Introduction To Web development",
          "Web Development Tools",
          "Element and Tag In HTML",
          "Core HTML",
          "Media and Forms",
          "Modern HTML",
          "Emmet",
          "SEO"
        ]
      },
      {
        name: "CSS",
        category: "Frontend",
        points: [
          "Introduction To CSS",
          "Basics CSS",
          "Position in CSS",
          "Flexbox In CSS",
          "Grid",
          "Media Query",
          "CSS Selector",
          "Advance CSS"
        ]
      },
      {
        name: "Tailwind CSS",
        category: "Frontend",
        points: [
          "Understanding Tailwind CSS With Projects",
        ]
      },
      {
        name: "GIT and Github",
        category: "Other",
        points: [
          "Version Control System",
          "General Commands on Git",
          "Github"
        ]
      },
      {
        name: "Javascript",
        category: "Frontend",
        points: [
          "Fundamentals Of Javascript",
          "Operators In Javascript",
          "Type Conversion",
          "Condition and Loops",
          "Function in Javascript",
          "Array and Object",
          "Advance Javascript",
          "Class In Javascript",
          "Error Handling",
          "Async Js, Browser API & Window",
          "DOM"
        ]
      },
      {
        name: "React",
        category: "Frontend",
        points: [
          "Walkthrough with React",
          "React Components",
          "JSX, HOC",
          "Component Style",
          "React Router",
          "Form Handling and API Calls",
          "Redux Toolkit"
        ]
      },
      {
        name: "Networking",
        category: "Backend",
        points: [
          "Introduction to Networking",
          "DNS and Domain Management",
          "HTTP and HTTPS Protocols",
          "Web Application Security"
        ]
      },
      {
        name: "Node JS",
        category: "Backend",
        points: [
          "Intro To NodeJs",
          "Modules, creation and loading of modules",
          "Path Module",
          "OS Module",
          "File System Module"
        ]
      },
      {
        name: "Express",
        category: "Backend",
        points: [
          "Introduction to Express",
          "Handling HTTP GET & POST Requests",
          "Environment Variables",
          "Input Validation",
          "Handling HTTP PUT/PATCH & DELETE Requests",
          "Express Middleware",
          "Creating Custom Middleware",
          "Built-in Middleware",
          "Third-party Middleware",
          "CORS"
        ]
      },
      {
        name: "Database",
        category: "Database",
        points: [
          "File Based Storage System",
          "What is Schema including ER diagrams",
          "Intro to DBMS",
          "Intro to Data Models",
          "DBMS Classification: Relational & Non relational",
          "Relational Database Management System(RDBMS)",
          "Types of Relationships",
          "Keys in RDBMS. Primary, Candidate, Super & Foreign",
          "ACID",
          "Introduction to Normalization. Why Normalization?",
          "Join(Inner, Left, Right and Full Joins)",
          "Dependency (Functional, Inclusion, Multivalued, Join) & Decomposition",
          "Indexing and Performance Optimization",
          "Transactions and Concurrency Control",
          "Database Security"
        ]
      },
      {
        name: "MongoDB",
        category: "Database",
        points: [
          "Schemas",
          "Models",
          "Comparison Query Operators",
          "Logical Query Operators",
          "Regular Expressions",
          "Counting",
          "Pagination"
        ]
      },
      {
        name: "AI Prompt Engineering",
        category: "AI",
        points: [
          "Introduction to Prompt Engineering",
          "Writing Effective Prompts",
          "Prompt Types",
          "Techniques for Better Prompts",
          "Hands-On Practice",
          "Troubleshooting Poor Outputs",
          "How to iterate & improve prompts",
          "Final Mini Project Idea"
        ]
      },
      {
        name: "Project On Authentication",
        category: "Backend",
        points: [
          "Added security with Environment Variables",
          "Setting Response Headers",
          "Encapsulating Logic in Mongoose Models",
          "Auth Middleware",
          "Protected Routes",
          "Retrieving current user information in Frontend",
          "Logging Out Users",
          "Role-based Authorization",
          "Exception handling",
          "OAuth(Single Sign On), Passport"
        ]
      },
      {
        name: "Working With Files",
        category: "Backend",
        points: [
          "Handling file uploads",
          "Validating files",
          "Single file and multiple file uploads",
          "Uploading files to cloud",
          "Multer, formidable for file processing"
        ]
      },
      {
        name: "Capstone Project",
        category: "Project",
        points: [
          "Frontend",
          "Backend"
        ]
      }
    ],
    roles: [
      "Frontend Developer",
      "React Developer",
      "MERN Stack Developer",
      "Full Stack Developer",
      "Node.js Developer",
      "Software Engineer",
      "Web Application Developer",
      "UI Developer"
    ]
  },

  {
    id: 2,
    Course: <>PGPP in <span style={{ color: "#fcaa38ff" }}>Python Full Stack</span> Development With <span style={{ color: "#fcaa38ff" }}> Gen AI</span></>,
    slug: "pgpp-in-python-full-stack-development-with-gen-ai",
    flowChart: <PythonTechFlow />,
    NextBatchStartFrom: BatchStartingDate,
    SyllabusPDF: "/assets/syllabus/python-syllabus.pdf",
    Curriculum:
      "Master Python Full Stack Development by building end-to-end web applications using Django on the backend and React on the frontend. Integrated with Generative AI and Prompt Engineering, this program prepares you to develop smart, automated web platforms using one of the world's most in-demand tech stacks.",

    plans: {
      Standard: [
        {
          id: 1,
          type: "Online",
          badge: "online",
          title: "PGPP in Python Full Stack Development with Gen AI",
          subtitle: "AI Powered",
          price: "₹34,999",
          originalPrice: "₹54,999",
          duration: "6 Months",
          batchSize: "15 Students",
          features: [
            "Live Online Classes",
            "15+ Real-World Python & Django Projectss",
            "100% Placement Preparations",
            "Letter Of Recommendation",
            "1:1 Mentorship & Code Reviews",
            "Resume + LinkedIn Optimization",
            "Mock Interviews with Industry Experts",
            "Globally Accepted Certificate",
            "Spoken English Class"
          ],
          button: "Enroll Standard",
          popular: false,
        },
        {
          id: 2,
          type: "Offline",
          badge: "offline",
          title: "PGPP in Python Full Stack Development with Gen AI",
          subtitle: "AI Powered",
          price: "₹44,999",
          originalPrice: "₹74,999",
          duration: "6 Months",
          batchSize: "15 Students",
          features: [
            "Live Offline Interactive Classes",
            "15+ Real-World Python & Django Projects",
            "100% Placement Preparations",
            "Letter Of Recommendation",
            "1:1 Mentorship & Code Reviews",
            "Resume + LinkedIn Optimization",
            "Mock Interviews with Industry Experts",
            "Globally Accepted Certificate",
            "Spoken English Class"
          ],
          button: "Enroll Premium",
          popular: true,
        },
      ],

      Premium: [
        {
          id: 3,
          type: "Online",
          badge: "online",
          title: "PGPP in Python Full Stack Development with Gen AI",
          subtitle: "AI Powered",
          price: "₹54,999",
          originalPrice: "₹74,999",
          duration: "10 Months",
          batchSize: "15 Students",
          features: [
            "Live Online Classes",
            "15+ Real-World Python & Django Projects",
            "100% Placement Guaranteed",
            "Paid Internship + LOR",
            "1:1 Mentorship & Code Reviews",
            "Resume + LinkedIn Optimization",
            "Mock Interviews with Industry Experts",
            "Globally Accepted Certificate",
            "Spoken English Class"
          ],
          button: "Enroll Standard",
          popular: false,
        },
        {
          id: 4,
          type: "Offline",
          badge: "offline",
          title: "PGPP in Python Full Stack Development with Gen AI",
          subtitle: "AI Powered",
          price: "₹69,999",
          originalPrice: "₹99,999",
          duration: "10 Months",
          batchSize: "15 Students",
          features: [
            "Live Offline Interactive Classes",
            "15+ Real-World Python & Django Projects",
            "100% Placement Guaranteed",
            "Paid Internship + LOR",
            "1:1 Mentorship & Code Reviews",
            "Resume + LinkedIn Optimization",
            "Mock Interviews with Industry Experts",
            "Globally Accepted Certificate",
            "Spoken English Class"
          ],
          button: "Enroll Premium",
          popular: true,
        },
      ],
    },

    Modules: [
      {
        name: "Fundamentals",
        category: "Frontend",
        points: [
          "Basic Of Internet",
          "Browser",
          "Client and Server Architecture",
          "Static and Dynamic Website",
          "Text editor and IDE"
        ]
      },
      {
        name: "HTML",
        category: "Frontend",
        points: [
          "Introduction To Web development",
          "Web Development Tools",
          "Element and Tag In HTML",
          "Core HTML",
          "Media and Forms",
          "Modern HTML",
          "Emmet",
          "SEO"
        ]
      },
      {
        name: "CSS",
        category: "Frontend",
        points: [
          "Introduction To CSS",
          "Basics CSS",
          "Position in CSS",
          "Flexbox In CSS",
          "Grid",
          "Media Query",
          "CSS Selector",
          "Advance CSS"
        ]
      },
      {
        name: "Tailwind CSS",
        category: "Frontend",
        points: [
          "Understanding Tailwind CSS With Projects",
        ]
      },
      {
        name: "GIT and Github",
        category: "Other",
        points: [
          "Version Control System",
          "General Commands on Git",
          "Github"
        ]
      },
      {
        name: "Javascript",
        category: "Frontend",
        points: [
          "Fundamentals Of Javascript",
          "Operators In javascript",
          "Type Conversion",
          "Condition and Loops",
          "Function in javascript",
          "Array and Object",
          "Advance Javascript",
          "Class In javascript",
          "Error Handling",
          "Async Js, Browser API & Window",
          "DOM"
        ]
      },
      {
        name: "React",
        category: "Frontend",
        points: [
          "Walkthrough with React",
          "React Components",
          "JSX, HOC",
          "Component Style",
          "React Router",
          "Form Handling and API Calls",
          "Redux Toolkit"
        ]
      },
      {
        name: "Networking",
        category: "Backend",
        points: [
          "Introduction to Networking",
          "DNS and Domain Management",
          "HTTP and HTTPS Protocols",
          "Web Application Security"
        ]
      },
      {
        name: "Python",
        category: "Backend",
        points: [
          "Python Programming Basics",
          "Object-Oriented Programming (OOP)",
          "Working with APIs and External Libraries",
          "Advanced Python Concepts for Projects",
          "Understand HTTP Requests (GET, POST)",
          "Polymorphism (Overloading / Overriding)",
          "Control Flow (if-else, loops)",
          "Working with Files (Text and CSV Files)",
          "Inheritance (Single & Multi-level)",
          "Working with CSV / JSON files",
          "Packaging Python Code into Script"
        ]
      },
      {
        name: "Django",
        category: "Backend",
        points: [
          "What is Django? (MVC vs MVT architec)",
          "Simple Deployment on Heroku / Render / DigitalOcean",
          "Real Project Ideas using Django",
          "REST API (Basic Concept)",
          "Authentication (Important for Projects)"
        ]
      },
      {
        name: "Database",
        category: "Database",
        points: [
          "File Based Storage System",
          "What is Schema including ER diagrams",
          "Intro to DBMS",
          "Intro to Data Models",
          "DBMS Classification: Relational & Non relational",
          "Relational Database Management System(RDBMS)",
          "Types of Relationships",
          "Keys in RDBMS. Primary, Candidate, Super & Foreign",
          "ACID",
          "Introduction to Normalization. Why Normalization?",
          "Join(Inner, Left, Right and Full Joins)",
          "Dependency (Functional, Inclusion, Multivalued, Join) & Decomposition",
          "Indexing and Performance Optimization",
          "Transactions and Concurrency Control",
          "Database Security"
        ]
      },
      {
        name: "MySQL",
        category: "Database",
        points: [
          "Introduction to Databases & Basic SQL",
          "Data Filtering, Sorting, and Aggregation",
          "Advanced Queries and Relationships",
          "Database Design & Transactions",
          "Simple Database Design Concepts",
          "Indexes (Why & How to use)",
          "Transactions"
        ]
      },
      {
        name: "AI Prompt Engineering",
        category: "AI",
        points: [
          "Introduction to Prompt Engineering",
          "Writing Effective Prompts",
          "Prompt Types",
          "Techniques for Better Prompts",
          "Hands-On Practice",
          "Troubleshooting Poor Outputs",
          "How to iterate & improve prompts.",
          "Final Mini Project Idea"
        ]
      },
      {
        name: "Project On Authentication",
        category: "Backend",
        points: [
          "Added security with Environment Variables",
          "Setting Response Headers",
          "Encapsulating Logic in Mongoose Models",
          "Auth Middleware",
          "Protected Routes",
          "Retrieving current user information in Frontend",
          "Logging Out Users",
          "Role-based Authorization",
          "Exception handling",
          "OAuth(Single Sign On), Passport"
        ]
      },
      {
        name: "Working With Files",
        category: "Backend",
        points: [
          "Handling file uploads",
          "Validating files",
          "Single file and multiple file uploads",
          "Uploading files to cloud",
          "Multer, formidable for file processing"
        ]
      },
      {
        name: "Capstone Project",
        category: "Project",
        points: [
          "Frontend",
          "Backend"
        ]
      }
    ],
    roles: [
      "Python Developer",
      "Backend Developer",
      "Full Stack Developer",
      "Django Developer",
      "API Developer",
      "Software Engineer",
      "Web Application Developer",
      "Automation Engineer"
    ]
  },

  {
    id: 3,
    Course: <>PGPP in <span style={{ color: "#fcaa38ff" }}>Java Full Stack</span> Development With <span style={{ color: "#fcaa38ff" }}>Gen AI</span></>,
    slug: "pgpp-in-java-full-stack-development-with-gen-ai",
    flowChart: <JavaTechFlow />,
    NextBatchStartFrom: BatchStartingDate,
    SyllabusPDF: "/assets/syllabus/java-syllabus.pdf",
    Curriculum:
      "Become an industry-ready Java Full Stack Developer by mastering Core Java, Spring Boot, React.js, and MySQL — integrated with Generative AI and Prompt Engineering. This program is built for developers who want to build enterprise-grade, intelligent web solutions and crack high-paying Java developer roles.",

    plans: {
      Standard: [
        {
          id: 1,
          type: "Online",
          badge: "online",
          title: "PGPP in Java Full Stack Development with Gen AI",
          subtitle: "AI Powered",
          price: "₹34,999",
          originalPrice: "₹54,999",
          duration: "6 Months",
          batchSize: "15 Students",
          features: [
            "Live Online Classes",
            "15+ Real-World Java & Spring Boot Projects",
            "100% Placement Preparations",
            "Letter Of Recommendation",
            "1:1 Mentorship & Code Reviews",
            "Resume + LinkedIn Optimization",
            "Mock Interviews with Industry Experts",
            "Globally Accepted Certificate",
            "Spoken English Class"
          ],
          button: "Enroll Standard",
          popular: false,
        },
        {
          id: 2,
          type: "Offline",
          badge: "offline",
          title: "PGPP in Java Full Stack Development with Gen AI",
          subtitle: "AI Powered",
          price: "₹44,999",
          originalPrice: "₹64,999",
          duration: "6 Months",
          batchSize: "15 Students",
          features: [
            "Live Offline Interactive Classes",
            "15+ Real-World Java & Spring Boot Projects",
            "100% Placement Preparations",
            "Paid Internship + LOR",
            "1:1 Mentorship & Code Reviews",
            "Resume + LinkedIn Optimization",
            "Mock Interviews with Industry Experts",
            "Globally Accepted Certificate",
            "Spoken English Class"
          ],
          button: "Enroll Premium",
          popular: true,
        },
      ],

      Premium: [
        {
          id: 3,
          type: "Online",
          badge: "online",
          title: "PGPP in Java Full Stack Development with Gen AI",
          subtitle: "AI Powered",
          price: "₹54,999",
          originalPrice: "₹64,999",
          duration: "10 Months",
          batchSize: "15 Students",
          features: [
            "Live Online Classes",
            "15+ Real-World Java & Spring Boot Projects",
            "100% Placement Guaranteed",
            "Paid Internship + LOR",
            "1:1 Mentorship & Code Reviews",
            "Resume + LinkedIn Optimization",
            "Mock Interviews with Industry Experts",
            "Globally Accepted Certificate",
            "Spoken English Class"
          ],
          button: "Enroll Standard",
          popular: false,
        },
        {
          id: 4,
          type: "Offline",
          badge: "offline",
          title: "PGPP in Java Full Stack Development with Gen AI",
          subtitle: "AI Powered",
          price: "₹69,999",
          originalPrice: "₹79,999",
          duration: "10 Months",
          batchSize: "15 Students",
          features: [
            "Live Offline Interactive Classes",
            "15+ Real-World Java & Spring Boot Projects",
            "100% Placement Guaranteed",
            "Paid Internship + LOR",
            "1:1 Mentorship & Code Reviews",
            "Resume + LinkedIn Optimization",
            "Mock Interviews with Industry Experts",
            "Globally Accepted Certificate",
            "Spoken English Class"
          ],
          button: "Enroll Premium",
          popular: true,
        },
      ],
    },

    Modules: [
      {
        name: "Fundamentals",
        category: "Frontend",
        points: [
          "Basic Of Internet",
          "Browser",
          "Client and Server Architecture",
          "Static and Dynamic Website",
          "Text editor and IDE"
        ]
      },
      {
        name: "HTML",
        category: "Frontend",
        points: [
          "Introduction To Web development",
          "Web Development Tools",
          "Element and Tag In HTML",
          "Core HTML",
          "Media and Forms",
          "Modern HTML",
          "Emmet",
          "SEO"
        ]
      },
      {
        name: "CSS",
        category: "Frontend",
        points: [
          "Introduction To CSS",
          "Basics CSS",
          "Position in CSS",
          "Flexbox In CSS",
          "Grid",
          "Media Query",
          "CSS Selector",
          "Advance CSS"
        ]
      },
      {
        name: "Tailwind CSS",
        category: "Frontend",
        points: [
          "Understanding Tailwind CSS With Projects",
        ]
      },
      {
        name: "GIT and Github",
        category: "Other",
        points: [
          "Version Control System",
          "General Commands on Git",
          "Github"
        ]
      },
      {
        name: "Javascript",
        category: "Frontend",
        points: [
          "Fundamentals Of Javascript",
          "Operators In javascript",
          "Type Conversion",
          "Condition and Loops",
          "Function in javascript",
          "Array and Object",
          "Advance Javascript",
          "Class In javascript",
          "Error Handling",
          "Async Js, Browser API & Window",
          "DOM"
        ]
      },
      {
        name: "React",
        category: "Frontend",
        points: [
          "Walkthrough with React",
          "React Components",
          "JSX, HOC",
          "Component Style",
          "React Router",
          "Form Handling and API Calls",
          "Redux Toolkit"
        ]
      },
      {
        name: "Networking",
        category: "Backend",
        points: [
          "Introduction to Networking",
          "DNS and Domain Management",
          "HTTP and HTTPS Protocols",
          "Web Application Security"
        ]
      },
      {
        name: "Java",
        category: "Backend",
        points: [
          "Java Basics & OOP Concepts",
          "Exception Handling & Collections",
          "File I/O & Multithreading",
          "Arrays (Single & Multi-dimensional)",
          "Exception Handling",
          "Throwing exceptions (throw / throws)",
          "Java Collections Framework",
          "File Handling (java.io)",
          "Multithreading Basics",
          "Working with Date & Time",
          "Practical Concepts for Real Projects"
        ]
      },
      {
        name: "Spring boot",
        category: "Backend",
        points: [
          "Introduction to Spring Boot",
          "Building REST APIs with Spring Boot",
          "Dependency Injection & Beans",
          "Working with Application Properties",
          "Data Persistence Basics",
          "Exception Handling"
        ]
      },
      {
        name: "Database",
        category: "Database",
        points: [
          "File Based Storage System",
          "What is Schema including ER diagrams",
          "Intro to DBMS",
          "Intro to Data Models",
          "DBMS Classification: Relational & Non relational",
          "Relational Database Management System(RDBMS)",
          "Types of Relationships",
          "Keys in RDBMS. Primary, Candidate, Super & Foreign",
          "ACID",
          "Introduction to Normalization. Why Normalization?",
          "Join(Inner, Left, Right and Full Joins)",
          "Dependency (Functional, Inclusion, Multivalued, Join) & Decomposition",
          "Indexing and Performance Optimization",
          "Transactions and Concurrency Control",
          "Database Security"
        ]
      },
      {
        name: "MySQL",
        category: "Database",
        points: [
          "Introduction to Databases & Basic SQL",
          "Data Filtering, Sorting, and Aggregation",
          "Advanced Queries and Relationships",
          "Database Design & Transactions",
          "Simple Database Design Concepts",
          "Indexes (Why & How to use)",
          "Transactions"
        ]
      },
      {
        name: "AI Prompt Engineering",
        category: "AI",
        points: [
          "Introduction to Prompt Engineering",
          "Writing Effective Prompts",
          "Prompt Types",
          "Techniques for Better Prompts",
          "Hands-On Practice",
          "Troubleshooting Poor Outputs",
          "How to iterate & improve prompts.",
          "Final Mini Project Idea"
        ]
      },
      {
        name: "Project On Authentication",
        category: "Backend",
        points: [
          "Added security with Environment Variables",
          "Setting Response Headers",
          "Encapsulating Logic in Mongoose Models",
          "Auth Middleware",
          "Protected Routes",
          "Retrieving current user information in Frontend",
          "Logging Out Users",
          "Role-based Authorization",
          "Exception handling",
          "OAuth(Single Sign On), Passport"
        ]
      },
      {
        name: "Working With Files",
        category: "Backend",
        points: [
          "Handling file uploads",
          "Validating files",
          "Single file and multiple file uploads",
          "Uploading files to cloud",
          "Multer, formidable for file processing"
        ]
      },
      {
        name: "Capstone Project",
        category: "Project",
        points: [
          "Frontend",
          "Backend"
        ]
      }
    ],
    roles: [
      "Java Developer",
      "Full Stack Developer",
      "Spring Boot Developer",
      "Backend Developer",
      "Software Engineer",
      "Application Developer",
      "Enterprise Application Developer",
      "Microservices Developer"
    ]
  },

  {
    id: 4,
    Course: <>PGPP in <span style={{ color: "#fcaa38ff" }}> Data Science & Analytics </span> With <span style={{ color: "#fcaa38ff" }}> Gen AI</span></>,
    slug: "pgpp-in-data-science-analytics-with-gen-ai",
    flowChart: <DataScienceTechFlow />,
    NextBatchStartFrom: BatchStartingDate,
    SyllabusPDF: "/assets/syllabus/datascience-syllabus.pdf",
    Curriculum:
      "Gain the skills to become a sought-after Data Scientist or Data Analyst — learn Python, statistical analysis, data visualization, and machine learning using real-world datasets. This program blends analytical thinking with hands-on tools like Pandas, Power BI, and Scikit-Learn, empowering you to extract insights and drive data-driven decisions in any industry.",

    plans: {
      Standard: [
        {
          id: 1,
          type: "Online",
          badge: "online",
          title: "PGPP in Data Science & Analytics with Gen AI",
          subtitle: "AI Powered",
          price: "₹44,999",
          originalPrice: "₹64,999",
          duration: "6 Months",
          batchSize: "15 Students",
          features: [
            "Live Online Classes",
            "8+ Real-World ML & Analytics Projects",
            "100% Placement Preparations",
            "Letter Of Recommendation",
            "1:1 Mentorship & Code Reviews",
            "Resume + LinkedIn Optimization",
            "Mock Interviews with Industry Experts",
            "Globally Accepted Certificate",
            "Spoken English Class"
          ],
          button: "Enroll Standard",
          popular: false,
        },
        {
          id: 2,
          type: "Offline",
          badge: "offline",
          title: "PGPP in Data Science & Analytics with Gen AI",
          subtitle: "AI Powered",
          price: "₹54,999",
          originalPrice: "₹74,999",
          duration: "10 Months",
          batchSize: "15 Students",
          features: [
            "Live Offline Interactive Classes",
            "8+ Real-World ML & Analytics Projects",
            "100% Placement Preparations",
            "Letter Of Recommendation",
            "1:1 Mentorship & Code Reviews",
            "Resume + LinkedIn Optimization",
            "Mock Interviews with Industry Experts",
            "Globally Accepted Certificate",
            "Spoken English Class"
          ],
          button: "Enroll Premium",
          popular: true,
        },
      ],

      Premium: [
        {
          id: 3,
          type: "Online",
          badge: "online",
          title: "PGPP in Data Science & Analytics with Gen AI",
          subtitle: "AI Powered",
          price: "₹64,999",
          originalPrice: "₹89,999",
          duration: "10 Months",
          batchSize: "15 Students",
          features: [
            "Live Online Classes",
            "8+ Real-World ML & Analytics Projects",
            "100% Placement Guaranteed",
            "Paid Internship + LOR",
            "1:1 Mentorship & Code Reviews",
            "Resume + LinkedIn Optimization",
            "Mock Interviews with Industry Experts",
            "Globally Accepted Certificate",
            "Spoken English Class"
          ],
          button: "Enroll Standard",
          popular: false,
        },
        {
          id: 4,
          type: "Offline",
          badge: "offline",
          title: "PGPP in Data Science & Analytics with Gen AI",
          subtitle: "AI Powered",
          price: "₹74,999",
          originalPrice: "₹99,999",
          duration: "10 Months",
          batchSize: "15 Students",
          features: [
            "Live Offline Interactive Classes",
            "8+ Real-World ML & Analytics Projects",
            "100% Placement Guaranteed",
            "Paid Internship + LOR",
            "1:1 Mentorship & Code Reviews",
            "Resume + LinkedIn Optimization",
            "Mock Interviews with Industry Experts",
            "Globally Accepted Certificate",
            "Spoken English Class"
          ],
          button: "Enroll Premium",
          popular: true,
        },
      ],
    },

    Modules: [
      {
        name: "Python for Data Science & Analytics",
        category: "Backend",
        points: [
          "Python Fundamentals",
          "Variables & Data Types",
          "Operators",
          "Conditional Statements",
          "Loops",
          "Functions",
          "OOP Concepts",
          "Exception Handling",
          "File Handling",
          "Modules & Packages",
          "Working with APIs"
        ]
      },
      {
        name: "SQL for Data Analytics",
        category: "Database",
        points: [
          "Database Fundamentals",
          "MySQL",
          "CRUD Operations",
          "Joins",
          "Aggregate Functions",
          "Group By & Having",
          "Views",
          "Stored Procedures",
          "Window Functions",
          "Query Optimization"
        ]
      },
      {
        name: "Git & GitHub for Data Professionals",
        category: "Project",
        points: [
          "Version Control",
          "Git Commands",
          "Branching Strategy",
          "Pull Requests",
          "Collaboration Workflow",
          "GitHub Portfolio Management"
        ]
      },
      {
        name: "Data Analysis using Pandas & NumPy",
        category: "AI",
        points: [
          "Data Cleaning",
          "Data Transformation",
          "Missing Value Treatment",
          "Feature Engineering",
          "Data Aggregation",
          "Working with APIs",
          "Exploratory Data Analysis"
        ]
      },
      {
        name: "Data Visualization & Business Intelligence",
        category: "AI",
        points: [
          "Matplotlib",
          "Seaborn",
          "Plotly",
          "Power BI",
          "Tableau",
          "Dashboard Design",
          "Data Storytelling",
          "KPI Development",
          "DAX Fundamentals",
          "Interactive Reporting"
        ]
      },
      {
        name: "Statistics for Data Science",
        category: "AI",
        points: [
          "Mean, Median, Mode",
          "Variance",
          "Standard Deviation",
          "Probability",
          "Sampling Techniques",
          "Hypothesis Testing",
          "Correlation",
          "Regression",
          "A/B Testing"
        ]
      },
      {
        name: "Machine Learning Fundamentals",
        category: "AI",
        points: [
          "ML Lifecycle",
          "Data Preprocessing",
          "Feature Selection",
          "Feature Engineering",
          "Train/Test Split",
          "Cross Validation",
          "Evaluation Metrics",
          "Linear Regression",
          "Multiple Regression",
          "Polynomial Regression",
          "Logistic Regression",
          "KNN",
          "Decision Trees",
          "Random Forest",
          "Naive Bayes",
          "SVM",
          "K-Means",
          "Hierarchical Clustering",
          "DBSCAN"
        ]
      },
      {
        name: "Advanced Machine Learning",
        category: "AI",
        points: [
          "Ensemble Learning",
          "Bagging & Boosting",
          "XGBoost",
          "LightGBM",
          "CatBoost",
          "Hyperparameter Tuning",
          "Model Explainability (SHAP)"
        ]
      },
      {
        name: "Data Engineering Fundamentals",
        category: "Backend",
        points: [
          "ETL Process",
          "Data Warehousing",
          "Data Lakes",
          "Data Modeling",
          "Data Pipelines",
          "Apache Airflow"
        ]
      },
      {
        name: "Big Data Analytics",
        category: "Backend",
        points: [
          "Hadoop Ecosystem",
          "Apache Spark",
          "Spark SQL",
          "Distributed Computing",
          "Real-Time Data Processing"
        ]
      },
      {
        name: "Deep Learning",
        category: "AI",
        points: [
          "Neural Networks",
          "Perceptrons",
          "Activation Functions",
          "Backpropagation",
          "TensorFlow",
          "Keras",
          "PyTorch"
        ]
      },
      {
        name: "Computer Vision",
        category: "AI",
        points: [
          "Image Processing",
          "OpenCV",
          "CNN",
          "Transfer Learning",
          "Object Detection"
        ]
      },
      {
        name: "Natural Language Processing",
        category: "AI",
        points: [
          "Text Processing",
          "Tokenization",
          "Stemming",
          "Lemmatization",
          "POS Tagging",
          "Sentiment Analysis",
          "Named Entity Recognition"
        ]
      },
      {
        name: "Generative AI & AI Agents",
        category: "AI",
        points: [
          "LLM Fundamentals",
          "Prompt Engineering",
          "OpenAI APIs",
          "Hugging Face",
          "LangChain",
          "LangGraph",
          "AI Agents",
          "Function Calling"
        ]
      },
      {
        name: "RAG & Vector Databases",
        category: "AI",
        points: [
          "Retrieval-Augmented Generation (RAG)",
          "Embeddings",
          "ChromaDB",
          "Pinecone",
          "Vector Search",
          "Knowledge Bases"
        ]
      },
      {
        name: "MLOps",
        category: "Backend",
        points: [
          "GitHub Actions",
          "Docker",
          "MLflow",
          "DVC",
          "CI/CD Basics",
          "Model Monitoring"
        ]
      },
      {
        name: "Cloud Deployment",
        category: "Backend",
        points: [
          "AWS Fundamentals",
          "EC2",
          "S3",
          "RDS",
          "Azure Fundamentals",
          "Render",
          "Railway",
          "Vercel"
        ]
      },
      {
        name: "Capstone Industry Projects",
        category: "Project",
        points: [
          "Fraud Detection System",
          "Credit Risk Assessment Platform",
          "Loan Approval Prediction AI",
          "Product Recommendation Engine",
          "Customer Segmentation Platform",
          "Demand Forecasting System",
          "Medical Report Analyzer",
          "Disease Prediction System",
          "Patient Readmission Prediction",
          "Resume Screening AI",
          "Candidate Ranking System",
          "Employee Attrition Prediction",
          "AI Learning Assistant",
          "Student Performance Predictor",
          "Placement Prediction System",
          "Crop Disease Detection",
          "Yield Prediction System",
          "Smart Farming Analytics",
          "Enterprise Knowledge Assistant",
          "Multi-Agent Research Assistant",
          "AI Customer Support Platform"
        ]
      }
    ],
    roles: [
      "Data Analyst",
      "Data Scientist",
      "Business Analyst",
      "BI Analyst",
      "Machine Learning Associate",
      "Data Engineer",
      "Analytics Consultant",
      "Reporting Analyst"
    ]
  },

  {
    id: 5,
    Course: <>PGPP in <span style={{ color: "#fcaa38ff" }}> Artificial Intelligence </span> & <span style={{ color: "#fcaa38ff" }}> Machine Learning</span></>,
    slug: "pgpp-in-artificial-intelligence-machine-learning",
    flowChart: <AiMlFlowChat />,
    NextBatchStartFrom: BatchStartingDate,
    SyllabusPDF: "/assets/syllabus/aiml-syllabus.pdf",
    Curriculum:
      "Step into the future of technology with a comprehensive AI & ML program — covering deep learning, neural networks, NLP, computer vision, and model deployment. Built for aspiring AI Engineers and ML professionals, this program equips you to design intelligent systems, train production-grade models, and solve real-world problems using cutting-edge AI frameworks.",
    plans: {
      Standard: [
        {
          id: 1,
          type: "Online",
          badge: "online",
          title: "PGPP in Artificial Intelligence & Machine Learning",
          subtitle: "AI Powered",
          price: "₹44,999",
          originalPrice: "₹54,999",
          duration: "6 Months",
          batchSize: "15 Students",
          features: [
            "Live Online Classes",
            "10+ Real-World AI & ML Projects",
            "100% Placement Preparations",
            "Letter Of Recommendation",
            "1:1 Mentorship & Code Reviews",
            "Resume + LinkedIn Optimization",
            "Mock Interviews with Industry Experts",
            "Globally Accepted Certificate",
            "Spoken English Class"
          ],
          button: "Enroll Standard",
          popular: false,
        },
        {
          id: 2,
          type: "Offline",
          badge: "offline",
          title: "PGPP in Artificial Intelligence & Machine Learning",
          subtitle: "AI Powered",
          price: "₹54,999",
          originalPrice: "₹74,999",
          duration: "6 Months",
          batchSize: "15 Students",
          features: [
            "Live Offline Interactive Classes",
            "10+ Real-World AI & ML Projects",
            "100% Placement Preparations",
            "Letter Of Recommendation",
            "1:1 Mentorship & Code Reviews",
            "Resume + LinkedIn Optimization",
            "Mock Interviews with Industry Experts",
            "Globally Accepted Certificate",
            "Spoken English Class"
          ],
          button: "Enroll Premium",
          popular: true,
        },
      ],

      Premium: [
        {
          id: 3,
          type: "Online",
          badge: "online",
          title: "PGPP in Artificial Intelligence & Machine Learning",
          subtitle: "AI Powered",
          price: "₹64,999",
          originalPrice: "₹89,999",
          duration: "10 Months",
          batchSize: "15 Students",
          features: [
            "Live Online Classes",
            "10+ Real-World AI & ML Projects",
            "100% Placement Guaranteed",
            "Paid Internship + LOR",
            "1:1 Mentorship & Code Reviews",
            "Resume + LinkedIn Optimization",
            "Mock Interviews with Industry Experts",
            "Globally Accepted Certificate",
            "Spoken English Class"
          ],
          button: "Enroll Standard",
          popular: false,
        },
        {
          id: 4,
          type: "Offline",
          badge: "offline",
          title: "PGPP in Artificial Intelligence & Machine Learning",
          subtitle: "AI Powered",
          price: "₹74,999",
          originalPrice: "₹99,999",
          duration: "10 Months",
          batchSize: "15 Students",
          features: [
            "Live Offline Interactive Classes",
            "10+ Real-World AI & ML Projects",
            "100% Placement Guaranteed",
            "Paid Internship + LOR",
            "1:1 Mentorship & Code Reviews",
            "Resume + LinkedIn Optimization",
            "Mock Interviews with Industry Experts",
            "Globally Accepted Certificate",
            "Spoken English Class"
          ],
          button: "Enroll Premium",
          popular: true,
        },
      ],
    },
    Modules: [
      {
        name: "Python for AI & ML",
        category: "Backend",
        points: [
          "Python Fundamentals",
          "Data Types",
          "Operators",
          "Conditional Statements",
          "Loops",
          "Functions",
          "OOP",
          "Exception Handling",
          "File Handling",
          "Modules & Packages"
        ]
      },
      {
        name: "SQL for Data Professionals",
        category: "Database",
        points: [
          "Database Fundamentals",
          "MySQL",
          "CRUD Operations",
          "Joins",
          "Group By",
          "Views",
          "Stored Procedures",
          "Window Functions"
        ]
      },
      {
        name: "Git & GitHub",
        category: "Project",
        points: [
          "Version Control",
          "Branching",
          "Pull Requests",
          "Collaboration Workflow"
        ]
      },
      {
        name: "Data Analysis using Pandas & NumPy",
        category: "AI",
        points: [
          "Data Cleaning",
          "Data Transformation",
          "Missing Values",
          "Feature Engineering"
        ]
      },
      {
        name: "Data Visualization",
        category: "AI",
        points: [
          "Matplotlib",
          "Seaborn",
          "Plotly"
        ]
      },
      {
        name: "Statistics for AI",
        category: "AI",
        points: [
          "Mean, Median, Mode",
          "Variance",
          "Standard Deviation",
          "Probability",
          "Hypothesis Testing",
          "Correlation",
          "Regression"
        ]
      },
      {
        name: "Machine Learning Fundamentals",
        category: "AI",
        points: [
          "ML Lifecycle",
          "Feature Selection",
          "Train/Test Split",
          "Cross Validation",
          "Evaluation Metrics",
          "Linear Regression",
          "Polynomial Regression",
          "Logistic Regression",
          "KNN",
          "Decision Trees",
          "Random Forest",
          "Naive Bayes",
          "SVM",
          "K-Means",
          "Hierarchical Clustering"
        ]
      },
      {
        name: "Advanced Machine Learning",
        category: "AI",
        points: [
          "Ensemble Learning",
          "XGBoost",
          "LightGBM",
          "CatBoost",
          "Hyperparameter Tuning"
        ]
      },
      {
        name: "Deep Learning",
        category: "AI",
        points: [
          "Neural Networks",
          "TensorFlow",
          "Keras",
          "Backpropagation",
          "Activation Functions"
        ]
      },
      {
        name: "Computer Vision",
        category: "AI",
        points: [
          "Image Processing",
          "CNN",
          "Transfer Learning",
          "Object Detection"
        ]
      },
      {
        name: "Natural Language Processing",
        category: "AI",
        points: [
          "Text Processing",
          "Tokenization",
          "Stemming",
          "Lemmatization",
          "Sentiment Analysis"
        ]
      },
      {
        name: "Generative AI",
        category: "AI",
        points: [
          "LLM Fundamentals",
          "Prompt Engineering",
          "OpenAI APIs",
          "Hugging Face",
          "AI Agents"
        ]
      },
      {
        name: "Advanced Generative AI",
        category: "AI",
        points: [
          "LangChain",
          "LangGraph",
          "Vector Databases",
          "ChromaDB",
          "Pinecone",
          "RAG Architecture",
          "Multi-Agent Systems"
        ]
      },
      {
        name: "AI Product Development",
        category: "Backend",
        points: [
          "FastAPI",
          "Streamlit",
          "Gradio"
        ]
      },
      {
        name: "MLOps",
        category: "Backend",
        points: [
          "Docker",
          "CI/CD Basics",
          "Model Monitoring",
          "MLflow",
          "DVC"
        ]
      },
      {
        name: "Cloud Deployment",
        category: "Backend",
        points: [
          "AWS Fundamentals",
          "EC2",
          "S3",
          "Render",
          "Railway",
          "Vercel"
        ]
      },
      {
        name: "Capstone Industry Projects",
        category: "Project",
        points: [
          "Medical Report Analyzer",
          "Disease Prediction System",
          "Resume Screening AI",
          "Candidate Ranking System",
          "AI Learning Assistant",
          "Student Performance Predictor",
          "Product Recommendation Engine",
          "Sales Forecasting System",
          "Fraud Detection System",
          "Loan Approval AI",
          "Crop Disease Detection",
          "Yield Prediction System"
        ]
      }
    ],
    roles: [
      "AI Engineer",
      "Machine Learning Engineer",
      "Generative AI Engineer",
      "Prompt Engineer",
      "Data Analyst",
      "Computer Vision Engineer",
      "NLP Engineer",
      "Research Associate"
    ]
  }
];

export default CourseData;
