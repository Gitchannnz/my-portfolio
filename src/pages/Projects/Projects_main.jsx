import React, { useState, useEffect } from "react";

const Projects = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const projectsData = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-featured e-commerce platform built with Laravel, Bootstrap 5, and MySQL. Features product management, user authentication, and secure payment processing.",
      tech: ["Laravel", "Bootstrap 5", "MySQL"],
      icon: "fas fa-shopping-cart",
      color: "#8B4513",
      liveLink: "https://e-igpnbsc.free.nf/?i=1",
      sourceLink: null,
    },
    {
      title: "Weather PWA",
      description:
        "A Progressive Web App built with React and Bootstrap 5, integrating OpenWeatherMap API to provide real-time weather forecasts with offline support.",
      tech: ["React", "Bootstrap 5", "PWA", "OpenWeatherMap API"],
      icon: "fas fa-cloud-sun",
      color: "#A0522D",
      liveLink: null,
      sourceLink: null,
    },
    {
      title: "Bakester Website (Co-Author)",
      description:
        "Co-authored the Bakester website using React, Bootstrap 5, and PWA technologies, focusing on frontend development and UI/UX improvements.",
      tech: ["React", "Bootstrap 5", "PWA"],
      icon: "fas fa-bread-slice",
      color: "#D2691E",
      liveLink: null,
      sourceLink: null,
    },
    {
      title: "Dicklum Website (Co-Author)",
      description:
        "Collaborated as co-author on the Dicklum website, built with React, Bootstrap 5, and PWA features, enhancing design and functionality.",
      tech: ["React", "Bootstrap 5", "PWA"],
      icon: "fas fa-globe",
      color: "#CD853F",
      liveLink: null,
      sourceLink: null,
    },
  ];

  // Responsive CSS in <style>
  const keyframes = `
    @keyframes gradientShift {
      0%, 100% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
    }
    @keyframes pulse {
      0%, 100% { box-shadow: 0 0 20px rgba(139, 69, 19, 0.5); }
      50% { box-shadow: 0 0 30px rgba(139, 69, 19, 0.8); }
    }
    @keyframes fadeInUp {
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    @media (max-width: 1024px) {
      .projects-container {
        padding: 2.5rem 4vw !important;
      }
      .projects-title {
        font-size: 2.5rem !important;
      }
    }
    @media (max-width: 800px) {
      .projects-grid {
        grid-template-columns: 1fr !important;
        gap: 1.5rem !important;
      }
    }
    @media (max-width: 600px) {
      .projects-container {
        padding: 1.2rem 2vw !important;
      }
      .projects-title {
        font-size: 1.5rem !important;
      }
      .project-card {
        padding: 1rem !important;
      }
      .project-icon {
        width: 40px !important;
        height: 40px !important;
        font-size: 1.1rem !important;
      }
      .project-card h3 {
        font-size: 1rem !important;
      }
      .project-card p {
        font-size: 0.95rem !important;
      }
      .project-tech span {
        font-size: 0.7rem !important;
        padding: 0.2rem 0.5rem !important;
      }
      .project-actions a,
      .project-actions button {
        font-size: 0.8rem !important;
        padding: 0.6rem 1rem !important;
      }
    }
  `;

  return (
    <>
      <style>{keyframes}</style>
      <div
        className="projects-container"
        style={{
          minHeight: "100vh",
          background: `
            radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, 
              rgba(139, 69, 19, 0.3) 0%, 
              transparent 50%),
            linear-gradient(135deg, 
              #0f0f23 0%, 
              #1a1a2e 25%, 
              #16213e 50%, 
              #0f0f23 75%, 
              #000000 100%)
          `,
          color: "white",
          fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
          padding: "4rem 8%",
          position: "relative",
          overflow: "hidden",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `
              radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(255, 119, 48, 0.2) 0%, transparent 50%),
              radial-gradient(circle at 40% 40%, rgba(139, 69, 19, 0.1) 0%, transparent 50%)
            `,
          }}
        ></div>

        <div
          style={{
            textAlign: "center",
            marginBottom: "4rem",
            transform: isLoaded ? "translateY(0)" : "translateY(-50px)",
            opacity: isLoaded ? 1 : 0,
            transition: "all 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
            position: "relative",
            zIndex: 2,
          }}
        >
          {/* <div
            style={{
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
              animation: "pulse 2s infinite",
            }}
          >
            &lt; PORTFOLIO /&gt;
          </div> */}

          <h1
            className="projects-title"
            style={{
              fontSize: "3.5rem",
              fontWeight: "900",
              lineHeight: "0.9",
              margin: "1rem 0",
              background:
                "linear-gradient(45deg, #ffffff, #8B4513, #D2691E, #ffffff)",
              backgroundSize: "300% 300%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              animation: "gradientShift 3s ease-in-out infinite",
              textShadow: "0 0 50px rgba(139, 69, 19, 0.5)",
            }}
          >
            MY PROJECTS
          </h1>

          <p
            style={{
              fontSize: "1.2rem",
              fontWeight: "300",
              color: "rgba(255, 255, 255, 0.7)",
              marginBottom: "2rem",
              textTransform: "uppercase",
              letterSpacing: "0.2rem",
            }}
          >
            Showcasing my development journey through code
          </p>
        </div>

        <div
          className="projects-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
            gap: "2rem",
            maxWidth: "1200px",
            margin: "0 auto",
            position: "relative",
            zIndex: 2,
          }}
        >
          {projectsData.map((project, index) => (
            <div
              className="project-card"
              key={index}
              style={{
                background:
                  "linear-gradient(135deg, rgba(139, 69, 19, 0.1), rgba(210, 105, 30, 0.05))",
                border: "1px solid rgba(139, 69, 19, 0.3)",
                backdropFilter: "blur(10px)",
                padding: "2rem",
                position: "relative",
                overflow: "hidden",
                cursor: "pointer",
                transition: "all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                transform: "translateY(20px)",
                opacity: 0,
                animation: "fadeInUp 0.8s ease-out forwards",
                animationDelay: `${index * 0.2}s`,
                display: "flex",
                flexDirection: "column",
                minHeight: "340px",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform =
                  "translateY(-10px) scale(1.02)";
                e.currentTarget.style.boxShadow =
                  "0 20px 40px rgba(139, 69, 19, 0.3)";
                e.currentTarget.querySelector(".card-glow").style.opacity =
                  "0.7";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0) scale(1)";
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.querySelector(".card-glow").style.opacity = "0";
              }}
            >
              <div
                className="card-glow"
                style={{
                  position: "absolute",
                  top: "-2px",
                  left: "-2px",
                  right: "-2px",
                  bottom: "-2px",
                  background:
                    "linear-gradient(45deg, #8B4513, #D2691E, #CD853F, #8B4513)",
                  opacity: 0,
                  transition: "opacity 0.3s ease",
                  zIndex: -1,
                  borderRadius: "8px",
                }}
              ></div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "1.5rem",
                  gap: "1rem",
                }}
              >
                <div
                  className="project-icon"
                  style={{
                    width: "60px",
                    height: "60px",
                    background: "linear-gradient(45deg, #8B4513, #D2691E)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.5rem",
                    color: "white",
                    position: "relative",
                    overflow: "hidden",
                    borderRadius: "50%",
                  }}
                >
                  <i className={project.icon}></i>
                </div>
                <h3
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: "700",
                    color: "#D2691E",
                    textTransform: "uppercase",
                    letterSpacing: "0.1rem",
                    margin: 0,
                  }}
                >
                  {project.title}
                </h3>
              </div>

              <p
                style={{
                  fontSize: "1rem",
                  lineHeight: "1.6",
                  color: "rgba(255, 255, 255, 0.8)",
                  marginBottom: "2rem",
                }}
              >
                {project.description}
              </p>

              <div
                className="project-tech"
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "0.5rem",
                  marginBottom: "1.5rem",
                }}
              >
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    style={{
                      padding: "0.3rem 0.8rem",
                      background: "rgba(139, 69, 19, 0.2)",
                      border: "1px solid rgba(139, 69, 19, 0.4)",
                      fontSize: "0.8rem",
                      color: "#CD853F",
                      textTransform: "uppercase",
                      letterSpacing: "0.05rem",
                      fontWeight: "500",
                      borderRadius: "4px",
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div
                className="project-actions"
                style={{
                  display: "flex",
                  gap: "1rem",
                  marginTop: "auto",
                }}
              >
                {project.liveLink ? (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      padding: "0.8rem 1.5rem",
                      background: "linear-gradient(45deg, #8B4513, #D2691E)",
                      border: "1px solid #CD853F",
                      color: "white",
                      fontSize: "0.9rem",
                      fontWeight: "600",
                      textTransform: "uppercase",
                      letterSpacing: "0.1rem",
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                      flex: 1,
                      textAlign: "center",
                      textDecoration: "none",
                      borderRadius: "6px",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.transform = "translateY(-2px)";
                      e.target.style.boxShadow =
                        "0 8px 20px rgba(139, 69, 19, 0.4)";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = "translateY(0)";
                      e.target.style.boxShadow = "none";
                    }}
                  >
                    VIEW LIVE
                  </a>
                ) : (
                  <button
                    style={{
                      padding: "0.8rem 1.5rem",
                      background: "transparent",
                      border: "1px solid #8B4513",
                      color: "#D2691E",
                      fontSize: "0.9rem",
                      fontWeight: "600",
                      textTransform: "uppercase",
                      letterSpacing: "0.1rem",
                      cursor: "not-allowed",
                      opacity: 0.5,
                      flex: 1,
                      borderRadius: "6px",
                    }}
                    disabled
                    title="Live site not available"
                  >
                    VIEW LIVE
                  </button>
                )}

                {project.sourceLink ? (
                  <a
                    href={project.sourceLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      padding: "0.8rem 1.5rem",
                      background: "transparent",
                      border: "1px solid #8B4513",
                      color: "#D2691E",
                      fontSize: "0.9rem",
                      fontWeight: "600",
                      textTransform: "uppercase",
                      letterSpacing: "0.1rem",
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                      flex: 1,
                      textAlign: "center",
                      textDecoration: "none",
                      borderRadius: "6px",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.background = "rgba(139, 69, 19, 0.1)";
                      e.target.style.transform = "translateY(-2px)";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = "transparent";
                      e.target.style.transform = "translateY(0)";
                    }}
                  >
                    SOURCE
                  </a>
                ) : (
                  <button
                    style={{
                      padding: "0.8rem 1.5rem",
                      background: "transparent",
                      border: "1px solid #8B4513",
                      color: "#D2691E",
                      fontSize: "0.9rem",
                      fontWeight: "600",
                      textTransform: "uppercase",
                      letterSpacing: "0.1rem",
                      cursor: "not-allowed",
                      opacity: 0.5,
                      flex: 1,
                      borderRadius: "6px",
                    }}
                    disabled
                    title="Source code not available"
                  >
                    SOURCE
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
