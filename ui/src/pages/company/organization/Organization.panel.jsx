import { Card, CardBody, CardHeader, Container } from "reactstrap";

export const OrganizationMainPanel = () => {
  return (
    <>
      <Container className="mt--6" fluid>
        <Card className="mb-4">
          <CardHeader>
            <h3 className="mb-0">Organizations</h3>
          </CardHeader>
          <CardBody>Organizations go here...</CardBody>
        </Card>
      </Container>
    </>
  );
};
