import { i18n } from "../../../../../translations/i18n";
import { CurrentUser } from "../../../../../types/user";

type Option = {
  value: string;
  label: string;
};

export const countryOptions: Option[] = [
  {
    value: "PT",
    label: i18n.t("pages.access.subpages.manage.admin", "Portugal"),
  },
  {
    value: "CH",
    label: i18n.t("pages.access.subpages.manage.user", "Switzerland"),
  },
];

export const defaultValues = {
  email: undefined,
  phone: undefined,
  fullName: undefined,
  address1: undefined,
  address2: undefined,
  city: undefined,
  postalCode: undefined,
  country: countryOptions[0].value,
};

type DefaultValuesKeys = keyof typeof defaultValues;

export const defaultValues1 = (currentUser: CurrentUser) => {
  const selectedValues: Partial<CurrentUser> = {};
  for (const key of Object.keys(defaultValues) as DefaultValuesKeys[]) {
    if (currentUser[key] !== undefined) {
      selectedValues[key] = currentUser[key];
    }
  }
  return selectedValues as CurrentUser;
};
