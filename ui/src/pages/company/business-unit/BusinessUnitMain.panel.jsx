import { Card, CardBody, CardHeader, Container } from "reactstrap";

export const BusinessUnitMainPanel = () => {
  return (
    <>
      <Container className="mt--6" fluid>
        <Card className="mb-4">
          <CardHeader>
            <h3 className="mb-0">Business Units</h3>
          </CardHeader>
          <CardBody>Business Units go here...</CardBody>
        </Card>
      </Container>
    </>
  );
};
