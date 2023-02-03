import { useState } from "react";

import { Col, Row } from "reactstrap";

import { WithAuthorization } from "components/authorization";
import { FilterPanel } from "components/panels";
import { DateField, InputField, SelectField } from "components/widgets";

import { selectLoggedUserDefaultCountryAsSelection } from "pages/utils";

import { useAuth } from "context";
import { DATE_FILTER_FORMAT, Permission, Role } from "variables/app.consts";

export const SearchEmployeesFilterPanel = ({
  businessUnits,
  countries,
  onSearchEmployees,
}) => {
  const { user } = useAuth();
  const [searchNewMembersOnly, setSearchNewMembersOnly] = useState(false);
  const [searchLastName, setSearchLastName] = useState("");

  const [businessUnitSelected, setBusinessUnitSelected] = useState();
  const [countrySelected, setCountrySelected] = useState(
    selectLoggedUserDefaultCountryAsSelection(user.countryCode3)
  );

  const [searchHiringDate, setSearchHiringDate] = useState();

  const onChangeSearchLastName = (e) => {
    const searchLastName = e.target.value;
    setSearchLastName(searchLastName);
  };

  const resetFilters = () => {
    setSearchLastName("");
    setSearchNewMembersOnly(false);
    setBusinessUnitSelected(null);
    setSearchHiringDate(undefined);
    if (user.authRole === Role.RegionalManager) {
      setCountrySelected(null);
    }
  };

  const findByAllParameters = () => {
    const filters = parametersToFilter();
    onSearchEmployees(filters);
  };

  const parametersToFilter = () => {
    return Object.assign(
      {},
      searchLastName && searchLastName !== ""
        ? { lastName: searchLastName }
        : null,
      businessUnitSelected
        ? { businessUnitId: parseInt(businessUnitSelected.value) }
        : null,
      countrySelected && countrySelected.value !== ""
        ? { countryIso3: countrySelected.value }
        : null,
      searchHiringDate
        ? { hiringDateFrom: searchHiringDate.format(DATE_FILTER_FORMAT) }
        : null,
      searchNewMembersOnly ? { newMembersOnly: searchNewMembersOnly } : null
    );
  };
  return (
    <FilterPanel
      title="Search Employees"
      findByAllParameters={findByAllParameters}
      resetFilters={resetFilters}
    >
      <Row>
        <Col md="3">
          <InputField
            id="input-last-name"
            label="Last name"
            style={{ height: "36px" }}
            className="form-control"
            value={searchLastName}
            placeholder="Last Name"
            type="text"
            onChange={onChangeSearchLastName}
          />
        </Col>
        <Col md="3">
          <SelectField
            id="select-businessUnits"
            label="Business Unit"
            value={businessUnitSelected}
            options={businessUnits}
            onChange={(item) => {
              setBusinessUnitSelected(item);
            }}
          />
        </Col>
        <WithAuthorization requires={Permission.Employee_country_all}>
          <Col md="3">
            <SelectField
              id="select-country"
              label="Country"
              value={countrySelected}
              options={countries}
              onChange={(item) => {
                setCountrySelected(item);
              }}
            />
          </Col>
        </WithAuthorization>
        <Col md="2">
          <DateField
            id="date-hire-from"
            label="Hire Date From"
            value={searchHiringDate}
            setValue={setSearchHiringDate}
          />
        </Col>
        <Col md="1">&nbsp;</Col>
      </Row>
      <Row>
        <Col md="9">&nbsp;</Col>
        <Col
          md="3"
          style={{ zIndex: 0 }}
          className="d-flex justify-content-center align-items-center"
        >
          <div className="custom-control custom-control-alternative custom-checkbox">
            <input
              className="custom-control-input"
              id="onlyNewMembers"
              type="checkbox"
              value={searchNewMembersOnly.toString()}
              onClick={() => setSearchNewMembersOnly(!searchNewMembersOnly)}
            />
            <label className="custom-control-label" htmlFor="onlyNewMembers">
              <span className="text-muted">Only Employees NOT in Care</span>
            </label>
          </div>
        </Col>
      </Row>
    </FilterPanel>
  );
};
