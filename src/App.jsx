import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Routes, Route } from "react-router-dom";
import Header from "./pages/Header/Header_main";
import Home from "./pages/Home/Home_main";
import Aboutme from "./pages/aboutme/Aboutme";
import Skill from "./pages/Skill/Skill_main";
import Projects from "./pages/Projects/Projects_main";
import Contact from "./pages/Contact/Contact_main";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutme" element={<Aboutme />} />
        <Route path="/skills" element={<Skill />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;
