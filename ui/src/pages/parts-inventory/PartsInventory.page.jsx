import { Card, CardBody, Container, Row, CardHeader } from "reactstrap";

import { BoxHeader } from "components/headers";

export const PartsInventoryPage = () => {
  return (
    <>
      <BoxHeader />
      <Container className="mt--6" fluid>
        <Row>
          <div className="col">
            <Card>
              <CardHeader>
                <h3 className="mb-0">Part Inventory Page</h3>
              </CardHeader>
              <CardBody />
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
};
