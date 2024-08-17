import express from "express";
import { validateRequest } from "../../../middleWares/validateRequest";
import { FlatController } from "./flat.controller";
import { FlatValidation } from "./flat.validation";

const router = express.Router();

router.post(
  "/add-flat",
  validateRequest(FlatValidation.addFlatSchema),
  FlatController.addFlats
);

export const flatRoutes = router;
