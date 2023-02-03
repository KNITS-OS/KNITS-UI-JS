import { combineReducers, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { employeeReducer } from "../features/employees/employee.reducer";

export const rootReducer = combineReducers({
  employee: employeeReducer,
});

export const store = createStore(rootReducer, applyMiddleware(logger));
