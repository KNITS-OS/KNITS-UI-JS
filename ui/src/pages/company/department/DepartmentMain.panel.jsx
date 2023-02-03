import { Card, CardBody, CardHeader, Container } from "reactstrap";

export const DepartmentMainPanel = () => {
  return (
    <>
      <Container className="mt--6" fluid>
        <Card className="mb-4">
          <CardHeader>
            <h3 className="mb-0">Departments</h3>
          </CardHeader>
          <CardBody>Departments go here...</CardBody>
        </Card>
      </Container>
    </>
  );
};
