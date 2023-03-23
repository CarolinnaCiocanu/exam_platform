import { applyMiddleware, createStore } from "redux";
import { createWrapper } from "next-redux-wrapper";
import rootReducer from "./rootReducer";

const middleware = applyMiddleware();

const makeStore = (context) => createStore(rootReducer, {}, middleware);

export const wrapper = createWrapper(makeStore, { debug: false });
