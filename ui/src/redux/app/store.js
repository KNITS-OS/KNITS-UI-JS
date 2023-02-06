import { combineReducers, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { employeeReducer } from "../features/employees/employee.reducer";
import { composeWithDevTools } from "redux-devtools-extension";

const middleware = [thunk];

export const rootReducer = combineReducers({
  employee: employeeReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware, logger))
);
