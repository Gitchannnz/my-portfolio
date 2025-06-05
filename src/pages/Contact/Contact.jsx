import React, { useState, useEffect } from "react";
import "./Contact.css";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log("Form submitted:", formData);
  };

  const socialLinks = [
    {
      name: "GitHub",
      icon: "fab fa-github",
      url: "https://github.com/Gitchannnz",
    },
    // {
    //   name: "LinkedIn",
    //   icon: "fab fa-linkedin",
    //   url: "https://linkedin.com/in/yourusername",
    // },
    // {
    //   name: "Twitter",
    //   icon: "fab fa-twitter",
    //   url: "https://twitter.com/yourusername",
    // },
    {
      name: "Email",
      icon: "fas fa-envelope",
      url: "mailto:christian.dagasuhan.margallo@gmail.com",
    },
  ];

  return (
    <div className="contact-container">
      <div className="contact-content">
        <div className={`section-title ${isVisible ? "visible" : ""}`}>
          <span className="subtitle">Get In Touch</span>
          <h2>Contact Me</h2>
        </div>

        <div className="contact-grid">
          <div className={`contact-info ${isVisible ? "visible" : ""}`}>
            <h3>Let's Talk</h3>
            <p>
              I'm always interested in hearing about new projects and opportunities.
              Whether you have a question or just want to say hi, feel free to drop
              me a message!
            </p>

            <div className="social-links">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <i className={link.icon}></i>
                  <span>{link.name}</span>
                </a>
              ))}
            </div>
          </div>

          <div className={`contact-form-wrapper ${isVisible ? "visible" : ""}`}>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your Name"
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Your Email"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Subject"
                />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Your Message"
                  rows="6"
                ></textarea>
              </div>
              <button type="submit" className="submit-btn">
                Send Message
                <i className="fas fa-paper-plane"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 