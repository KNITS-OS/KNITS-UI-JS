import { useState } from "react";

import { TabContent, TabPane } from "reactstrap";

import { businessUnitsData } from "__mocks/data/business-units-mocks";
import { countries } from "__mocks/data/countries-mocks";
import { departmentsData } from "__mocks/data/departments-mocks";
import { jobTitlesData } from "__mocks/data/jobTitles-mocks";
import {
  businessUnitsDataAsSelectOptions,
  countriesDataAsSelectOptions,
  departmentDataAsSelectOptions,
  jobTitlesDataAsSelectOptions,
} from "common/category-utils";

import { CreateEmployeePanel } from "./create-employee/CreateEmployee.panel";
import { EmployeeDetailsPanel } from "./employee-details/EmployeeDetails.panel";
import { EMPLOYEE_CREATE, EMPLOYEE_DETAILS, EMPLOYEE_SEARCH } from "./employee.routes.consts";
import { SearchEmployeesPanel } from "./search-employees/SearchEmployees.panel";
import { alerts } from "components/feedback";
import { employeeService } from "api";

export const EmployeeMainPanel = () => {
  const [activePanel, setActivePanel] = useState(EMPLOYEE_SEARCH);
  const [employees, setEmployees] = useState([]);
  const [currentEmployee, setCurrentEmployee] = useState({});

  const departments = departmentDataAsSelectOptions(departmentsData);
  const countriesData = countriesDataAsSelectOptions(countries());
  const businessUnits = businessUnitsDataAsSelectOptions(businessUnitsData);
  const jobtitles = jobTitlesDataAsSelectOptions(jobTitlesData);

  const onCreateNew = async (newEmployee) => {
    try {
      const { data } = await employeeService.createEmployee(newEmployee);
      data && setEmployees([...employees, data]);

      alerts.successAlert("Saved with success", "Success");
      return await Promise.resolve();
    } catch (err) {
      let message = "Unknown Error";
      if (err) message = err.message;
      alerts.errorAlert(message, "Attention!");
      return await Promise.reject(err);
    }
  };

  const onSave = async (partialEmployee) => {
    try {
      console.log(partialEmployee);
      const { data } = await employeeService.updateEmployee(partialEmployee);
      alerts.successAlert("Saved with success", "Success");
      console.log(data);
      data &&
        setEmployees(
          employees.map((employee) =>
            employee.id === data.id ? data : employee
          )
        );
      return await Promise.resolve();
    } catch (err) {
      let message = "Unknown Error";
      if (err) message = err.message;
      alerts.errorAlert(message, "Attention!");
      return await Promise.reject(err);
    }
  };

  const onViewEmployeeDetails = async (id) => {
    const foundEmployee = employees.find((employee) => employee.id === id);
    setCurrentEmployee(foundEmployee);
    setActivePanel(EMPLOYEE_DETAILS);
  };

  const onSearchEmployees = async (employeeSearchRequest) => {
    try {
      const { data } = await employeeService.searchEmployees(
        employeeSearchRequest
      );
      setEmployees(data);
      return await Promise.resolve();
    } catch (err) {
      let message = "Unknown Error";
      if (err) message = err.message;
      alerts.errorAlert(message, "Attention!");
      return await Promise.reject(err);
    }
  };

  const onDelete = async (id) => {
    const { isConfirmed } = await alerts.confirmActionDanger("Are you sure?");
    if (isConfirmed) {
      await onDeleteConfirmed(id);
    }
  };

  const onDeleteConfirmed = async (id) => {
    try {
      await employeeService.deleteEmployee(id);
      alerts.successAlert("Employee deleted with success", "Success");
      const { data } =await employeeService.findAllEmployees();
      setEmployees(data);
      return await Promise.resolve();
    } catch (err) {
      let message = "Unknown Error";
      if (err) message = err.message;
      alerts.errorAlert(message, "Attention!");
      return await Promise.reject(err);
    }
  };

  return (
    <>
      <TabContent activeTab={activePanel}>
        <TabPane tabId={EMPLOYEE_SEARCH}>
          <SearchEmployeesPanel
            employees={employees}
            departments={departments}
            countries={countriesData}
            businessUnits={businessUnits}
            jobtitles={jobtitles}
            navigateToPanel={setActivePanel}
            onSearchEmployees={onSearchEmployees}
            onDelete={onDelete}
            onViewDetails={onViewEmployeeDetails}
          />
        </TabPane>
        <TabPane tabId={EMPLOYEE_CREATE}>
          <CreateEmployeePanel onSaveNewEmployee={onCreateNew} navigateToPanel={setActivePanel} />
        </TabPane>
        <TabPane tabId={EMPLOYEE_DETAILS}>
          <EmployeeDetailsPanel
            employee={currentEmployee}
            onSave={onSave}
            navigateToPanel={setActivePanel}
          />
        </TabPane>
      </TabContent>
    </>
  );
};
