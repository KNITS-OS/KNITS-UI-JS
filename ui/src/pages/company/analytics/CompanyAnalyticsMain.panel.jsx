import { Card, CardBody, CardHeader, Container } from "reactstrap";

export const CompanyAnalyticsMainPanel = () => {
  return (
    <>
      <Container className="mt--6" fluid>
        <Card className="mb-4">
          <CardHeader>
            <h3 className="mb-0">Company Analytics</h3>
          </CardHeader>
          <CardBody>Analytics go here...</CardBody>
        </Card>
      </Container>
    </>
  );
};
