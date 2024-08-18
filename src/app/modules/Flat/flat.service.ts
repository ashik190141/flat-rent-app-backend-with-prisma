import { Flat, Prisma } from "@prisma/client"
import { calculatePagination } from "../../helper/calculatePagination"
import { IsExist } from "../../helper/IsExist"
import { prisma } from "../../helper/prisma"
import { flatSearchAbleFields } from "./flat.constant"
import { IFlat, IFlatFilterData, TOptions } from "./flat.interface"

const addFlats = async (data: IFlat) => {
    const result = await prisma.flat.create({
        data: data
    })
    return result
}

const getFlats = async (filter: IFlatFilterData, options: TOptions) => {
    const { searchTerm, availability } = filter;
    const { page, limit, skip, sortBy, sortOrder } = calculatePagination(options);

    const andConditions: Prisma.FlatWhereInput[] = [];

    if (searchTerm) {
        andConditions.push({
          OR: flatSearchAbleFields.map((field) => ({
            [field]: {
              contains: searchTerm,
              mode: "insensitive",
            },
          })),
        });
    }

    if (availability) {
        andConditions.push({
            AND: ({
                [availability]: true
            })
        })
    }

    const whereConditions: Prisma.FlatWhereInput = { AND: andConditions };

    const result = await prisma.flat.findMany({
      where: whereConditions,
      skip,
      take: limit,
        orderBy: options.sortBy && options.sortOrder ? {
          [sortBy]: [sortOrder]
        } : {
          'createdAt':'asc'
      }
    });

    const total = await prisma.flat.count({
      where: whereConditions,
    });
    return {
      meta: {
        page,
        limit,
        total,
      },
      data: result,
    };
};

const updateFlat = async (id: string, data: Partial<Flat>) => {
  await IsExist.flatExist(id);
  const result = await prisma.flat.update({
    where: {
      id: id,
    },
    data
  });
  return result
}

export const FlatServices = {
    addFlats,
    getFlats,
  updateFlat,
}