import { prisma } from "../../helper/prisma";


const bookingFlat = async (id: string, payload: { flatId: string }) => {
  const result = await prisma.booking.create({
    data: {
      flatId: payload.flatId,
      userId: id,
    },
  });
  return result;
};

export const BookingService = {
    bookingFlat
}