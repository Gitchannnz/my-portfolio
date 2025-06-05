import React, { useState, useEffect } from "react";
import "./Projects.css";

const ProjectCat = ({ type }) => {
  const [isWaving, setIsWaving] = useState(false);
  const [isJumping, setIsJumping] = useState(false);
  const [isSpinning, setIsSpinning] = useState(false);

  const handleCatClick = () => {
    setIsWaving(true);
    setTimeout(() => setIsWaving(false), 1000);
  };

  const handlePawClick = (e) => {
    e.stopPropagation();
    setIsJumping(true);
    setTimeout(() => setIsJumping(false), 500);
  };

  const handleElementClick = (e) => {
    e.stopPropagation();
    setIsSpinning(true);
    setTimeout(() => setIsSpinning(false), 1000);
  };

  return (
    <div 
      className={`cat-container ${isJumping ? 'jumping' : ''}`}
      onClick={handleCatClick}
    >
      <div className={`cat ${isWaving ? 'waving' : ''}`}>
        <div className="cat-head"></div>
        <div className="cat-ears">
          <div className="cat-ear left"></div>
          <div className="cat-ear right"></div>
        </div>
        <div className="cat-face">
          <div className="cat-eyes">
            <div className="cat-eye left"></div>
            <div className="cat-eye right"></div>
          </div>
          <div className="cat-nose"></div>
          <div className="cat-mouth"></div>
          <div className="cat-whiskers">
            <div className="whisker-set left">
              <div className="whisker"></div>
              <div className="whisker"></div>
              <div className="whisker"></div>
            </div>
            <div className="whisker-set right">
              <div className="whisker"></div>
              <div className="whisker"></div>
              <div className="whisker"></div>
            </div>
          </div>
        </div>
        <div 
          className="cat-paw"
          onClick={handlePawClick}
        >
          <div className="paw-pad"></div>
          <div className="paw-fingers">
            <div className="paw-finger"></div>
            <div className="paw-finger"></div>
            <div className="paw-finger"></div>
          </div>
        </div>
      </div>

      {type === 'coding' && (
        <div className={`laptop ${isSpinning ? 'spin' : ''}`} onClick={handleElementClick}>
          <div className="laptop-screen">
            <div className="code-line"></div>
            <div className="code-line"></div>
            <div className="code-line"></div>
          </div>
          <div className="keyboard">
            <div className="key"></div>
            <div className="key"></div>
            <div className="key"></div>
          </div>
        </div>
      )}

      {type === 'weather' && (
        <div className="weather-elements">
          <div 
            className={`cloud ${isSpinning ? 'spin' : ''}`}
            onClick={handleElementClick}
          >
            <div className="rain-drop"></div>
            <div className="rain-drop"></div>
            <div className="rain-drop"></div>
          </div>
          <div 
            className={`sun ${isSpinning ? 'pulse' : ''}`}
            onClick={handleElementClick}
          ></div>
          <div className="lightning"></div>
        </div>
      )}

      {type === 'baking' && (
        <div className="baking-elements">
          <div 
            className={`chef-hat ${isSpinning ? 'bounce' : ''}`}
            onClick={handleElementClick}
          ></div>
          <div 
            className={`rolling-pin ${isSpinning ? 'roll' : ''}`}
            onClick={handleElementClick}
          ></div>
          <div className="cookie"></div>
          <div className="steam"></div>
        </div>
      )}

      {type === 'planting' && (
        <div className="planting-elements">
          <div 
            className={`plant ${isSpinning ? 'grow-fast' : ''}`}
            onClick={handleElementClick}
          >
            <div className="leaf left"></div>
            <div className="leaf right"></div>
            <div className="flower"></div>
          </div>
          <div 
            className={`watering-can ${isSpinning ? 'water-pour' : ''}`}
            onClick={handleElementClick}
          >
            <div className="water-stream"></div>
            <div className="water-drops"></div>
          </div>
        </div>
      )}
    </div>
  );
};

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeProject, setActiveProject] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const projects = [
    {
      title: "E-IGP",
      description: "A comprehensive web application developed as a capstone project. E-IGP is built with modern web technologies to provide an efficient and user-friendly experience.",
      catType: "coding",
      technologies: ["Laravel", "Bootstrap 5", "MySQL"],
      liveLink: "https://e-igpnbsc.free.nf/?i=1",
      type: "Web Application",
      role: "Lead Developer",
      status: "Completed",
      features: ["User Authentication", "Database Management", "Responsive Design"]
    },
    {
      title: "Dicklum Website",
      description: "A modern barangay website featuring weather information integration. Built as a Progressive Web App for better accessibility and user experience.",
      catType: "weather",
      technologies: ["React", "PWA", "Bootstrap 5", "Weather API"],
      liveLink: "https://barangaydicklum.web.app/home",
      type: "Progressive Web App",
      role: "Co-Author",
      status: "Completed",
      features: ["Real-time Weather", "Offline Support", "Push Notifications"]
    },
    {
      title: "Typhoon Tracker",
      description: "A real-time typhoon tracking application that provides weather updates and storm information using weather API integration.",
      catType: "weather",
      technologies: ["React", "PWA", "Bootstrap 5", "Weather API"],
      type: "Progressive Web App",
      role: "Developer",
      status: "Completed",
      features: ["Storm Tracking", "Weather Alerts", "Interactive Maps"]
    },
    {
      title: "Bakester Mumshie",
      description: "An online platform for a bakery business, featuring product showcases and order management.",
      catType: "baking",
      technologies: ["React", "Bootstrap 5"],
      liveLink: "https://bakestermumshie.web.app/home",
      type: "Web Application",
      role: "Co-Author",
      status: "Completed",
      features: ["Product Catalog", "Order System", "Gallery"]
    },
    {
      title: "Agribiton Project",
      description: "A mobile application for agriculture management and monitoring, currently under development.",
      catType: "planting",
      technologies: ["React Native", "Bootstrap 5"],
      type: "Mobile Application",
      role: "Developer",
      status: "In Progress",
      features: ["Crop Management", "Weather Integration", "Growth Tracking"]
    }
  ];

  const handleProjectClick = (index) => {
    setActiveProject(activeProject === index ? null : index);
  };

  return (
    <div className="projects-container">
      <div className={`section-title ${isVisible ? "visible" : ""}`}>
        <span className="subtitle">My Work</span>
        <h2>Featured Projects</h2>
      </div>

      <div className={`projects-grid ${isVisible ? "visible" : ""}`}>
        {projects.map((project, index) => (
          <div 
            key={index} 
            className={`project-card ${project.status.toLowerCase().replace(" ", "-")} ${activeProject === index ? 'active' : ''}`}
            onClick={() => handleProjectClick(index)}
          >
            <div className="project-image">
              <ProjectCat type={project.catType} />
              <div className="project-overlay">
                {project.liveLink && (
                  <a 
                    href={project.liveLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <i className="fas fa-external-link-alt"></i>
                    Visit Site
                  </a>
                )}
              </div>
            </div>

            <div className="project-content">
              <div className="project-header">
                <h3>{project.title}</h3>
                <span className="project-type">{project.type}</span>
              </div>

              <p className="project-description">{project.description}</p>

              <div className="project-meta">
                <span className="project-role">
                  <i className="fas fa-user"></i>
                  {project.role}
                </span>
                <span className={`project-status ${project.status.toLowerCase().replace(" ", "-")}`}>
                  {project.status}
                </span>
              </div>

              <div className="project-features">
                {project.features.map((feature, featureIndex) => (
                  <span key={featureIndex} className="feature-tag">
                    <i className="fas fa-check"></i>
                    {feature}
                  </span>
                ))}
              </div>

              <div className="project-tech">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects; 