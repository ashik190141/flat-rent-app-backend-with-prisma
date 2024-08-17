import { IUser } from "./user.interface"
import bcrypt from "bcrypt";
import { prisma } from "../../helper/prisma";

const registration = async (data: IUser) => {
    const hashedPassword = bcrypt.hashSync(data.password, 12);
    const userData = {
        name: data.name,
        email: data.email,
        password: hashedPassword
    }

    const result = await prisma.$transaction(async (transactionClient) => {
        const createUserData = await transactionClient.user.create({
            data: userData,
            select: {
                id: true,
                name: true,
                email: true,
                createdAt: true,
                updatedAt: true
            }
        })
        await transactionClient.userProfile.create({
          data: {
            bio: data.bio,
            profession: data.profession,
            address: data.address,
            user: {
                connect: {
                    id: createUserData.id
                }
            }
          },
        });
        return createUserData
    })
    return result
}

export const UserService = {
    registration
}