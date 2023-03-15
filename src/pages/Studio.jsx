import React from "react";
import { Row, Col, Stack, Card } from "react-bootstrap";
import Post from "../components/Post";

class Studio extends React.Component {
  render() {
    return (
      <Stack className="bg-dark">
        <div style={{ height: 20 }}></div>
        <Card className="col-md-5 mx-auto" style={{ width: "95%" }}>
          <Card.Body className="m-4">
            <Row xs={2} md={2} className="g-4">
              <Col>
                <Post
                  img={["https://picsum.photos/id/54/400/300"]}
                  title="Test"
                />
              </Col>
              <Col>
                <Post
                  img={['https://drive.google.com/uc?id=15xCI1YMSPNzUrKB8SAl_fO7wDlRdHhjF', 'https://drive.google.com/uc?id=1flmI_N6w-4uxtzS5MSWr-37AGxcu0RJI', 'https://drive.google.com/uc?id=1L8m1PZ4BCsUuwDtTRSebMuZAp_c7uZ6D', 'https://drive.google.com/uc?id=1nJ41rUvQ6zwEBi67jwI2RKVUavCuoeBp']}
                  title="RCDC Dance Team 2022"
                  content="T-shirt design for team members + Publication material"
                />
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Stack>
    );
  }
}

export default Studio;
