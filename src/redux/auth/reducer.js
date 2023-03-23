import { types } from "./action-types";
import * as action from "./actions";
import { HYDRATE } from "next-redux-wrapper";

const initialStates = {
  user: {
    isAuth: true,
    role: 0,
  },
};

export const AuthReducer = (state = initialStates, result) => {
  const { type, payload } = result;

  switch (type) {
    case HYDRATE:
      return { ...state };
    case types.AUTH_USER:
      return action.auth(state, payload);
    case types.LOGOUT:
      return action.logout(state);
    default:
      return state;
  }
};

export default AuthReducer;
