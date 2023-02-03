//import { createSelector } from "reselect";

export const selectEmployeesState = (rootState) => rootState.employee;

export const selectAllEmployeeData = (rootState) => rootState.employee.entities;

/*
export const selectAllEmployeeData = createSelector(
  [selectEmployeesState],
  (employeeState) => {
    return employeeState.entities;
  }
);

export const selectEmployeeById = (id) =>
  createSelector([selectAllEmployeeData], (employeesData) =>
    employeesData.find((employee) => employee.id === id)
  );

  */
