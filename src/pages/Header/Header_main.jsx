import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const [hovered, setHovered] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const headerStyle = {
    position: "fixed",
    top: "0",
    left: "0",
    right: "0",
    padding: scrolled ? "0.8rem 5%" : "1.2rem 5%",
    background: scrolled ? "rgba(15, 15, 35, 0.95)" : "rgba(15, 15, 35, 0.1)",
    backdropFilter: "blur(20px)",
    borderBottom: scrolled
      ? "1px solid rgba(139, 69, 19, 0.3)"
      : "1px solid transparent",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    zIndex: "1000",
    transition: "all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
    fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
  };

  const logoStyle = {
    fontSize: "1.8rem",
    fontWeight: "900",
    cursor: "pointer",
    transition: "all 0.3s ease",
    position: "relative",
    background: "linear-gradient(45deg, #ffffff, #8B4513, #D2691E)",
    backgroundSize: "200% 200%",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    animation: "logoGlow 3s ease-in-out infinite",
    letterSpacing: "0.1rem",
  };

  const logoHoverStyle = {
    transform: "scale(1.05) translateY(-2px)",
    filter: "drop-shadow(0 5px 15px rgba(139, 69, 19, 0.4))",
  };

  const navStyle = {
    display: "flex",
    gap: "2.5rem",
    alignItems: "center",
  };

  const navLinkStyle = {
    fontSize: "0.95rem",
    color: "rgba(255, 255, 255, 0.8)",
    fontWeight: "600",
    textDecoration: "none",
    textTransform: "uppercase",
    letterSpacing: "0.1rem",
    position: "relative",
    padding: "0.5rem 0",
    transition: "all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
    overflow: "hidden",
  };

  const navLinkHoverStyle = {
    color: "#D2691E",
    transform: "translateY(-2px)",
  };

  const navLinkActiveStyle = {
    color: "#8B4513",
    transform: "translateY(-2px)",
  };

  const underlineStyle = (isHovered, isActive) => ({
    position: "absolute",
    bottom: "0",
    left: "0",
    width: isHovered || isActive ? "100%" : "0%",
    height: "2px",
    background: isActive
      ? "linear-gradient(90deg, #8B4513, #D2691E)"
      : "linear-gradient(90deg, #D2691E, #CD853F)",
    transition: "width 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
    boxShadow:
      isHovered || isActive ? "0 0 10px rgba(139, 69, 19, 0.6)" : "none",
  });

  const glitchOverlayStyle = {
    position: "absolute",
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    background:
      "linear-gradient(90deg, transparent, rgba(139, 69, 19, 0.1), transparent)",
    transform: "translateX(-100%)",
    transition: "transform 0.6s ease",
  };

  const menuItems = [
    { name: "HOME", path: "/" },
    { name: "ABOUT", path: "/aboutme" },
    { name: "SKILLS", path: "/skills" },
    { name: "PROJECTS", path: "/projects" },
    { name: "CONTACT", path: "/contact" },
  ];

  const keyframes = `
    @keyframes logoGlow {
      0%, 100% { 
        background-position: 0% 50%;
        filter: drop-shadow(0 0 5px rgba(139, 69, 19, 0.3));
      }
      50% { 
        background-position: 100% 50%;
        filter: drop-shadow(0 0 15px rgba(139, 69, 19, 0.6));
      }
    }
    @keyframes slideIn {
      0% { transform: translateX(-100%); }
      100% { transform: translateX(100%); }
    }
  `;

  return (
    <>
      <style>{keyframes}</style>
      <header style={headerStyle}>
        <div
          style={{
            ...logoStyle,
            ...(hovered === "logo" ? logoHoverStyle : {}),
          }}
          onMouseEnter={() => setHovered("logo")}
          onMouseLeave={() => setHovered(null)}
        >
          &lt;CM/&gt;
          <div
            style={{
              ...glitchOverlayStyle,
              ...(hovered === "logo"
                ? {
                    transform: "translateX(100%)",
                    animation: "slideIn 0.6s ease",
                  }
                : {}),
            }}
          ></div>
        </div>

        <nav style={navStyle}>
          {menuItems.map((item, index) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={index}
                to={item.path}
                style={{
                  ...navLinkStyle,
                  ...(hovered === index ? navLinkHoverStyle : {}),
                  ...(isActive ? navLinkActiveStyle : {}),
                }}
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
              >
                <span style={{ position: "relative", zIndex: 2 }}>
                  {item.name}
                </span>
                <div style={underlineStyle(hovered === index, isActive)}></div>
                <div
                  style={{
                    position: "absolute",
                    top: "0",
                    left: "0",
                    right: "0",
                    bottom: "0",
                    background:
                      hovered === index
                        ? "linear-gradient(90deg, transparent, rgba(210, 105, 30, 0.1), transparent)"
                        : "transparent",
                    transition: "all 0.3s ease",
                    zIndex: 1,
                  }}
                ></div>
              </Link>
            );
          })}
        </nav>
      </header>
    </>
  );
};

export default Header;
