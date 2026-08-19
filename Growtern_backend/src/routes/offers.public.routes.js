import express from "express";

import {
  getPublicOffer,
} from "../controllers/offer.controller.js";

const router = express.Router();

router.get(
  "/",
  getPublicOffer
);

export default router;