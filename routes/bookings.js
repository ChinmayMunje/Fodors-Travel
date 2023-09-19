import express from "express";
import { verifyAdmin, verifyUser } from "../utils/verifyToken.js";
import { createBooking, getAllBooking, getBooking } from "../controllers/bookingController.js";

const router = express.Router();

// CREATE NEW BOOKING ENDPOINT
router.post("/",verifyUser,createBooking);

// GET BOOKING BY ID ENDPOINT
router.get("/:id",verifyUser,getBooking);

// GET  ALL BOOKINGS ENDPOINT
router.get("/",verifyAdmin,getAllBooking);

export default router;