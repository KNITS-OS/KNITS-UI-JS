import { createSelector } from "reselect";

export const selectEmployeesState = (rootState) => rootState.employee;

export const selectAllEmployeeData = createSelector(
  [selectEmployeesState],
  (employeeState) => employeeState.entities
);

export const selectEmployeeById = (id) =>
  createSelector([selectAllEmployeeData], (employeesData) =>
    employeesData.find((employee) => employee.id === id)
  );