
import express from "express";
import { createTour, updateTour, deleteTour, getSingleTour, getAllTour, getTourBySearch, getFeaturedTour, getTourCounts } from "../controllers/tourController.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

/// CREATE NEW TOUR
router.post("/", verifyAdmin, createTour);

/// UPDATE TOUR
router.put("/:id", verifyAdmin, updateTour);

/// DELETE TOUR
router.delete("/:id", verifyAdmin, deleteTour);

/// GET SINGLE TOUR
router.get("/:id", getSingleTour);

/// GET ALL TOURS
router.get("/", getAllTour);

/// GET TOUR BY SEARCH
router.get("/search/getTourBySearch", getTourBySearch);

/// GET FEATURED TOURS
router.get("/search/getFeaturedTours", getFeaturedTour);

/// GET TOUR COUNTS
router.get("/search/getTourCount", getTourCounts);

export default router;