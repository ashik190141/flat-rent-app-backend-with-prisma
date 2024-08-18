import { Request, Response } from "express";
import httpStatus from "http-status";
import { catchAsync } from "../../helper/catchAsync";
import { sendResponse } from "../../helper/sendResponse";
import { UserService } from "./user.service";

const registration = catchAsync(async (req: Request, res: Response) => {
  const result = await UserService.registration(req.body);
  if (result) {
    sendResponse(res, {
      statusCode: httpStatus.CREATED,
      success: true,
      message: "user created successfully",
      data: result,
    });
  }
});

const profile = catchAsync(async (req: Request & {user?:any}, res: Response) => {
  const { id } = req.user;
  const result = await UserService.profile(id);
  if (result) {
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "User profile retrieved successfully",
      data: result,
    });
  }
});

const updateProfile = catchAsync(
  async (req: Request & { user?: any }, res: Response) => {
    const { id } = req.user;
    const result = await UserService.updateProfile(id,req.body);
    if (result) {
      sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "User profile retrieved successfully",
        data: result,
      });
    }
  }
);

export const UserController = {
  registration,
  profile,
  updateProfile,
};
