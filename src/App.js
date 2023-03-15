import "./App.css";
import React from "react";
import { HashRouter, Route, Routes, Outlet } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Studio from "./pages/Studio";

import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "./logo.svg";
import { FaFacebookF, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="studio" element={<Studio />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

function Layout() {
  return (
    <div class="bg-dark" style={{ height: "100vh" }}>
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
          <Nav className="me-auto">
            <Nav.Link as={Link} to="">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="about">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="studio">
              Studio
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Outlet />
    
      <footer class="bg-dark text-center text-white" width="100">
        <br></br>
        <div
          class="display-flex flex-items-center flex-content-between"
        >
          <section class="mb-4">
            <Button
              variant="outline-secondary"
              className="rounded-circle"
              // style={buttonStyle}
              href="https://www.facebook.com/longhinhom/"
            >
              <FaFacebookF />
            </Button>
            <Button
              variant="outline-secondary"
              className="rounded-circle"
              href="https://www.instagram.com/8xdhlh/"
            >
              <FaInstagram />
            </Button>
            <Button
              variant="outline-secondary"
              className="rounded-circle"
              href="https://www.linkedin.com/in/justin-hom/"
            >
              <FaLinkedin />
            </Button>
            <Button
              variant="outline-secondary"
              className="rounded-circle"
              href="https://github.com/jh-hku"
            >
              <FaGithub />
            </Button>
          </section>
        </div>

        {/* <div class="text-center p-3">© 2023 Copyright: Studio8</div> */}
      </footer>
    </div>
  );
}
