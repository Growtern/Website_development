import express from "express";

import {
  createOffer,
  getAllOffers,
  getOfferById,
  updateOffer,
  deleteOffer,
} from "../controllers/offer.controller.js";

import { protectAdmin } from "../middleware/admin.middleware.js";
import upload from "../middleware/upload.middleware.js";

const router = express.Router();

// ============================================
// Admin Routes
// ============================================

// Create Offer
router.post(
  "/",
  protectAdmin,
  upload.array("offerImages"),
  createOffer
);

// Get All Offers
router.get(
  "/",
  protectAdmin,
  getAllOffers
);

// Get Offer By ID
router.get(
  "/:id",
  protectAdmin,
  getOfferById
);

// Update Offer
router.put(
  "/:id",
  protectAdmin,
  upload.array("offerImages"),
  updateOffer
);

// Delete Offer
router.delete(
  "/:id",
  protectAdmin,
  deleteOffer
);

export default router;