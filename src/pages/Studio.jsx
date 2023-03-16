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
                  img={["https://drive.google.com/uc?id=1g74eAGtLhGA4c8ZwPwYWoQo68joR1qxz", "https://drive.google.com/uc?id=1MnVItPrZtwcdhWSdQmqcuPAqt0RukZHH","https://drive.google.com/uc?id=1EOXX110KKJxPHOF17xt306kOXlTvaIRW"]}
                  title="HKU CSA Society Products"
                  content="Full version of 2023 Newsletter can be found here: https://i.cs.hku.hk/~csa/Newsletter/2023-02.pdf"
                />
                <Post
                  img={["https://drive.google.com/uc?id=19YH-YGT-bp5HU81vOaQj4EEn6J79dpNi", "https://drive.google.com/uc?id=1cgA_6oZvIx9WYoVZf4JsALePlpS6HfNs","https://drive.google.com/uc?id=1nXs8Kc-Zv10u2qm7UxHE6CDd7o_78yx-", "https://drive.google.com/uc?id=1jJqtrHjY3VTGkYl3R9LMk2BB-7RtiIZU"]}
                  title="RC Squash Team"
                  content="Tee Design"
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
