import moment from "moment";
import { useState } from "react";

import { Button, Col, Form, Row } from "reactstrap";

import { InputField, DateField, SelectField } from "components/widgets";

import { selectRoleByIdAsSelectOption, selectGroupsByIdsAsSelectValues } from "pages/utils";

import { DATE_FILTER_FORMAT } from "variables/app.consts";

export const EmployeePanel = ({ employee, groupOptions, roleOptions, onSave }) => {
  const [onboardingDate, setOnboardingDate] = useState(
    moment(employee?.onboardingDate, DATE_FILTER_FORMAT)
  );

  const [offboardingDate, setOffboardingDate] = useState(
    moment(employee?.offboardingDate, DATE_FILTER_FORMAT)
  );

  const employeeRole = selectRoleByIdAsSelectOption(employee.roleId);
  const employeeGroups = selectGroupsByIdsAsSelectValues(employee.groups || []);

  const [roleId, setRoleId] = useState(employee.roleId);
  const [groups, setGroups] = useState(employee.groups || []);

  // state to know which group fields has the user selected
  const [currentGroupSelections, setCurrentGroupSelections] = useState([]);

  const onSaveEmployee = () => {
    const employeeSaveRequest = {
      id: employee.id,
      onboardingDate: moment(onboardingDate, DATE_FILTER_FORMAT).format(DATE_FILTER_FORMAT),
      offboardingDate: moment(offboardingDate, DATE_FILTER_FORMAT).format(DATE_FILTER_FORMAT),
      roleId,
      groups,
    };

    onSave(employeeSaveRequest);
  };
  return (
    <Form>
      <h6 className="heading-small text-muted mb-4">User information</h6>
      <div className="pl-lg-4">
        <Row>
          <Col lg="6">
            <DateField
              id="date-auto-onboarding-date"
              label="Onboard date"
              value={onboardingDate}
              setValue={setOnboardingDate}
            />
          </Col>
          <Col lg="6">
            <DateField
              id="date-auto-offboarding-date"
              label="Auto Offboard Date"
              value={offboardingDate}
              setValue={setOffboardingDate}
            />
          </Col>
        </Row>
        <Row>
          <Col lg="6">
            <SelectField
              id="select-role"
              label="Role"
              options={roleOptions}
              defaultValue={employeeRole}
              onChange={item => {
                const { value } = item;
                setRoleId(parseInt(value));
              }}
            />
          </Col>
          <Col lg="6">
            <SelectField
              id="select-group"
              label="Group"
              options={groupOptions}
              defaultValue={employeeGroups}
              isMulti={true}
              isOptionDisabled={option => {
                const { label } = option;
                // if user has selected ALL field then other fields will be disabled
                if (currentGroupSelections.some(selection => selection.label === "ALL")) {
                  return true;
                  // if user has selected other field then ALL field will be disabled
                } else if (currentGroupSelections.length > 0 && label === "ALL") {
                  return true;
                  // default allow all fields to be selected
                } else {
                  return false;
                }
                // return true to disable field
              }}
              onChange={items => {
                const selections = items;
                setCurrentGroupSelections(selections);
                // if there is an "ALL" selection in the list (data will be 1,2,3,12,etc)
                // split and return an array of numbers
                if (selections.some(item => item.label === "ALL")) {
                  const values = selections[0].value.split(",").map(Number);
                  setGroups(values);
                } else {
                  // if user selected groups manually, return an array of the group ids
                  const groupIdsSelected = selections.map(item => parseInt(item.value));
                  setGroups(groupIdsSelected);
                }
              }}
            />
          </Col>
        </Row>
      </div>
      <hr className="my-4" />

      <h6 className="heading-small text-muted mb-4">User information</h6>
      <div className="pl-lg-4">
        <Row>
          <Col lg="6">
            <InputField
              id="input-last-name"
              label="Last name"
              value={employee.lastName}
              type="text"
              disabled={true}
            />
          </Col>
          <Col lg="6">
            <InputField
              id="input-first-name"
              label="First name"
              value={employee.firstName}
              type="text"
              disabled={true}
            />
          </Col>
        </Row>

        <Row>
          <Col lg="6">
            <InputField
              id="input-international-name"
              label="International Name"
              value={employee.internationalName}
              type="text"
              disabled={true}
            />
          </Col>
          <Col lg="6">
            <InputField
              id="input-email"
              label="Email address"
              value={employee.email}
              type="text"
              disabled={true}
            />
          </Col>
        </Row>
      </div>
      <hr className="my-4" />

      <h6 className="heading-small text-muted mb-4">Office information</h6>
      <div className="pl-lg-4">
        <Row>
          <Col md="12">
            <InputField
              id="input-office-address-street"
              label="Street"
              value={employee.office.street}
              type="text"
              disabled={true}
            />
          </Col>
        </Row>
        <Row>
          <Col lg="4">
            <InputField
              id="input-office-address-city"
              label="City"
              value={employee.office.city}
              type="text"
              disabled={true}
            />
          </Col>
          <Col lg="4">
            <InputField
              id="input-office-address-country"
              label="Country"
              value={employee.office.country || ""}
              type="text"
              disabled={true}
            />
          </Col>
          <Col lg="4">
            <InputField
              id="input-office-address-postal-code"
              label="Postal Code"
              value={employee.office.postalCode || ""}
              type="text"
              disabled={true}
            />
          </Col>
        </Row>
      </div>
      <hr className="my-4" />

      <h6 className="heading-small text-muted mb-4">Company Data</h6>
      <div className="pl-lg-4">
        <Row>
          <Col lg="4">
            <InputField
              id="input-title"
              label="Job Title"
              value={employee.title}
              type="text"
              disabled={true}
            />
          </Col>

          <Col lg="4">
            <InputField
              id="input-companyPhone"
              label="Company Phone"
              value={employee.companyPhone}
              type="text"
              disabled={true}
            />
          </Col>
          <Col lg="4">
            <InputField
              id="input-company-code"
              label="Company Code"
              value={employee.companyCode}
              type="text"
              disabled={true}
            />
          </Col>
        </Row>

        <Row>
          <Col lg="4">
            <InputField
              id="input-business-unit"
              label="Business Unit"
              value={employee.businessUnit}
              type="text"
              disabled={true}
            />
          </Col>

          <Col lg="4">
            <InputField
              id="input-cost-center"
              label="Cost Center"
              value={employee.costCenter}
              type="text"
              disabled={true}
            />
          </Col>
          <Col lg="4">
            <InputField
              id="input-management-group"
              label="Management Group"
              value={employee.managementGroup}
              type="text"
              disabled={true}
            />
          </Col>
        </Row>
        <Row>
          <Button color="primary" type="button" onClick={onSaveEmployee}>
            Update Employee
          </Button>
        </Row>
      </div>
    </Form>
  );
};
