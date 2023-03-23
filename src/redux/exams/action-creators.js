import { types } from "./action-types";
import { routes } from "./routes";
const { apiBaseUrl } = require("../../server/server.config");

export const getExams = (user) => {
  const headers = { authorization: `Bearer ${user.token}` };

  return {
    type: types.GET_EXAMS,
    payload: {
      request: {
        url: apiBaseUrl + routes.exam,
        method: "GET",
        headers: headers,
      },
    },
  };
};

export const createExam = (data, user) => {
  const headers = { authorization: `Bearer ${user.token}` };

  return {
    type: types.CREATE_EXAM,
    payload: {
      request: {
        url: apiBaseUrl + routes.exam,
        method: "POST",
        headers: headers,
        data: data,
      },
    },
  };
};

export const submitExam = (data, user) => {
  const headers = { authorization: `Bearer ${user.token}` };

  return {
    type: types.SUBMIT_EXAM,
    payload: {
      request: {
        url: apiBaseUrl + routes.submitExam,
        methos: "POST",
        headers: headers,
        data: data,
      },
    },
  };
};

export const updateExam = (exam) => {
  return {
    type: types.UPDATE_EXAM,
    payload: {
      data: exam,
    },
  };
};
