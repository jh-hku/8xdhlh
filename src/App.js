import "./App.css";
import React from "react";
import { BrowserRouter, HashRouter, Route, Routes, Outlet } from "react-router-dom";
import About from "./components/About";
// import Careers from "./routes/Careers";
import Home from "./components/Home";

import Container from "react-bootstrap/Container";
import { Nav, Navbar, NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "./logo.svg";

export default function App() {
  return (
    <HashRouter> 
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Home />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

function Layout() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            React Bootstrap
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="">Home</Nav.Link>
            <Nav.Link as={Link} to="about">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
       
      <Outlet />
    </>
  );
}
