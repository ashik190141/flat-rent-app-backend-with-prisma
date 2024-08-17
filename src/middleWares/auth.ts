import { NextFunction, Request, Response } from "express"
import httpStatus from "http-status";
import { Secret } from "jsonwebtoken";
import config from "../app/config";
import { generateToken } from '../app/helper/generateToken';

export const auth = () => {
    return async (req: Request & {user?:any}, res: Response, next: NextFunction) => {
        try {
            const token = req.headers.authorization;

            if (!token) {
                throw new apiError(httpStatus.UNAUTHORIZED, "you are not authorized!")
            }

            const decoded = generateToken.verifyToken(token, config.accessToken as Secret);

            req.user = decoded
            next()
        } catch (err) {
            next(err)
        }
    }
}