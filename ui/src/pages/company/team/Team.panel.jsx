import { Card, CardBody, CardHeader, Container } from "reactstrap";

export const TeamMainPanel = () => {
  return (
    <>
      <Container className="mt--6" fluid>
        <Card className="mb-4">
          <CardHeader>
            <h3 className="mb-0">Teams</h3>
          </CardHeader>
          <CardBody>Teams go here...</CardBody>
        </Card>
      </Container>
    </>
  );
};
