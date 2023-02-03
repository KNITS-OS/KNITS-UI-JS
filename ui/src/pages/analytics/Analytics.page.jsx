import { BoxHeader } from "components/headers";
import { Card, CardBody, CardHeader, Container, Row } from "reactstrap";

export const AnalyticsPage = () => {
  return (
    <>
      <BoxHeader />
      <Container className="mt--6" fluid>
        <Row>
          <div className="col">
            <Card>
              <CardHeader>
                <h3 className="mb-0">Analytics Page</h3>
              </CardHeader>
              <CardBody />
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
};
