import { Card, CardBody, CardHeader, Container } from "reactstrap";

export const GroupMainPanel = () => {
  return (
    <>
      <Container className="mt--6" fluid>
        <Card className="mb-4">
          <CardHeader>
            <h3 className="mb-0">Groups</h3>
          </CardHeader>
          <CardBody>Groups go here...</CardBody>
        </Card>
      </Container>
    </>
  );
};
