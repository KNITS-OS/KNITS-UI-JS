import { Button, Card, CardHeader, Col, Container, FormGroup, Row } from "reactstrap";

import { ReactTable } from "components/widgets";

import { SearchEmployeesFilterPanel } from "../common/SearchEmployeesFilter.panel";
import { EMPLOYEE_CREATE } from "../employee.routes.consts";

import { employeesTableColumns } from "./SearchEmployees.table";

export const SearchEmployeesPanel = ({
  employees,
  departments,
  countries,
  businessUnits,
  jobtitles,
  navigateToPanel,
  onSearchEmployees,
  onDelete,
  onViewDetails,
}) => {
  const onViewEmployeeDetails = e => {
    e.preventDefault();
    const { id } = e.currentTarget;
    onViewDetails(parseInt(id));
  };

  const onDeleteEmployee = async e => {
    e.preventDefault();
    const { id } = e.currentTarget;
    onDelete(parseInt(id));
  };

  const onCreateNewEmployee = async e => {
    e.preventDefault();
    navigateToPanel(EMPLOYEE_CREATE);
  };

  return (
    <>
      <Container className="mt--6" fluid>
        <Row>
          <div className="col">
            <SearchEmployeesFilterPanel
              departments={departments}
              businessUnits={businessUnits}
              countries={countries}
              jobtitles={jobtitles}
              onSearch={onSearchEmployees}
            />
          </div>
        </Row>

        <div className="col">
          <Card>
            <CardHeader>
              <Row>
                <Col md="1.1">
                  <h3 className="mb-0">Employees</h3>
                  <p className="text-sm mb-0">Employees from PDM</p>
                </Col>
              </Row>
              <Row>
                <Col md="11"></Col>
                <Col md="1">
                  <FormGroup>
                    <Button
                      className="btn btn-primary"
                      style={{ width: "6rem" }}
                      color="primary"
                      onClick={onCreateNewEmployee}
                    >
                      New
                    </Button>
                  </FormGroup>
                </Col>
              </Row>
            </CardHeader>
            <ReactTable
              data={employees}
              columns={employeesTableColumns({
                onDetailsButtonClick: onViewEmployeeDetails,
                onRemoveButtonClick: onDeleteEmployee,
              })}
            />
          </Card>
        </div>
      </Container>
    </>
  );
};
