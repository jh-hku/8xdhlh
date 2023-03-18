import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { HashRouter, Outlet, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./screen/About";
import Home from "./screen/Home";
import Studio from "./screen/Studio";

import { NavBar } from "./components/NavBar";

import Button from "react-bootstrap/Button";
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

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
      <NavBar className="navbar"/>

      <Outlet />

      <footer class="bg-dark text-center text-white" width="100">
        <br></br>
        <div class="display-flex flex-items-center flex-content-between">
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
