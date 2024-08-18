import { Request, Response } from "express";
import httpStatus from "http-status";
import { catchAsync } from "../../helper/catchAsync";
import { sendResponse } from "../../helper/sendResponse";
import { BookingService } from "./booking.service";

const bookingFlat = catchAsync(
  async (req: Request & { user?: any }, res: Response) => {
    const { id } = req.user;
    console.log('id',id);
    const result = await BookingService.bookingFlat(id, req.body);
    if (result) {
      sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Booking requests submitted successfully",
        data: result,
      });
    }
  }
);

export const BookingController = {
    bookingFlat
}