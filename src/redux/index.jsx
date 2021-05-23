import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import authReducer from "./reducer/authReducer";
let reducer = combineReducers({
  auth: authReducer,
});

const middleware = (stores) => (next) => (action) => {
  if (typeof action === "function") {
    return action(stores.dispatch);
  } else {
    next(action);
  }
};

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(applyMiddleware(middleware));

let store = createStore(reducer, enhancer);

export default store;
