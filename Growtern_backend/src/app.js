// ============= server.js =============

import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import dns from "dns";

import connectDB from "./config/database.js";
import paymentRoutes from "./routes/payment.routes.js";
// import AdminRouter from "./routes/admin.routes.js";
import authRoutes from "./routes/auth.routes.js";

import jobCourseRoutes from "./routes/JobCourse.routes.js";
import publicJobCourseRoutes from "./routes/JobCourse.public.routes.js";

import offerRoutes from "./routes/offers.routes.js";
import publicOfferRoutes from "./routes/offers.public.routes.js";

import dashboardRoutes from "./routes/dashboard.routes.js";

/* ========= CONFIG ========= */
dotenv.config();

// Fix: Set DNS BEFORE DB connection (critical for MongoDB Atlas SRV on Render)
dns.setServers(["8.8.8.8", "8.8.4.4"]);


/* ========= DB CONNECTION ========= */
connectDB();

/* ========= APP INIT ========= */
const app = express();

/* ========= MIDDLEWARE ========= */
app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://growtern.com",
      "https://www.growtern.com",
      "https://growtern-academy-dev.netlify.app"
    ],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS","PATCH"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

/* ========= ROUTES ========= */
app.get("/", (req, res) => {
  res.send("Server OK");
});

app.use("/api/payment", paymentRoutes);
// app.use("/api/admin", AdminRouter);
app.use("/api/admin/auth", authRoutes);

// using the jobcoruse module routes
app.use("/api/admin/job-courses", jobCourseRoutes);

// public job routes
app.use(
  "/api/job-courses",
  publicJobCourseRoutes
);

// using offer route
app.use(
  "/api/admin/offers",
  offerRoutes
);

// public offer route
app.use(
  "/api/offers",
  publicOfferRoutes
);

// admin dashboard numbers
app.use(
  "/api/admin/dashboard",
  dashboardRoutes
);

/* ========= GLOBAL ERROR HANDLER ========= */
app.use((err, req, res, next) => {
  console.error("Unhandled error:", err);
  res.status(500).json({ message: "Internal server error", error: err.message });
});

/* ========= SERVER ========= */
export default app;

