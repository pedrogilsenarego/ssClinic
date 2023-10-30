import { i18n } from "../../translations/i18n";
import { CurrentUser } from "../../types/user";

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
export const defaultValues = (currentUser: CurrentUser | null) => {
  const countryIndex = currentUser
    ? countryOptions.findIndex(
        (option) => option.value === currentUser.country || "PT"
      )
    : 0;

  return {
    phone: currentUser?.phone || undefined,
    fullName: currentUser?.fullName || undefined,
    address1: currentUser?.address1 || undefined,
    address2: currentUser?.address2 || undefined,
    city: currentUser?.city || undefined,
    postalCode: currentUser?.postalCode || undefined,
    country: countryOptions[countryIndex].value,
  };
};
