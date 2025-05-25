import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; 
import ProfileImage from "../../assets/profile.jpg"; 

const Home = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const navigate = useNavigate(); 

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
  const containerStyle = {
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
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 8%",
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
      radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(255, 119, 48, 0.2) 0%, transparent 50%),
      radial-gradient(circle at 40% 40%, rgba(139, 69, 19, 0.1) 0%, transparent 50%)
    `,
  };

  const contentStyle = {
    flex: 1,
    maxWidth: "600px",
    zIndex: 2,
    position: "relative",
    transform: isLoaded ? "translateX(0)" : "translateX(-100px)",
    opacity: isLoaded ? 1 : 0,
    transition: "all 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
  };

  const glitchText = {
    position: "relative",
    display: "inline-block",
  };

  const tagStyle = {
    display: "inline-block",
    padding: "0.4rem 1rem",
    background: "linear-gradient(45deg, #8B4513, #D2691E)",
    border: "1px solid #CD853F",
    fontSize: "0.8rem",
    fontWeight: "600",
    letterSpacing: "0.2rem",
    textTransform: "uppercase",
    marginBottom: "2rem",
    boxShadow: "0 0 20px rgba(139, 69, 19, 0.5)",
    animation: "pulse 2s infinite",
  };

  const nameStyle = {
    fontSize: "4.5rem",
    fontWeight: "900",
    lineHeight: "0.9",
    margin: "1rem 0",
    background: "linear-gradient(45deg, #ffffff, #8B4513, #D2691E, #ffffff)",
    backgroundSize: "300% 300%",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    animation: "gradientShift 3s ease-in-out infinite",
    textShadow: "0 0 50px rgba(139, 69, 19, 0.5)",
  };

  const roleStyle = {
    fontSize: "2rem",
    fontWeight: "300",
    color: "#D2691E",
    marginBottom: "2rem",
    textTransform: "uppercase",
    letterSpacing: "0.3rem",
    position: "relative",
  };

  const descStyle = {
    fontSize: "1.1rem",
    lineHeight: "1.8",
    color: "rgba(255, 255, 255, 0.8)",
    marginBottom: "3rem",
    maxWidth: "500px",
  };

  const buttonContainerStyle = {
    display: "flex",
    gap: "1.5rem",
    alignItems: "center",
    marginBottom: "3rem",
  };

  const primaryButtonStyle = {
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
  };

  const secondaryButtonStyle = {
    padding: "1rem 2rem",
    background: "transparent",
    border: "2px solid #8B4513",
    color: "#D2691E",
    fontSize: "1rem",
    fontWeight: "600",
    textTransform: "uppercase",
    letterSpacing: "0.1rem",
    cursor: "pointer",
    transition: "all 0.3s ease",
  };

  const socialStyle = {
    display: "flex",
    gap: "1rem",
  };

  const socialIconStyle = {
    width: "50px",
    height: "50px",
    background:
      "linear-gradient(45deg, rgba(139, 69, 19, 0.2), rgba(210, 105, 30, 0.2))",
    border: "1px solid #8B4513",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "1.2rem",
    color: "#D2691E",
    cursor: "pointer",
    transition: "all 0.3s ease",
    backdropFilter: "blur(10px)",
  };

  const imageContainerStyle = {
    position: "relative",
    width: "400px",
    height: "500px",
    transform: isLoaded ? "translateX(0)" : "translateX(100px)",
    opacity: isLoaded ? 1 : 0,
    transition: "all 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.3s",
  };

  const imageWrapperStyle = {
    width: "100%",
    height: "100%",
    position: "relative",
    overflow: "hidden",
    background: "linear-gradient(135deg, #8B4513, #D2691E, #CD853F)",
    border: "3px solid #CD853F",
    boxShadow: "0 0 30px rgba(139, 69, 19, 0.5)",
  };

  const profileImageStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: "center",
    position: "relative",
    zIndex: 2,
  };

  const glowStyle = {
    position: "absolute",
    top: "-50%",
    left: "-50%",
    right: "-50%",
    bottom: "-50%",
    background:
      "linear-gradient(45deg, transparent, rgba(139, 69, 19, 0.3), transparent)",
    animation: "rotate 4s linear infinite",
    zIndex: 1,
  };

  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background:
      "linear-gradient(135deg, rgba(139, 69, 19, 0.1), rgba(210, 105, 30, 0.1))",
    zIndex: 3,
    mixBlendMode: "overlay",
  };

  const keyframes = `
    @keyframes gradientShift {
      0%, 100% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
    }
    @keyframes pulse {
      0%, 100% { box-shadow: 0 0 20px rgba(139, 69, 19, 0.5); }
      50% { box-shadow: 0 0 30px rgba(139, 69, 19, 0.8); }
    }
    @keyframes rotate {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  `;

  return (
    <>
      <style>{keyframes}</style>
      <div style={containerStyle}>
        <div style={backgroundElements}></div>

        <div style={contentStyle}>
          {/* <div style={tagStyle}>&lt; PORTFOLIO /&gt;</div> */}

          <div style={glitchText}>
            <h1 style={nameStyle}>
              CHRISTIAN
              <br />
              MARGALLO
            </h1>
          </div>

          <div style={roleStyle}>FULL STACK DEV</div>

          <p style={descStyle}>
            Crafting digital experiences with precision and innovation. I build
            scalable websites.
          </p>

          <div style={buttonContainerStyle}>
            <button
              style={primaryButtonStyle}
              onClick={() => navigate("/projects")}
              onMouseEnter={(e) => {
                e.target.style.transform = "translateY(-3px)";
                e.target.style.boxShadow = "0 10px 30px rgba(139, 69, 19, 0.4)";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "translateY(0)";
                e.target.style.boxShadow = "none";
              }}
            >
              VIEW PROJECTS
            </button>

            {/* <button
              style={secondaryButtonStyle}
              onMouseEnter={(e) => {
                e.target.style.background = "rgba(139, 69, 19, 0.1)";
                e.target.style.transform = "translateY(-3px)";
              }}
              onMouseLeave={(e) => {
                e.target.style.background = "transparent";
                e.target.style.transform = "translateY(0)";
              }}
            >
              DOWNLOAD CV
            </button> */}
          </div>

          <div style={socialStyle}>
            {[
              { icon: "fab fa-github", url: "https://github.com/Gitchannnz" },
              {
                icon: "fab fa-google",
                url: "mailto:christian.dagasuhan.margallo@gmail.com",
              },
            ].map(
              (
                { icon, url },
                index // destructure icon and url here properly
              ) => (
                <a
                  key={index}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  <div
                    style={socialIconStyle}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background =
                        "linear-gradient(45deg, #8B4513, #D2691E)";
                      e.currentTarget.style.color = "white";
                      e.currentTarget.style.transform =
                        "translateY(-5px) scale(1.1)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background =
                        "linear-gradient(45deg, rgba(139, 69, 19, 0.2), rgba(210, 105, 30, 0.2))";
                      e.currentTarget.style.color = "#D2691E";
                      e.currentTarget.style.transform =
                        "translateY(0) scale(1)";
                    }}
                  >
                    <i className={icon}></i>
                  </div>
                </a>
              )
            )}
          </div>
        </div>

        <div style={imageContainerStyle}>
          <div style={imageWrapperStyle}>
            <div style={glowStyle}></div>
            <img
              src={ProfileImage} // ✅ Correct image usage
              alt="Christian Margallo Profile"
              style={profileImageStyle}
            />
            <div style={overlayStyle}></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
