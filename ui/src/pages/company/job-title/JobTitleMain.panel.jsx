import { Card, CardBody, CardHeader, Container } from "reactstrap";

export const JobTitleMainPanel = () => {
  return (
    <>
      <Container className="mt--6" fluid>
        <Card className="mb-4">
          <CardHeader>
            <h3 className="mb-0">Job Titles</h3>
          </CardHeader>
          <CardBody>Job Titles go here...</CardBody>
        </Card>
      </Container>
    </>
  );
};
