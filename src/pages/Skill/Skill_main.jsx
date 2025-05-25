import React, { useState, useEffect } from "react";

const Skill = () => {
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

  const handleGoBack = () => {
    console.log("Navigate to /academic");
  };

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
    justifyContent: "center",
    flexDirection: "column",
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

  const titleStyle = {
    fontSize: "4rem",
    fontWeight: "900",
    background: "linear-gradient(45deg, #ffffff, #8B4513, #D2691E, #ffffff)",
    backgroundSize: "300% 300%",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    animation: "gradientShift 3s ease-in-out infinite",
    textShadow: "0 0 50px rgba(139, 69, 19, 0.5)",
    marginBottom: "3rem",
    textAlign: "center",
    textTransform: "uppercase",
    letterSpacing: "0.2rem",
    transform: isLoaded ? "translateY(0)" : "translateY(-50px)",
    opacity: isLoaded ? 1 : 0,
    transition: "all 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
  };

  const cardStyle = {
    maxWidth: "800px",
    width: "100%",
    background:
      "linear-gradient(135deg, rgba(139, 69, 19, 0.1), rgba(210, 105, 30, 0.1))",
    backdropFilter: "blur(20px)",
    border: "1px solid rgba(139, 69, 19, 0.3)",
    borderRadius: "20px",
    padding: "3rem",
    boxShadow: "0 20px 60px rgba(139, 69, 19, 0.2)",
    position: "relative",
    overflow: "hidden",
    transform: isLoaded ? "translateY(0)" : "translateY(50px)",
    opacity: isLoaded ? 1 : 0,
    transition: "all 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.3s",
  };

  const cardGlowStyle = {
    position: "absolute",
    top: "-2px",
    left: "-2px",
    right: "-2px",
    bottom: "-2px",
    background: "linear-gradient(45deg, #8B4513, #D2691E, #CD853F, #8B4513)",
    borderRadius: "20px",
    zIndex: -1,
    opacity: 0.5,
    animation: "rotate 6s linear infinite",
  };

  const sectionStyle = {
    marginBottom: "2.5rem",
  };

  const sectionTitleStyle = {
    fontSize: "1.8rem",
    fontWeight: "700",
    color: "#D2691E",
    marginBottom: "1rem",
    textTransform: "uppercase",
    letterSpacing: "0.1rem",
    position: "relative",
  };

  const skillItemStyle = {
    fontSize: "1.2rem",
    color: "rgba(255, 255, 255, 0.9)",
    marginBottom: "0.8rem",
    padding: "0.8rem 1.2rem",
    background: "rgba(139, 69, 19, 0.1)",
    border: "1px solid rgba(139, 69, 19, 0.2)",
    borderRadius: "10px",
    transition: "all 0.3s ease",
    cursor: "pointer",
  };

  const buttonStyle = {
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
    borderRadius: "0",
    marginTop: "2rem",
  };

  const keyframes = `
    @keyframes gradientShift {
      0%, 100% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
    }
    @keyframes rotate {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
    @keyframes pulse {
      0%, 100% { box-shadow: 0 0 20px rgba(139, 69, 19, 0.5); }
      50% { box-shadow: 0 0 40px rgba(139, 69, 19, 0.8); }
    }
  `;

  return (
    <>
      <style>{keyframes}</style>
      <div style={containerStyle}>
        <div style={backgroundElements}></div>

        <h1 style={titleStyle}>SKILLS</h1>

        <div style={cardStyle}>
          <div style={cardGlowStyle}></div>

          <div style={sectionStyle}>
            <h3 style={sectionTitleStyle}>Frontend Skills</h3>
            <div
              style={skillItemStyle}
              onMouseEnter={(e) => {
                e.target.style.background = "rgba(139, 69, 19, 0.2)";
                e.target.style.borderColor = "rgba(210, 105, 30, 0.5)";
                e.target.style.transform = "translateX(10px)";
                e.target.style.boxShadow = "0 5px 20px rgba(139, 69, 19, 0.3)";
              }}
              onMouseLeave={(e) => {
                e.target.style.background = "rgba(139, 69, 19, 0.1)";
                e.target.style.borderColor = "rgba(139, 69, 19, 0.2)";
                e.target.style.transform = "translateX(0)";
                e.target.style.boxShadow = "none";
              }}
            >
              ⚛️ React
            </div>
            <div
              style={skillItemStyle}
              onMouseEnter={(e) => {
                e.target.style.background = "rgba(139, 69, 19, 0.2)";
                e.target.style.borderColor = "rgba(210, 105, 30, 0.5)";
                e.target.style.transform = "translateX(10px)";
                e.target.style.boxShadow = "0 5px 20px rgba(139, 69, 19, 0.3)";
              }}
              onMouseLeave={(e) => {
                e.target.style.background = "rgba(139, 69, 19, 0.1)";
                e.target.style.borderColor = "rgba(139, 69, 19, 0.2)";
                e.target.style.transform = "translateX(0)";
                e.target.style.boxShadow = "none";
              }}
            >
              🖌 HTML
            </div>
            <div
              style={skillItemStyle}
              onMouseEnter={(e) => {
                e.target.style.background = "rgba(139, 69, 19, 0.2)";
                e.target.style.borderColor = "rgba(210, 105, 30, 0.5)";
                e.target.style.transform = "translateX(10px)";
                e.target.style.boxShadow = "0 5px 20px rgba(139, 69, 19, 0.3)";
              }}
              onMouseLeave={(e) => {
                e.target.style.background = "rgba(139, 69, 19, 0.1)";
                e.target.style.borderColor = "rgba(139, 69, 19, 0.2)";
                e.target.style.transform = "translateX(0)";
                e.target.style.boxShadow = "none";
              }}
            >
              🎨 CSS
            </div>
          </div>

          <div style={sectionStyle}>
            <h3 style={sectionTitleStyle}>Backend Skills</h3>
            <div
              style={skillItemStyle}
              onMouseEnter={(e) => {
                e.target.style.background = "rgba(139, 69, 19, 0.2)";
                e.target.style.borderColor = "rgba(210, 105, 30, 0.5)";
                e.target.style.transform = "translateX(10px)";
                e.target.style.boxShadow = "0 5px 20px rgba(139, 69, 19, 0.3)";
              }}
              onMouseLeave={(e) => {
                e.target.style.background = "rgba(139, 69, 19, 0.1)";
                e.target.style.borderColor = "rgba(139, 69, 19, 0.2)";
                e.target.style.transform = "translateX(0)";
                e.target.style.boxShadow = "none";
              }}
            >
              🐘 PHP
            </div>
            <div
              style={skillItemStyle}
              onMouseEnter={(e) => {
                e.target.style.background = "rgba(139, 69, 19, 0.2)";
                e.target.style.borderColor = "rgba(210, 105, 30, 0.5)";
                e.target.style.transform = "translateX(10px)";
                e.target.style.boxShadow = "0 5px 20px rgba(139, 69, 19, 0.3)";
              }}
              onMouseLeave={(e) => {
                e.target.style.background = "rgba(139, 69, 19, 0.1)";
                e.target.style.borderColor = "rgba(139, 69, 19, 0.2)";
                e.target.style.transform = "translateX(0)";
                e.target.style.boxShadow = "none";
              }}
            >
              🌐 Laravel
            </div>
          </div>

          {/* <button
            style={buttonStyle}
            onMouseEnter={(e) => {
              e.target.style.transform = "translateY(-3px)";
              e.target.style.boxShadow = "0 10px 30px rgba(139, 69, 19, 0.4)";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "translateY(0)";
              e.target.style.boxShadow = "none";
            }}
            onClick={handleGoBack}
          >
            GO BACK
          </button> */}
        </div>
      </div>
    </>
  );
};

export default Skill;
