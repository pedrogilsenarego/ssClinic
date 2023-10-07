import { z } from "zod";
import { i18n } from "../../../../translations/i18n";

export const CreateProductSchema = z.object({
  model: z.string({
    required_error: i18n.t(
      "pages.admin.createProducts.form.required",
      "Required"
    ),
  }),
});

export type CreateProductSchemaType = z.infer<typeof CreateProductSchema>;
