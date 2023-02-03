import { httpCommon, EMPLOYEE_ROUTE } from "..";

const searchEmployees = (employeeSearchRequest) => {
  return httpCommon.get(
    `${EMPLOYEE_ROUTE}?${queryObjectToFilter(employeeSearchRequest)}`
  );
};

const findAllEmployees = () => httpCommon.get(`${EMPLOYEE_ROUTE}`);

const getEmployeeById = (id) => httpCommon.get(`${EMPLOYEE_ROUTE}/${id}`);

const updateEmployee = (partialEmployee) => {
  const { id } = partialEmployee;
  return httpCommon.put(`${EMPLOYEE_ROUTE}/${id}`, partialEmployee);
};

const createEmployee = (newEmployee) => {
  return httpCommon.post(`${EMPLOYEE_ROUTE}`, newEmployee);
};

const deleteEmployee = (id) => httpCommon.delete(`${EMPLOYEE_ROUTE}/${id}`);

const queryObjectToFilter = (employeeSearchRequest) => {
  const filters = Object.assign(
    {},
    employeeSearchRequest.lastName && employeeSearchRequest.lastName !== ""
      ? { lastName: employeeSearchRequest.lastName }
      : null,
    employeeSearchRequest.businessUnitId
      ? { businessUnitId: `${employeeSearchRequest.businessUnitId}` }
      : null,
    employeeSearchRequest.departmentId
      ? { departmentId: `${employeeSearchRequest.departmentId}` }
      : null,
    employeeSearchRequest.officeCountryId
      ? { officeCountryId: `${employeeSearchRequest.officeCountryId}` }
      : null,
    employeeSearchRequest.jobTitleId
      ? { jobTitleId: `${employeeSearchRequest.jobTitleId}` }
      : null,
    employeeSearchRequest.hiredFrom
      ? { hiredFrom: `${employeeSearchRequest.hiredFrom}` }
      : null,
    employeeSearchRequest.jobTitleId
      ? { hiredTo: `${employeeSearchRequest.hiredTo}` }
      : null
  );

  return new URLSearchParams(filters);
};

export const employeeService = {
  searchEmployees,
  findAllEmployees,
  createEmployee,
  getEmployeeById,
  updateEmployee,
  deleteEmployee,
};
