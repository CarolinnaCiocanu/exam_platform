import { types } from "./action-types";
import * as action from "./actions";
import { HYDRATE } from "next-redux-wrapper";

const initialStates = {
  exams: [
    {
      id: 0,
      type: "Examen",
      name: "Examen 1",
      status: "open",
      createdByUserId: 0,
      questions: [
        {
          id: 0,
          type: "radio",
          label: "Cit e 1+1",
          answers: [
            {
              label: 1,
              value: 1,
              point: 0,
              id: 0,
            },
            {
              label: 2,
              value: 2,
              point: 80,
              id: 1,
            },
          ],
        },
        {
          id: 1,
          type: "textarea",
          label: "Descrieti ABC",
        },
      ],
    },
    {
      id: 1,
      type: "Examen",
      name: "Examen 2",
      status: "closed",
      createdByUserId: 0,
      points: 82,
    },
    {
      id: 2,
      type: "Examen",
      name: "Examen 3",
      status: "open",
      createdByUserId: 0,
      questions: [
        {
          id: 1,
          type: "textarea",
          label: "Descrieti ABC",
        },
        {
          id: 0,
          type: "radio",
          label: "Cit e 10x10",
          answers: [
            {
              label: 100,
              value: 100,
              point: 80,
              id: 0,
            },
            {
              label: 50,
              value: 50,
              point: 0,
              id: 1,
            },
            {
              label: 1000,
              value: 1000,
              point: 0,
              id: 2,
            },
          ],
        },
      ],
    },
    {
      id: 3,
      type: "Examen",
      name: "Examen 3",
      status: "closed",
      createdByUserId: 0,
      points: 55,
    },
    {
      id: 4,
      type: "Examen",
      name: "Examen 4",
      status: "closed",
      createdByUserId: 0,
      points: 49,
    },
  ],
};

export const ExamsReducer = (state = initialStates, result) => {
  const { type, payload } = result;

  switch (type) {
    case HYDRATE:
      return { ...state };
    case types.CREATE_EXAM:
      return action.createExam(state, payload);
    case types.GET_EXAMS:
      return action.getExams(state);
    case types.UPDATE_EXAM:
      console.log(payload, " = payload ");
      return action.updateExam(state, payload);
    default:
      return state;
  }
};

export default ExamsReducer;
