import express from "express";

import {
  getDashboardSummary,
} from "../controllers/dashboard.controller.js";

import { protectAdmin } from "../middleware/admin.middleware.js";

const router = express.Router();

router.get(
  "/summary",
  protectAdmin,
  getDashboardSummary
);

export default router;