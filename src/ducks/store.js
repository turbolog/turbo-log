import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import promiseMiddleware from "redux-promise-middleware";
import auth from "./authReducer";
import vehicle from "./vehicleReducer";
import forum from "./forumReduce";
import form from "./formReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  auth,
  vehicle,
  forum,
  form
});

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(promiseMiddleware))
);

export default store;
