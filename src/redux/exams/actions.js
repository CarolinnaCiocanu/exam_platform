import update from "immutability-helper";

export const createExam = (state, { data }) => {
  return update(state, { exams: { $set: data } });
};

export const getExams = (state, { data }) => {
  return update(state, { exams: { $set: data } });
};

export const updateExam = (state, { data }) => {
  return update(state, { exams: { $set: [...data] } });
};
