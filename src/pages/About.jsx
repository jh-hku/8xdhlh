import React from "react";
import { Accordion } from "react-bootstrap";
import { Badge, Card, Col, ListGroup, Row, Stack } from "react-bootstrap";

const Section = (props) => {
  return (
    <div className="my-4">
      <h3 className="my-3">
        <strong>{props.title}</strong>
      </h3>

      <div>{props.children}</div>

      <hr className="my-4" />
    </div>
  );
};

const Skill = (props) => {
  const level = ["primary", "info", "secondary"];
  const badge = (index, skill) => {
    return (
      <>
        <Badge pill bg={index}>
          {skill}
        </Badge>{" "}
      </>
    );
  };
  return (
    <div className="my-3">
      <h5>{props.title}</h5>
      {props.skill.map((set, index) => {
        return set.map((skill) => badge(level[index], skill));
      })}
    </div>
  );
};

class About extends React.Component {
  render() {
    return (
      <Stack className="bg-dark">
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

            <Row>
              <Col lg="8">
                <Section
                  title="About"
                  children={
                    <p align="justify" className="my-3">
                      An agile final year engineering student seeking an
                      opportunity to gear up with experience. Experienced team
                      player and leader, but also a self-motivated and adaptable
                      person. Ambitious and innovative, with confidence to solve
                      challenging tasks and develop new products.
                    </p>
                  }
                />

                <Section
                  title="Working Experience"
                  children={
                    <>
                      <Card border="dark" className="my-3">
                        <Card.Header>
                          <div className="d-flex justify-content-between fw-bold">
                            <div class="p-2">Morgan Stanley</div>
                            <div class="p-2">Jun - Aug 2022</div>
                          </div>
                        </Card.Header>
                        <Card.Body>
                          <Card.Title>Technology Summer Analyst</Card.Title>
                          <Card.Text>
                            Worked under Cyber Data Risk & Resilience
                            (Enterprise Security Platforms)
                          </Card.Text>
                          <ListGroup className="list-group-flush">
                            <ListGroup.Item>
                              Developed tools and a cloud-based web application
                              to enhance network security in the firm
                            </ListGroup.Item>
                            <ListGroup.Item>
                              Hands-on experience included development of REST
                              API and MongoDB; CI/CD, containers, CaC
                            </ListGroup.Item>
                            <ListGroup.Item>
                              Received insights and practical knowledge on
                              cybersecurity and its implementation through
                              networking sessions
                            </ListGroup.Item>
                            <ListGroup.Item>
                              Completed several presentations and product
                              demonstrations Member of Interns Social Committee;
                              helped connect technology interns within the batch
                            </ListGroup.Item>
                            <ListGroup.Item>
                              Got featured on official Instagram in a highlight
                              video as a representative of 2022 Asia interns
                            </ListGroup.Item>
                          </ListGroup>
                        </Card.Body>
                      </Card>
                      <Card border="dark" className="my-3">
                        <Card.Header>
                          <div className="d-flex justify-content-between fw-bold">
                            <div class="p-2">Siemens</div>
                            <div class="p-2">Jun - Aug 2021</div>
                          </div>
                        </Card.Header>
                        <Card.Body>
                          <Card.Title>Summer Intern</Card.Title>
                          <Card.Text></Card.Text>
                          <ListGroup className="list-group-flush">
                            <ListGroup.Item>
                              Conducted research on IoT technologies and LoRa
                              development; Assisted in IoT projects with EMSD
                            </ListGroup.Item>
                            <ListGroup.Item>
                              Designed a mobile application prototype according
                              to client requirements
                            </ListGroup.Item>
                            <ListGroup.Item>
                              {" "}
                              Edited schematic drawings using AutoCAD
                            </ListGroup.Item>
                          </ListGroup>
                        </Card.Body>
                      </Card>
                    </>
                  }
                />

                <Section
                  title="Other Experience"
                  children={
                    <>
                      <Accordion className="my-2">
                        <Accordion.Item eventKey="0">
                          <Accordion.Header>
                            Internal Vice-chairperson, HKU Computer Science
                            Association
                          </Accordion.Header>
                          <Accordion.Body>
                            <li>Restarted and represented the association;</li>
                            <li>
                              In-charge of all internal and external association
                              events PIC of CSA Orientation 2022 and CSA Career
                              Week 2022
                            </li>
                            <li>Designed society products to be sold</li>
                          </Accordion.Body>
                        </Accordion.Item>
                      </Accordion>
                      <Accordion className="my-2">
                        <Accordion.Item eventKey="1">
                          <Accordion.Header>
                            Committee Member, HKIESC-HKU
                          </Accordion.Header>
                          <Accordion.Body>
                            <li>
                              Event planning, management and host of internal
                              and external events; Meet regularly with President
                              of HKIE
                            </li>
                            <li>
                              Organized HKIE Join Student Chapters Case
                              Competition 2022
                            </li>
                            <li>
                              Managed homepages and communications on social
                              media platforms
                            </li>
                          </Accordion.Body>
                        </Accordion.Item>
                      </Accordion>
                      <Accordion className="my-2">
                        <Accordion.Item eventKey="2">
                          <Accordion.Header>Miscellaneous</Accordion.Header>
                          <Accordion.Body>
                            <li>
                              Volunteered as Peer Mentor for academic year
                              2021-2022
                            </li>
                            <li>
                              Organizing Committee of 2019 Engineering Society
                              Welfare Week
                            </li>
                            <li>
                              Team captain of Hall Squash Team and Dance Club;
                              Won Champion in Inter-hall squash competitions;
                              Member of Inter-hall Mass Dance Team
                            </li>
                            <li>
                              Chief Group Leader of Hall Orientation; PIC of
                              Publications and Hall Decorations Sub-committee
                            </li>
                          </Accordion.Body>
                        </Accordion.Item>
                      </Accordion>
                    </>
                  }
                />
              </Col>

              <Col>
                <Section
                  title="Contact"
                  children={
                    <>
                      <h4>Email</h4>
                      <p>justbomber109@gmail.com</p>
                    </>
                  }
                />

                <Section
                  title="Education"
                  children={
                    <Card>
                      <Card.Body>
                        <Card.Title>University of Hong Kong</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">
                          2019-2023
                        </Card.Subtitle>
                        <Card.Text>
                          Bachelor of Engineering in Computer Science
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  }
                />

                <Section
                  title="Skills"
                  children={
                    <div className="mx-2">
                      <Skill
                        title="Language"
                        skill={[["Python"], [""], ["C++", "Java"]]}
                      />

                      <Skill
                        title="Web Development"
                        skill={[
                          ["Flask"],
                          ["REST", "JSON", "SwaggerUI"],
                          ["React.js", "Bootstrap", "Django"],
                        ]}
                      />

                      <Skill
                        title="Database Management"
                        skill={[[], ["MongoDB", "Firebase", "SQL"], []]}
                      />

                      <Skill
                        title="Mobile Development"
                        skill={[[], ["React Native"], ["Kotlin"]]}
                      />

                      <Skill title="SDLC" skill={[[], ["Git"], ["JIRA"]]} />
                    </div>
                  }
                />

                <Section
                  title="Languages"
                  children={
                    <ListGroup>
                      <ListGroup.Item className="d-flex justify-content-between align-items-start">
                        Cantonese <Badge pill>Native</Badge>
                      </ListGroup.Item>
                      <ListGroup.Item className="d-flex justify-content-between align-items-start">
                        Mandarin <Badge pill>Native</Badge>
                      </ListGroup.Item>
                      <ListGroup.Item className="d-flex justify-content-between align-items-start">
                        English <Badge pill>Fluent</Badge>
                      </ListGroup.Item>
                      <ListGroup.Item className="d-flex justify-content-between align-items-start">
                        Japanese <Badge pill>Intermediary</Badge>
                      </ListGroup.Item>
                      <ListGroup.Item className="d-flex justify-content-between align-items-start">
                        Korean <Badge pill>Beginner</Badge>
                      </ListGroup.Item>
                    </ListGroup>
                  }
                />

                <Section
                  title="Interests"
                  children={
                    <>
                      <h6>Coding</h6>
                      <h6>Composing</h6>
                      <h6>Dancing</h6>
                      <h6>Designing</h6>
                      <h6>Guitar & Piano</h6>
                      <h6>Squash</h6>
                    </>
                  }
                />
              </Col>
            </Row>
          </Card.Body>
        </Card>
        <br />
      </Stack>
    );
  }
}

export default About;
