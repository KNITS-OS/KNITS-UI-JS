import { AppActionType, typedAction } from "redux/app";
import { employeeService } from "api";
import { alerts } from "components/feedback";

const createEmployeeLoading = () =>
  typedAction(
    AppActionType.CREATE_EMPLOYEE_LOADING,
    AppActionType.CREATE_EMPLOYEE_LOADING
  );
const searchEmployeeLoading = () =>
  typedAction(
    AppActionType.SEARCH_EMPLOYEE_LOADING,
    AppActionType.SEARCH_EMPLOYEE_LOADING
  );
const searchEmployeesLoading = () =>
  typedAction(
    AppActionType.SEARCH_EMPLOYEES_LOADING,
    AppActionType.SEARCH_EMPLOYEES_LOADING
  );
const updateEmployeeLoading = () =>
  typedAction(
    AppActionType.UPDATE_EMPLOYEE_LOADING,
    AppActionType.UPDATE_EMPLOYEE_LOADING
  );
const deleteEmployeeLoading = () =>
  typedAction(
    AppActionType.DELETE_EMPLOYEE_LOADING,
    AppActionType.DELETE_EMPLOYEE_LOADING
  );

const createEmployeeComplete = (data) =>
  typedAction(AppActionType.CREATE_EMPLOYEE_COMPLETE, data);
const searchEmployeeComplete = (data) =>
  typedAction(AppActionType.SEARCH_EMPLOYEE_COMPLETE, data);
const searchEmployeesComplete = (data) =>
  typedAction(AppActionType.SEARCH_EMPLOYEES_COMPLETE, data);
const updateEmployeeComplete = (data) =>
  typedAction(AppActionType.UPDATE_EMPLOYEE_COMPLETE, data);
const deleteEmployeeComplete = (data) =>
  typedAction(AppActionType.DELETE_EMPLOYEE_COMPLETE, data);

const createEmployeeError = (err) =>
  typedAction(AppActionType.CREATE_EMPLOYEE_ERROR, err);

const searchEmployeeError = (err) =>
  typedAction(AppActionType.SEARCH_EMPLOYEE_ERROR, err);

const searchEmployeesError = (err) =>
  typedAction(AppActionType.SEARCH_EMPLOYEES_ERROR, err);

const updateEmployeeError = (err) =>
  typedAction(AppActionType.UPDATE_EMPLOYEE_ERROR, err);

const deleteEmployeeError = (err) =>
  typedAction(AppActionType.DELETE_EMPLOYEE_ERROR, err);

export const searchEmployee = (id) => async (dispatch) => {
  try {
    dispatch(searchEmployeeLoading());

    const { data } = await employeeService.getEmployeeById(id);
    dispatch(searchEmployeeComplete(data));
  } catch (err) {
    dispatch(searchEmployeeError(err));
    let message = "Unknown Error";
    if (err) message = err.message;
    alerts.errorAlert(message, "Attention!");
    return await Promise.reject(err);
  }
};

export const createEmployee = (employee) => async (dispatch) => {
  try {
    dispatch(createEmployeeLoading());
    const { data } = await employeeService.createEmployee(employee);

    dispatch(createEmployeeComplete(data));
    alerts.successAlert("Saved with success", "Success");
    return await Promise.resolve();
  } catch (err) {
    dispatch(createEmployeeError(err));
    let message = "Unknown Error";
    if (err) message = err.message;
    alerts.errorAlert(message, "Attention!");
    return await Promise.reject(err);
  }
};

export const searchEmployees = (filters) => async (dispatch) => {
  try {
    dispatch(searchEmployeesLoading());
    const { data } = await employeeService.searchEmployees(filters);
    dispatch(searchEmployeesComplete(data));
    return await Promise.resolve();
  } catch (err) {
    dispatch(searchEmployeesError(err));
    let message = "Unknown Error";
    if (err) message = err.message;
    alerts.errorAlert(message, "Attention!");
    return await Promise.reject(err);
  }
};

export const updateEmployee = (updatedEmployee) => async (dispatch) => {
  try {
    dispatch(updateEmployeeLoading());

    const { data } = await employeeService.updateEmployee(updatedEmployee);
    dispatch(updateEmployeeComplete(data));
    alerts.successAlert("Saved with success", "Success");
    return await Promise.resolve();
  } catch (err) {
    dispatch(updateEmployeeError(err));
    let message = "Unknown Error";
    if (err) message = err.message;
    alerts.errorAlert(message, "Attention!");
    return await Promise.reject(err);
  }
};

export const deleteEmployee = (id) => async (dispatch) => {
  try {
    dispatch(deleteEmployeeLoading());

    await employeeService.deleteEmployee(id);
    dispatch(deleteEmployeeComplete(id));
    alerts.successAlert("Employee deleted with success", "Success");
    return await Promise.resolve();
  } catch (err) {
    dispatch(deleteEmployeeError(err));
    let message = "Unknown Error";
    if (err) message = err.message;
    alerts.errorAlert(message, "Attention!");
    return await Promise.reject(err);
  }
};