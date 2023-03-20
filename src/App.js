import React from "react";
import Skills from "./pages/Skills.js";
import Home from "./pages/Home";
import Projects from "./pages/Projects.js";
import Contact from "./pages/Contact.js";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <div>
        <Routes
          style={{
            margin: "100px",
          }}
        >
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
