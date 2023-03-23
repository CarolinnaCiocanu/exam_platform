import { combineReducers } from "redux";

import AuthReducer from "./auth/reducers";

const rootReducer = combineReducers({
  AuthReducer,
});

export default rootReducer;
