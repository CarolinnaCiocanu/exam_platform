import { types } from "./action-types";
import { routes } from "./routes";

const { apiPath, apiHost } = require("../../server/server.config");

export const authUser = (data) => {
  return {
    type: types.AUTH_USER,
    payload: {
      request: {
        url: routes.AUTH,
        method: "POST",
        data: data,
      },
    },
  };
};

export const logout = () => {
  return {
    type: types.LOGOUT,
    payload: {},
  };
};
