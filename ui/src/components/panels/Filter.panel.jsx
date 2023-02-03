import { Button, Card, CardBody, CardHeader, Col, FormGroup, Row } from "reactstrap";

export const FilterPanel = ({ title, children, onSearch, resetFilters }) => {
  return (
    <Card>
      <CardHeader>
        <h3 className="mb-0">{title}</h3>
        <p className="text-sm mb-0">Filters</p>
      </CardHeader>
      <CardBody className="pl-6 pr-6">
        <Row>
          <Col>
            {children}
          </Col>
          <Col md="1.1" className="d-flex flex-column justify-content-end">
            <FormGroup>
              <Button className="btn btn-secondary" color="secondary" onClick={resetFilters}>
                Reset
              </Button>
            </FormGroup>
            <FormGroup>
              <Button className="btn btn-primary" color="primary" onClick={onSearch}>
                Search
              </Button>
            </FormGroup>
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
};
