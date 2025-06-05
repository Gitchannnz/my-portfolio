import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className={`home-content ${isLoaded ? "loaded" : ""}`}>
      <div className="intro-section">
        <div className="intro-text">
          <span className="greeting">Hello, I'm</span>
          <h1 className="name">Christian Margallo</h1>
          <h2 className="title">Full Stack Developer</h2>
          <p className="description">
            I craft elegant solutions through code, specializing in web and mobile development.
            Passionate about creating seamless user experiences with modern technologies.
          </p>
        </div>

        <div className="cta-buttons">
          <button 
            className="primary-btn"
            onClick={() => navigate("/projects")}
          >
            View My Work →
          </button>
          
          <button 
            className="secondary-btn"
            onClick={() => navigate("/contact")}
          >
            Get in Touch
          </button>
        </div>

        <div className="tech-stack">
          <div className="tech-title">Tech Stack</div>
          <div className="tech-icons">
            <div className="tech-icon" title="Laravel">
              <i className="fab fa-laravel"></i>
              <span>Laravel</span>
            </div>
            <div className="tech-icon" title="PHP">
              <i className="fab fa-php"></i>
              <span>PHP</span>
            </div>
            <div className="tech-icon" title="React">
              <i className="fab fa-react"></i>
              <span>React</span>
            </div>
            <div className="tech-icon" title="React Native">
              <i className="fab fa-react"></i>
              <span>React Native</span>
            </div>
            <div className="tech-icon" title="HTML5">
              <i className="fab fa-html5"></i>
              <span>HTML5</span>
            </div>
            <div className="tech-icon" title="CSS3">
              <i className="fab fa-css3-alt"></i>
              <span>CSS3</span>
            </div>
            <div className="tech-icon" title="MySQL">
              <i className="fas fa-database"></i>
              <span>MySQL</span>
            </div>
            <div className="tech-icon" title="Tailwind">
              <i className="fab fa-css3"></i>
              <span>Tailwind</span>
            </div>
          </div>
        </div>
      </div>

      <div className="cartoon-section">
        <div className="cat">
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
        </div>
        <div className="laptop">
          <div className="laptop-screen">
            <div className="code-line"></div>
            <div className="code-line"></div>
            <div className="code-line"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
