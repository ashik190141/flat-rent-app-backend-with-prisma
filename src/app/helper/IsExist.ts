import { UserStatus } from "@prisma/client";
import { prisma } from "./prisma";


const flatExist = async (id: string) => {
  await prisma.flat.findUniqueOrThrow({
    where: {
      id: id
    },
  });
};

const userExist = async (id: string) => {
  await prisma.user.findUniqueOrThrow({
    where: {
      id: id,
      status: UserStatus.ACTIVE
    },
  });
};

export const IsExist = {
  flatExist,
  userExist,
};
