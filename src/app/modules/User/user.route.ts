import express from "express";
import { validateRequest } from "../../../middleWares/validateRequest";
import { UserController } from "./user.controller";
import { userValidation } from "./user.validation";

const router = express.Router();

router.post(
  "/registration",
  validateRequest(userValidation.userRegistrationSchema),
  UserController.registration
);

export const userRoutes = router;
