import { prisma } from "../../helper/prisma"
import { IFlat } from "./flat.interface"

const addFlats = async (data: IFlat) => {
    const result = await prisma.flat.create({
        data: data
    })
    return result
}

export const FlatServices = {
    addFlats
}