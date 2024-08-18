import { Request, Response } from "express";
import httpStatus from "http-status";
import { catchAsync } from "../../helper/catchAsync";
import { pick } from "../../helper/pick";
import { sendResponse } from "../../helper/sendResponse";
import { filterAbleFields } from "./flat.constant";
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

const getFlats = catchAsync(async (req: Request, res: Response) => {
  const filter = pick(req.query, filterAbleFields);
  const options = pick(req.query, ["page", "limit", "sortBy", "sortOrder"]);
  const result = await FlatServices.getFlats(filter,options);
  if (result) {
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Flats retrieved successfully",
      meta: result?.meta,
      data: result?.data
    });
  }
});

const updateFlat = catchAsync(async (req: Request, res: Response) => {
  const {id} = req.params
  const result = await FlatServices.updateFlat(id,req.body);
  if (result) {
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Flat information updated successfully",
      data: result,
    });
  }
});

export const FlatController = {
  addFlats,
  getFlats,
  updateFlat
};
