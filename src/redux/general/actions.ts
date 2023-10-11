import generalTypes, { Dial } from "./types";

//notifications
export const updateSuccessNotification = (message: string) => ({
  type: generalTypes.UPDATE_SUCCESS_NOTIFICATION,
  payload: message,
});
export const updateFailNotification = (message: string) => ({
  type: generalTypes.UPDATE_FAIL_NOTIFICATION,
  payload: message,
});
export const updateInformationNotification = (message: string) => ({
  type: generalTypes.UPDATE_INFORMATION_NOTIFICATION,
  payload: message,
});
export const clearNotification = () => ({
  type: generalTypes.CLEAR_NOTIFICATION,
});
export const updateLang = (lang: string) => ({
  type: generalTypes.UPDATE_LANG,
  payload: lang,
});
export const setCookiePolicy = (signal: boolean) => ({
  type: generalTypes.SET_COOKIE_POLICY,
  payload: signal,
});
export const setPositionVertical = (position: boolean) => ({
  type: generalTypes.POSITION_VERTICAL,
  payload: position,
});

export const createDial = (payload: Dial<"number" | "text" | null>) => ({
  type: generalTypes.CREATE_DIAL,
  payload: payload,
});

export const clearDial = () => ({
  type: generalTypes.CLEAR_DIAL,
});
