import { Card, CardBody, CardHeader, Container } from "reactstrap";

export const SetupMainPanel = () => {
  return (
    <>
      <Container className="mt--6" fluid>
        <Card className="mb-4">
          <CardHeader>
            <h3 className="mb-0">Setup</h3>
          </CardHeader>
          <CardBody>Setup Steps go here...</CardBody>
        </Card>
      </Container>
    </>
  );
};
