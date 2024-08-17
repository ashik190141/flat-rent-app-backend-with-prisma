import { Request, Response } from "express";
import httpStatus from "http-status";
import { catchAsync } from "../../helper/catchAsync";
import { sendResponse } from "../../helper/sendResponse";
import { AuthServices } from "./auth.service";

const login = catchAsync(async (req: Request, res: Response) => {
  const result = await AuthServices.login(req.body)
  if (result) {
    sendResponse(res, {
      statusCode: httpStatus.CREATED,
      success: true,
      message: "user logged in successfully",
      data: result,
    });
  }
});

export const AuthController = {
  login,
};
