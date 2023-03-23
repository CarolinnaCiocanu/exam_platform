import update from "immutability-helper";

export const auth = (state, { data }) => {
  return update(state, { user: { $set: data } });
};

export const logout = (state) => {
  return update(state, { user: { $set: { isAuth: false } } });
};
