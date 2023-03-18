import { useState } from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../logo.svg";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");

  return (
    <Navbar bg="dark" variant="dark" width="100%">
      <Container>
        <Navbar.Brand href="/">
          <img
            alt=""
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          {/* React Bootstrap */}
          Justin Hom
        </Navbar.Brand>
        <Nav
          className="me-auto"
          activeKey={activeLink}
          onSelect={(selectedKey) => setActiveLink(selectedKey)}
        >
          <Nav.Link as={Link} to="" eventKey="home">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="about" eventKey="about">
            About
          </Nav.Link>
          <Nav.Link as={Link} to="studio" eventKey="studio">
            Studio
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};
