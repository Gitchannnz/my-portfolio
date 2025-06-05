import React, { useState, useEffect } from "react";
import "./Skill.css";

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const skills = [
    {
      category: "Frontend Development",
      technologies: [
        {
          name: "React",
          icon: "fab fa-react",
          description: "Building responsive SPAs and PWAs"
        },
        {
          name: "HTML5",
          icon: "fab fa-html5",
          description: "Semantic markup and modern web standards"
        },
        {
          name: "CSS3",
          icon: "fab fa-css3-alt",
          description: "Responsive design and animations"
        },
        {
          name: "Tailwind",
          icon: "fab fa-css3",
          description: "Utility-first CSS framework"
        },
        {
          name: "React Native",
          icon: "fab fa-react",
          description: "Cross-platform mobile development"
        }
      ]
    },
    {
      category: "Backend Development",
      technologies: [
        {
          name: "Laravel",
          icon: "fab fa-laravel",
          description: "PHP framework for web artisans"
        },
        {
          name: "PHP",
          icon: "fab fa-php",
          description: "Server-side scripting language"
        },
        {
          name: "MySQL",
          icon: "fas fa-database",
          description: "Relational database management"
        }
      ]
    },
    {
      category: "Additional Skills",
      technologies: [
        {
          name: "PWA",
          icon: "fas fa-mobile-alt",
          description: "Progressive Web Applications"
        },
        {
          name: "Git",
          icon: "fab fa-git-alt",
          description: "Version control and collaboration"
        }
      ]
    }
  ];

  return (
    <div className="skills-container">
      <div className={`section-title ${isVisible ? "visible" : ""}`}>
        <span className="subtitle">What I Know</span>
        <h2>My Skills</h2>
      </div>

      <div className={`skills-grid ${isVisible ? "visible" : ""}`}>
        {skills.map((skillCategory, index) => (
          <div key={index} className="skill-category">
            <h3>{skillCategory.category}</h3>
            <div className="skills-list">
              {skillCategory.technologies.map((tech, techIndex) => (
                <div key={techIndex} className="skill-card">
                  <div className="skill-icon">
                    <i className={tech.icon}></i>
                  </div>
                  <div className="skill-info">
                    <h4>{tech.name}</h4>
                    <p className="skill-description">{tech.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
