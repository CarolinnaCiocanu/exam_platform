import { combineReducers } from "redux";

import AuthReducer from "./auth/reducer";
import ExamsReducer from "./exams/reducer";

const rootReducer = combineReducers({
  AuthReducer,
  ExamsReducer,
});

export default rootReducer;
