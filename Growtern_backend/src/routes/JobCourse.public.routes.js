import express from "express";

import {
  getPublicJobCourses,
  getPublicJobCourseBySlug,
} from "../controllers/JobCourse.controller.js";

const router = express.Router();

// Get all active Job Courses
router.get(
  "/",
  getPublicJobCourses
);

// Get single active Job Course by slug
router.get(
  "/:slug",
  getPublicJobCourseBySlug
);

export default router;

// There is no protectAdmin here, because these endpoints are specifically for the marketing website.