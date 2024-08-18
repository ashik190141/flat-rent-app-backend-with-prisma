import express from "express";
import { auth } from "../../../middleWares/auth";
import { validateRequest } from "../../../middleWares/validateRequest";
import { BookingController } from "./booking.controller";
import { BookingValidation } from "./booking.validation";

const router = express.Router();

router.post(
  "/booking-flat",
  auth(),
  validateRequest(BookingValidation.bookingFlatSchema),
  BookingController.bookingFlat
);

router.get("/booking-request", auth(), BookingController.getBookingRequest)

router.patch("/booking-flat-status/:id", auth(), BookingController.updateBookingFlatStatus);

export const bookingRoutes = router;
