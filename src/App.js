import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./components/About";
// import Careers from "./routes/Careers";
import Home from "./components/Home";
import Menu from './Navbar';

function App() {
  return (
    <>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        {/* <Route path="/careers" element={<Careers />} />  */}
      </Routes>
    </>
  );
}
export default App;