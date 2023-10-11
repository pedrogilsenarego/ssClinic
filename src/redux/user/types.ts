import { CurrentUser } from "../../types/user";

export const userTypes = {
  SET_USER: "SET_USER",
};

export type UserStore = {
  currentUser: CurrentUser | null;
};
