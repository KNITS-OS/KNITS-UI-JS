import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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

import {
  createEmployee,
  deleteEmployee,
  searchEmployees,
  updateEmployee,
  searchEmployee,
  selectEmployeesState 
} from "redux/features";

import { CreateEmployeePanel } from "./create-employee/CreateEmployee.panel";
import { EmployeeDetailsPanel } from "./employee-details/EmployeeDetails.panel";
import { EMPLOYEE_CREATE, EMPLOYEE_DETAILS, EMPLOYEE_SEARCH } from "./employee.routes.consts";
import { SearchEmployeesPanel } from "./search-employees/SearchEmployees.panel";
import { alerts } from "components/feedback";


export const EmployeeMainPanel = () => {
  const dispatch = useDispatch();
  
  const {
    entities:employees,
    entity:currentEmployee
  } = useSelector(selectEmployeesState);
  
  const [activePanel, setActivePanel] = useState(EMPLOYEE_SEARCH);
  const departments = departmentDataAsSelectOptions(departmentsData);
  const countriesData = countriesDataAsSelectOptions(countries());
  const businessUnits = businessUnitsDataAsSelectOptions(businessUnitsData);
  const jobtitles = jobTitlesDataAsSelectOptions(jobTitlesData);



  const onCreateNew = (newEmployee) => {
    dispatch(createEmployee(newEmployee));   
  };

  const onSave = (partialEmployee) => {
    dispatch(updateEmployee(partialEmployee));  
  };

  const onViewEmployeeDetails = (id) => {
    dispatch(searchEmployee(id));
    setActivePanel(EMPLOYEE_DETAILS);
  };

  const onSearchEmployees = (employeeSearchRequest) => {
    dispatch(searchEmployees(employeeSearchRequest));
  };

  const onDelete = async (id) => {
    const { isConfirmed } = await alerts.confirmActionDanger("Are you sure?");
    if (isConfirmed) {
      await onDeleteConfirmed(id);
    }
  };

  const onDeleteConfirmed = async (id) => {
    dispatch(deleteEmployee(id));
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
