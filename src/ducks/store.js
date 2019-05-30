import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import promiseMiddleware from "redux-promise-middleware";
import auth from "./authReducer";
import vehicle from "./vehicleReducer"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    auth,
    vehicle
})

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(promiseMiddleware))
);

export default store;
