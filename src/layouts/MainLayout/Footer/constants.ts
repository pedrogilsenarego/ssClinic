import { ROUTE_PATHS } from "../../../routes/constants";

type Option = {
  link: (typeof ROUTE_PATHS)[keyof typeof ROUTE_PATHS];
  name: string;
};

export const options: Option[] = [
  { name: "Terms of service", link: "COLLECTIONS" },
  { name: "Shipping Policy", link: ROUTE_PATHS.DNA },
  { name: "Refund Policy", link: ROUTE_PATHS.DNA },
  { name: "Cookie Policy", link: ROUTE_PATHS.DNA },
];
