import express from "express";
import { auth } from "../../../middleWares/auth";
import { validateRequest } from "../../../middleWares/validateRequest";
import { FlatController } from "./flat.controller";
import { FlatValidation } from "./flat.validation";

const router = express.Router();

router.post(
  "/add-flat",
  auth(),
  validateRequest(FlatValidation.addFlatSchema),
  FlatController.addFlats
);

router.get("/all-flats", FlatController.getFlats)

router.patch("/update/:id", auth(), FlatController.updateFlat)

export const flatRoutes = router;
