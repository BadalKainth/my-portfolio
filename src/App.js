import React from "react";
import Skills from "./Skills.js";
import Home from "./Home";
import Projects from "./Projects.js";
import Contact from "./Contact.js";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
