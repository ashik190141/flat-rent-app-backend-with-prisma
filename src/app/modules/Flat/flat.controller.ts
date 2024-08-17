import { Request, Response } from "express";
import httpStatus from "http-status";
import { catchAsync } from "../../helper/catchAsync";
import { sendResponse } from "../../helper/sendResponse";
import { FlatServices } from "./flat.service";

const addFlats = catchAsync(async (req: Request, res: Response) => {
  const result = await FlatServices.addFlats(req.body)
  if (result) {
    sendResponse(res, {
      statusCode: httpStatus.CREATED,
      success: true,
      message: "Flat Added Successfully",
      data: result,
    });
  }
});

export const FlatController = {
  addFlats,
};
