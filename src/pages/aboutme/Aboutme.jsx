import React, { useState, useEffect } from "react";

const AboutMe = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSkill, setActiveSkill] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveSkill((prev) => (prev + 1) % 5);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Responsive CSS in <style>
  const keyframes = `
    @keyframes gradientShift {
      0%, 100% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
    }
    @keyframes float {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-10px); }
    }
    @keyframes pulse {
      0%, 100% { box-shadow: 0 0 20px rgba(139, 69, 19, 0.3); }
      50% { box-shadow: 0 0 40px rgba(139, 69, 19, 0.6); }
    }
    @media (max-width: 1100px) {
      .about-content {
        gap: 2.5rem !important;
      }
      .about-image-container {
        width: 300px !important;
        height: 370px !important;
      }
    }
    @media (max-width: 900px) {
      .about-content {
        flex-direction: column !important;
        align-items: flex-start !important;
        gap: 2.5rem !important;
      }
      .about-image-container {
        width: 320px !important;
        height: 390px !important;
        margin: 0 auto 2rem !important;
      }
      .about-text-container {
        max-width: 100% !important;
        padding-right: 0 !important;
      }
    }
    @media (max-width: 600px) {
      .about-container {
        padding: 2.5rem 3vw 2rem !important;
      }
      .about-heading {
        font-size: 2.1rem !important;
      }
      .about-role {
        font-size: 1.1rem !important;
      }
      .about-image-container {
        width: 200px !important;
        height: 240px !important;
      }
      .about-description {
        font-size: 0.98rem !important;
      }
      .about-stats {
        gap: 1rem !important;
        margin-top: 1.2rem !important;
      }
      .about-stat-number {
        font-size: 1.3rem !important;
      }
      .about-skill-tag {
        font-size: 0.7rem !important;
        padding: 0.3rem 0.7rem !important;
      }
      .about-btn {
        font-size: 0.85rem !important;
        padding: 0.7rem 1.2rem !important;
      }
    }
    @media (max-width: 400px) {
      .about-container {
        padding: 1rem 1vw 1rem !important;
      }
      .about-heading {
        font-size: 1.2rem !important;
      }
      .about-image-container {
        width: 130px !important;
        height: 150px !important;
      }
    }
  `;

  const containerStyle = {
    minHeight: "100vh",
    padding: "8rem 5% 5rem",
    background: `
      linear-gradient(135deg, 
        #0f0f23 0%, 
        #1a1a2e 25%, 
        #16213e 50%, 
        #0f0f23 75%, 
        #000000 100%)
    `,
    color: "white",
    fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
    position: "relative",
    overflow: "hidden",
  };

  const backgroundElements = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `
      radial-gradient(circle at 20% 80%, rgba(139, 69, 19, 0.15) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(210, 105, 30, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 40% 40%, rgba(205, 133, 63, 0.08) 0%, transparent 50%)
    `,
  };

  const contentStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "6rem",
    maxWidth: "1400px",
    margin: "0 auto",
    position: "relative",
    zIndex: 2,
  };

  const textContainerStyle = {
    flex: 1,
    maxWidth: "700px",
    transform: isVisible ? "translateX(0)" : "translateX(-100px)",
    opacity: isVisible ? 1 : 0,
    transition: "all 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
    paddingRight: "1rem",
  };

  const sectionTagStyle = {
    display: "inline-block",
    padding: "0.4rem 1rem",
    background: "linear-gradient(45deg, #8B4513, #D2691E)",
    border: "1px solid #CD853F",
    borderRadius: "0",
    fontSize: "0.8rem",
    fontWeight: "600",
    letterSpacing: "0.2rem",
    textTransform: "uppercase",
    marginBottom: "2rem",
    boxShadow: "0 0 20px rgba(139, 69, 19, 0.5)",
  };

  const headingStyle = {
    fontSize: "4rem",
    fontWeight: "900",
    lineHeight: "1.1",
    marginBottom: "1rem",
    background: "linear-gradient(45deg, #ffffff, #8B4513, #D2691E, #ffffff)",
    backgroundSize: "300% 300%",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    animation: "gradientShift 3s ease-in-out infinite",
  };

  const roleStyle = {
    fontSize: "1.8rem",
    fontWeight: "300",
    color: "#D2691E",
    marginBottom: "2rem",
    textTransform: "uppercase",
    letterSpacing: "0.3rem",
  };

  const descriptionStyle = {
    fontSize: "1.1rem",
    lineHeight: "1.8",
    color: "rgba(255, 255, 255, 0.85)",
    marginBottom: "3rem",
    maxWidth: "600px",
  };

  const skillsContainerStyle = {
    display: "flex",
    gap: "1rem",
    marginBottom: "3rem",
    flexWrap: "wrap",
  };

  const skillTagStyle = (index) => ({
    padding: "0.5rem 1rem",
    background:
      activeSkill === index
        ? "linear-gradient(45deg, #8B4513, #D2691E)"
        : "rgba(139, 69, 19, 0.2)",
    border: "1px solid #8B4513",
    color: activeSkill === index ? "white" : "#D2691E",
    fontSize: "0.9rem",
    fontWeight: "600",
    textTransform: "uppercase",
    letterSpacing: "0.1rem",
    transition: "all 0.3s ease",
    cursor: "pointer",
    borderRadius: "6px",
  });

  const buttonStyle = {
    display: "inline-flex",
    alignItems: "center",
    gap: "0.5rem",
    padding: "1rem 2.5rem",
    background: "linear-gradient(45deg, #8B4513, #D2691E)",
    border: "2px solid #CD853F",
    color: "white",
    fontSize: "1rem",
    fontWeight: "600",
    textTransform: "uppercase",
    letterSpacing: "0.1rem",
    cursor: "pointer",
    transition: "all 0.3s ease",
    position: "relative",
    overflow: "hidden",
    borderRadius: "6px",
  };

  const imageContainerStyle = {
    position: "relative",
    width: "400px",
    height: "500px",
    transform: isVisible ? "translateX(0)" : "translateX(100px)",
    opacity: isVisible ? 1 : 0,
    transition: "all 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.3s",
    flexShrink: 0,
    marginLeft: "0",
  };

  const imageStyle = {
    width: "100%",
    height: "100%",
    background: "linear-gradient(135deg, #8B4513, #D2691E, #CD853F)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "8rem",
    color: "rgba(255, 255, 255, 0.9)",
    position: "relative",
    overflow: "hidden",
    clipPath: "polygon(0 0, 85% 0, 100% 15%, 100% 100%, 15% 100%, 0 85%)",
  };

  const dataVisualizationStyle = {
    position: "absolute",
    top: "10%",
    right: "10%",
    width: "80px",
    height: "80px",
    border: "2px solid rgba(139, 69, 19, 0.3)",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "rgba(0, 0, 0, 0.3)",
    backdropFilter: "blur(10px)",
  };

  const statsStyle = {
    display: "flex",
    gap: "2rem",
    marginTop: "2rem",
    flexWrap: "wrap",
  };

  const statItemStyle = {
    textAlign: "center",
    minWidth: "90px",
  };

  const statNumberStyle = {
    fontSize: "2rem",
    fontWeight: "900",
    color: "#D2691E",
    display: "block",
  };

  const statLabelStyle = {
    fontSize: "0.9rem",
    color: "rgba(255, 255, 255, 0.7)",
    textTransform: "uppercase",
    letterSpacing: "0.1rem",
  };

  // Updated skills
  const skills = ["React", "Laravel", "PHP", "HTML", "CSS"];

  return (
    <>
      <style>{keyframes}</style>
      <div style={containerStyle} className="about-container">
        <div style={backgroundElements}></div>
        <div style={contentStyle} className="about-content">
          <div style={textContainerStyle} className="about-text-container">
            {/* <div style={sectionTagStyle}>&lt; ABOUT_ME /&gt;</div> */}
            <h2 style={headingStyle} className="about-heading">
              CHRISTIAN MARGALLO
            </h2>
            <div style={roleStyle} className="about-role">
              Web Developer
            </div>
            <p style={descriptionStyle} className="about-description">
              I am a dedicated web developer skilled in React, Laravel, PHP,
              HTML, and CSS. Over the past 6 months, I completed a challenging
              capstone project and gained hands-on experience as an intern,
              building real-world applications and collaborating with
              cross-functional teams. I am passionate about creating efficient,
              user-friendly solutions and continuously expanding my technical
              expertise.
            </p>
            <div style={skillsContainerStyle}>
              {skills.map((skill, index) => (
                <div
                  key={index}
                  style={skillTagStyle(index)}
                  className="about-skill-tag"
                  onMouseEnter={() => setActiveSkill(index)}
                >
                  {skill}
                </div>
              ))}
            </div>
            <div style={statsStyle} className="about-stats">
              <div style={statItemStyle}>
                <span style={statNumberStyle} className="about-stat-number">
                  3
                </span>
                <span style={statLabelStyle}>Months Capstone</span>
              </div>
              <div style={statItemStyle}>
                <span style={statNumberStyle} className="about-stat-number">
                  3
                </span>
                <span style={statLabelStyle}>Months Internship</span>
              </div>
              <div style={statItemStyle}>
                <span style={statNumberStyle} className="about-stat-number">
                  5
                </span>
                <span style={statLabelStyle}>Core Skills</span>
              </div>
            </div>
            <button
              style={buttonStyle}
              className="about-btn"
              onClick={() =>
                window.open("https://e-igpnbsc.free.nf/?i=1", "_blank")
              }
              onMouseEnter={(e) => {
                e.target.style.transform = "translateY(-3px)";
                e.target.style.boxShadow = "0 10px 30px rgba(139, 69, 19, 0.4)";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "translateY(0)";
                e.target.style.boxShadow = "none";
              }}
            >
              <i className="fas fa-rocket"></i>
              EXPLORE PROJECTS
            </button>
          </div>
          <div style={imageContainerStyle} className="about-image-container">
            <div style={imageStyle}>
              <i
                className="fas fa-laptop-code"
                style={{ zIndex: 2, position: "relative" }}
              ></i>
              {/* Floating data elements */}
              <div
                style={{
                  ...dataVisualizationStyle,
                  top: "15%",
                  right: "15%",
                  animation: "float 3s ease-in-out infinite",
                }}
              >
                <i
                  className="fas fa-database"
                  style={{ fontSize: "1.2rem", color: "#D2691E" }}
                ></i>
              </div>
              <div
                style={{
                  ...dataVisualizationStyle,
                  bottom: "20%",
                  left: "20%",
                  animation: "float 3s ease-in-out infinite 1s",
                }}
              >
                <i
                  className="fas fa-cloud"
                  style={{ fontSize: "1.2rem", color: "#8B4513" }}
                ></i>
              </div>
              <div
                style={{
                  ...dataVisualizationStyle,
                  top: "50%",
                  right: "5%",
                  animation: "float 3s ease-in-out infinite 0.5s",
                }}
              >
                <i
                  className="fas fa-cogs"
                  style={{ fontSize: "1.2rem", color: "#CD853F" }}
                ></i>
              </div>
              {/* Animated background grid */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: `
                    linear-gradient(90deg, rgba(139, 69, 19, 0.1) 1px, transparent 1px),
                    linear-gradient(rgba(139, 69, 19, 0.1) 1px, transparent 1px)
                  `,
                  backgroundSize: "20px 20px",
                  opacity: 0.3,
                  animation: "pulse 4s ease-in-out infinite",
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
