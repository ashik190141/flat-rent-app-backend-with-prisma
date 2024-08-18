import express from "express";
import { auth } from "../../../middleWares/auth";
import { validateRequest } from "../../../middleWares/validateRequest";
import { UserController } from "./user.controller";
import { userValidation } from "./user.validation";

const router = express.Router();

router.post(
  "/registration",
  validateRequest(userValidation.userRegistrationSchema),
  UserController.registration
);

router.get(
  "/profile",
  auth(),
  UserController.profile
)

router.patch(
  "/profile",
  auth(),
  UserController.updateProfile
)

export const userRoutes = router;
