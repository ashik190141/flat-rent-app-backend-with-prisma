import express from "express";
import { authRoutes } from "../modules/Auth/auth.route";
import { bookingRoutes } from "../modules/Booking/booking.route";
import { flatRoutes } from "../modules/Flat/flat.route";
import { userRoutes } from "../modules/User/user.route";

const router = express.Router();

const moduleRoutes = [
  {
    path: "/user",
    route: userRoutes,
  },
  {
    path: "/flat",
    route: flatRoutes,
  },
  {
    path: "/auth",
    route: authRoutes,
  },
  {
    path: "/booking",
    route: bookingRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
