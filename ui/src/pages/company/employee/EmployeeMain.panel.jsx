import { useState } from "react";

import { TabContent, TabPane } from "reactstrap";

import { businessUnitsData } from "__mocks/data/business-units-mocks";
import { countries } from "__mocks/data/countries-mocks";
import { departmentsData } from "__mocks/data/departments-mocks";
import { mockEmployees } from "__mocks/data/employees-mocks";
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

export const EmployeeMainPanel = () => {
  const [activePanel, setActivePanel] = useState(EMPLOYEE_SEARCH);
  const [employees, setEmployees] = useState([]);
  const [currentEmployee, setCurrentEmployee] = useState({});

  const departments = departmentDataAsSelectOptions(departmentsData);
  const countriesData = countriesDataAsSelectOptions(countries());
  const businessUnits = businessUnitsDataAsSelectOptions(businessUnitsData);
  const jobtitles = jobTitlesDataAsSelectOptions(jobTitlesData);

  const onCreateNew = newEmployee => {
    console.log(newEmployee);
    alerts.confirmActionSuccess("Employee saved with success");
  };

  const onSave = partialEmployee => {
    console.log(partialEmployee);
    alerts.confirmActionSuccess("Employee saved with success");
    //return partialEmployee;
  };

  const onViewEmployeeDetails = id => {
    const foundEmployee = employees.find(employee => employee.id === id);
    setCurrentEmployee(foundEmployee);
    setActivePanel(EMPLOYEE_DETAILS);
  };

  const onSearchEmployees = async employeeSearchRequest => {
    console.log(employeeSearchRequest);
    //change employees according to query result
    setEmployees(mockEmployees());
  };

  const onDelete = id => {
    console.log(id);
    alerts.confirmActionSuccess("Employee deleted with success");
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
