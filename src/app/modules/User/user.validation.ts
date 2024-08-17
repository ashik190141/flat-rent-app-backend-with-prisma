import { z } from "zod";

const userRegistrationSchema = z.object({
  body: z.object({
    name: z.string({
      required_error: "Name is Required",
    }),
    email: z.string({
      required_error: "Email is Required",
    }),
    password: z.string({
      required_error: "Password is Required",
    }),
    bio: z.string().optional(),
    profession: z.string({
      required_error: "Profession is Required",
    }),
    address: z.string({
      required_error: "Address is Required",
    }),
  }),
});

export const userValidation = {
    userRegistrationSchema
}