import { useState } from "react";

import { Col, Form, Row } from "reactstrap";

import { FilterPanel } from "components/panels";
import { DateField, InputField, SelectField } from "components/widgets";

import { SELECT_ALL } from "common/consts";
import { formatJsDate_DD_MM_YYYY } from "common/utils";

export const SearchEmployeesFilterPanel = ({
  jobtitles,
  countries,
  departments,
  businessUnits,
  onSearch,
}) => {
  const [isSubmitting, setSubmitting] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [businessUnitSelected, setBusinessUnitSelected] = useState(SELECT_ALL);
  const [departmentSelected, setDepartmentSelected] = useState(SELECT_ALL);
  const [countrySelected, setCountrySelected] = useState(SELECT_ALL);
  const [jobTitleSelected, setJobTitleSelected] = useState(SELECT_ALL);
  const [searchHiringDateFrom, setSearchHiringDateFrom] = useState();
  const [searchHiringDateTo, setSearchHiringDateTo] = useState();
  console.log(setSubmitting);

  const resetFilters = () => {
    setBusinessUnitSelected(SELECT_ALL);
    setCountrySelected(SELECT_ALL);
    setDepartmentSelected(SELECT_ALL);
    setJobTitleSelected(SELECT_ALL);
    setSearchHiringDateFrom(undefined);
    setSearchHiringDateTo(undefined);
  };

  const search = () => {
    const filters = parametersToFilter();
    setSubmitting(true);
    onSearch(filters);
  };

  const updateFilterWithCurrentSelection = (field, filters, fieldName) => {
    if (field && field.value && field.label !== SELECT_ALL.label) {
      filters[fieldName] = parseInt(field.value);
    }
  };

  const updateFilterWithCurrentDate = (field, filters, fieldName) => {
    if (field) {
      filters[fieldName] = formatJsDate_DD_MM_YYYY(field);
    }
  };

  const parametersToFilter = () => {
    const queryEmployeeFilters = {};
    if (lastName) {
      queryEmployeeFilters.lastName = lastName;
    }
    updateFilterWithCurrentSelection(businessUnitSelected, queryEmployeeFilters, "businessId");
    updateFilterWithCurrentSelection(countrySelected, queryEmployeeFilters, "officeCountryId");
    updateFilterWithCurrentSelection(departmentSelected, queryEmployeeFilters, "departmentId");
    updateFilterWithCurrentSelection(jobTitleSelected, queryEmployeeFilters, "jobTitleId");
    updateFilterWithCurrentDate(searchHiringDateFrom, queryEmployeeFilters, "hiredFrom");
    updateFilterWithCurrentDate(searchHiringDateTo, queryEmployeeFilters, "hiredTo");
    return queryEmployeeFilters;
  };

  return (
    <>
      <Form>
        <FilterPanel
          title="Search Employees"
          resetFilters={resetFilters}
          isSubmitting={isSubmitting}
          onSearch={search}
        >
          <Row>
            <Col md="3">
              <InputField
                id="input-first-name"
                label="First name"
                style={{ height: "36px" }}
                className="form-control"
                value={firstName}
                placeholder="First Name"
                type="text"
                onChange={e => setFirstName(e.target.value)}
              />
            </Col>
            <Col md="3">
              <InputField
                id="input-last-name"
                label="Last name"
                style={{ height: "36px" }}
                className="form-control"
                value={lastName}
                placeholder="Last Name"
                type="text"
                onChange={e => setLastName(e.target.value)}
              />
            </Col>
            <Col md="3">
              <DateField
                id="date-hire-from"
                label="Hire Date From"
                style={{ height: "32px" }}
                value={searchHiringDateFrom}
                setValue={setSearchHiringDateFrom}
              />
            </Col>
            <Col md="3">
              <DateField
                id="date-hire-to"
                label="Hire Date To"
                style={{ height: "32px" }}
                value={searchHiringDateTo}
                setValue={setSearchHiringDateTo}
              />
            </Col>
          </Row>
          <Row>
            <Col md="3">
              <SelectField
                id="select-country"
                label="Country"
                value={countrySelected}
                options={countries}
                onChange={item => {
                  setCountrySelected(item);
                }}
              />
            </Col>
            <Col md="3">
              <SelectField
                id="select-departments"
                label="Department"
                value={departmentSelected}
                options={departments}
                onChange={item => {
                  setDepartmentSelected(item);
                }}
              />
            </Col>
            <Col md="3">
              <SelectField
                id="select-businessUnits"
                label="Business Unit"
                value={businessUnitSelected}
                options={businessUnits}
                onChange={item => {
                  setBusinessUnitSelected(item);
                }}
              />
            </Col>
            <Col md="3">
              <SelectField
                id="select-job-titles"
                label="Job Title"
                value={jobTitleSelected}
                options={jobtitles}
                onChange={item => {
                  setJobTitleSelected(item);
                }}
              />
            </Col>
          </Row>
        </FilterPanel>
      </Form>
    </>
  );
};
