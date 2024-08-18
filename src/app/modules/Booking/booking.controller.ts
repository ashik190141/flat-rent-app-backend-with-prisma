import { Request, Response } from "express";
import httpStatus from "http-status";
import { catchAsync } from "../../helper/catchAsync";
import { sendResponse } from "../../helper/sendResponse";
import { BookingService } from "./booking.service";

const bookingFlat = catchAsync(
  async (req: Request & { user?: any }, res: Response) => {
    const { id } = req.user;
    const result = await BookingService.bookingFlat(id, req.body);
    if (result) {
      sendResponse(res, {
        statusCode: httpStatus.CREATED,
        success: true,
        message: "Booking requests submitted successfully",
        data: result,
      });
    }
  }
);

const getBookingRequest = catchAsync(async (req: Request & { user?: any }, res: Response) => {
    const result = await BookingService.getBookingRequest(req.query);
    if (result) {
      sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Booking requests retrieved successfully",
        data: result,
      });
    }
  }
);

const updateBookingFlatStatus = catchAsync(
  async (req: Request & { user?: any }, res: Response) => {
    const { id } = req.params;
    const result = await BookingService.updateBookingFlatStatus(id, req.body);
    if (result) {
      sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Booking request updated successfully",
        data: result,
      });
    }
  }
);

export const BookingController = {
  bookingFlat,
  getBookingRequest,
  updateBookingFlatStatus,
};
