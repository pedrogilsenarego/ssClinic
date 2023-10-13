import { i18n } from "../../../translations/i18n";

type Option = {
  value: string;
  label: string;
};

export const countryOptions: Option[] = [
  {
    value: "PORTUGAL",
    label: i18n.t("pages.access.subpages.manage.admin", "Portugal"),
  },
  {
    value: "SWITZERLAND",
    label: i18n.t("pages.access.subpages.manage.user", "switzerland"),
  },
];
export const defaultValues = {
  username: undefined,
  email: undefined,
  password: undefined,
  confirmPassword: undefined,
  phone: undefined,
  fullName: undefined,
  address1: undefined,
  address2: undefined,
  city: undefined,
  postalCode: undefined,
  country: countryOptions[0].value,
};
