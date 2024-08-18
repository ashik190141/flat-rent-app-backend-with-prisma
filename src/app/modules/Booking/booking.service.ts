import { Booking, BookingStatus, Prisma } from "@prisma/client";
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

const getBookingRequest = async (filterStatus: { status?: string }) => {
  const andConditions: Prisma.BookingWhereInput[] = [];

  if (filterStatus && filterStatus.status) {
    const enumStatus = filterStatus.status.toUpperCase() as keyof typeof BookingStatus;

    andConditions.push({
      status: BookingStatus[enumStatus],
    });
  }

  const whereConditions: Prisma.BookingWhereInput =
    andConditions.length > 0 ? { AND: andConditions } : {};

  const result = await prisma.booking.findMany({
    where: whereConditions,
  });

  return result;
};

const updateBookingFlatStatus = async (id: string, data: Partial<Booking>) => {
  const result = await prisma.booking.update({
    where: {
      id: id,
    },
    data,
  });
  return result
}

export const BookingService = {
  bookingFlat,
  getBookingRequest,
  updateBookingFlatStatus,
};