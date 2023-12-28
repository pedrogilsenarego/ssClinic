import { ROUTE_PATHS } from "../../../routes/constants";
import { i18n } from "../../../translations/i18n";

type Option = {
  link: (typeof ROUTE_PATHS)[keyof typeof ROUTE_PATHS];
  name: string;
};

export const options: Option[] = [
  {
    name: "Clinic 1",
    link: ROUTE_PATHS.CLINIC1,
  },
  {
    name: "Clinic 2",
    link: ROUTE_PATHS.CLINIC2,
  },
  {
    name: "Clinic 3",
    link: ROUTE_PATHS.CLINIC3,
  },
  {
    name: "Clinic 4",
    link: ROUTE_PATHS.CLINIC4,
  },
  {
    name: i18n.t("header.contacts", "Contacts"),
    link: ROUTE_PATHS.CONTACTS,
  },
  {
    name: i18n.t("header.testemonials", "Testemonials"),
    link: ROUTE_PATHS.TESTEMONIALS,
  },
  { name: i18n.t("header.blog", "Blog"), link: ROUTE_PATHS.BLOG_ },
  { name: i18n.t("header.about", "About"), link: ROUTE_PATHS.ABOUT },
  {
    name: i18n.t("header.products", "Products"),
    link: ROUTE_PATHS.PRODUCTS,
  },
];

export const langOptions = [
  {
    value: "en",
    label: "EN",
  },
  {
    value: "fr",
    label: "FR",
  },
  {
    value: "pt",
    label: "PT",
  },
];
