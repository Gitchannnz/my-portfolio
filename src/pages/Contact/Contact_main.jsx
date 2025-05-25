import React, { useState, useEffect } from "react";

const Contact = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

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

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
  };

  const contactMethods = [
    {
      title: "GitHub",
      description: "Check out my repositories and contributions",
      icon: "fab fa-github",
      link: "https://github.com/Gitchannnz",
      color: "#8B4513",
    },
    {
      title: "Gmail",
      description: "Send me an email for business inquiries",
      icon: "fas fa-envelope",
      link: "mailto:christian.dagasuhan.margallo@gmail.com",
      color: "#D2691E",
    },
  ];

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
    padding: "4rem 8%",
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

  const headerStyle = {
    textAlign: "center",
    marginBottom: "4rem",
    transform: isLoaded ? "translateY(0)" : "translateY(-50px)",
    opacity: isLoaded ? 1 : 0,
    transition: "all 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
    position: "relative",
    zIndex: 2,
  };

  const tagStyle = {
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
  };

  const titleStyle = {
    fontSize: "3.5rem",
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

  const subtitleStyle = {
    fontSize: "1.2rem",
    fontWeight: "300",
    color: "rgba(255, 255, 255, 0.7)",
    marginBottom: "2rem",
    textTransform: "uppercase",
    letterSpacing: "0.2rem",
  };

  const contentStyle = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "4rem",
    maxWidth: "1200px",
    margin: "0 auto",
    position: "relative",
    zIndex: 2,
  };

  const formSectionStyle = {
    transform: isLoaded ? "translateX(0)" : "translateX(-50px)",
    opacity: isLoaded ? 1 : 0,
    transition: "all 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.2s",
  };

  const contactSectionStyle = {
    transform: isLoaded ? "translateX(0)" : "translateX(50px)",
    opacity: isLoaded ? 1 : 0,
    transition: "all 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.4s",
  };

  const sectionTitleStyle = {
    fontSize: "2rem",
    fontWeight: "700",
    color: "#D2691E",
    marginBottom: "2rem",
    textTransform: "uppercase",
    letterSpacing: "0.1rem",
  };

  const formStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
  };

  const inputStyle = {
    padding: "1rem",
    background: "rgba(139, 69, 19, 0.1)",
    border: "1px solid rgba(139, 69, 19, 0.3)",
    color: "white",
    fontSize: "1rem",
    fontFamily: "'JetBrains Mono', monospace",
    outline: "none",
    transition: "all 0.3s ease",
    backdropFilter: "blur(10px)",
  };

  const textareaStyle = {
    ...inputStyle,
    minHeight: "150px",
    resize: "vertical",
  };

  const submitButtonStyle = {
    padding: "1rem 2rem",
    background: "linear-gradient(45deg, #8B4513, #D2691E)",
    border: "2px solid #CD853F",
    color: "white",
    fontSize: "1rem",
    fontWeight: "600",
    textTransform: "uppercase",
    letterSpacing: "0.1rem",
    cursor: "pointer",
    transition: "all 0.3s ease",
    fontFamily: "'JetBrains Mono', monospace",
  };

  const contactMethodsStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
  };

  const methodCardStyle = {
    background:
      "linear-gradient(135deg, rgba(139, 69, 19, 0.1), rgba(210, 105, 30, 0.05))",
    border: "1px solid rgba(139, 69, 19, 0.3)",
    backdropFilter: "blur(10px)",
    padding: "1.5rem",
    position: "relative",
    overflow: "hidden",
    cursor: "pointer",
    transition: "all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
    display: "flex",
    alignItems: "center",
    gap: "1.5rem",
  };

  const methodIconStyle = {
    width: "60px",
    height: "60px",
    background: "linear-gradient(45deg, #8B4513, #D2691E)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "1.5rem",
    color: "white",
    flexShrink: 0,
  };

  const methodContentStyle = {
    flex: 1,
  };

  const methodTitleStyle = {
    fontSize: "1.3rem",
    fontWeight: "700",
    color: "#D2691E",
    marginBottom: "0.5rem",
    textTransform: "uppercase",
    letterSpacing: "0.1rem",
  };

  const methodDescStyle = {
    fontSize: "0.9rem",
    color: "rgba(255, 255, 255, 0.7)",
    lineHeight: "1.4",
  };

  const cardGlowStyle = {
    position: "absolute",
    top: "-2px",
    left: "-2px",
    right: "-2px",
    bottom: "-2px",
    background: "linear-gradient(45deg, #8B4513, #D2691E, #CD853F, #8B4513)",
    opacity: 0,
    transition: "opacity 0.3s ease",
    zIndex: -1,
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
    @media (max-width: 768px) {
      .content-grid {
        grid-template-columns: 1fr !important;
        gap: 2rem !important;
      }
    }
  `;

  return (
    <>
      <style>{keyframes}</style>
      <div style={containerStyle}>
        <div style={backgroundElements}></div>

        <div style={headerStyle}>
          <div style={tagStyle}>&lt; CONTACT /&gt;</div>

          <h1 style={titleStyle}>GET IN TOUCH</h1>

          <p style={subtitleStyle}>
            Let's collaborate and build something amazing together
          </p>
        </div>

        <div style={contentStyle} className="content-grid">
          {/* Contact Form */}
          <div style={formSectionStyle}>
            <h2 style={sectionTitleStyle}>Send Message</h2>
            <div style={formStyle}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleInputChange}
                style={inputStyle}
                onFocus={(e) => {
                  e.target.style.borderColor = "#D2691E";
                  e.target.style.boxShadow = "0 0 15px rgba(139, 69, 19, 0.3)";
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = "rgba(139, 69, 19, 0.3)";
                  e.target.style.boxShadow = "none";
                }}
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleInputChange}
                style={inputStyle}
                onFocus={(e) => {
                  e.target.style.borderColor = "#D2691E";
                  e.target.style.boxShadow = "0 0 15px rgba(139, 69, 19, 0.3)";
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = "rgba(139, 69, 19, 0.3)";
                  e.target.style.boxShadow = "none";
                }}
                required
              />

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleInputChange}
                style={inputStyle}
                onFocus={(e) => {
                  e.target.style.borderColor = "#D2691E";
                  e.target.style.boxShadow = "0 0 15px rgba(139, 69, 19, 0.3)";
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = "rgba(139, 69, 19, 0.3)";
                  e.target.style.boxShadow = "none";
                }}
                required
              />

              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleInputChange}
                style={textareaStyle}
                onFocus={(e) => {
                  e.target.style.borderColor = "#D2691E";
                  e.target.style.boxShadow = "0 0 15px rgba(139, 69, 19, 0.3)";
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = "rgba(139, 69, 19, 0.3)";
                  e.target.style.boxShadow = "none";
                }}
                required
              />

              <button
                type="button"
                style={submitButtonStyle}
                onClick={handleSubmit}
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
                Send Message
              </button>
            </div>
          </div>

          {/* Contact Methods */}
          <div style={contactSectionStyle}>
            <h2 style={sectionTitleStyle}>Connect With Me</h2>
            <div style={contactMethodsStyle}>
              {contactMethods.map((method, index) => (
                <div
                  key={index}
                  style={methodCardStyle}
                  onClick={() => window.open(method.link, "_blank")}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform =
                      "translateX(10px) scale(1.02)";
                    e.currentTarget.style.boxShadow =
                      "0 10px 30px rgba(139, 69, 19, 0.3)";
                    e.currentTarget.querySelector(
                      ".method-glow"
                    ).style.opacity = "0.7";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateX(0) scale(1)";
                    e.currentTarget.style.boxShadow = "none";
                    e.currentTarget.querySelector(
                      ".method-glow"
                    ).style.opacity = "0";
                  }}
                >
                  <div className="method-glow" style={cardGlowStyle}></div>

                  <div style={methodIconStyle}>
                    <i className={method.icon}></i>
                  </div>

                  <div style={methodContentStyle}>
                    <h3 style={methodTitleStyle}>{method.title}</h3>
                    <p style={methodDescStyle}>{method.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
