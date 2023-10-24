import { z } from "zod";

export const CreateUserSchema = z.object({
  phone: z.string().optional(),
  fullName: z.string().optional(),
  address1: z.string().optional(),
  address2: z.string().optional(),
  city: z.string().optional(),
  postalCode: z.string().optional(),
  country: z.string().optional(),
});

export type CreateUserSchemaType = z.infer<typeof CreateUserSchema>;
