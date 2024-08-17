import { z } from "zod";


const addFlatSchema = z.object({
  body: z.object({
    squareFeet: z.number({
      required_error: "Square Feet is required.",
    }),
    totalBedrooms: z.number({
      required_error: "Total Bedrooms is required.",
    }),
    totalRooms: z.number({
      required_error: "Total Rooms is required.",
    }),
    utilitiesDescription: z.string({
      required_error: "Utilities Description is required.",
    }),
    location: z.string({
      required_error: "Location is required.",
    }),
    description: z.string({
      required_error: "Description is required.",
    }),
    rent: z.number({
      required_error: "Rent is required.",
    }),
    advanceAmount: z.number({
      required_error: "Advance Amount is required.",
    }),
  }),
});

export const FlatValidation = {
    addFlatSchema
}
