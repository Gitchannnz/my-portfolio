import React, { useState, useEffect } from "react";
import "./Aboutme.css";

const Aboutme = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="about-container">
      <div className="about-content">
        <div className={`section-title ${isVisible ? "visible" : ""}`}>
          <span className="subtitle">Get To Know</span>
          <h2>About Me</h2>
        </div>

        <div className={`about-grid ${isVisible ? "visible" : ""}`}>
          <div className="about-card experience">
            <div className="card-content">
              <i className="fas fa-laptop-code"></i>
              <h3>Experience</h3>
              <p>1 Year</p>
              <span>Full Stack Development</span>
            </div>
          </div>

          <div className="about-card education">
            <div className="card-content">
              <i className="fas fa-graduation-cap"></i>
              <h3>Education</h3>
              <p>BSIT Degree</p>
              <span>Information Technology</span>
            </div>
          </div>

          <div className="about-card projects">
            <div className="card-content">
              <i className="fas fa-code-branch"></i>
              <h3>Projects</h3>
              <p>5 Completed</p>
              <span>Web Applications</span>
            </div>
          </div>
        </div>

        <div className={`about-description ${isVisible ? "visible" : ""}`}>
          <p>
            I am a passionate Full Stack Developer with a year of hands-on experience in web development. 
            My journey in software development began during my BSIT studies, where I discovered my love 
            for creating innovative web solutions, particularly Progressive Web Apps (PWAs).
          </p>
          <p>
            I specialize in building responsive and user-friendly Progressive Web Applications using modern technologies 
            like Laravel, React, and Tailwind CSS. My expertise includes implementing offline functionality, push notifications, 
            and app-like experiences that work seamlessly across all devices. My approach to development focuses on creating clean, 
            efficient, and maintainable code while ensuring exceptional user experience.
          </p>
          <p>
            When I'm not coding, I enjoy staying up-to-date with the latest PWA and web technology trends, 
            learning new development tools, and exploring ways to improve my craft.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
