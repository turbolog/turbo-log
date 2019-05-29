import { createStore, applyMiddleware, compose } from "redux";
import promiseMiddleware from "redux-promise-middleware";
import authReducer from "./reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  authReducer,
  composeEnhancers(applyMiddleware(promiseMiddleware))
);

export default store;
