import { UserStore, userTypes } from "./types";

const INITIAL_STATE: UserStore = {
  currentUser: null,
};

interface Action {
  type: string;
  payload: any;
}

const userReducer = (state = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case userTypes.SET_USER: {
      return {
        ...state,
        currentUser: action.payload,
      };
    }
    default:
      return state;
  }
};

export default userReducer;
