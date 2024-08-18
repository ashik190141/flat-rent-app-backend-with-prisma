import { UserStatus } from "@prisma/client"
import { prisma } from "../../helper/prisma"
import bcrypt from 'bcrypt';
import httpStatus from "http-status";
import config from "../../config";
import { generateToken } from '../../helper/generateToken';
import { Secret } from 'jsonwebtoken';
import apiError from "../../errors/apiError";

const login = async (payload: {
    email: string,
    password: string
}) => {
    const userData = await prisma.user.findUniqueOrThrow({
      where: {
        email: payload.email,
        status: UserStatus.ACTIVE,
        },
    });

    const isPasswordMatch = await bcrypt.compare(payload.password, userData.password);
    if (!isPasswordMatch) {
        throw new apiError(httpStatus.BAD_REQUEST,"password do not match")
    }

    const accessToken = generateToken.accessToken({ id: userData.id }, config.accessToken as Secret, config.accessTokenExpire as string)
    
    return {
        id: userData.id,
        name: userData.name,
        email: userData.email,
        token: accessToken
    }
}

export const AuthServices = {
    login
}