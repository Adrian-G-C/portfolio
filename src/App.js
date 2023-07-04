import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [activeSection, setActiveSection] = useState("About Me");

  const handleNavClick = (section) => {
    setActiveSection(section);
  };

  const renderAboutMeSection = () => {
    return (
      <section id="about-me" className="section">
        <h2>About Me</h2>
        <img src="avatar.jpg" alt="Adrian Ciocan" />
        <p>Short bio about Adrian Ciocan.</p>
      </section>
    );
  };

  const renderPortfolioSection = () => {
    return (
      <section id="portfolio" className="section">
        <h2>Portfolio</h2>
        <div className="project">
          <h3>Project 1</h3>
          <p>Description of project 1.</p>
          <div className="links">
            <a href="https://example.com/project1" target="_blank" rel="noopener noreferrer">
              View Project
            </a>
            <a href="https://github.com/example/project1" target="_blank" rel="noopener noreferrer">
              GitHub Repository
            </a>
          </div>
        </div>
        {/* Repeat for remaining projects */}
      </section>
    );
  };

  const renderContactSection = () => {
    return (
      <section id="contact" className="section">
        <h2>Contact</h2>
        <form>
          <div className="form-field">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" required />
          </div>
          <div className="form-field">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" required />
          </div>
          <div className="form-field">
            <label htmlFor="message">Message:</label>
            <textarea id="message" required></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </section>
    );
  };

  const renderResumeSection = () => {
    return (
      <section id="resume" className="section">
        <h2>Resume</h2>
        <p>Download my resume: <a href="resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a></p>
        <h3>Proficiencies</h3>
        <ul>
          <li>Proficiency 1</li>
          <li>Proficiency 2</li>
          <li>Proficiency 3</li>
          {/* Add more proficiencies */}
        </ul>
      </section>
    );
  };

  return (
    <div className="portfolio">
      <header>
        <h1>Adrian Ciocan</h1>
        <nav>
          <ul>
            <li className={activeSection === "About Me" ? "active" : ""} onClick={() => handleNavClick("About Me")}>
              About Me
            </li>
            <li className={activeSection === "Portfolio" ? "active" : ""} onClick={() => handleNavClick("Portfolio")}>
              Portfolio
            </li>
            <li className={activeSection === "Contact" ? "active" : ""} onClick={() => handleNavClick("Contact")}>
              Contact
            </li>
            <li className={activeSection === "Resume" ? "active" : ""} onClick={() => handleNavClick("Resume")}>
              Resume
            </li>
          </ul>
        </nav>
      </header>
      <main>
        {activeSection === "About Me" && renderAboutMeSection()}
        {activeSection === "Portfolio" && renderPortfolioSection()}
        {activeSection === "Contact" && renderContactSection()}
        {activeSection === "Resume" && renderResumeSection()}
      </main>
      <footer>
        <ul>
          <li>
            <a href="https://github.com/example" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </li>
          <li>
            <a href="https://linkedin.com/in/example" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </li>
          <li>
            <a href="https://stackoverflow.com/users/example" target="_blank" rel="noopener noreferrer">
              Stack Overflow
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default App;
