import { CurrentUser } from "../../types/user";
import { userTypes } from "./types";

export const setUser = (payload: CurrentUser) => ({
  type: userTypes.SET_USER,
  payload,
});

export const signOut = () => ({
  type: userTypes.SIGNOUT,
});
