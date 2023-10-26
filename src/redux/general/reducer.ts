import generalTypes, { General } from "./types";

const INITIAL_STATE: General = {
  notificationMessage: "",
  notificationType: null,
  lang: "EN",
  cookiePolicy: true,
  positionVertical: false,
};

interface Action {
  type: string;
  payload: string;
}

const generalReducer = (state = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case generalTypes.UPDATE_SUCCESS_NOTIFICATION:
      return {
        ...state,
        notificationMessage: action.payload,
        notificationType: "success",
      };
    case generalTypes.UPDATE_FAIL_NOTIFICATION:
      return {
        ...state,
        notificationMessage: action.payload,
        notificationType: "fail",
      };
    case generalTypes.UPDATE_INFORMATION_NOTIFICATION:
      return {
        ...state,
        notificationMessage: action.payload,
        notificationType: "information",
      };
    case generalTypes.CLEAR_NOTIFICATION:
      return {
        ...state,
        notificationMessage: "",
        notificationType: null,
      };

    case generalTypes.UPDATE_LANG:
      return {
        ...state,
        lang: action.payload,
      };
    case generalTypes.SET_COOKIE_POLICY:
      return {
        ...state,
        cookiePolicy: action.payload,
      };
    case generalTypes.POSITION_VERTICAL:
      return {
        ...state,
        positionVertical: action.payload,
      };

    default:
      return state;
  }
};

export default generalReducer;
