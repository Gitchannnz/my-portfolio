import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Routes, Route } from "react-router-dom";
import Header from "./pages/Header/Header_main";
import Home from "./pages/Home/Home_main";
import Aboutme from "./pages/aboutme/Aboutme";
import Skill from "./pages/Skill/Skill_main";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contact/Contact";
import "./App.css";

const App = () => {
  return (
    <div className="app-container">
      <div className="background-effects">
        <div className="gradient-sphere"></div>
        <div className="floating-particles"></div>
      </div>
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutme" element={<Aboutme />} />
          <Route path="/skills" element={<Skill />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
