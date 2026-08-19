import express from "express";

import {
  createJobCourse,
  getAllJobCourses,
  getJobCourseById,
  updateJobCourse,
  deleteJobCourse,
} from "../controllers/JobCourse.controller.js";

import { protectAdmin } from "../middleware/admin.middleware.js";
import { validateJobCourse } from "../middleware/jobCourse.validator.js";
import upload from "../middleware/upload.middleware.js";
import parseJobCourseFields from "../middleware/parseJobCourseFields.middleware.js";

const router = express.Router();

// Create Job Course
router.post(
  "/",
  protectAdmin,
  upload.fields([
    {
      name: "syllabusPdf",
      maxCount: 1,
    },
    {
      name: "courseImage",
      maxCount: 1,
    },
  ]),
  parseJobCourseFields,
  validateJobCourse,
  createJobCourse
);

// Get All Job Courses
router.get(
  "/",
  protectAdmin,
  getAllJobCourses
);

// Get Single Job Course
router.get(
  "/:id",
  protectAdmin,
  getJobCourseById
);

// Update Job Course
router.put(
  "/:id",
  protectAdmin,
  upload.fields([
    {
      name: "syllabusPdf",
      maxCount: 1,
    },
    {
      name: "courseImage",
      maxCount: 1,
    },
  ]),
  parseJobCourseFields,
  validateJobCourse,
  updateJobCourse
);

// Delete Job Course
router.delete(
  "/:id",
  protectAdmin,
  deleteJobCourse
);

export default router;