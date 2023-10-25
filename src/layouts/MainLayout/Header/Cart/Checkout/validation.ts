import { z } from "zod";
import { i18n } from "../../../../../translations/i18n";

export const CreateUserSchema = z.object({
  email: z
    .string()
    .email({
      message: i18n.t(
        "pages.access.subpages.login.validation.invalidEmail",
        "Invalid email address"
      ),
    })
    .min(1, {
      message: i18n.t(
        "pages.access.subpages.login.validation.emailRequired",
        "The email is required"
      ),
    }),
  phone: z.string(),
  fullName: z.string(),
  address1: z.string(),
  address2: z.string(),
  city: z.string(),
  postalCode: z.string(),
  country: z.string(),
});

export type CreateUserSchemaType = z.infer<typeof CreateUserSchema>;
