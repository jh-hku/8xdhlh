import React from "react";
import { Accordion } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Stack from "react-bootstrap/Stack";
import Badge from 'react-bootstrap/Badge';

const divStyle = {
  color: "white",
};

class About extends React.Component {
  render() {
    return (
      <Stack className="bg-dark">
        {/* <>
        </>
        <h2>About Page</h2>
        <main>
          <p>This section contains information about...</p>
        </main> */}
        <div style={{ height: 20 }}></div>
        <Card className="col-md-5 mx-auto" style={{ width: "95%" }}>
          <Card.Body className="m-4">
            <Card.Img
              // variant="top"
              src="https://media.licdn.com/dms/image/C4D16AQEuUNMsYGJnEg/profile-displaybackgroundimage-shrink_350_1400/0/1655447075725?e=1683763200&v=beta&t=SZ5H8CgN-GlKlvwZhLYUK9gn-gEY41SNWum051lRd3s"
            />
            <Card.Title className="my-4" style={{ fontSize: 36 }}>
              <h1 class="display-1">JUSTIN HOM</h1>
            </Card.Title>

            <hr className="my-4" />

            <h3 className="my-3">
              <strong>About</strong>
            </h3>
            <p className="my-3">
              An agile final year engineering student seeking an opportunity to
              gear up with experience. Experienced team player and leader, but
              also a self-motivated and adaptable person. Ambitious and
              innovative, with confidence to solve challenging tasks and develop
              new products.
            </p>

            <hr className="my-4" />

            <h3 className="my-3">
              <strong>Working Experience</strong>
            </h3>
            <Card border="dark">
              <Card.Header>
                <div className="d-flex justify-content-between fw-bold">
                  <div class="p-2">Morgan Stanley</div>
                  <div class="p-2">Jun - Aug 2022</div>
                </div>
              </Card.Header>
              <Card.Body>
                <Card.Title>Technology Summer Analyst</Card.Title>
                <Card.Text>
                  <li>
                    Worked under Cyber Data Risk & Resilience (Enterprise
                    Security Platforms)
                  </li>
                  <li>
                    Developed tools and a cloud-based web application to enhance
                    network security in the firm
                  </li>
                  <li>
                    Hands-on experience included development of REST API and
                    MongoDB; and CI/CD, containers, CaC
                  </li>
                  <li>
                    Received insights and practical knowledge on cybersecurity
                    and its implementation through networking sessions
                  </li>
                  <li>
                    Completed several presentations and product demonstrations
                    Member of Interns Social Committee; helped connect
                    technology interns within the batch Got featured on official
                    Instagram in a highlight video as a representative of 2022
                    Asia interns
                  </li>
                </Card.Text>
              </Card.Body>
            </Card>
            <br />

            <hr className="my-4" />

            <h3 className="my-3">
              <strong>Other Experience</strong>
            </h3>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Internal Vice-chairperson (HKU Computer Science Association)</Accordion.Header>
                <Accordion.Body>
                  <li>Restarted and represented the association;</li>
                  <li>In-charge of all internal and external association events PIC of CSA Orientation 2022 and CSA Career Week 2022</li>
                  <li>Designed society products to be sold</li> 
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>

            <hr className="my-4" />

            <h3 className="my-3">
              <strong>Skills</strong>
            </h3>
            <div className="mx-auto" style={{ width: "95%" }}>
              <h5>Web Development</h5>
              <Badge pill bg="info"> Flask </Badge> <Badge pill bg="secondary"> React.js </Badge>
            </div>

            <hr className="my-4" />

            <h3 className="my-3">
              <strong>Interests</strong>
            </h3>
            <div className="mx-auto" style={{ width: "95%" }}>
              <h6>Coding</h6>
              <h6>Composing</h6>
              <h6>Dancing</h6>
              <h6>Designing</h6>
              <h6>Guitar & Piano</h6>
              <h6>Squash</h6>
            </div>
          </Card.Body>
        </Card>
        <br />
      </Stack>
    );
  }
}

export default About;
