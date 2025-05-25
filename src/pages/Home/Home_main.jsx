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

  // Styles for the outer background (fills viewport)
  const outerStyle = {
    minHeight: "100vh",
    width: "100vw",
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
    position: "relative",
    overflow: "hidden",
  };

  // Styles for the fluid container (centers content, adds horizontal padding)
  const containerFluidStyle = {
    maxWidth: "1400px",
    margin: "0 auto",
    padding: "0 32px",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "4rem",
    position: "relative",
    zIndex: 2,
    boxSizing: "border-box",
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
    zIndex: 0,
  };

  const contentStyle = {
    flex: "1 1 400px",
    maxWidth: "600px",
    zIndex: 2,
    position: "relative",
    transform: isLoaded ? "translateX(0)" : "translateX(-100px)",
    opacity: isLoaded ? 1 : 0,
    transition: "all 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
    minWidth: "300px",
  };

  const imageContainerStyle = {
    position: "relative",
    width: "400px",
    height: "500px",
    transform: isLoaded ? "translateX(0)" : "translateX(100px)",
    opacity: isLoaded ? 1 : 0,
    transition: "all 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.3s",
    flexShrink: 0,
    zIndex: 2,
  };

  // Responsive CSS in <style>
  const keyframesAndResponsive = `
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

    /* Large screens - default layout */
    .container-fluid-home {
      flex-direction: row;
    }

    /* Large tablets and small desktops */
    @media (max-width: 1200px) {
      .container-fluid-home {
        padding-left: 24px !important;
        padding-right: 24px !important;
        gap: 3rem !important;
      }
      .home-image-container {
        width: 320px !important;
        height: 400px !important;
      }
    }

    /* Medium tablets */
    @media (max-width: 1024px) {
      .container-fluid-home {
        gap: 2.5rem !important;
        padding: 0 20px !important;
      }
      .home-content h1 {
        font-size: 3.5rem !important;
      }
      .home-image-container {
        width: 280px !important;
        height: 350px !important;
      }
    }

    /* Small tablets and large phones - still keep image on right but stack vertically on very small screens */
    @media (max-width: 900px) {
      .container-fluid-home {
        gap: 2rem !important;
        padding: 2rem 16px !important;
      }
      .home-content {
        max-width: 500px !important;
      }
      .home-content h1 {
        font-size: 3rem !important;
      }
      .home-content div[style*="font-size: 2rem"] {
        font-size: 1.5rem !important;
      }
      .home-image-container {
        width: 240px !important;
        height: 300px !important;
      }
    }

    /* Large phones - image still on right but smaller */
    @media (max-width: 768px) {
      .container-fluid-home {
        gap: 1.5rem !important;
        padding: 1.5rem 12px !important;
        align-items: flex-start !important;
        padding-top: 3rem !important;
      }
      .home-content {
        max-width: 400px !important;
      }
      .home-content h1 {
        font-size: 2.5rem !important;
      }
      .home-content div[style*="font-size: 2rem"] {
        font-size: 1.3rem !important;
      }
      .home-image-container {
        width: 200px !important;
        height: 250px !important;
      }
    }

    /* Medium phones - keep side by side but adjust positioning */
    @media (max-width: 640px) {
      .container-fluid-home {
        flex-direction: row !important;
        align-items: flex-start !important;
        gap: 1rem !important;
        padding: 2rem 8px !important;
        justify-content: space-between !important;
      }
      .home-content {
        flex: 1 !important;
        max-width: 60% !important;
        min-width: 0 !important;
      }
      .home-image-container {
        width: 120px !important;
        height: 150px !important;
        flex-shrink: 0 !important;
      }
      .home-content h1 {
        font-size: 1.4rem !important;
        line-height: 1.1 !important;
        margin: 0.5rem 0 !important;
        word-break: break-word !important;
      }
      .home-content div[style*="font-size: 2rem"] {
        font-size: 0.8rem !important;
        margin-bottom: 1rem !important;
        letter-spacing: 0.1rem !important;
      }
      .home-content p {
        font-size: 0.75rem !important;
        line-height: 1.4 !important;
        margin-bottom: 1.5rem !important;
      }
      .home-content button {
        padding: 0.6rem 1.2rem !important;
        font-size: 0.7rem !important;
        margin-bottom: 1rem !important;
      }
      .home-content div[style*="justify-content: center"] {
        justify-content: flex-start !important;
      }
    }

    /* Small phones - stack vertically with image on top */
    @media (max-width: 480px) {
      .container-fluid-home {
        flex-direction: column !important;
        align-items: center !important;
        gap: 1.5rem !important;
        padding: 1.5rem 10px !important;
        text-align: center !important;
      }
      .home-content {
        width: 100% !important;
        max-width: 100% !important;
        order: 2 !important;
      }
      .home-image-container {
        width: 140px !important;
        height: 175px !important;
        order: 1 !important;
        margin: 0 auto 1rem auto !important;
      }
      .home-content h1 {
        font-size: 1.6rem !important;
        line-height: 1.1 !important;
        margin: 0.5rem 0 !important;
      }
      .home-content div[style*="font-size: 2rem"] {
        font-size: 0.9rem !important;
        margin-bottom: 1rem !important;
      }
      .home-content p {
        font-size: 0.85rem !important;
        margin-bottom: 1.5rem !important;
      }
      .home-content button {
        padding: 0.8rem 1.8rem !important;
        font-size: 0.8rem !important;
      }
      .home-content div[style*="width: 50px"] {
        width: 40px !important;
        height: 40px !important;
        font-size: 1rem !important;
      }
      .home-content div[style*="justify-content: center"] {
        justify-content: center !important;
      }
    }

    /* Very small phones */
    @media (max-width: 360px) {
      .container-fluid-home {
        padding: 1rem 8px !important;
        gap: 1rem !important;
      }
      .home-content h1 {
        font-size: 1.3rem !important;
        line-height: 1.2 !important;
      }
      .home-content div[style*="font-size: 2rem"] {
        font-size: 0.8rem !important;
        letter-spacing: 0.1rem !important;
      }
      .home-content p {
        font-size: 0.8rem !important;
        line-height: 1.5 !important;
      }
      .home-content button {
        padding: 0.7rem 1.4rem !important;
        font-size: 0.75rem !important;
      }
      .home-image-container {
        width: 120px !important;
        height: 150px !important;
      }
      .home-content div[style*="width: 50px"] {
        width: 35px !important;
        height: 35px !important;
        font-size: 0.9rem !important;
      }
    }
  `;

  return (
    <>
      <style>{keyframesAndResponsive}</style>
      <div style={outerStyle}>
        <div style={backgroundElements}></div>
        <div className="container-fluid-home" style={containerFluidStyle}>
          <div style={contentStyle} className="home-content">
            <div style={{ position: "relative", display: "inline-block" }}>
              <h1
                style={{
                  fontSize: "4.5rem",
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
                CHRISTIAN
                <br />
                MARGALLO
              </h1>
            </div>
            <div
              style={{
                fontSize: "2rem",
                fontWeight: "300",
                color: "#D2691E",
                marginBottom: "2rem",
                textTransform: "uppercase",
                letterSpacing: "0.3rem",
                position: "relative",
              }}
            >
              FULL STACK DEV
            </div>
            <p
              style={{
                fontSize: "1.1rem",
                lineHeight: "1.8",
                color: "rgba(255, 255, 255, 0.8)",
                marginBottom: "3rem",
                maxWidth: "500px",
              }}
            >
              Crafting digital experiences with precision and innovation. I
              build scalable websites.
            </p>
            <div
              style={{
                display: "flex",
                gap: "1.5rem",
                alignItems: "center",
                marginBottom: "3rem",
                flexWrap: "wrap",
              }}
            >
              <button
                style={{
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
                }}
                onClick={() => navigate("/projects")}
                onMouseEnter={(e) => {
                  e.target.style.transform = "translateY(-3px)";
                  e.target.style.boxShadow =
                    "0 10px 30px rgba(139, 69, 19, 0.4)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = "translateY(0)";
                  e.target.style.boxShadow = "none";
                }}
              >
                VIEW PROJECTS
              </button>
            </div>
            <div style={{ display: "flex", gap: "1rem" }}>
              {[
                { icon: "fab fa-github", url: "https://github.com/Gitchannnz" },
                {
                  icon: "fab fa-google",
                  url: "mailto:christian.dagasuhan.margallo@gmail.com",
                },
              ].map(({ icon, url }, index) => (
                <a
                  key={index}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  <div
                    style={{
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
                    }}
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
              ))}
            </div>
          </div>
          <div style={imageContainerStyle} className="home-image-container">
            <div
              style={{
                width: "100%",
                height: "100%",
                position: "relative",
                overflow: "hidden",
                background:
                  "linear-gradient(135deg, #8B4513, #D2691E, #CD853F)",
                border: "3px solid #CD853F",
                boxShadow: "0 0 30px rgba(139, 69, 19, 0.5)",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "-50%",
                  left: "-50%",
                  right: "-50%",
                  bottom: "-50%",
                  background:
                    "linear-gradient(45deg, transparent, rgba(139, 69, 19, 0.3), transparent)",
                  animation: "rotate 4s linear infinite",
                  zIndex: 1,
                }}
              ></div>
              <img
                src={ProfileImage}
                alt="Christian Margallo Profile"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center",
                  position: "relative",
                  zIndex: 2,
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background:
                    "linear-gradient(135deg, rgba(139, 69, 19, 0.1), rgba(210, 105, 30, 0.1))",
                  zIndex: 3,
                  mixBlendMode: "overlay",
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
