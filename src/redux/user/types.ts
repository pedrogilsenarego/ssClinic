import { CurrentUser } from "../../types/user";

export const userTypes = {
  SET_USER: "SET_USER",
  SIGNOUT: "SIGNOUT",
};

export type UserStore = {
  currentUser: CurrentUser | null;
};
