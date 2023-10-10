import { z } from "zod";
import { i18n } from "../../../translations/i18n";

export const CreateProductSchema = z.object({
  thumbnail: z.unknown({
    required_error: i18n.t(
      "pages.admin.createProducts.form.required",
      "Required"
    ),
  }),
  specialThumbnail: z.unknown({
    required_error: i18n.t(
      "pages.admin.createProducts.form.required",
      "Required"
    ),
  }),
  images: z.unknown({
    required_error: i18n.t(
      "pages.admin.createProducts.form.required",
      "Required"
    ),
  }),
  model: z.string({
    required_error: i18n.t(
      "pages.admin.createProducts.form.required",
      "Required"
    ),
  }),
  dimensions: z.string({
    required_error: i18n.t(
      "pages.admin.createProducts.form.required",
      "Required"
    ),
  }),
  movement: z.string({
    required_error: i18n.t(
      "pages.admin.createProducts.form.required",
      "Required"
    ),
  }),
  sku: z.string({
    required_error: i18n.t(
      "pages.admin.createProducts.form.required",
      "Required"
    ),
  }),
  description: z.string({
    required_error: i18n.t(
      "pages.admin.createProducts.form.required",
      "Required"
    ),
  }),
  color: z.string({
    required_error: i18n.t(
      "pages.admin.createProducts.form.required",
      "Required"
    ),
  }),
  bracelet: z.string({
    required_error: i18n.t(
      "pages.admin.createProducts.form.required",
      "Required"
    ),
  }),
  numberWatches: z.string({
    required_error: i18n.t(
      "pages.admin.createProducts.form.required",
      "Required"
    ),
  }),
});

export type CreateProductSchemaType = z.infer<typeof CreateProductSchema>;
