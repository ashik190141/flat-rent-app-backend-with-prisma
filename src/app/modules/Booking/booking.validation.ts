import { z } from "zod";


const bookingFlatSchema = z.object({
  body: z.object({
    flatId: z.string({
      required_error: "Flat ID is required.",
    }),
  }),
});

export const BookingValidation = {
  bookingFlatSchema,
};