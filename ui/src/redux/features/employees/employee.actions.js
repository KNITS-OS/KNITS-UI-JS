import { AppActionType } from "redux/app";
import { typedAction } from "redux/app";
import { mockEmployees } from "__mocks/data/employees-mocks";

export const createEmployee = (data) =>
  typedAction(AppActionType.CREATE_EMPLOYEE, data);
export const searchEmployee = (data) =>
  typedAction(AppActionType.SEARCH_EMPLOYEE, data);
export const searchEmployees = (filters) => {
  console.log(filters);
  return typedAction(AppActionType.SEARCH_EMPLOYEES, mockEmployees());
};

export const updateEmployee = (data) =>
  typedAction(AppActionType.UPDATE_EMPLOYEE, data);
export const deleteEmployee = (data) =>
  typedAction(AppActionType.DELETE_EMPLOYEE, data);
